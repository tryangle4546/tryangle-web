// فلسفة الملف: واجهة الخدمة الموثوقة — منطق خفيف يحافظ على تنقل سريع وواضح على الهاتف.
// ==========================================================================
// قاعدة بيانات منتجات تراي أنجل للتكييف والتبريد
// مواصفات وصور دقيقة ومطابقة لمواصفات أمازون مصر وميراكو كاريير الرسمية
// مع الحفاظ الكامل على الأسعار والقدرات
// ==========================================================================

const carrierInverterGallery = [
  { src: "assets/carrier_xcool_indoor_05bc2178.jpg", label: "الوحدة الداخلية - تصميم انسيابي أبيض" },
  { src: "assets/carrier_xcool_set_7fe7a11a.webp", label: "طقم التكييف بالكامل مع وحدة التحكم والريموت" },
  { src: "assets/carrier_xcool_outdoor_9cd253f1.jpg", label: "الوحدة الخارجية - ضاغط T3 سوبر تروبيكال" },
  { src: "assets/carrier_inverter_b8efc060.webp", label: "تكنولوجيا الإنفرتر وتوزيع الهواء الذكي" }
];

const carrierFixedGallery = [
  { src: "assets/carrier_xcool_indoor_05bc2178.jpg", label: "الوحدة الداخلية - شاشة ديجيتال مخفية" },
  { src: "assets/carrier_xcool_set_7fe7a11a.webp", label: "طقم التكييف والريموت الذكي" },
  { src: "assets/carrier_xcool_outdoor_9cd253f1.jpg", label: "الوحدة الخارجية عالية التحمل" },
  { src: "assets/carrier_optimax_1756ad22.webp", label: "خاصية التبريد السريع تيربو" }
];

const mideaAiGallery = [
  { src: "assets/midea_ai_ecomaster_ffbc340f.jpg", label: "الوحدة الداخلية - تصميم AI ECO MASTER" },
  { src: "assets/midea_ai_ecomaster_front_b615d091.jpg", label: "الواجهة الأمامية وتدفق الهواء ثلاثي الأبعاد" },
  { src: "assets/midea_ai_ecomaster_outdoor_e91a0da4.png", label: "الوحدة الخارجية - درع الحماية Prime Guard" },
  { src: "assets/midea_inverter_8901af55.webp", label: "نظام التوفير الذكي Inverter Quattro" }
];

