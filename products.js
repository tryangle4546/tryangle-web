// ==========================================================================
// قاعدة بيانات منتجات تراي أنجل للتكييف والتبريد
// مواصفات وصور دقيقة ومطابقة لمواصفات أمازون مصر وميراكو كاريير الرسمية
// مع الحفاظ الكامل على الأسعار والقدرات
// ==========================================================================

const carrierInverterGallery = [
  { src: "assets/carrier_xcool_indoor.jpg", label: "الوحدة الداخلية - تصميم انسيابي أبيض" },
  { src: "assets/carrier_xcool_set.webp", label: "طقم التكييف بالكامل مع وحدة التحكم والريموت" },
  { src: "assets/carrier_xcool_outdoor.jpg", label: "الوحدة الخارجية - ضاغط T3 سوبر تروبيكال" },
  { src: "assets/carrier_inverter.webp", label: "تكنولوجيا الإنفرتر وتوزيع الهواء الذكي" }
];

const carrierFixedGallery = [
  { src: "assets/carrier_xcool_indoor.jpg", label: "الوحدة الداخلية - شاشة ديجيتال مخفية" },
  { src: "assets/carrier_xcool_set.webp", label: "طقم التكييف والريموت الذكي" },
  { src: "assets/carrier_xcool_outdoor.jpg", label: "الوحدة الخارجية عالية التحمل" },
  { src: "assets/carrier_optimax.webp", label: "خاصية التبريد السريع تيربو" }
];

const mideaAiGallery = [
  { src: "assets/midea_ai_ecomaster.jpg", label: "الوحدة الداخلية - تصميم AI ECO MASTER" },
  { src: "assets/midea_ai_ecomaster_front.jpg", label: "الواجهة الأمامية وتدفق الهواء ثلاثي الأبعاد" },
  { src: "assets/midea_ai_ecomaster_outdoor.png", label: "الوحدة الخارجية - درع الحماية Prime Guard" },
  { src: "assets/midea_inverter.webp", label: "نظام التوفير الذكي Inverter Quattro" }
];

const mideaXtremeGallery = [
  { src: "assets/midea_xtreme_pro.jpg", label: "الوحدة الداخلية - مظهر عصري أنيق" },
  { src: "assets/midea_xtreme_pro_set.png", label: "طقم التكييف والريموت كنترول" },
  { src: "assets/midea_xtreme_pro_outdoor.webp", label: "الوحدة الخارجية المقاومة للتآكل" },
  { src: "assets/midea_breezeless.webp", label: "فلاتر تنقية الهواء ومقاومة الأتربة" }
];

