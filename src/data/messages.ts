// src/data/messages.ts
// ============================================================
// قاعدة بيانات الرسائل الرومانسية — تمارة ❤️
// كل العبارات أصلية، باللهجة السورية، دون تكرار حرفي.
// ============================================================

export type MessageCategory =
  | "comfort"
  | "admiration"
  | "flirt"
  | "longing"
  | "care"
  | "trust"
  | "beginning"
  | "syrian"
  | "hope"
  | "short";

export interface RomanticMessage {
  id: string;
  category: MessageCategory;
  text: string;
}

// ---------- 1. الراحة في الحديث ----------
const comfortMessages: RomanticMessage[] = [
  { id: "c1", category: "comfort", text: "يا تمارة، حلو إنو الواحد يلاقي حدا يرتاح بالحكي معه." },
  { id: "c2", category: "comfort", text: "بعض الأحاديث بتخلّي اليوم أخف من دون ما نحس." },
  { id: "c3", category: "comfort", text: "حسيت إنو الحكي معك مريح، متل جلسة هادية بعد يوم طويل." },
  { id: "c4", category: "comfort", text: "في ناس بتحكي معهن فبتحس إنك عم تتنفس أسهل. هيك حسيت معك." },
  { id: "c5", category: "comfort", text: "ما توقعت إنو حديث عابر يخلّيني مرتاح لهالدرجة." },
  { id: "c6", category: "comfort", text: "كلامك إله هدوء غريب، بيخلّي الواحد يحب يسمع أكتر." },
  { id: "c7", category: "comfort", text: "ارتحت معك بطريقة ما بتوصف، وهاد الشي مش بيصير مع كل حدا." },
  { id: "c8", category: "comfort", text: "حلو لما يكون في حدا بتحس إنك قادر تحكي معه على طبيعتك." },
  { id: "c9", category: "comfort", text: "من أول حكي، حسيت إنو في مساحة مريحة بيناتنا." },
  { id: "c10", category: "comfort", text: "وجودك بالحديث خلّى همومي تخف شوي، وهاد مو قليل." },
  { id: "c11", category: "comfort", text: "في راحة بحديثك، متل صوت مطر خفيف عالشباك." },
  { id: "c12", category: "comfort", text: "ما بعرف شو السر، بس الحكي معك بيريّح القلب." },
  { id: "c13", category: "comfort", text: "حسيت إنو في ألفة من أول لحظة، وهاد نادر." },
  { id: "c14", category: "comfort", text: "حديثك في شي دافي، بيخلّي الواحد يرتاح من دون مجهود." },
  { id: "c15", category: "comfort", text: "أنا من الناس اللي بتحب تحكي، بس معك الحكي إله طعم تاني." },
  { id: "c16", category: "comfort", text: "كل ما نحكي أكتر، بكتشف إنو الراحة بتزيد مو بتنقص." },
  { id: "c17", category: "comfort", text: "في هدوء بكلامك، وهاد الهدوء عم يعدي عليّي." },
  { id: "c18", category: "comfort", text: "حلو إنو الواحد يلاقي حدا يحكي معه من دون ما يمثل." },
  { id: "c19", category: "comfort", text: "حسيت إنو الحديث معك متل نافذة صغيرة بتطل ع شي حلو." },
  { id: "c20", category: "comfort", text: "من بعد حكينا، صار عندي شعور إنو في أشياء حلوة لسا ممكن تصير." },
];

