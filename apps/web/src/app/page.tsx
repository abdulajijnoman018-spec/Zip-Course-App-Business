import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Rocket,
  Brain,
  Users,
  Globe,
  ArrowRight,
  Bot,
  Layers,
  Database,
  Bell,
  CheckCircle2,
  Smartphone,
  Code2,
  GitBranch,
  Shield,
  PlayCircle,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    id: 1,
    icon: Bot,
    badge: 'Module 01',
    color: 'blue',
    title: 'ChatGPT দিয়ে এপ প্ল্যানিং',
    subtitle: 'আইডিয়া থেকে প্রফেশনাল গাইডলাইন',
    steps: [
      {
        title: 'কি ধরনের এপ বানাবেন?',
        desc: 'লোকাল সমস্যা চিহ্নিত করে Welfare + Business মডেলে এপের আইডিয়া কনফার্ম করা',
      },
      {
        title: 'ফিচার নির্ধারণ',
        desc: 'ChatGPT-কে দিয়ে আপনার এপের সকল প্রয়োজনীয় ফিচার লিস্ট তৈরি করা',
      },
      {
        title: 'Local Business Idea',
        desc: 'আপনার এলাকার সমস্যা থেকে লাভজনক বিজনেস মডেল বের করা',
      },
      {
        title: 'ফিচার ইউজার একসেস',
        desc: 'কোন ইউজার কোন ফিচার দেখবে - Admin, User, Guest রোল নির্ধারণ',
      },
      {
        title: 'Homepage Design প্ল্যান',
        desc: 'ফিচারের উপর নির্ভর করে হোমপেজ স্ট্রাকচার ও ডিজাইন লেআউট তৈরি',
      },
      {
        title: 'প্রম্পট সিরিজ তৈরি',
        desc: 'আলাদা আলাদা করে প্রতিটি ফিচারের জন্য অপটিমাইজড প্রম্পট লেখা',
      },
    ],
  },
  {
    id: 2,
    icon: Layers,
    badge: 'Module 02',
    color: 'violet',
    title: 'Google AI Studio দিয়ে বিল্ড',
    subtitle: 'ধাপে ধাপে এপ ডেভেলপমেন্ট',
    steps: [
      {
        title: 'ধাপে ধাপে প্রম্পট দেওয়া',
        desc: 'Google AI Studio-তে পরিকল্পিত প্রম্পট সিরিজ দিয়ে এপের কোড জেনারেট করা',
      },
      {
        title: 'ভিজুয়াল দেখে থিম নির্ধারণ',
        desc: 'এপের প্রিভিউ দেখে কালার, ফন্ট ও ডিজাইন থিম ফাইনাল করা',
      },
      {
        title: 'ফিচার ফাংশনাবল করা',
        desc: 'প্রতিটি বাটন, ফর্ম ও সেকশন সঠিকভাবে কাজ করছে কিনা যাচাই ও ঠিক করা',
      },
      {
        title: 'GitHub একাউন্ট তৈরি',
        desc: 'GitHub-এ ফ্রি একাউন্ট খোলা এবং প্রথম রিপোজিটরি সেটআপ করা',
      },
      {
        title: 'AI Studio → GitHub Export',
        desc: 'AI Studio থেকে GitHub-এ কোড এক্সপোর্ট করা এবং Antigravity-তে কানেক্ট করা',
      },
      {
        title: 'Web → Android প্রম্পট',
        desc: 'Web app কোডকে Android app-এ নেওয়ার প্রম্পট তৈরি ও Antigravity ইন্ট্রোডাকশন',
      },
    ],
  },
  {
    id: 3,
    icon: Code2,
    badge: 'Module 03',
    color: 'emerald',
    title: 'IDE সেটআপ ও Android কনভার্সন',
    subtitle: 'Android Studio, VS Code & Antigravity IDE',
    steps: [
      {
        title: 'টুলস ডাউনলোড',
        desc: 'Android Studio, VS Code, Antigravity ও Antigravity IDE ডাউনলোড ও ইনস্টল করা',
      },
      {
        title: 'Web → Android কনভার্সন',
        desc: 'Antigravity IDE দিয়ে Web app-এর নিজস্ব ফাংশন রেখে Phone Border সরিয়ে Android app-এ রূপান্তর',
      },
      {
        title: 'Super Admin Panel',
        desc: 'একটি গোপন লগইন প্রক্রিয়ার মাধ্যমে শক্তিশালী Super Admin Dashboard তৈরি করা',
      },
    ],
  },
  {
    id: 4,
    icon: Database,
    badge: 'Module 04',
    color: 'orange',
    title: 'Firebase ডেটাবেজ সেটআপ',
    subtitle: 'রিয়েল-টাইম ডেটা ম্যানেজমেন্ট',
    steps: [
      {
        title: 'Firebase একাউন্ট তৈরি',
        desc: 'Google Firebase-এ ফ্রি একাউন্ট খোলা এবং নতুন প্রজেক্ট তৈরি করা',
      },
      {
        title: 'Firestore লিংক যোগ করা',
        desc: 'Firebase Firestore-এর কানেকশন লিংক নিয়ে Antigravity-কে দিয়ে প্রতিটি ফিচারের জন্য আলাদা পেজ তৈরি',
      },
      {
        title: 'বাল্ক ডেটা ইমপোর্ট',
        desc: 'Blood Donation-এর মতো বড় ডেটাসেট CSV/Excel থেকে Firebase-এ ইমপোর্ট করার স্বয়ংক্রিয় প্রক্রিয়া',
      },
    ],
  },
  {
    id: 5,
    icon: Bell,
    badge: 'Module 05',
    color: 'rose',
    title: 'Push Notification সিস্টেম',
    subtitle: 'OneSignal দিয়ে সকল ডিভাইসে নোটিফাই',
    steps: [
      {
        title: 'OneSignal একাউন্ট',
        desc: 'OneSignal-এ ফ্রি একাউন্ট তৈরি এবং নতুন Android এপ প্রজেক্ট কনফিগার করা',
      },
      {
        title: 'Firebase SDK ইন্টিগ্রেশন',
        desc: 'Firebase থেকে google-services.json ডাউনলোড করে OneSignal Android অপশনে আপলোড করা',
      },
      {
        title: 'সম্পূর্ণ সিস্টেম চেক',
        desc: 'Antigravity-কে পুরো Notification flow বলে দিয়ে পরীক্ষা করানো এবং সমস্যা সমাধান করানো',
      },
    ],
  },
  {
    id: 6,
    icon: Rocket,
    badge: 'Module 06',
    color: 'amber',
    title: 'ফাইনাল: Play Store লঞ্চ',
    subtitle: 'বাগ ফিক্স থেকে পাবলিশ পর্যন্ত',
    steps: [
      {
        title: 'বাগ নোট ও ফিক্স',
        desc: 'ছোটখাটো বাগ লিস্ট করে সেই অনুযায়ী Antigravity-তে ফিক্স প্রম্পট দেওয়া',
      },
      {
        title: 'Android অপটিমাইজেশন',
        desc: 'সকল Android ডিভাইস সাইজ ও ওএস ভার্সনের জন্য এপ অপটিমাইজ করা',
      },
      {
        title: 'SMASH কোড দিয়ে আবেদন',
        desc: 'Google Play Console-এ SMASH প্রমো কোড ব্যবহার করে এপ সাবমিশন আবেদন',
      },
      {
        title: 'APK ও AAB ফাইল তৈরি',
        desc: 'Play Store-এর জন্য Signed APK এবং Android App Bundle (.aab) তৈরি করা',
      },
      {
        title: 'APK সুরক্ষা',
        desc: 'Android Device Block ও Play Protect থেকে APK-কে নিরাপদ রাখার কৌশল',
      },
      {
        title: 'GitHub-এ Source Code আপলোড',
        desc: 'GitHub CLI ডাউনলোড ও লগইন করে প্রম্পটের মাধ্যমে সম্পূর্ণ সোর্স কোড পুশ করা',
      },
    ],
  },
];

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; pill: string; dot: string }
> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-100',
    pill: 'bg-blue-600',
    dot: 'bg-blue-500',
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-100',
    pill: 'bg-violet-600',
    dot: 'bg-violet-500',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
    pill: 'bg-emerald-600',
    dot: 'bg-emerald-500',
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-100',
    pill: 'bg-orange-600',
    dot: 'bg-orange-500',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    border: 'border-rose-100',
    pill: 'bg-rose-600',
    dot: 'bg-rose-500',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-100',
    pill: 'bg-amber-600',
    dot: 'bg-amber-500',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-inter selection:bg-blue-100">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              AI
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">AppCraft AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#modules"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              কোর্স মডিউল
            </Link>
            <Link
              href="#tools"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              টুলস
            </Link>
            <Link
              href="#curriculum"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              কারিকুলাম
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              ড্যাশবোর্ড
            </Link>
          </nav>
          <Link href="/enroll">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 text-sm font-semibold">
              এখনই যোগ দিন
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-1.5 text-sm font-medium mb-8 border border-blue-100">
            <Sparkles size={14} />
            <span>নতুন ব্যাচ শুরু হচ্ছে — সিট সীমিত</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            কোডিং ছাড়াই বানান <span className="text-blue-600">লোকাল সমস্যার</span>
            <br />
            Android এপ — AI দিয়ে
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            ChatGPT, Google AI Studio, Firebase ও OneSignal ব্যবহার করে আইডিয়া থেকে Play Store পর্যন্ত —
            সম্পূর্ণ
            <span className="font-semibold text-gray-700"> Welfare + Business</span> মডেলে।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/enroll" className="w-full sm:w-auto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-semibold w-full sm:w-auto flex items-center gap-2 group">
                ফ্রি ডেমো ক্লাস দেখুন
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link
              href="#modules"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <PlayCircle size={20} className="text-blue-500" />
              সম্পূর্ণ কারিকুলাম দেখুন
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'মোট মডিউল', value: '৬টি' },
              { label: 'ব্যবহারিক ধাপ', value: '৩০+' },
              { label: 'লাইভ প্রজেক্ট', value: '১টি' },
              { label: 'Play Store পর্যন্ত', value: '✓' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Used Section */}
      <section id="tools" className="py-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            কোর্সে যা ব্যবহার করবেন
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[
              { name: 'ChatGPT', icon: '🤖' },
              { name: 'Google AI Studio', icon: '✨' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'Antigravity IDE', icon: '🚀' },
              { name: 'Android Studio', icon: '📱' },
              { name: 'Firebase', icon: '🔥' },
              { name: 'OneSignal', icon: '🔔' },
              { name: 'Google Play', icon: '▶️' },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 text-gray-700 font-medium text-sm"
              >
                <span className="text-lg">{tool.icon}</span>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4">
              সম্পূর্ণ কারিকুলাম
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              ৬টি মডিউলে শিখুন সবকিছু
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              আইডিয়া থেকে শুরু করে Google Play Store-এ পাবলিশ করা পর্যন্ত প্রতিটি ধাপ হাতে-কলমে
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((mod) => {
              const Icon = mod.icon;
              const c = colorMap[mod.color];
              return (
                <div
                  key={mod.id}
                  className={`border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all`}
                >
                  {/* Module Header */}
                  <div className={`flex items-center gap-4 p-6 border-b border-gray-100 ${c.bg}`}>
                    <div
                      className={`w-12 h-12 rounded-xl ${c.pill} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon size={22} color="white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>
                          {mod.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{mod.title}</h3>
                      <p className="text-sm text-gray-500">{mod.subtitle}</p>
                    </div>
                    <div className="hidden md:flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <span>{mod.steps.length}টি ধাপ</span>
                    </div>
                  </div>

                  {/* Steps Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white">
                    {mod.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-5 flex items-start gap-3 group hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div
                            className={`w-5 h-5 rounded-full ${c.dot} bg-opacity-20 flex items-center justify-center`}
                          >
                            <span className={`text-[10px] font-bold ${c.text}`}>{idx + 1}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-0.5 flex items-center gap-1">
                            {step.title}
                            <ChevronRight
                              size={12}
                              className="text-gray-300 group-hover:text-gray-500 transition-colors"
                            />
                          </p>
                          <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Welfare + Business Philosophy */}
      <section id="curriculum" className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Welfare + Business মডেল
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              আমরা কেবল এপ বানাতে শিখাই না — শিখাই কিভাবে লোকাল সমস্যাকে টেকসই ব্যবসায় রূপান্তর করা যায়।
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'সামাজিক প্রভাব',
                desc: 'Blood Donation, Job Help, Local Services — এলাকার মানুষের সত্যিকারের সমস্যা সমাধান করুন।',
                bg: 'bg-blue-50',
                text: 'text-blue-600',
              },
              {
                icon: Rocket,
                title: 'বিজনেস গ্রোথ',
                desc: 'আপনার সমাধানকে লাভজনক মডেলে রূপান্তর করতে প্রয়োজনীয় স্ট্র্যাটেজি ও গাইডলাইন।',
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
              },
              {
                icon: Brain,
                title: 'AI ইন্টিগ্রেশন',
                desc: 'ChatGPT ও Google AI Studio দিয়ে কোডিং ছাড়াই ফুল-ফিচারড Android এপ তৈরি।',
                bg: 'bg-violet-50',
                text: 'text-violet-600',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors p-6"
                >
                  <div
                    className={`w-12 h-12 ${item.bg} ${item.text} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold inline-block mb-4 border border-blue-100">
              কোর্স শেষে আপনি পাবেন
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
              একটি সম্পূর্ণ Android এপ — Play Store-এ লাইভ
            </h2>
            <div className="space-y-4">
              {[
                'Firebase Firestore ডেটাবেজ সহ ফুল-ফাংশনাল Android এপ',
                'OneSignal Push Notification সিস্টেম',
                'গোপন লগইনসহ Super Admin Panel',
                'Signed APK ও AAB ফাইল',
                'GitHub-এ সম্পূর্ণ সোর্স কোড',
                'Google Play Store-এ পাবলিশ করার প্রস্তুতি',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/enroll">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center gap-2 w-full sm:w-auto">
                  <Smartphone size={16} />
                  ভর্তি হোন এখনই
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2"
              >
                <GitBranch size={16} />
                সিলেবাস ডাউনলোড
              </Button>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-700 flex items-center gap-1.5 shadow-sm">
              <span
                className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-dot"
              ></span>
              লাইভ ক্লাস চলছে
            </div>
            <div className="space-y-5">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-500">কোর্স অগ্রগতি</span>
                  <span className="text-xs font-bold text-gray-900">৭২%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[72%] rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'মোট শিক্ষার্থী', value: '১২৪০+' },
                  { label: 'সফল প্রজেক্ট', value: '৪৫০+' },
                  { label: 'Play Store এপ', value: '৮৫+' },
                  { label: 'রেটিং', value: '⭐ ৪.৯' },
                ].map((s) => (
                  <div key={s.label} className="bg-white p-4 rounded-xl border border-gray-200">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">
                      {s.label}
                    </p>
                    <p className="text-xl font-semibold text-gray-900">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3">
                <Shield size={18} className="text-emerald-500" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">১০ দিনের মানি-ব্যাক গ্যারান্টি</p>
                  <p className="text-xs text-gray-400">সন্তুষ্ট না হলে সম্পূর্ণ রিফান্ড</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Globe className="w-96 h-96 -bottom-20 -right-20 absolute" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>নতুন ব্যাচ শুরু হচ্ছে শীঘ্রই</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight relative z-10">
              আপনার এলাকার সমস্যার সমাধান হোক
              <br />
              আপনারই হাতে তৈরি এপে
            </h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg relative z-10">
              পরবর্তী ব্যাচে লিমিটেড সিট খালি আছে। এখনই রেজিস্ট্রেশন করুন এবং লোকাল সমস্যার ডিজিটাল সমাধান নিয়ে
              আসুন।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/enroll" className="w-full sm:w-auto">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-6 text-lg font-semibold w-full sm:w-auto flex items-center gap-2">
                  এখনই ভর্তি হোন
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <p className="text-sm text-blue-100 font-medium">কোনো আগের কোডিং অভিজ্ঞতা দরকার নেই</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
              AI
            </div>
            <span className="text-sm font-semibold tracking-tight text-gray-900">AppCraft AI</span>
          </div>
          <p className="text-sm text-gray-500">© ২০২৬ AppCraft AI। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
              টার্মস
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
              প্রাইভেসি
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
