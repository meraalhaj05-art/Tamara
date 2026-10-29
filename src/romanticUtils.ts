// src/lib/romanticUtils.ts
// ============================================================
// دوال مساعدة لإدارة العبارات، منع التكرار، وتجربة المستخدم
// ============================================================

import {
  allMessages,
  getMessagesByCategory,
  getRandomMessage,
  type MessageCategory,
  type RomanticMessage,
} from "@/data/messages";

// ---------- فئة العارض الدائري ----------
export class MessageRotator {
  private pool: RomanticMessage[];
  private seenIds: Set<string> = new Set();
  private currentIndex = -1;

  constructor(pool: RomanticMessage[] = allMessages) {
    this.pool = pool;
  }

  /** إعادة تعيين الدورة عند تغيير الفئة */
  reset(pool: RomanticMessage[] = allMessages) {
    this.pool = pool;
    this.seenIds.clear();
    this.currentIndex = -1;
  }

  /** الحصول على الرسالة التالية دون تكرار حتى انتهاء الدورة */
  next(): RomanticMessage {
    if (this.seenIds.size >= this.pool.length) {
      this.seenIds.clear();
    }
    const message = getRandomMessage(this.pool, this.seenIds);
    this.seenIds.add(message.id);
    this.currentIndex++;
    return message;
  }

  /** الحصول على الرسالة السابقة (للمعرض) */
  previous(): RomanticMessage | null {
    if (this.currentIndex <= 0) return null;
    this.currentIndex--;
    const id = Array.from(this.seenIds)[this.currentIndex];
    return this.pool.find((m) => m.id === id) ?? null;
  }

  /** عدد العبارات المشاهدة في الدورة الحالية */
  get seenCount(): number {
    return this.seenIds.size;
  }

  /** إجمالي العبارات في الفئة */
  get totalCount(): number {
    return this.pool.length;
  }
}

// ---------- تنسيق النص ----------
export function splitIntoParagraphs(text: string): string[] {
  return text
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);
}

// ---------- التحقق من تقليل الحركة ----------
export function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ---------- نسخ إلى الحافظة ----------
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// ---------- توليد نجوم عشوائية للخلفية ----------
export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export function generateStars(count: number = 40): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));
}

// ---------- توليد قلوب عائمة ----------
export interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export function generateHearts(count: number = 12): FloatingHeart[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 14 + 10,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 6,
  }));
}

// ---------- التحقق من صحة الفئة ----------
export function isValidCategory(value: string): value is MessageCategory {
  return [
    "comfort",
    "admiration",
    "flirt",
    "longing",
    "care",
    "trust",
    "beginning",
    "syrian",
    "hope",
    "short",
  ].includes(value);
}

// ---------- إعادة التصدير للراحة ----------
export { allMessages, getMessagesByCategory, getRandomMessage };
export type { MessageCategory, RomanticMessage };
