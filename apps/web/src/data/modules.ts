export type CourseStep = {
  title: string;
  desc: string;
};

export type CourseModule = {
  id: number;
  badge: string;
  color: string;
  title: string;
  subtitle: string;
  steps: CourseStep[];
};

export const courseModules: CourseModule[] = [
  {
    id: 1,
    badge: 'Module 01',
    color: 'blue',
    title: 'ChatGPT দিয়ে এপ প্ল্যানিং',
    subtitle: 'আইডিয়া থেকে প্রফেশনাল গাইডলাইন',
    steps: [
      {
        title: 'কি ধরনের এপ বানাবেন?',
        desc: 'লোকাল সমস্যা চিহ্নিত করে Welfare + Business মডেলে এপের আইডিয়া কনফার্ম করা',
      },
      { title: 'ফিচার নির্ধারণ', desc: 'ChatGPT-কে দিয়ে আপনার এপের সকল প্রয়োজনীয় ফিচার লিস্ট তৈরি করা' },
      { title: 'Local Business Idea', desc: 'আপনার এলাকার সমস্যা থেকে লাভজনক বিজনেস মডেল বের করা' },
      { title: 'ফিচার ইউজার একসেস', desc: 'কোন ইউজার কোন ফিচার দেখবে - Admin, User, Guest রোল নির্ধারণ' },
      {
        title: 'Homepage Design প্ল্যান',
        desc: 'ফিচারের উপর নির্ভর করে হোমপেজ স্ট্রাকচার ও ডিজাইন লেআউট তৈরি',
      },
      { title: 'প্রম্পট সিরিজ তৈরি', desc: 'আলাদা আলাদা করে প্রতিটি ফিচারের জন্য অপটিমাইজড প্রম্পট লেখা' },
    ],
  },
  {
    id: 2,
    badge: 'Module 02',
    color: 'violet',
    title: 'Google AI Studio দিয়ে বিল্ড',
    subtitle: 'ধাপে ধাপে এপ ডেভেলপমেন্ট',
    steps: [
      {
        title: 'ধাপে ধাপে প্রম্পট দেওয়া',
        desc: 'Google AI Studio-তে পরিকল্পিত প্রম্পট সিরিজ দিয়ে এপের কোড জেনারেট করা',
      },
      { title: 'ভিজুয়াল দেখে থিম নির্ধারণ', desc: 'এপের প্রিভিউ দেখে কালার, ফন্ট ও ডিজাইন থিম ফাইনাল করা' },
      { title: 'ফিচার ফাংশনাবল করা', desc: 'প্রতিটি বাটন, ফর্ম ও সেকশন সঠিকভাবে কাজ করছে কিনা যাচাই ও ঠিক করা' },
      { title: 'GitHub একাউন্ট তৈরি', desc: 'GitHub-এ ফ্রি একাউন্ট খোলা এবং প্রথম রিপোজিটরি সেটআপ করা' },
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
    badge: 'Module 06',
    color: 'amber',
    title: 'ফাইনাল: Play Store লঞ্চ',
    subtitle: 'বাগ ফিক্স থেকে পাবলিশ পর্যন্ত',
    steps: [
      {
        title: 'বাগ নোট ও ফিক্স',
        desc: 'ছোটখাটো বাগ লিস্ট করে সেই অনুযায়ী Antigravity-তে ফিক্স প্রম্পট দেওয়া',
      },
      { title: 'Android অপটিমাইজেশন', desc: 'সকল Android ডিভাইস সাইজ ও ওএস ভার্সনের জন্য এপ অপটিমাইজ করা' },
      {
        title: 'SMASH কোড দিয়ে আবেদন',
        desc: 'Google Play Console-এ SMASH প্রমো কোড ব্যবহার করে এপ সাবমিশন আবেদন',
      },
      {
        title: 'APK ও AAB ফাইল তৈরি',
        desc: 'Play Store-এর জন্য Signed APK এবং Android App Bundle (.aab) তৈরি করা',
      },
      { title: 'APK সুরক্ষা', desc: 'Android Device Block ও Play Protect থেকে APK-কে নিরাপদ রাখার কৌশল' },
      {
        title: 'GitHub-এ Source Code আপলোড',
        desc: 'GitHub CLI ডাউনলোড ও লগইন করে প্রম্পটের মাধ্যমে সম্পূর্ণ সোর্স কোড পুশ করা',
      },
    ],
  },
];

export const COURSE_FEE = 4999;