const mideaXtremeGallery = [
  { src: "assets/midea_xtreme_pro_c2d4b4db.jpg", label: "الوحدة الداخلية - مظهر عصري أنيق" },
  { src: "assets/midea_xtreme_pro_set_cd4b95aa.png", label: "طقم التكييف والريموت كنترول" },
  { src: "assets/midea_xtreme_pro_outdoor_cbb6cc82.webp", label: "الوحدة الخارجية المقاومة للتآكل" },
  { src: "assets/midea_breezeless_3668e354.webp", label: "فلاتر تنقية الهواء ومقاومة الأتربة" }
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
    image: "assets/carrier_xcool_indoor_05bc2178.jpg",
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
    image: "assets/carrier_xcool_indoor_05bc2178.jpg",
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
    image: "assets/carrier_xcool_indoor_05bc2178.jpg",
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
    image: "assets/carrier_xcool_indoor_05bc2178.jpg",
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
    image: "assets/midea_ai_ecomaster_ffbc340f.jpg",
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
    image: "assets/midea_ai_ecomaster_ffbc340f.jpg",
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
    image: "assets/midea_xtreme_pro_c2d4b4db.jpg",
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
    image: "assets/midea_xtreme_pro_c2d4b4db.jpg",
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
// ==========================================================================
// محرك التفاعل والمؤثرات لموقع تراي أنجل للتكييف والتبريد
// ==========================================================================

const defaultAcSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150"><rect x="10" y="20" width="380" height="90" rx="10" fill="%23ffffff" stroke="%230062ac" stroke-width="3"/><rect x="15" y="105" width="370" height="8" rx="3" fill="%23cbd5e1"/><line x1="30" y1="85" x2="370" y2="85" stroke="%23f1f5f9" stroke-width="2"/><line x1="30" y1="95" x2="370" y2="95" stroke="%23e2e8f0" stroke-width="2"/><rect x="320" y="40" width="40" height="15" rx="3" fill="%23f39200"/><circle cx="330" cy="47" r="2.5" fill="%23ffffff"/><circle cx="340" cy="47" r="2.5" fill="%23ffffff"/><path d="M 60 115 Q 70 135 80 115 T 100 115 T 120 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M 180 115 Q 190 135 200 115 T 220 115 T 240 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M 280 115 Q 290 135 300 115 T 320 115 T 340 115" stroke="%2300b4d8" stroke-width="1.5" fill="none" opacity="0.6"/><text x="140" y="65" fill="%230062ac" font-family="Segoe UI, Cairo, sans-serif" font-weight="800" font-size="14">تراي أنجل للتكييف</text></svg>`;

document.addEventListener("DOMContentLoaded", () => {

  // 1. نظام جزيئات التبريد التفاعلية في الهيرو (Hero Air Canvas)
  initHeroAirCanvas();

  // 2. التحكم في القائمة المتجاوبة للهواتف وتثبيت الهيدر (Navigation)
  initNavigation();

  // 3. عرض وتبديل المنتجات (Store Grid - ثابتة ومستقرة تماماً)
  initProductsGrid();

  // 4. نموذج تواصل معنا
  initContactForm();

  // 5. استمارة طلب التكييف وحجز الصيانة عبر الواتساب (WhatsApp Dispatch)
  initOrderAndMaintenanceForms();

  // 6. إدارة شاشة التحميل المسبق وحركات الدخول (Preloader & Reveal)
  initIntroAndScrollReveal();

  // 7. التحكم في الأسئلة الشائعة (FAQ Accordion)
  initFaqAccordion();

  // 8. الأزرار العائمة ومؤشر تقدم التمرير (Floating Actions)
  initFloatingActions();
});

/* ==========================================================================
   1. محرك جزيئات الهواء والتبريد (Hero Air Canvas)
   ========================================================================== */
function initHeroAirCanvas() {
  const canvas = document.getElementById("heroAirCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resizeCanvas() {
    const parent = canvas.parentElement;
    if (!parent) return;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 60);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.6 + 0.3,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.15,
      color: Math.random() > 0.3 ? "#00b4d8" : "#f39200"
    });
  }

  function renderAir() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x > width) p.x = 0;
      if (p.x < 0) p.x = width;
      if (p.y > height) p.y = 0;
      if (p.y < 0) p.y = height;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(renderAir);
  }

  renderAir();
}

/* ==========================================================================
   2. التحكم في القائمة والتنقل (Navigation)
   ========================================================================== */
function initNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const header = document.querySelector("header");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("header-scrolled");
    } else {
      header?.classList.remove("header-scrolled");
    }
    spyNavigation();
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function spyNavigation() {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  }
}

/* ==========================================================================
   3. عرض وتبديل المنتجات (Products Grid - ثابتة بدون اهتزاز)
   ========================================================================== */