// ---------- 2. الإعجاب بالشخصية ----------
const admirationMessages: RomanticMessage[] = [
  { id: "a1", category: "admiration", text: "حبيت عفوية الحديث معك، فيها صدق ما بيتصنع." },
  { id: "a2", category: "admiration", text: "في شي حلو بالطريقة اللي عم نتعرف فيها على بعض." },
  { id: "a3", category: "admiration", text: "حبيت إنو قدرت احكي معك براحة، وهاد بيرجّع الثقة بالحكي." },
  { id: "a4", category: "admiration", text: "شخصيتك بتطل من بين الكلمات، وهاد الشي عجبني." },
  { id: "a5", category: "admiration", text: "حبيت طريقة تفكيرك، فيها نضج وخفّة دم بنفس الوقت." },
  { id: "a6", category: "admiration", text: "في بنت بتحكي فبتحس إنو الكلام إلها، إنتِ من هالنوع." },
  { id: "a7", category: "admiration", text: "ما بعرف كتير عنك، بس اللي عرفته عجبني." },
  { id: "a8", category: "admiration", text: "حبيت إنك بتسمعي، مو بس بتحكي. هاد شي كبير." },
  { id: "a9", category: "admiration", text: "عفويّتك أحلى من أي كلام مرتب ومجهز." },
  { id: "a10", category: "admiration", text: "في شي بضحكتك بالكلام بيخلّي الواحد يبتسم من دون ما يحس." },
  { id: "a11", category: "admiration", text: "حبيت إنو عندك رأي، وبتقوليه بأدب. هاد مزيج حلو." },
  { id: "a12", category: "admiration", text: "شخصيتك مريحة، وهاد مو شي بيصير كل يوم." },
  { id: "a13", category: "admiration", text: "كل ما بكتشف فيك شي جديد، بتأكد إنو الانطباع الأول كان صح." },
  { id: "a14", category: "admiration", text: "حبيت طريقتك بالحكي، فيها دفء وصدق." },
  { id: "a15", category: "admiration", text: "إنتِ من الناس اللي بتحس إنك بتعرفهن من زمان." },
  { id: "a16", category: "admiration", text: "ما بدي أبالغ، بس فيك شي مميز لفت نظري." },
  { id: "a17", category: "admiration", text: "حبيت إنك واضحة، وهاد الشي بخلّيني مرتاح." },
  { id: "a18", category: "admiration", text: "في ناس بيعجبوك من أول حكي، وإنتِ منهم." },
  { id: "a19", category: "admiration", text: "طريقة تعاملك مع الكلام بتوري إنك شخص حقيقي." },
  { id: "a20", category: "admiration", text: "حبيت فيك إنك بسيطة من دون ما تكون عادية." },
];

// ---------- 3. الغزل اللطيف ----------
const flirtMessages: RomanticMessage[] = [
  { id: "f1", category: "flirt", text: "يا تمارة، اسمك حلو، بس اللي أحلى إنو إله صاحب." },
  { id: "f2", category: "flirt", text: "في شي بحديثك بيخلّي الواحد يحب يطوّل الحكي." },
  { id: "f3", category: "flirt", text: "ما شفتك، بس حسّيت إنو في جمال بكلامك." },
  { id: "f4", category: "flirt", text: "صوتك بالكتابة إله نغمة حلوة، ما بعرف كيف بيصير هالشي." },
  { id: "f5", category: "flirt", text: "لو الكلام حلو، إنتِ أحلى من الكلام." },
  { id: "f6", category: "flirt", text: "في ناس بتعجبك عينيها، وإنتِ عجبتيني بكلامك." },
  { id: "f7", category: "flirt", text: "حلو إنو الواحد يلاقي حدا يخليه يبتسم ولو كان بعيد." },
  { id: "f8", category: "flirt", text: "ما بعرف شو لون عيونك، بس بعرف إنو كلامك إله لون دافي." },
  { id: "f9", category: "flirt", text: "إنتِ من البنات اللي بيسأل عنهن القلب قبل العين." },
  { id: "f10", category: "flirt", text: "حبيت فيك شي ما شفته، حسّيته." },
  { id: "f11", category: "flirt", text: "لو ضحكتك متل كلامك، أكيد إلها تأثير." },
  { id: "f12", category: "flirt", text: "ما بدي كون مجرد كلام حلو، بس إنتِ تستاهلي الكلام الحلو." },
  { id: "f13", category: "flirt", text: "في بنت بتخلّي الواحد يحب يكتب، وإنتِ منهم." },
  { id: "f14", category: "flirt", text: "ما بعرف كيف، بس وجودك بالحديث بيحلّي اليوم." },
  { id: "f15", category: "flirt", text: "لو الشتاء إله دفا، أكيد هو حديثك." },
  { id: "f16", category: "flirt", text: "إنتِ متل فنجان قهوة عالطريقة الصحيحة: دافي ومو مر." },
  { id: "f17", category: "flirt", text: "في شي بيك مخلّيني أعيد قراءة رسايلك أكتر من مرة." },
  { id: "f18", category: "flirt", text: "ما بعرف شو مخبى ورا هالكلام، بس حابة أعرف." },
  { id: "f19", category: "flirt", text: "حلو إنو الواحد يلاقي حدا يخليه يحس إنو مميز من دون مجهود." },
  { id: "f20", category: "flirt", text: "يا تمارة، إنتِ أحلى شي صار اليوم." },
];

