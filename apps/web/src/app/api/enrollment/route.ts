import sql from '@/app/api/utils/sql';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const VALID_PAYMENT_METHODS = ['bkash', 'nagad', 'card'];

export async function GET() {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.id) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const rows = await sql`
      SELECT id, full_name, phone, payment_method, transaction_id, amount, status, created_at
      FROM enrollments
      WHERE user_id = ${session.user.id}
      ORDER BY created_at DESC
      LIMIT 1
    `;

    return Response.json({ enrollment: rows[0] || null });
  } catch (err) {
    console.error('GET /api/enrollment error', err);
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
    const { fullName, phone, paymentMethod, transactionId } = body || {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return Response.json({ error: 'সঠিক নাম দিন' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 11) {
      return Response.json({ error: 'সঠিক মোবাইল নম্বর দিন (১১ ডিজিট)' }, { status: 400 });
    }
    if (!VALID_PAYMENT_METHODS.includes(paymentMethod)) {
      return Response.json({ error: 'পেমেন্ট মেথড নির্বাচন করুন' }, { status: 400 });
    }
    if ((paymentMethod === 'bkash' || paymentMethod === 'nagad') && !transactionId) {
      return Response.json({ error: 'ট্রানজেকশন আইডি দিন' }, { status: 400 });
    }

    // Prevent duplicate enrollment
    const existing = await sql`
      SELECT id FROM enrollments WHERE user_id = ${session.user.id} LIMIT 1
    `;
    if (existing.length > 0) {
      return Response.json({ error: 'আপনি ইতোমধ্যে ভর্তি হয়েছেন' }, { status: 409 });
    }

    const rows = await sql`
      INSERT INTO enrollments (user_id, full_name, phone, payment_method, transaction_id, status)
      VALUES (${session.user.id}, ${fullName.trim()}, ${phone.trim()}, ${paymentMethod}, ${transactionId || null}, 'pending')
      RETURNING id, full_name, phone, payment_method, transaction_id, amount, status, created_at
    `;

    return Response.json({ enrollment: rows[0] }, { status: 201 });
  } catch (err) {
    console.error('POST /api/enrollment error', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
