'use client';

import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import {
  Bot,
  Layers,
  Code2,
  Database,
  Bell,
  Rocket,
  CheckCircle2,
  Circle,
  Loader2,
  Lock,
  LogOut,
  GraduationCap,
  Clock,
  Trophy,
} from 'lucide-react';
import Link from 'next/link';
import { courseModules } from '@/data/modules';

const moduleIcons: Record<number, React.ElementType> = {
  1: Bot,
  2: Layers,
  3: Code2,
  4: Database,
  5: Bell,
  6: Rocket,
};

const colorMap: Record<string, { bg: string; text: string; pill: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', pill: 'bg-blue-600' },
  violet: { bg: 'bg-violet-50', text: 'text-violet-600', pill: 'bg-violet-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', pill: 'bg-emerald-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', pill: 'bg-orange-600' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', pill: 'bg-rose-600' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', pill: 'bg-amber-600' },
};

type ProgressRow = { module_id: number; completed: boolean; updated_at: string };

export default function DashboardPage() {
  const { data: session, isPending: sessionLoading } = useSession();
  const queryClient = useQueryClient();

  const { data: enrollmentData, isLoading: enrollmentLoading } = useQuery({
    queryKey: ['enrollment'],
    queryFn: async () => {
      const res = await fetch('/api/enrollment');
      if (!res.ok) {
        throw new Error(
          `When fetching /api/enrollment, the response was [${res.status}] ${res.statusText}`
        );
      }
      return res.json();
    },
    enabled: !!session?.user,
  });

  const { data: progressData } = useQuery({
    queryKey: ['progress'],
    queryFn: async () => {
      const res = await fetch('/api/progress');
      if (!res.ok) {
        throw new Error(
          `When fetching /api/progress, the response was [${res.status}] ${res.statusText}`
        );
      }
      return res.json();
    },
    enabled: !!session?.user,
  });

  const progressMutation = useMutation({
    mutationFn: async ({ moduleId, completed }: { moduleId: number; completed: boolean }) => {
      const res = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleId, completed }),
      });
      if (!res.ok) {
        throw new Error(
          `When updating /api/progress, the response was [${res.status}] ${res.statusText}`
        );
      }
      return res.json();
    },
    onMutate: async ({ moduleId, completed }) => {
      await queryClient.cancelQueries({ queryKey: ['progress'] });
      const previous = queryClient.getQueryData(['progress']);
      queryClient.setQueryData(['progress'], (old: { progress: ProgressRow[] } | undefined) => {
        const list = old?.progress ? [...old.progress] : [];
        const idx = list.findIndex((p) => p.module_id === moduleId);
        if (idx >= 0) {
          list[idx] = { ...list[idx], completed };
        } else {
          list.push({ module_id: moduleId, completed, updated_at: '' });
        }
        return { progress: list };
      });
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['progress'], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['progress'] });
    },
  });

  if (sessionLoading || (session?.user && enrollmentLoading)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  // Not signed in
  if (!session?.user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-inter">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock size={24} className="text-blue-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">ড্যাশবোর্ড দেখতে লগইন করুন</h1>
          <p className="text-sm text-gray-500 mb-6">আপনার কোর্স প্রগ্রেস দেখতে একাউন্টে লগইন করুন।</p>
          <div className="flex flex-col gap-3">
            <a href="/account/signin?callbackUrl=/dashboard">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold">
                লগইন করুন
              </Button>
            </a>
            <a href="/account/signup?callbackUrl=/dashboard">
              <Button variant="outline" className="w-full rounded-full border-gray-200 font-medium">
                নতুন একাউন্ট তৈরি করুন
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const enrollment = enrollmentData?.enrollment;

  // Not enrolled
  if (!enrollment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-inter">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <GraduationCap size={26} className="text-amber-500" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">আপনি এখনো ভর্তি হননি</h1>
          <p className="text-sm text-gray-500 mb-6">
            কোর্স কন্টেন্ট দেখতে প্রথমে ভর্তি ফর্ম পূরণ করে পেমেন্ট সম্পন্ন করুন।
          </p>
          <Link href="/enroll">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold">
              এখনই ভর্তি হোন
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const progress: ProgressRow[] = progressData?.progress || [];
  const completedCount = progress.filter((p) => p.completed).length;
  const progressPercent = Math.round((completedCount / courseModules.length) * 100);
  const isPending = enrollment.status === 'pending';
  const userName = enrollment.full_name || session.user.name || session.user.email;

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">
              AI
            </div>
            <span className="text-base font-semibold tracking-tight text-gray-900">
              AppCraft AI
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-gray-500">{session.user.email}</span>
            <a href="/account/logout">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-gray-200 text-gray-600 gap-1.5"
              >
                <LogOut size={14} />
                লগআউট
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Welcome + Status */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-1">
            স্বাগতম, {userName}! 👋
          </h1>
          <p className="text-sm text-gray-500">আপনার শেখার যাত্রা চালিয়ে যান</p>
        </div>

        {isPending && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <Clock size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-amber-800">পেমেন্ট যাচাই চলছে</p>
              <p className="text-xs text-amber-700">
                আপনার পেমেন্ট নিশ্চিত হলে সকল মডিউলের সম্পূর্ণ কন্টেন্ট আনলক হবে। ততক্ষণ আপনি কারিকুলাম দেখতে
                পারবেন।
              </p>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                কোর্স প্রগ্রেস
              </span>
              <span className="text-sm font-bold text-gray-900">{progressPercent}%</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
              <CheckCircle2 size={22} className="text-emerald-500" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">
                {completedCount}/{courseModules.length}
              </p>
              <p className="text-xs text-gray-500">মডিউল সম্পন্ন</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-4">
            <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center">
              <Trophy size={22} className="text-amber-500" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">
                {progressPercent === 100 ? 'সার্টিফিকেট রেডি!' : 'চলমান'}
              </p>
              <p className="text-xs text-gray-500">কোর্স স্ট্যাটাস</p>
            </div>
          </div>
        </div>

        {/* Modules */}
        <h2 className="text-lg font-semibold text-gray-900 mb-5">কোর্স মডিউল</h2>
        <div className="space-y-4">
          {courseModules.map((mod) => {
            const Icon = moduleIcons[mod.id];
            const c = colorMap[mod.color];
            const modProgress = progress.find((p) => p.module_id === mod.id);
            const isCompleted = !!modProgress?.completed;

            return (
              <div
                key={mod.id}
                className={`bg-white border rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition-colors ${
                  isCompleted ? 'border-emerald-200 bg-emerald-50/30' : 'border-gray-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${c.pill} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={22} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${c.text}`}>
                      {mod.badge}
                    </span>
                    {isCompleted && (
                      <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
                        সম্পন্ন ✓
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{mod.title}</h3>
                  <p className="text-xs text-gray-500">
                    {mod.subtitle} • {mod.steps.length}টি ধাপ
                  </p>
                </div>
                <Button
                  variant={isCompleted ? 'outline' : 'default'}
                  onClick={() =>
                    progressMutation.mutate({ moduleId: mod.id, completed: !isCompleted })
                  }
                  className={
                    isCompleted
                      ? 'rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 gap-1.5'
                      : 'rounded-full bg-blue-600 hover:bg-blue-700 text-white gap-1.5'
                  }
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle2 size={15} />
                      সম্পন্ন হয়েছে
                    </>
                  ) : (
                    <>
                      <Circle size={15} />
                      সম্পন্ন মার্ক করুন
                    </>
                  )}
                </Button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