// ---------- 4. الاشتياق ----------
const longingMessages: RomanticMessage[] = [
  { id: "l1", category: "longing", text: "صرت أستنى رسايلك، وهاد الشي جديد عليّي." },
  { id: "l2", category: "longing", text: "اليوم مرّ بطيء، بس حديثك خلّاه يمرق." },
  { id: "l3", category: "longing", text: "في شي ناقص لما ما بكون في حكي بيناتنا." },
  { id: "l4", category: "longing", text: "اشتقت لحكي معك، ولو إني ما بعرف شو يعني هالشي بعد." },
  { id: "l5", category: "longing", text: "صرت أفتح الهاتف بس عشان شوف إذا في شي منك." },
  { id: "l6", category: "longing", text: "ما بعرف كيف، بس صار حديثك جزء من يومي." },
  { id: "l7", category: "longing", text: "إذا غبتِ شوي، بحس إنو في شي مفقود." },
  { id: "l8", category: "longing", text: "حلو إنو يكون في حدا بتستنى كلامه." },
  { id: "l9", category: "longing", text: "صرت أحب أوقات الحكي معك أكتر من أي وقت تاني." },
  { id: "l10", category: "longing", text: "في اشتياق صغير، ما بعرف من وين إجا." },
  { id: "l11", category: "longing", text: "ما بعرف إذا إنتِ حاسة، بس أنا صرت أستنى." },
  { id: "l12", category: "longing", text: "كل ما تبعد الرسالة، بيزيد الشوق." },
  { id: "l13", category: "longing", text: "حلو الواحد يلاقي حدا يشتاقله ولو كان لسا بعيد." },
  { id: "l14", category: "longing", text: "أوقات الحكي معك صارت أحلى أوقات النهار." },
  { id: "l15", category: "longing", text: "في فراغ صغير، بس بيكبر لما ما بكون في كلام." },
];

// ---------- 5. الاهتمام ----------
const careMessages: RomanticMessage[] = [
  { id: "ca1", category: "care", text: "بتمنى تكون مبسوط اليوم، ولو شوي." },
  { id: "ca2", category: "care", text: "خذي وقتك، ما في شي أهم من راحتك." },
  { id: "ca3", category: "care", text: "إذا كان يومك تعبان، تذكري إنو في حدا هون بيتمنى تكوني منيح." },
  { id: "ca4", category: "care", text: "ما بدي كون عبء، بدي كون راحة." },
  { id: "ca5", category: "care", text: "اهتم بنفسك، ولو نسيتِ، أنا بذكّرك." },
  { id: "ca6", category: "care", text: "ما في شي أهم من إنك تكوني مرتاحة وبخير." },
  { id: "ca7", category: "care", text: "إذا حبيتي تحكي، أنا هون. وإذا ما حبيتي، أنا كمان هون." },
  { id: "ca8", category: "care", text: "بتعرفي شو حلو؟ إنو الواحد يلاقي حدا يهتم من دون ما يطلب." },
  { id: "ca9", category: "care", text: "بتمنى ضحكتك تضل رفيقة أيامك." },
  { id: "ca10", category: "care", text: "لا تنسي إنك إنسانة مهمة، حتى لو نسيتِ." },
  { id: "ca11", category: "care", text: "كل يوم بتمنى يكون أحلى من اللي قبله إلك." },
  { id: "ca12", category: "care", text: "إذا تعبتِ، ارتاحي. ما في شي بيستاهل تعبك." },
  { id: "ca13", category: "care", text: "بحب أطمن عليك، ولو بكلمة صغيرة." },
  { id: "ca14", category: "care", text: "خلي بالك على حالك، لأنك بتهميني." },
  { id: "ca15", category: "care", text: "بتمنى أيامك تكون خفيفة وحلوة." },
];

