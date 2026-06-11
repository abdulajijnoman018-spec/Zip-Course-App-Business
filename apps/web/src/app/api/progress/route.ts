import sql from '@/app/api/utils/sql';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function GET() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const rows = await sql`
      SELECT module_id, completed, updated_at
      FROM module_progress
      WHERE user_id = ${session.user.id}
    `;

    return Response.json({ progress: rows });
  } catch (err) {
    console.error('GET /api/progress error', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { moduleId, completed } = body || {};

    if (typeof moduleId !== 'number' || moduleId < 1 || moduleId > 6) {
      return Response.json({ error: 'Invalid module id' }, { status: 400 });
    }
    if (typeof completed !== 'boolean') {
      return Response.json({ error: 'Invalid completed value' }, { status: 400 });
    }

    const rows = await sql`
      INSERT INTO module_progress (user_id, module_id, completed, updated_at)
      VALUES (${session.user.id}, ${moduleId}, ${completed}, NOW())
      ON CONFLICT (user_id, module_id)
      DO UPDATE SET completed = ${completed}, updated_at = NOW()
      RETURNING module_id, completed, updated_at
    `;

    return Response.json({ progress: rows[0] });
  } catch (err) {
    console.error('POST /api/progress error', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