function initProductsGrid() {
  const productsGrid = document.getElementById("productsGrid");
  const brandTabs = document.querySelectorAll(".brand-tab-btn");
  let currentBrand = "carrier";

  window.renderProducts = function(brand) {
    if (!productsGrid || typeof products === "undefined") return;

    productsGrid.style.opacity = 0;
    productsGrid.style.transform = "translateY(10px)";

    setTimeout(() => {
      const filtered = products.filter(p => p.brand === brand);
      productsGrid.innerHTML = "";

      filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const featuresHTML = product.features.map(f => `<li>${f}</li>`).join("");

        let capacityHTML = "";
        let initialPrice = 0;
        let initialId = "";
        let initialCapacity = "";

        if (product.variants && product.variants.length > 0) {
          initialPrice = product.variants[0].price;
          initialId = product.variants[0].id;
          initialCapacity = product.variants[0].capacity;

          const optionsHTML = product.variants.map((v, idx) => `<option value="${idx}">${v.capacity}</option>`).join("");
          capacityHTML = `
            <div class="variant-selector-wrapper">
              <span class="capacity-lbl">القدرة المطلوبة:</span>
              <select class="variant-select" onchange="changeProductVariant('${product.id}', this.value, this)">
                ${optionsHTML}
              </select>
            </div>
          `;
        } else {
          initialPrice = product.price;
          initialId = product.id;
          initialCapacity = product.capacity;
          capacityHTML = `<span class="product-capacity-tag">${product.capacity}</span>`;
        }

        const formattedPrice = initialPrice.toLocaleString("ar-EG");
        const galleryItems = Array.isArray(product.gallery) && product.gallery.length > 0
          ? product.gallery
          : [{ src: product.image, label: "صورة المنتج" }];

        const galleryThumbsHTML = galleryItems.map((item, index) => `
          <button type="button" class="product-thumb ${index === 0 ? "active" : ""}" data-gallery-index="${index}" aria-label="عرض ${item.label}">
            <img src="${item.src}" alt="${item.label}" loading="lazy">
          </button>
        `).join("");

        const specsHTML = (product.specs || []).map(spec => `
          <div class="product-spec-item">
            <span>${spec.label}</span>
            <strong>${spec.value}</strong>
          </div>
        `).join("");

        const initialModelCode = product.modelCodes?.[initialCapacity] || "متعدد حسب القدرة";

        card.innerHTML = `
          <div class="product-img-wrapper product-gallery" data-gallery-count="${galleryItems.length}">
            <div class="product-image-stage">
              <img src="${galleryItems[0].src}" alt="${galleryItems[0].label}" class="product-img" loading="lazy">
              <div class="product-gallery-count"><span aria-hidden="true">▣</span> ${galleryItems.length} صور</div>
            </div>
            <button type="button" class="gallery-nav gallery-prev" data-gallery-action="prev" aria-label="الصورة السابقة">‹</button>
            <button type="button" class="gallery-nav gallery-next" data-gallery-action="next" aria-label="الصورة التالية">›</button>
            <div class="product-badges">
              ${product.inverter ? '<span class="badge-inverter">إنفرتر موفر</span>' : ''}
              <span class="badge-type">${product.type}</span>
            </div>
            <div class="product-thumbnails">
              ${galleryThumbsHTML}
            </div>
          </div>
          <div class="product-info">
            ${capacityHTML}
            <div class="product-model-row">
              <span>كود الموديل:</span>
              <span class="product-model-code">${initialModelCode}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-specs">
              <div class="product-specs-heading">✦ مواصفات المنتج</div>
              <div class="product-specs-grid">${specsHTML}</div>
            </div>
            <ul class="product-features-list">
              ${featuresHTML}
            </ul>
            <div class="product-footer">
              <div class="price-container">
                <span class="price-lbl">سعر الكاش</span>
                <span class="price-val">${formattedPrice} <span class="price-currency">ج.م</span></span>
              </div>
              <button class="btn btn-primary order-btn btn-glow" onclick="openOrderModal('${initialId}')">اطلب الآن</button>
            </div>
          </div>
        `;

        const productImage = card.querySelector(".product-img");
        const galleryElement = card.querySelector(".product-gallery");
        const thumbnailButtons = card.querySelectorAll(".product-thumb");

        const setProductImage = (index) => {
          const safeIndex = (index + galleryItems.length) % galleryItems.length;
          const selected = galleryItems[safeIndex];
          if (productImage) {
            productImage.src = selected.src;
            productImage.alt = selected.label;
          }
          thumbnailButtons.forEach((thumb, thumbIndex) => {
            thumb.classList.toggle("active", thumbIndex === safeIndex);
          });
          if (galleryElement) galleryElement.dataset.galleryIndex = String(safeIndex);
        };

        if (galleryElement) {
          galleryElement.addEventListener("click", (event) => {
            const control = event.target.closest("[data-gallery-index], [data-gallery-action]");
            if (!control) return;
            const currentIndex = Number(galleryElement.dataset.galleryIndex || 0);
            if (control.dataset.galleryAction === "prev") setProductImage(currentIndex - 1);
            if (control.dataset.galleryAction === "next") setProductImage(currentIndex + 1);
            if (control.dataset.galleryIndex !== undefined) setProductImage(Number(control.dataset.galleryIndex));
          });
        }

        productsGrid.appendChild(card);
      });

      productsGrid.style.opacity = 1;
      productsGrid.style.transform = "translateY(0)";
    }, 200);
  };

  brandTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      brandTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentBrand = tab.getAttribute("data-brand");
      renderProducts(currentBrand);
    });
  });

  renderProducts(currentBrand);
}

