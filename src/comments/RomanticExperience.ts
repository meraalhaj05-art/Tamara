// src/components/RomanticExperience.tsx
"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  allMessages,
  categories,
  getMessagesByCategory,
  type MessageCategory,
  type RomanticMessage,
} from "@/data/messages";
import {
  MessageRotator,
  generateStars,
  generateHearts,
  copyToClipboard,
  shouldReduceMotion,
  type Star,
  type FloatingHeart,
} from "@/lib/romanticUtils";

// ============================================================
// الأنواع
// ============================================================
type Screen = "intro" | "letter" | "confession" | "question" | "future" | "gallery";

// ============================================================
// المكون الرئيسي
// ============================================================
export default function RomanticExperience() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [showSkip, setShowSkip] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // ---------- كشف تفضيل تقليل الحركة ----------
  useEffect(() => {
    setReducedMotion(shouldReduceMotion());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ---------- إظهار زر التخطي بعد ثانيتين ----------
  useEffect(() => {
    if (screen !== "intro") return;
    const t = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(t);
  }, [screen]);

  // ---------- نجوم وقلوب ----------
  const stars = useMemo<Star[]>(() => generateStars(50), []);
  const hearts = useMemo<FloatingHeart[]>(() => generateHearts(14), []);

  const goTo = useCallback((s: Screen) => {
    setScreen(s);
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }, [reducedMotion]);

  return (
    <div className="romantic-root" dir="rtl">
      {/* ---------- خلفية ليلية ---------- */}
      <div className="romantic-bg" aria-hidden="true">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
        {!reducedMotion &&
          stars.map((s) => (
            <span
              key={s.id}
              className="star"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }}
            />
          ))}
        {!reducedMotion &&
          hearts.map((h) => (
            <span
              key={h.id}
              className="floating-heart"
              style={{
                left: `${h.x}%`,
                fontSize: h.size,
                animationDelay: `${h.delay}s`,
                animationDuration: `${h.duration}s`,
              }}
            >
              ❤️
            </span>
          ))}
      </div>

      {/* ---------- محتوى الشاشات ---------- */}
      <AnimatePresence mode="wait">
        <motion.main
          key={screen}
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
        >
          {screen === "intro" && (
            <IntroScreen
              onOpen={() => goTo("letter")}
              onSkip={() => goTo("letter")}
              showSkip={showSkip}
              reducedMotion={reducedMotion}
            />
          )}

          {screen === "letter" && (
            <LetterScreen
              onNext={() => goTo("confession")}
              reducedMotion={reducedMotion}
            />
          )}

          {screen === "confession" && (
            <ConfessionScreen
              onNext={() => goTo("question")}
              reducedMotion={reducedMotion}
            />
          )}

          {screen === "question" && (
            <QuestionScreen
              onNext={() => goTo("future")}
              reducedMotion={reducedMotion}
            />
          )}

          {screen === "future" && (
            <FutureScreen
              onNext={() => goTo("gallery")}
              reducedMotion={reducedMotion}
            />
          )}

          {screen === "gallery" && (
            <GalleryScreen reducedMotion={reducedMotion} />
          )}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// 1. شاشة البداية
// ============================================================
function IntroScreen({
  onOpen,
  onSkip,
  showSkip,
  reducedMotion,
}: {
  onOpen: () => void;
  onSkip: () => void;
  showSkip: boolean;
  reducedMotion: boolean;
}) {
  return (
    <section className="screen intro-screen">
      <div className="heart-pulse" aria-hidden="true">
        <span className="heart-glow" />
        <span className="heart-emoji">❤️</span>
      </div>

      <motion.h1
        className="intro-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reducedMotion ? 0 : 0.3, duration: reducedMotion ? 0 : 0.8 }}
      >
        تمارة ❤️
      </motion.h1>

      <motion.p
        className="intro-subtitle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reducedMotion ? 0 : 0.9, duration: reducedMotion ? 0 : 0.7 }}
      >
        في حكي بيجي بوقته...
        <br />
        وبيخلّي الواحد يحس إنو لسا في أشياء حلوة بالحياة.
      </motion.p>

      <motion.p
        className="intro-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 1.6, duration: reducedMotion ? 0 : 0.7 }}
      >
        وفي رسالة صغيرة حابب شاركك ياها...
      </motion.p>

      <motion.button
        className="btn-primary intro-btn"
        onClick={onOpen}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reducedMotion ? 0 : 2.2, duration: reducedMotion ? 0 : 0.6 }}
        whileTap={{ scale: reducedMotion ? 1 : 0.97 }}
      >
        افتحي رسالتك 💌
      </motion.button>

      {showSkip && (
        <button className="btn-skip" onClick={onSkip}>
          تخطي المقدمة ←
        </button>
      )}
    </section>
  );
}