// ---------- 6. الصدق والثقة ----------
const trustMessages: RomanticMessage[] = [
  { id: "t1", category: "trust", text: "ما بدي استعجل حكايتنا، بدي عيش تفاصيلها براحة." },
  { id: "t2", category: "trust", text: "كل اللي بتمناه إنو نضل صريحين مع بعض." },
  { id: "t3", category: "trust", text: "ما بدي وعود كبيرة، بدي أفعال صغيرة تثبت الصدق." },
  { id: "t4", category: "trust", text: "أجمل شي ممكن نبلش فيه هو الصراحة." },
  { id: "t5", category: "trust", text: "أنا معجب فيكي، وحابب أعطي هالبداية فرصة حقيقية." },
  { id: "t6", category: "trust", text: "بتمنى تكوني مرتاحة بالحكي معي متل ما أنا مرتاح معك." },
  { id: "t7", category: "trust", text: "ما بدي كون مجرد كلام حلو بحياتك، بتمنى إذا تقربنا أكتر كون شخص بتقدري تثقي فيه." },
  { id: "t8", category: "trust", text: "الثقة بتتبني شوي شوي، وأنا مستعد لهالشي." },
  { id: "t9", category: "trust", text: "ما بدي أكون شخص عابر، بدي أكون شخص بتذكري." },
  { id: "t10", category: "trust", text: "الصدق أرخص شي وأغلى شي، وأنا بختار الصدق معك." },
  { id: "t11", category: "trust", text: "ما في حدا كامل، بس في ناس صادقين، وأنا بحاول كون منهم." },
  { id: "t12", category: "trust", text: "بدي يكون كلامي متل فعلي، مو أحلى منه." },
  { id: "t13", category: "trust", text: "إذا وعدت، بوعد على قدي، وبحاول أوفي." },
  { id: "t14", category: "trust", text: "أنا هون بصدق، والباقي بيبان مع الوقت." },
  { id: "t15", category: "trust", text: "ما بدي أضغط عليك، بدي كون خيار مريح." },
];

