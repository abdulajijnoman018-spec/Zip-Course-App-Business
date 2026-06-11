'use client';

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Loader2,
  Lock,
  Smartphone,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';
import { COURSE_FEE } from '@/data/modules';

type PaymentMethod = 'bkash' | 'nagad' | 'card';

const paymentOptions: {
  id: PaymentMethod;
  name: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
}[] = [
  {
    id: 'bkash',
    name: 'bKash',
    desc: 'Send Money করে ট্রানজেকশন আইডি দিন',
    icon: <Smartphone size={20} />,
    accent: 'border-pink-500 bg-pink-50',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    desc: 'Send Money করে ট্রানজেকশন আইডি দিন',
    icon: <Wallet size={20} />,
    accent: 'border-orange-500 bg-orange-50',
  },
  {
    id: 'card',
    name: 'Card',
    desc: 'Visa / Mastercard দিয়ে পেমেন্ট',
    icon: <CreditCard size={20} />,
    accent: 'border-blue-500 bg-blue-50',
  },
];

const MERCHANT_NUMBER = '01XXXXXXXXX';

export default function EnrollPage() {
  const { data: session, isPending: sessionLoading } = useSession();
  const queryClient = useQueryClient();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [method, setMethod] = useState<PaymentMethod | null>(null);
  const [transactionId, setTransactionId] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

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

  const enrollMutation = useMutation({
    mutationFn: async (payload: {
      fullName: string;
      phone: string;
      paymentMethod: PaymentMethod;
      transactionId: string;
    }) => {
      const res = await fetch('/api/enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'ভর্তি প্রক্রিয়া সম্পন্ন হয়নি');
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['enrollment'] });
    },
    onError: (err: Error) => {
      setFormError(err.message);
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim()) {
      setFormError('আপনার পুরো নাম লিখুন');
      return;
    }
    if (phone.trim().length < 11) {
      setFormError('সঠিক মোবাইল নম্বর দিন (১১ ডিজিট)');
      return;
    }
    if (!method) {
      setFormError('একটি পেমেন্ট মেথড নির্বাচন করুন');
      return;
    }
    if ((method === 'bkash' || method === 'nagad') && !transactionId.trim()) {
      setFormError('ট্রানজেকশন আইডি দিন');
      return;
    }

    enrollMutation.mutate({
      fullName: fullName.trim(),
      phone: phone.trim(),
      paymentMethod: method,
      transactionId: transactionId.trim(),
    });
  };

  // Loading state
  if (sessionLoading) {
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
          <h1 className="text-xl font-semibold text-gray-900 mb-2">ভর্তি হতে লগইন করুন</h1>
          <p className="text-sm text-gray-500 mb-6">
            কোর্সে ভর্তি হওয়ার জন্য প্রথমে একাউন্ট তৈরি করুন অথবা লগইন করুন।
          </p>
          <div className="flex flex-col gap-3">
            <a href="/account/signup?callbackUrl=/enroll">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold">
                নতুন একাউন্ট তৈরি করুন
              </Button>
            </a>
            <a href="/account/signin?callbackUrl=/enroll">
              <Button variant="outline" className="w-full rounded-full border-gray-200 font-medium">
                লগইন করুন
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const enrollment = enrollmentData?.enrollment;

  // Already enrolled — show success
  if (!enrollmentLoading && enrollment) {
    const isApproved = enrollment.status === 'approved';
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-inter">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={28} className="text-emerald-500" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            {isApproved ? 'আপনার ভর্তি নিশ্চিত হয়েছে! 🎉' : 'ভর্তি আবেদন জমা হয়েছে!'}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {isApproved
              ? 'এখন ড্যাশবোর্ডে গিয়ে কোর্স শুরু করুন।'
              : 'আপনার পেমেন্ট যাচাই করা হচ্ছে। নিশ্চিত হলে ড্যাশবোর্ডে এক্সেস পাবেন।'}
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 text-left space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">নাম</span>
              <span className="font-medium text-gray-900">{enrollment.full_name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">পেমেন্ট</span>
              <span className="font-medium text-gray-900 uppercase">
                {enrollment.payment_method}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">স্ট্যাটাস</span>
              <span
                className={`font-semibold ${isApproved ? 'text-emerald-600' : 'text-amber-600'}`}
              >
                {isApproved ? 'নিশ্চিত' : 'যাচাই চলছে'}
              </span>
            </div>
          </div>
          <Link href="/dashboard">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold">
              ড্যাশবোর্ডে যান
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const needsTrx = method === 'bkash' || method === 'nagad';

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            হোমপেজ
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">
              AI
            </div>
            <span className="text-base font-semibold tracking-tight text-gray-900">
              AppCraft AI
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-2">
            কোর্সে ভর্তি হোন
          </h1>
          <p className="text-sm text-gray-500">
            ফর্মটি পূরণ করুন এবং পেমেন্ট সম্পন্ন করে ভর্তি নিশ্চিত করুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="md:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                পুরো নাম *
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="আপনার পুরো নাম লিখুন"
                className="rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                মোবাইল নম্বর *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01XXXXXXXXX"
                className="rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">পেমেন্ট মেথড *</Label>
              <div className="grid grid-cols-1 gap-3">
                {paymentOptions.map((opt) => {
                  const isSelected = method === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setMethod(opt.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        isSelected ? opt.accent : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        {opt.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{opt.name}</p>
                        <p className="text-xs text-gray-500">{opt.desc}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {needsTrx && (
              <div className="space-y-2 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <span className="font-semibold">{method === 'bkash' ? 'bKash' : 'Nagad'}</span>{' '}
                  থেকে <span className="font-bold text-gray-900">{MERCHANT_NUMBER}</span> নম্বরে{' '}
                  <span className="font-bold text-gray-900">
                    ৳{COURSE_FEE.toLocaleString('bn-BD')}
                  </span>{' '}
                  Send Money করুন, তারপর ট্রানজেকশন আইডি নিচে দিন।
                </p>
                <Input
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="ট্রানজেকশন আইডি (TrxID)"
                  className="rounded-lg bg-white"
                />
              </div>
            )}

            {method === 'card' && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-xs text-gray-600 leading-relaxed">
                  ফর্ম সাবমিট করার পর আমাদের টিম কার্ড পেমেন্টের লিংক আপনার মোবাইলে পাঠাবে।
                </p>
              </div>
            )}

            {formError && (
              <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-sm text-red-600">
                {formError}
              </div>
            )}

            <Button
              type="submit"
              disabled={enrollMutation.isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-base font-semibold"
            >
              {enrollMutation.isPending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" size={18} />
                  প্রসেস হচ্ছে...
                </span>
              ) : (
                `ভর্তি নিশ্চিত করুন — ৳${COURSE_FEE.toLocaleString('bn-BD')}`
              )}
            </Button>
          </form>

          {/* Order Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-4">কোর্স সামারি</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">AI এপ ডেভেলপমেন্ট কোর্স</span>
                  <span className="font-medium text-gray-900">
                    ৳{COURSE_FEE.toLocaleString('bn-BD')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">মডিউল</span>
                  <span className="font-medium text-gray-900">৬টি</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">এক্সেস</span>
                  <span className="font-medium text-gray-900">লাইফটাইম</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">মোট</span>
                  <span className="font-bold text-blue-600">
                    ৳{COURSE_FEE.toLocaleString('bn-BD')}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3">
              {[
                '৬টি মডিউল — ৩০+ হাতে-কলমে ধাপ',
                'লাইভ ক্লাস ও রেকর্ডিং',
                'Play Store পাবলিশ গাইড',
                '১০ দিনের মানি-ব্যাক গ্যারান্টি',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