// دالة تغيير القدرة للموديل
window.changeProductVariant = function(productId, variantIndex, selectElement) {
  if (typeof products === "undefined") return;
  const product = products.find(p => p.id === productId);
  if (!product || !product.variants) return;

  const variant = product.variants[variantIndex];
  if (!variant) return;

  const card = selectElement.closest(".product-card");
  if (!card) return;

  const priceVal = card.querySelector(".price-val");
  if (priceVal) {
    priceVal.innerHTML = `${variant.price.toLocaleString("ar-EG")} <span class="price-currency">ج.م</span>`;
  }

  const modelCode = card.querySelector(".product-model-code");
  if (modelCode) {
    modelCode.textContent = product.modelCodes?.[variant.capacity] || "متعدد حسب القدرة";
  }

  const orderBtn = card.querySelector(".order-btn");
  if (orderBtn) {
    orderBtn.setAttribute("onclick", `openOrderModal('${variant.id}')`);
  }
};

/* ==========================================================================
   4. استمارات الطلب والصيانة وتنسيق رسائل الواتساب
   ========================================================================== */
const orderModal = document.getElementById("orderModal");

window.openOrderModal = function(productId) {
  if (typeof products === "undefined" || !orderModal) return;

  let product = products.find(p => p.id === productId);
  let selectedCapacity = "";
  let selectedPrice = 0;

  if (!product) {
    for (const p of products) {
      if (p.variants) {
        const variant = p.variants.find(v => v.id === productId);
        if (variant) {
          product = p;
          selectedCapacity = variant.capacity;
          selectedPrice = variant.price;
          break;
        }
      }
    }
  } else {
    selectedCapacity = product.capacity;
    selectedPrice = product.price;
  }

  if (!product) return;

  document.getElementById("orderProductId").value = productId;
  document.getElementById("modalAcName").textContent = product.name;
  document.getElementById("modalAcMeta").textContent = `${selectedCapacity} | ${product.type} ${product.inverter ? ' | إنفرتر موفر' : ''}`;
  document.getElementById("modalAcPrice").textContent = `${selectedPrice.toLocaleString("ar-EG")} ج.م`;

  orderModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeOrderModal = function() {
  if (orderModal) {
    orderModal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

document.getElementById("modalCloseBtn")?.addEventListener("click", window.closeOrderModal);
orderModal?.addEventListener("click", (e) => {
  if (e.target === orderModal) window.closeOrderModal();
});

function initOrderAndMaintenanceForms() {
  const whatsappNumber = "201061694024";

  // نموذج الطلب
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const productId = document.getElementById("orderProductId").value;
      const clientName = document.getElementById("clientName").value;
      const clientPhone = document.getElementById("clientPhone").value;
      const clientAddress = document.getElementById("clientAddress").value;
      const clientNotes = document.getElementById("clientNotes").value || "لا توجد ملاحظات إضافية";
      const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked')?.value || "كاش عند الاستلام (Cash on Delivery)";

      let product = products.find(p => p.id === productId);
      let selectedCapacity = "";
      let selectedPrice = 0;

      if (!product) {
        for (const p of products) {
          if (p.variants) {
            const variant = p.variants.find(v => v.id === productId);
            if (variant) {
              product = p;
              selectedCapacity = variant.capacity;
              selectedPrice = variant.price;
              break;
            }
          }
        }
      } else {
        selectedCapacity = product.capacity;
        selectedPrice = product.price;
      }

      if (!product) return;

      const messageText = `السلام عليكم ورحمة الله وبركاته،
أرغب في طلب تكييف من مكتب *تراي أنجل للتكييف والتبريد*:

*📦 تفاصيل التكييف المطلوب:*
- *الموديل:* ${product.name}
- *الماركة:* ${product.brand === 'carrier' ? 'كاريير (Carrier)' : 'ميديا (Midea)'}
- *القدرة:* ${selectedCapacity}
- *النوع:* ${product.type}
- *السعر الإجمالي:* ${selectedPrice.toLocaleString("ar-EG")} جنيه مصري
- *طريقة الدفع:* ${selectedPayment}

*👤 بيانات العميل للتركيب والتوصيل:*
- *الاسم بالكامل:* ${clientName}
- *رقم الهاتف:* ${clientPhone}
- *العنوان بالتفصيل:* ${clientAddress}
- *ملاحظات التركيب:* ${clientNotes}

شكراً لكم، أرجو التواصل لتأكيد موعد المعاينة والتركيب.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

      closeOrderModal();
      showToast("تم تسجيل طلبك بنجاح! جاري فتح محادثة الواتساب...");

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);

      orderForm.reset();
    });
  }

  // نموذج الصيانة
  const maintForm = document.getElementById("maintenanceForm");
  if (maintForm) {
    maintForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("maintName").value;
      const phone = document.getElementById("maintPhone").value;
      const gov = document.getElementById("maintGov").value;
      const service = document.getElementById("maintService").value;
      const date = document.getElementById("maintDate").value;
      const address = document.getElementById("maintAddress").value;
      const desc = document.getElementById("maintDesc").value || "لا توجد متطلبات إضافية";

      const messageText = `السلام عليكم ورحمة الله وبركاته،
أرغب في حجز موعد صيانة من موقع *تراي أنجل للتكييف والصيانة*:

*🛠️ تفاصيل طلب الصيانة:*
- *نوع الخدمة:* ${service}
- *تاريخ الزيارة المفضل:* ${date}

*👤 بيانات العميل للتواصل والزيارة:*
- *الاسم بالكامل:* ${name}
- *رقم الهاتف:* ${phone}
- *المحافظة:* ${gov}
- *العنوان بالتفصيل:* ${address}
- *وصف المشكلة / تفاصيل إضافية:* ${desc}

شكراً لكم، أرجو التواصل لتأكيد موعد الحضور.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

      showToast("تم إرسال طلب الصيانة بنجاح! جاري فتح محادثة الواتساب للتأكيد...");

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);

      maintForm.reset();
    });
  }
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("تم إرسال رسالتك بنجاح! وسنتواصل معك قريباً.");
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   5. الأسئلة الشائعة وشاشة التحميل والكشف عند التمرير
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
            otherItem.querySelector(".faq-answer").style.maxHeight = "0px";
          }
        });

        if (isActive) {
          item.classList.remove("active");
          answer.style.maxHeight = "0px";
        } else {
          item.classList.add("active");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    }
  });
}