const products = [
  // ========================================================================
  // 1. كاريير إكس كول إنفرتر - بارد / ساخن
  // ========================================================================
  {
    id: "carrier-xcool-heat-cool",
    brand: "carrier",
    name: "كاريير إكس كول إنفرتر - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "تكنولوجيا الإنفرتر المتطورة (Full DC Inverter) لتوفير حتى 50% من فاتورة الكهرباء",
      "ضاغط استوائي سوبر تروبيكال T3 يتحمل أعلى درجات الحرارة حتى 55° مئوية بكفاءة تامة",
      "فريون R32 الحديث والصديق للبيئة لكفاءة تبريد قصوى وأداء تدفئة قوي شتاءً",
      "اتصال ذكي واي فاي (Wi-Fi) مدمج للتحكم الكامل عبر تطبيق Carrier AirSmart من الموبايل",
      "نظام تنقية هواء متكامل بفلاتر كربونية ومضادة للأتربة والبكتيريا",
      "خاصية التنظيف الذاتي (Self Clean) لتجفيف المبخر ومنع الروائح وتكون الفطريات",
      "توجيه هواء ثلاثي الأبعاد (3D Airflow) لراحة متساوية في جميع أركان الغرفة",
      "ضمان شامل ومعتمد لمدة 5 سنوات من ميراكو كاريير ضد عيوب الصناعة"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierInverterGallery,
    modelCodes: {
      "1.5 حصان": "53QHEFT12DN8-708F",
      "2.25 حصان": "53QHEFT18DN8-708F",
      "3 حصان": "53QHEFT24DN8-708F"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد وتدفئة (بارد / ساخن)" },
      { label: "سعة التبريد", value: "12,500 - 24,000 BTU/hr" },
      { label: "تكنولوجيا الموتور", value: "Full DC Inverter" },
      { label: "نوع الفريون", value: "R32 صديق للبيئة" },
      { label: "نوع الضاغط", value: "Super Tropical T3 (حتى 55°C)" },
      { label: "التحكم الذكي", value: "Wi-Fi + Mobile App" },
      { label: "فلاتر الهواء", value: "High Density + Carbon Filter" },
      { label: "فترة الضمان", value: "5 سنوات شاملة من ميراكو" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 33105, id: "carrier-xcool-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 48565, id: "carrier-xcool-heat-cool-2.25" },
      { capacity: "3 حصان", price: 55140, id: "carrier-xcool-heat-cool-3" }
    ]
  },

  // ========================================================================
  // 2. كاريير إكس كول إنفرتر - بارد فقط
  // ========================================================================
  {
    id: "carrier-xcool-cool",
    brand: "carrier",
    name: "كاريير إكس كول إنفرتر - بارد فقط",
    type: "بارد فقط",
    features: [
      "تكنولوجيا الإنفرتر الموفرة للطاقة لتبريد فائق السرعة مع خفض استهلاك الكهرباء",
      "ضاغط T3 الاستوائي الجبار لتحمل أقسى درجات حرارة الصيف الشديدة حتى 55° مئوية",
      "شحن فريون R32 النقي عالي الكفاءة في نقل البرودة مع الحفاظ على طبقة الأوزون",
      "خاصية التبريد الفائق تيربو (Turbo Cool) لخفض حرارة الغرفة لأقصى انتعاش في دقائق",
      "خاصية تتبع درجة الحرارة (Follow Me) عبر سينسور الريموت لتحقيق الراحة الدقيقة",
      "تشغيل فائق الهدوء بمستوى صوت منخفض جداً لتوفير بيئة نوم هادئة ومريحة",
      "شاشة ديجيتال LED خفية وذكية لعرض درجات الحرارة والأكواد التشخيصية",
      "ضمان شامل ومعتمد لمدة 5 سنوات من شركة ميراكو كاريير"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierInverterGallery,
    modelCodes: {
      "1.5 حصان": "53KHEFT12DN8-708F",
      "2.25 حصان": "53KHEFT18DN8-708F",
      "3 حصان": "53KHEFT24DN8-708F"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد فقط (Cool Only)" },
      { label: "سعة التبريد", value: "12,000 - 24,000 BTU/hr" },
      { label: "تكنولوجيا الموتور", value: "DC Inverter Energy Saving" },
      { label: "نوع الفريون", value: "R32 Eco-Friendly" },
      { label: "الضاغط", value: "Tropical T3 Compressor" },
      { label: "التحكم الذكي", value: "Wi-Fi Ready + Smart Remote" },
      { label: "التشخيص الذاتي", value: "Self-Diagnosis & Protection" },
      { label: "فترة الضمان", value: "5 سنوات شاملة من ميراكو" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 30390, id: "carrier-xcool-cool-1.5" },
      { capacity: "2.25 حصان", price: 44910, id: "carrier-xcool-cool-2.25" },
      { capacity: "3 حصان", price: 50995, id: "carrier-xcool-cool-3" }
    ]
  },

  // ========================================================================
  // 3. كاريير إكس كول فيكسد - بارد فقط
  // ========================================================================
  {
    id: "carrier-xcool-fixed-cool",
    brand: "carrier",
    name: "كاريير إكس كول فيكسد - بارد فقط",
    type: "بارد فقط",
    features: [
      "أقوى تكييف سرعة ثابتة في مصر مع كفاءة تبريد فائقة وثبات تشغيلي عالي",
      "شاشة ديسبلاي براقة (Glittering Display) مدمجة في واجهة التكييف بتصميم عصري",
      "خاصية التبريد السريع تيربو لتبديد حرارة الصيف الشديدة في أسرع وقت",
      "تدفق هواء هادئ وسلس مع مروحة داخلية متطورة تمنع الضوضاء المزعجة",
      "توجيه ذكي للهواء لمنع اندفاع الهواء البارد المباشر على الجالسين",
      "حماية ذاتية وتشخيص ذكي لاكتشاف الأعطال وحماية الدائرة الكهربائية",
      "مواسير نحاس أصلية جنوب أفريقي ومكونات مقاومة للأكسدة والرطوبة",
      "ضمان شامل لمدة 5 سنوات من ميراكو كاريير"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierFixedGallery,
    modelCodes: {
      "1.5 حصان": "53KHEFT12N8-708F",
      "2.25 حصان": "53KHEFT18N8-708F",
      "3 حصان": "53KHEFT24N8-708F"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد فقط (Cool Only)" },
      { label: "سعة التبريد", value: "12,000 - 24,000 BTU/hr" },
      { label: "نوع الضاغط", value: "Fixed Speed Rotary T3" },
      { label: "نوع الفريون", value: "R32 الموفر والصديق للبيئة" },
      { label: "خاصية التبريد", value: "Turbo Rapid Cooling" },
      { label: "الشاشة", value: "Hidden Digital Display" },
      { label: "وظيفة التتبع", value: "Follow Me Sensor" },
      { label: "فترة الضمان", value: "5 سنوات شاملة من ميراكو" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 26415, id: "carrier-xcool-fixed-cool-1.5" },
      { capacity: "2.25 حصان", price: 37935, id: "carrier-xcool-fixed-cool-2.25" },
      { capacity: "3 حصان", price: 45520, id: "carrier-xcool-fixed-cool-3" }
    ]
  },

  // ========================================================================
  // 4. كاريير إكس كول فيكسد - بارد / ساخن
  // ========================================================================
  {
    id: "carrier-xcool-fixed-heat-cool",
    brand: "carrier",
    name: "كاريير إكس كول فيكسد - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "نظام تدفئة وتبريد شامل لتوفير مناخ معتدل ومريح داخل المنزل طوال فصول السنة",
      "تكنولوجيا جليترينج ديسبلاي لشاشة عرض جذابة تضيء من خلف الواجهة",
      "وضع التدفئة الذكي مع نظام منع تدفق الهواء البارد في بداية تشغيل الساخن",
      "خاصية التبريد الفوري والتيربو للتغلب على موجات الحر في الصيف",
      "مروحة داخلية ديناميكية توفر توزيعاً مثالياً للهواء الدافئ والبارد",
      "خاصية إعادة التشغيل التلقائي بنفس الإعدادات عند عودة التيار الكهربائي",
      "فلاتر غبار متطورة سهلة الفك والتنظيف لحماية الجهاز والعائلة",
      "ضمان 5 سنوات معتمد من ميراكو كاريير"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierFixedGallery,
    modelCodes: {
      "1.5 حصان": "53QHEFT12N8-708F",
      "2.25 حصان": "53QHEFT18N8-708F",
      "3 حصان": "53QHEFT24N8-708F"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد وتدفئة (بارد / ساخن)" },
      { label: "سعة التبريد/التدفئة", value: "12,500 - 24,000 BTU/hr" },
      { label: "نوع الضاغط", value: "Fixed Speed Heavy Duty" },
      { label: "نوع الفريون", value: "R32 عالي الكفاءة" },
      { label: "حماية الوحدة", value: "Anti-Rust Tropical Coating" },
      { label: "إعادة التشغيل", value: "Auto-Restart Memory" },
      { label: "الفلاتر", value: "Washable Dust Filters" },
      { label: "فترة الضمان", value: "5 سنوات شاملة من ميراكو" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 28630, id: "carrier-xcool-fixed-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 41345, id: "carrier-xcool-fixed-heat-cool-2.25" },
      { capacity: "3 حصان", price: 49015, id: "carrier-xcool-fixed-heat-cool-3" }
    ]
  },

  // ========================================================================
  // 5. ميديا AI ECO MASTER إنفرتر - بارد فقط
  // ========================================================================
  {
    id: "midea-ai-eco-master-cool",
    brand: "midea",
    name: "ميديا AI ECO MASTER إنفرتر - بارد فقط",
    type: "بارد فقط",
    features: [
      "أحدث تكنولوجيا ذكاء اصطناعي AI ECO MASTER لتحليل مناخ الغرفة وضبط الاستهلاك تلقائياً",
      "توفير هائل في استهلاك الكهرباء يصل إلى 60% بفضل محرك Inverter Quattro",
      "درع الحماية الذهبي المتطور Prime Guard المقاوم للصدأ وعوامل الرطوبة والأملاح",
      "تحكم ذكي عن بعد عبر تطبيق Midea SmartHome وعبر الأوامر الصوتية",
      "تدفق هواء ثلاثي الأبعاد مع زوايا تبريد واسعة تغطي كل أركان الغرفة",
      "خاصية Flash Cooling للتبريد السريع والانتعاش الفوري",
      "نظام تنقية هواء متكامل بفلاتر مزدوجة الكربون لإزالة أدق ذرات الغبار والبكتيريا",
      "ضمان 5 سنوات شامل من الوكيل المعتمد"
    ],
    image: "assets/midea_ai_ecomaster.jpg",
    gallery: mideaAiGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12CRDN8F-Q8",
      "2.25 حصان": "M1SEFT-18CRDN8F-Q8",
      "3 حصان": "M1SEFT-24CRDN8F-Q8"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد فقط (Inverter Cool)" },
      { label: "سعة التبريد", value: "12,250 - 24,000 BTU/hr" },
      { label: "تكنولوجيا الذكاء", value: "AI Eco Master Algorithm" },
      { label: "توفير الطاقة", value: "Inverter Quattro حتى 60%" },
      { label: "نوع الفريون", value: "R32 الصديق للبيئة" },
      { label: "حماية الكويل", value: "Prime Guard Golden Fin" },
      { label: "الاتصال الذكي", value: "SmartHome Wi-Fi App" },
      { label: "فترة الضمان", value: "5 سنوات شاملة" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 27525, id: "midea-ai-eco-master-cool-1.5" },
      { capacity: "2.25 حصان", price: 40510, id: "midea-ai-eco-master-cool-2.25" },
      { capacity: "3 حصان", price: 46050, id: "midea-ai-eco-master-cool-3" }
    ]
  },

  // ========================================================================
  // 6. ميديا AI ECO MASTER إنفرتر - بارد / ساخن
  // ========================================================================
  {
    id: "midea-ai-eco-master-heat-cool",
    brand: "midea",
    name: "ميديا AI ECO MASTER إنفرتر - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "نظام تدفئة وتبريد ذكي مدعوم بخوارزميات الذكاء الاصطناعي AI ECO MASTER",
      "توفير فائق للطاقة وتخفيض حقيقي في الفاتورة طوال فصول الصيف والشتاء",
      "درع الحماية الذهبي Prime Guard لمنع الصدأ والتآكل وإطالة عمر التكييف",
      "توزيع هواء محيطي متوازن يمنع تيارات الهواء المزعجة ويوفر راحة قصوى",
      "خاصية التنظيف الذاتي للوحدة الداخلية لمنع تراكم الأتربة والعفن",
      "اتصال واي فاي Wi-Fi للتحكم الذكي من خارج المنزل وضبط درجات الحرارة",
      "تشغيل فائق الهدوء بمستوى ضوضاء منخفض جداً يناسب غرف النوم والأطفال",
      "ضمان شامل لمدة 5 سنوات من الوكيل المعتمد"
    ],
    image: "assets/midea_ai_ecomaster.jpg",
    gallery: mideaAiGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12HRDN8F-Q8",
      "2.25 حصان": "M1SEFT-18HRDN8F-Q8",
      "3 حصان": "M1SEFT-24HRDN8F-Q8"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد وتدفئة (بارد / ساخن)" },
      { label: "سعة التبريد/التدفئة", value: "12,500 - 24,000 BTU/hr" },
      { label: "الذكاء الاصطناعي", value: "AI Eco Master Smart Comfort" },
      { label: "نوع الفريون", value: "R32 عالي الكفاءة" },
      { label: "الضاغط", value: "Tropical Inverter Compressor" },
      { label: "الحماية", value: "Prime Guard Golden Fin" },
      { label: "التحكم", value: "Wi-Fi + Remote Control" },
      { label: "فترة الضمان", value: "5 سنوات شاملة" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 29990, id: "midea-ai-eco-master-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 43815, id: "midea-ai-eco-master-heat-cool-2.25" },
      { capacity: "3 حصان", price: 49800, id: "midea-ai-eco-master-heat-cool-3" }
    ]
  },

  // ========================================================================
  // 7. ميديا FIXED XTREME PRO - بارد فقط
  // ========================================================================
  {
    id: "midea-xtreme-pro-cool",
    brand: "midea",
    name: "ميديا FIXED XTREME PRO - بارد فقط",
    type: "بارد فقط",
    features: [
      "تصميم Xtreme Pro القوي والمتطور لتحمل أعلى درجات الحرارة والظروف الصعبة",
      "تبريد فوري سريع بقوة تدفق هواء هائلة لتغطية المساحات الكبيرة بكفاءة",
      "درع الحماية الذهبي Prime Guard لحماية الكويل والوحدة الخارجية من الرطوبة والصدأ",
      "نظام تنقية هواء عالي الكثافة (Dual Filter) لاحتجاز الأتربة والروائح غير المستحبة",
      "وظيفة تتبع درجة الحرارة Follow Me لضبط التبريد حول مكان تواجد الريموت بدقة",
      "شاشة رقمية LED مخفية وأنيقة تعرض درجات الحرارة بوضوح",
      "ضمان 5 سنوات معتمد وشامل لجميع أجزاء التكييف"
    ],
    image: "assets/midea_xtreme_pro.jpg",
    gallery: mideaXtremeGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12CRN8F-Q8",
      "2.25 حصان": "M1SEFT-18CRN8F-Q8",
      "3 حصان": "M1SEFT-24CRN8F-Q8"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد فقط (Cool Only)" },
      { label: "سعة التبريد", value: "12,000 - 24,000 BTU/hr" },
      { label: "نوع الضاغط", value: "Fixed Speed Heavy Duty" },
      { label: "نوع الفريون", value: "R32 الصديق للبيئة" },
      { label: "الحماية", value: "Prime Guard Golden Fin" },
      { label: "التبريد السريع", value: "Turbo Flash Cooling" },
      { label: "الفلاتر", value: "Dual High-Density Filters" },
      { label: "فترة الضمان", value: "5 سنوات شاملة" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 23430, id: "midea-xtreme-pro-cool-1.5" },
      { capacity: "2.25 حصان", price: 35210, id: "midea-xtreme-pro-cool-2.25" },
      { capacity: "3 حصان", price: 43160, id: "midea-xtreme-pro-cool-3" }
    ]
  },

  // ========================================================================
  // 8. ميديا FIXED XTREME PRO - بارد / ساخن
  // ========================================================================
  {
    id: "midea-xtreme-pro-heat-cool",
    brand: "midea",
    name: "ميديا FIXED XTREME PRO - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "نظام تشغيل متكامل (بارد وساخن) يوفر الراحة والانتعاش صيفاً والدفء التام شتاءً",
      "صلابة هندسية Xtreme Pro ومكونات عالية الجودة تضمن أطول عمر افتراضي للجهاز",
      "درع الحماية الذهبي Prime Guard المقاوم للتآكل في كافة الظروف الجوية القاسية",
      "شاشة عرض رقمية ديجيتال مخفية تعطي مظهراً فخماً وراقياً في الغرفة",
      "خاصية التشخيص الذاتي المتقدم لاكتشاف وحل أي أعطال بشكل فوري وسهل",
      "توزيع هواء متوازن وانسيابي بدون أي إزعاج أو ضوضاء حركية",
      "ضمان شامل ومعتمد لمدة 5 سنوات"
    ],
    image: "assets/midea_xtreme_pro.jpg",
    gallery: mideaXtremeGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12HRN8F-Q8",
      "2.25 حصان": "M1SEFT-18HRN8F-Q8",
      "3 حصان": "M1SEFT-24HRN8F-Q8"
    },
    specs: [
      { label: "نوع التشغيل", value: "تبريد وتدفئة (بارد / ساخن)" },
      { label: "سعة التبريد/التدفئة", value: "12,500 - 24,000 BTU/hr" },
      { label: "نوع الضاغط", value: "Fixed Speed Tropical Rotary" },
      { label: "نوع الفريون", value: "R32 عالي الكفاءة" },
      { label: "الحماية ومقاومة الصدأ", value: "Prime Guard Anti-Corrosion" },
      { label: "وضع التشغيل", value: "Auto-Restart + Turbo" },
      { label: "نظام الفلاتر", value: "Anti-Dust Washable Mesh" },
      { label: "فترة الضمان", value: "5 سنوات شاملة" }
    ],
    sourceUrl: "https://www.amazon.eg",
    sourceLabel: "مواصفات أمازون مصر المعتمدة",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 25435, id: "midea-xtreme-pro-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 38670, id: "midea-xtreme-pro-heat-cool-2.25" },
      { capacity: "3 حصان", price: 46350, id: "midea-xtreme-pro-heat-cool-3" }
    ]
  }
];