// ---------- 7. بداية التعارف ----------
const beginningMessages: RomanticMessage[] = [
  { id: "b1", category: "beginning", text: "يمكن لسا البداية، بس البدايات الحلوة إلها طعم خاص." },
  { id: "b2", category: "beginning", text: "يمكن أجمل شي بهالبداية إنو لسا قدامنا فرصة نعرف بعض." },
  { id: "b3", category: "beginning", text: "ما منعرف بعض منيح، بس اللي عرفته خلّاني بدي أعرف أكتر." },
  { id: "b4", category: "beginning", text: "البداية دايماً حلوة، بس بدها صبر." },
  { id: "b5", category: "beginning", text: "لسا في كتير أشياء ما بعرفها عنك، وهاد الشي بيشوّق." },
  { id: "b6", category: "beginning", text: "أنا معجب بهالبداية، وبتمنى تكبر بشويش." },
  { id: "b7", category: "beginning", text: "ما بدي أحرق المراحل، بدي أستمتع بكل خطوة." },
  { id: "b8", category: "beginning", text: "يمكن هاد أول حكي جدّي بيناتنا، وبتمنى ما يكون الأخير." },
  { id: "b9", category: "beginning", text: "البدايات بتخوّف شوي، بس إلها نكهة ما بتتكرر." },
  { id: "b10", category: "beginning", text: "منبارح بلّشنا، واليوم عم نكبر شوي شوي." },
  { id: "b11", category: "beginning", text: "كل حكي بيناتنا عم يبني شي، ولو صغير." },
  { id: "b12", category: "beginning", text: "حلو إنو نكون ببداية، وكل شي قدامنا." },
  { id: "b13", category: "beginning", text: "ما بعرف وين رايحة هالحكاية، بس بدايتها حلوة." },
  { id: "b14", category: "beginning", text: "خلينا نعطي هالبداية فرصة، وشوف وين بتوصل." },
  { id: "b15", category: "beginning", text: "أحلى شي بالبداية إنك ما بتعرف شو مخبى إلك." },
];

// ---------- 8. عبارات باللهجة السورية ----------
const syrianMessages: RomanticMessage[] = [
  { id: "s1", category: "syrian", text: "شو حلو هالحكي، والله." },
  { id: "s2", category: "syrian", text: "يا ستي، إنتِ بتعرفي تخلي الواحد يرتاح." },
  { id: "s3", category: "syrian", text: "والله يا تمارة، حكي معك متل القهوة الصبح." },
  { id: "s4", category: "syrian", text: "شو بدي قلك؟ إنتِ حلوة، وخلّص." },
  { id: "s5", category: "syrian", text: "ما توقعت إنو هيك حكي يصير معي." },
  { id: "s6", category: "syrian", text: "يعني هيك بلّشت الحكاية؟ حلوة البداية." },
  { id: "s7", category: "syrian", text: "والله إنك بتعجبيني، وهاد الحكي من القلب." },
  { id: "s8", category: "syrian", text: "شو هالحلاوة كلها؟" },
  { id: "s9", category: "syrian", text: "يا لطيف، شو هالحديث الحلو." },
  { id: "s10", category: "syrian", text: "بتعرفي شو؟ إنتِ منيح إنك موجودة." },
  { id: "s11", category: "syrian", text: "ما بعرف شو بدي قلك، بس حبيت قلك إنك عاجبتني." },
  { id: "s12", category: "syrian", text: "والله يا بنت، إنتِ مريحة." },
  { id: "s13", category: "syrian", text: "شو هالطيبة كلها؟" },
  { id: "s14", category: "syrian", text: "خلينا نحكي، والوقت بيمرق حلو." },
  { id: "s15", category: "syrian", text: "يا تمارة، إنتِ أحلى من هالحكي كله." },
];

// ---------- 9. الأمل والمستقبل ----------
const hopeMessages: RomanticMessage[] = [
  { id: "h1", category: "hope", text: "بتمنى وجودي بحياتك يكون إضافة حلوة، متل ما كان حديثك إضافة حلوة ليومي." },
  { id: "h2", category: "hope", text: "ما بدي استعجل المستقبل، بس حابب أعطيه فرصة يكون حلو." },
  { id: "h3", category: "hope", text: "إذا مشينا سوا، بتمنى نكون سند لبعض." },
  { id: "h4", category: "hope", text: "بتمنى نكون من الناس اللي بيكبروا سوا." },
  { id: "h5", category: "hope", text: "إذا صار نصيب، بتمنى يكون حبنا راحة مو تعب." },
  { id: "h6", category: "hope", text: "بتمنى نتعلم نفهم بعض، حتى لو اختلفنا." },
  { id: "h7", category: "hope", text: "المستقبل ما حدا بيعرفه، بس بدايته حلوة." },
  { id: "h8", category: "hope", text: "بتمنى إذا حبينا بعض، نختار بعض كل يوم." },
  { id: "h9", category: "hope", text: "حلو الواحد يحلم بشي حلو، ولو ما عرف إذا بيصير." },
  { id: "h10", category: "hope", text: "بتمنى تكون الأيام الجاية أحلى من اللي راحوا." },
  { id: "h11", category: "hope", text: "إذا كتب النا نكمل سوا، بتمنى نكون مبسوطين." },
  { id: "h12", category: "hope", text: "الأمل شي حلو، وأنا حبيت أحلم شوي معك." },
  { id: "h13", category: "hope", text: "بتمنى نكون سبب فرح لبعض، مو سبب تعب." },
  { id: "h14", category: "hope", text: "خلينا نشوف شو مخبيلنا، وكل شي بوقته حلو." },
  { id: "h15", category: "hope", text: "بتمنى يكون هالحكي بداية شي حلو كتير." },
];