// ============================================================
// 2. الرسالة الرئيسية
// ============================================================
const LETTER_TEXT = `تمارة، بعرف إنو صارلنا منحكي من مبارح المسا، ويمكن الوقت لسا قصير لحتى نعرف بعض منيح، بس حبيت كون صريح معك بشغلة.

أنا ارتحت بالحكي معك بطريقة ما كنت متوقعها. حسيت إنو فيني احكي معك براحة، وإنو في شي حلو بطريقة كلامنا.

بالفترة اللي عم نحكي فيها، حسيت إنو هموم وتعب كانوا براسي خفّوا شوي، وإنو رجع عندي أمل إنو ممكن تكون الحياة أحلى، وإنو لسا في ناس ممكن الواحد يرتاح بقربها.

يمكن هاد كله لسا مجرد بداية، وأنا بعرف إنو بدنا وقت لحتى نتعرف على بعض أكتر، بس ما حبيت خبّي عنك إنو وجودك بهالحديث صار يعنيلي شي حلو.

أنا معجب فيكي، وبحب فكرة إنو نتقرب من بعض، ونحكي أكتر، ونتعرف على أفكار بعض وشخصيات بعض، ونشوف إذا ممكن نكون مناسبين لبعض عنجد.

أنا ما بدي استعجل عليكي، ولا بدي أوعدك بوعود كبيرة قبل ما نعرف بعض منيح. بس إذا مشينا بهالطريق سوا، بتمنى كون شخص صادق معك، يحترمك، ويسمعك، ويوقف جنبك، ويكون وجوده بحياتك سبب للراحة والفرح.

بتمنى تكون علاقتنا مبنية على الصراحة والثقة، وإنو نقدر نحكي مع بعض بكل أريحية، ونكون سند لبعض بالأيام الحلوة والصعبة.

وإذا تطورت مشاعرنا وصار بيناتنا حب حقيقي، فأنا بتمنى من قلبي إنو نقدر نكمل سوا، ونبني شي حلو وثابت مع الوقت.

ما بعرف شو مخبيلنا المستقبل، بس بعرف إنو حبيت هالبداية، وحبيت كون صريح معك من أولها.

وشكراً لأنك كنتي سبب بشعور حلو عندي، وشكراً على كل لحظة حكي حسيت فيها بالراحة.

تمارة، حبيت تعرفي هالشي مني، بكل بساطة ومن قلبي. ❤️`;