function initIntroAndScrollReveal() {
  const preloader = document.getElementById("preloader");
  const entryHeader = document.querySelector(".entry-header");
  const entryTargets = document.querySelectorAll(".reveal-fade");

  function startIntro() {
    if (entryHeader) entryHeader.classList.add("is-visible");

    entryTargets.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("revealed");
      }, 120 + (index * 80));
    });

    if (preloader) {
        setTimeout(() => {
          preloader.classList.add("fade-out");
        }, 460);
        setTimeout(() => {
          preloader.remove();
        }, 1080);
    }
  }

  requestAnimationFrame(() => {
    setTimeout(startIntro, 120);
  });

  const revealElements = document.querySelectorAll(".scroll-reveal");
  if (revealElements.length > 0 && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("revealed"));
  }
}

/* ==========================================================================
   6. الأزرار العائمة ومؤشر التقدم (Floating Actions Suite)
   ========================================================================== */
function initFloatingActions() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const circle = document.getElementById("scrollProgressCircle");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(100, Math.max(0, (scrollTop / (docHeight || 1)) * 100));

    if (circle) {
      circle.style.strokeDasharray = `${progress}, 100`;
    }

    if (scrollTop > 300) {
      backToTopBtn?.classList.add("show");
    } else {
      backToTopBtn?.classList.remove("show");
    }
  });

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function showToast(message) {
  const toastSuccess = document.getElementById("toastSuccess");
  const toastSuccessMsg = document.getElementById("toastSuccessMsg");
  if (!toastSuccess || !toastSuccessMsg) return;

  toastSuccessMsg.textContent = message;
  toastSuccess.classList.add("show");

  setTimeout(() => {
    toastSuccess.classList.remove("show");
  }, 4000);
}