// ---------- 10. عبارات قصيرة جداً ----------
const shortMessages: RomanticMessage[] = [
  { id: "sh1", category: "short", text: "إنتِ حلوة." },
  { id: "sh2", category: "short", text: "حبيت حديثك." },
  { id: "sh3", category: "short", text: "مرتاح معك." },
  { id: "sh4", category: "short", text: "خليكي مبسوطة." },
  { id: "sh5", category: "short", text: "وجودك حلو." },
  { id: "sh6", category: "short", text: "بتعجبيني." },
  { id: "sh7", category: "short", text: "ضحكتك حلوة." },
  { id: "sh8", category: "short", text: "إنتِ مميزة." },
  { id: "sh9", category: "short", text: "حلو إسمك." },
  { id: "sh10", category: "short", text: "دمك خفيف." },
  { id: "sh11", category: "short", text: "إنتِ منيحة." },
  { id: "sh12", category: "short", text: "بحب حكيك." },
  { id: "sh13", category: "short", text: "إنتِ راحة." },
  { id: "sh14", category: "short", text: "خليكي هيك." },
  { id: "sh15", category: "short", text: "حلوة البداية." },
];

// ---------- التجميع ----------
export const allMessages: RomanticMessage[] = [
  ...comfortMessages,
  ...admirationMessages,
  ...flirtMessages,
  ...longingMessages,
  ...careMessages,
  ...trustMessages,
  ...beginningMessages,
  ...syrianMessages,
  ...hopeMessages,
  ...shortMessages,
];

// ---------- واجهة الفئات ----------
export const categories: { key: MessageCategory; label: string; emoji: string }[] = [
  { key: "comfort", label: "الراحة في الحديث", emoji: "🫶" },
  { key: "admiration", label: "الإعجاب بالشخصية", emoji: "✨" },
  { key: "flirt", label: "الغزل اللطيف", emoji: "🌹" },
  { key: "longing", label: "الاشتياق", emoji: "🌙" },
  { key: "care", label: "الاهتمام", emoji: "🤍" },
  { key: "trust", label: "الصدق والثقة", emoji: "🕊️" },
  { key: "beginning", label: "بداية التعارف", emoji: "🌱" },
  { key: "syrian", label: "باللهجة السورية", emoji: "🇸🇾" },
  { key: "hope", label: "الأمل والمستقبل", emoji: "🌅" },
  { key: "short", label: "عبارات قصيرة", emoji: "💬" },
];

// ---------- دوال مساعدة ----------
export function getMessagesByCategory(category: MessageCategory): RomanticMessage[] {
  return allMessages.filter((m) => m.category === category);
}

export function getRandomMessage(
  pool: RomanticMessage[] = allMessages,
  excludeIds: Set<string> = new Set()
): RomanticMessage {
  const available = pool.filter((m) => !excludeIds.has(m.id));
  const source = available.length > 0 ? available : pool;
  return source[Math.floor(Math.random() * source.length)];
}