function LetterScreen({
  onNext,
  reducedMotion,
}: {
  onNext: () => void;
  reducedMotion: boolean;
}) {
  const paragraphs = LETTER_TEXT.split("\n\n");
  const [visibleCount, setVisibleCount] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // عرض الفقرات تدريجياً
  useEffect(() => {
    if (visibleCount >= paragraphs.length) return;
    timerRef.current = setTimeout(() => {
      setVisibleCount((c) => Math.min(c + 1, paragraphs.length));
    }, reducedMotion ? 0 : 1800);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visibleCount, paragraphs.length, reducedMotion]);

  const skipAll = () => setVisibleCount(paragraphs.length);
  const isComplete = visibleCount >= paragraphs.length;

  return (
    <section className="screen letter-screen">
      <div className="glass-card letter-card">
        <h2 className="section-title">رسالتي إلك ❤️</h2>
        <div className="letter-body">
          {paragraphs.slice(0, visibleCount).map((p, i) => (
            <motion.p
              key={i}
              className="letter-paragraph"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {!isComplete && (
          <button className="btn-skip letter-skip" onClick={skipAll}>
            عرض الرسالة كاملة ←
          </button>
        )}

        {isComplete && (
          <motion.div
            className="letter-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
          >
            <button className="btn-primary" onClick={onNext}>
              في شي كمان حابب قلك ياه 💭
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ============================================================
// 3. قسم الاعتراف بالإعجاب
// ============================================================
function ConfessionScreen({
  onNext,
  reducedMotion,
}: {
  onNext: () => void;
  reducedMotion: boolean;
}) {
  const [rotator] = useState(() => {
    const pool = getMessagesByCategory("admiration")
      .concat(getMessagesByCategory("comfort"))
      .concat(getMessagesByCategory("flirt"));
    return new MessageRotator(pool);
  });

  const [current, setCurrent] = useState<RomanticMessage | null>(null);
  const [seenCount, setSeenCount] = useState(0);

  useEffect(() => {
    const first = rotator.next();
    setCurrent(first);
    setSeenCount(1);
  }, [rotator]);

  const nextMessage = () => {
    setCurrent(rotator.next());
    setSeenCount(rotator.seenCount);
  };

  return (
    <section className="screen confession-screen">
      <h2 className="section-title">في شي حابب اعترفلك فيه ❤️</h2>

      <div className="glass-card confession-card">
        <AnimatePresence mode="wait">
          {current && (
            <motion.p
              key={current.id}
              className="confession-text"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: reducedMotion ? 0 : 0.4 }}
            >
              {current.text}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="confession-footer">
          <span className="counter">
            {seenCount} / {rotator.totalCount}
          </span>
          <button className="btn-heart" onClick={nextMessage} aria-label="عبارة جديدة">
            ❤️ كلمة جديدة
          </button>
        </div>
      </div>

      <button className="btn-secondary" onClick={onNext}>
        كمل معي ←
      </button>
    </section>
  );
}

// ============================================================
// 4. طلب العلاقة
// ============================================================
const QUESTION_OPTIONS = [
  {
    id: "yes-full",
    label: "إي، خلينا نعطي هالبداية فرصة ❤️",
    response:
      "عنجد فرحت إنك حابة تعطينا فرصة يا تمارة ❤️\n\nخلينا نتعرف على بعض أكتر، ونخلي كل خطوة بيناتنا مبنية على الصراحة والراحة والاهتمام المتبادل.\n\nما في داعي نستعجل شي، المهم إنو نكون مرتاحين وواضحين مع بعض.",
  },
  {
    id: "yes-know",
    label: "إي، حابّة نتعرف على بعض أكتر 😊",
    response:
      "وهذا الشي اللي بتمناه كمان يا تمارة ❤️\n\nخلينا نحكي، ونتعرف على أفكار بعض وشخصيات بعض، ونعطي كل شي وقته.\n\nأنا هون، وكل خطوة مني رح تكون باحترام وصدق.",
  },
  {
    id: "yes-slow",
    label: "خلينا نمشي خطوة خطوة 🥹❤️",
    response:
      "وهذا أحلى شي ممكن نسويه يا تمارة ❤️\n\nناخد وقتنا، ونحكي، ونتعرف على بعض، ونخلي الأيام تورجينا شو ممكن يصير.\n\nما في استعجال، المهم نكون مرتاحين.",
  },
] as const;

function QuestionScreen({
  onNext,
  reducedMotion,
}: {
  onNext: () => void;
  reducedMotion: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showThink, setShowThink] = useState(false);

  const chosen = QUESTION_OPTIONS.find((o) => o.id === selected);

  return (
    <section className="screen question-screen">
      <div className="heart-pulse question-heart" aria-hidden="true">
        <span className="heart-glow" />
        <span className="heart-emoji">❤️</span>
      </div>

      <h2 className="section-title">تمارة، عندي سؤال صغير إلك... ❤️</h2>

      <div className="glass-card question-card">
        <p className="question-text">
          أنا معجب فيكي ومرتاح بالحكي معك،
          <br />
          وحابب نتقرب من بعض أكتر،
          <br />
          ونعطي حالنا فرصة نتعرف على بعض بصدق.
        </p>
        <p className="question-text">
          بتحبي نبلش هالخطوة سوا،
          <br />
          ونشوف إذا ممكن تكبر هالمشاعر وتصير حب حقيقي؟
        </p>

        <div className="options">
          {QUESTION_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              className={`btn-option ${selected === opt.id ? "selected" : ""}`}
              onClick={() => setSelected(opt.id)}
              disabled={!!selected && selected !== opt.id}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {!selected && (
          <button className="btn-think" onClick={() => setShowThink(true)}>
            خليني فكر شوي 🤍
          </button>
        )}

        {showThink && !selected && (
          <motion.p
            className="think-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
          >
            خدي وقتك، ما في أي ضغط. أنا هون لما تكوني جاهزة. ❤️
          </motion.p>
        )}

        <AnimatePresence>
          {chosen && (
            <motion.div
              className="response-box"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5 }}
            >
              {chosen.response.split("\n\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {chosen && (
          <button className="btn-primary" onClick={onNext}>
            شو مخبيلنا المستقبل؟ 🌅
          </button>
        )}
      </div>
    </section>
  );
}

// ============================================================
// 5. المستقبل والأمنيات
// ============================================================
const WISHES = [
  "نتمنى نكون مرتاحين بالحكي مع بعض.",
  "نتعلم نفهم بعض حتى لو اختلفنا.",
  "نحكي بصراحة بدل ما نخبي الأشياء بقلبنا.",
  "نفرح لفرحة بعض.",
  "نكون سند لبعض من دون ما نضغط على بعض.",
  "نحترم أحلام بعض وخصوصية بعض.",
  "نبني الثقة شوي شوي.",
  "نخلي الحب راحة واهتمام، مو خوف وتعب.",
  "إذا حبينا بعض عنجد، نختار بعض كل يوم بإرادتنا ورضانا.",
  "نضحك من قلبنا على أشياء صغيرة.",
  "نكون أصدقاء قبل ما نكون حبايب.",
  "نعطي بعض مساحة، ونرجع لبعض بشوق.",
  "نتعلم نعتذر لما نغلط، ونسامح بصدق.",
  "نحتفل بالتفاصيل الصغيرة، مش بس بالمناسبات.",
  "نكون بيتاً لبعض، مو عبئاً.",
];

function FutureScreen({
  onNext,
  reducedMotion,
}: {
  onNext: () => void;
  reducedMotion: boolean;
}) {
  return (
    <section className="screen future-screen">
      <h2 className="section-title">إذا كتب النا نصيب نكمل سوا...</h2>

      <div className="wishes-grid">
        {WISHES.map((wish, i) => (
          <motion.div
            key={i}
            className="glass-card wish-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : i * 0.06 }}
          >
            <span className="wish-dot">✦</span>
            <p>{wish}</p>
          </motion.div>
        ))}
      </div>

      <button className="btn-primary" onClick={onNext}>
        كلام صغير من القلب 💌
      </button>
    </section>
  );
}

// ============================================================
// 6. معرض الرسائل
// ============================================================
function GalleryScreen({ reducedMotion }: { reducedMotion: boolean }) {
  const [category, setCategory] = useState<MessageCategory | "all">("all");
  const [pool, setPool] = useState<RomanticMessage[]>(allMessages);
  const [rotator, setRotator] = useState(() => new MessageRotator(allMessages));
  const [current, setCurrent] = useState<RomanticMessage | null>(null);
  const [history, setHistory] = useState<RomanticMessage[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);

  // تهيئة أول رسالة
  useEffect(() => {
    const first = rotator.next();
    setCurrent(first);
    setHistory([first]);
    setHistoryIndex(0);
  }, [rotator]);

  const changeCategory = (cat: MessageCategory | "all") => {
    const newPool = cat === "all" ? allMessages : getMessagesByCategory(cat);
    setCategory(cat);
    setPool(newPool);
    const newRotator = new MessageRotator(newPool);
    setRotator(newRotator);
    const first = newRotator.next();
    setCurrent(first);
    setHistory([first]);
    setHistoryIndex(0);
  };

  const goNext = () => {
    const msg = rotator.next();
    setCurrent(msg);
    setHistory((h) => [...h.slice(0, historyIndex + 1), msg]);
    setHistoryIndex((i) => i + 1);
  };

  const goPrev = () => {
    if (historyIndex <= 0) return;
    const idx = historyIndex - 1;
    setHistoryIndex(idx);
    setCurrent(history[idx]);
  };

  const randomMessage = () => {
    const msg = rotator.next();
    setCurrent(msg);
    setHistory((h) => [...h.slice(0, historyIndex + 1), msg]);
    setHistoryIndex((i) => i + 1);
  };

  const copyMessage = async () => {
    if (!current) return;
    const ok = await copyToClipboard(current.text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="screen gallery-screen">
      <h2 className="section-title">كلام صغير من القلب 💌</h2>

      {/* فلاتر الفئات */}
      <div className="category-filters">
        <button
          className={`filter-chip ${category === "all" ? "active" : ""}`}
          onClick={() => changeCategory("all")}
        >
          الكل
        </button>
        {categories.map((c) => (
          <button
            key={c.key}
            className={`filter-chip ${category === c.key ? "active" : ""}`}
            onClick={() => changeCategory(c.key)}
          >
            {c.emoji} {c.label}
          </button>
        ))}
      </div>

      {/* بطاقة العرض */}
      <div className="glass-card gallery-card">
        <AnimatePresence mode="wait">
          {current && (
            <motion.p
              key={current.id}
              className="gallery-text"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: reducedMotion ? 0 : 0.35 }}
            >
              {current.text}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="gallery-meta">
          <span className="counter">
            {historyIndex + 1} / {pool.length}
          </span>
        </div>

        <div className="gallery-actions">
          <button className="btn-icon" onClick={goPrev} disabled={historyIndex <= 0} aria-label="السابق">
            → السابق
          </button>
          <button className="btn-heart" onClick={randomMessage} aria-label="عشوائي">
            🎲 عشوائي
          </button>
          <button className="btn-icon" onClick={goNext} aria-label="التالي">
            التالي ←
          </button>
        </div>

        <button className="btn-copy" onClick={copyMessage}>
          {copied ? "✓ تم النسخ" : "📋 نسخ العبارة"}
        </button>
      </div>
    </section>
  );
}
