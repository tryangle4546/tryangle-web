// قاعدة بيانات المنتجات لتسهيل الإضافة والتعديل والمسح
const carrierGallery = [
  { src: "assets/carrier_xcool_indoor.jpg", label: "الوحدة الداخلية - صورة أمامية" },
  { src: "assets/carrier_xcool_display.jpg", label: "الوحدة الداخلية - شاشة التشغيل" },
  { src: "assets/carrier_xcool_set.webp", label: "الوحدة الداخلية والخارجية والريموت" }
];

const mideaAiGallery = [
  { src: "assets/midea_ai_ecomaster.jpg", label: "الوحدة الداخلية - صورة أمامية" },
  { src: "assets/midea_ai_ecomaster_front.jpg", label: "تصميم AI ECO MASTER" },
  { src: "assets/midea_ai_ecomaster_outdoor.png", label: "الوحدة الخارجية" }
];

const mideaXtremeGallery = [
  { src: "assets/midea_xtreme_pro.jpg", label: "الوحدة الداخلية - صورة أمامية" },
  { src: "assets/midea_xtreme_pro_set.png", label: "طقم التكييف والريموت" },
  { src: "assets/midea_xtreme_pro_outdoor.webp", label: "الوحدة الخارجية" }
];

const products = [
  // --- منتجات كاريير إنفرتر (Carrier Inverter) ---
  {
    id: "carrier-xcool-heat-cool",
    brand: "carrier",
    name: "كاريير إكس كول إنفرتر - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "تكنولوجيا الإنفرتر الموفرة للكهرباء حتى 50%",
      "فريون R32 الصديق للبيئة لكفاءة تبريد أعلى",
      "ضاغط T3 سوبر تروبيكال يتحمل حرارة حتى 55 مئوية",
      "اتصال ذكي واي فاي (Wi-Fi) للتحكم من الموبايل",
      "خاصية التنظيف الذاتي لمنع تراكم العفن والبكتيريا",
      "ضمان شامل 5 سنوات من ميراكو كاريير"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierGallery,
    modelCodes: {
      "1.5 حصان": "53QHEFT12DN8-708F",
      "2.25 حصان": "53QHEFT18DN8-708F",
      "3 حصان": "53QHEFT24DN8-708F"
    },
    specs: [
      { label: "التشغيل", value: "تبريد وتدفئة" },
      { label: "نوع الضاغط", value: "DC Inverter" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://carrieregy.net/products/carrier-xcool-inverter-1-5-hp-heat-pump-53qheft12dn8-708f",
    sourceLabel: "مصدر مواصفات Carrier",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 33105, id: "carrier-xcool-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 48565, id: "carrier-xcool-heat-cool-2.25" },
      { capacity: "3 حصان", price: 55140, id: "carrier-xcool-heat-cool-3" }
    ]
  },
  {
    id: "carrier-xcool-cool",
    brand: "carrier",
    name: "كاريير إكس كول إنفرتر - بارد فقط",
    type: "بارد فقط",
    features: [
      "تكنولوجيا الإنفرتر الموفرة للكهرباء حتى 50%",
      "فريون R32 الصديق للبيئة لكفاءة تبريد أعلى",
      "ضاغط T3 سوبر تروبيكال يتحمل حرارة حتى 55 مئوية",
      "اتصال ذكي واي فاي (Wi-Fi) للتحكم من الموبايل",
      "خاصية التنظيف الذاتي لمنع تراكم العفن والبكتيريا",
      "ضمان شامل 5 سنوات من ميراكو كاريير"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierGallery,
    modelCodes: {
      "1.5 حصان": "53KHEFT12DN8-708F",
      "2.25 حصان": "53KHEFT18DN8-708F",
      "3 حصان": "53KHEFT24DN8-708F"
    },
    specs: [
      { label: "التشغيل", value: "تبريد فقط" },
      { label: "نوع الضاغط", value: "DC Inverter" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://www.amazon.eg/-/en/Carrier-XCOOL-Inverter-Split-53KHEFT12DN8-708F/dp/B0G2JNFS6P",
    sourceLabel: "عرض Carrier على Amazon.eg",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 30390, id: "carrier-xcool-cool-1.5" },
      { capacity: "2.25 حصان", price: 44910, id: "carrier-xcool-cool-2.25" },
      { capacity: "3 حصان", price: 50995, id: "carrier-xcool-cool-3" }
    ]
  },

  // --- منتجات كاريير فيكسد العادي (Carrier Fixed Speed) ---
  {
    id: "carrier-xcool-fixed-cool",
    brand: "carrier",
    name: "كاريير إكس كول فيكسد - بارد فقط",
    type: "بارد فقط",
    features: [
      "تكنولوجيا جليترينج ديسبلاي (Glittering Display) لشاشة عرض جذابة مخفية تعطي مظهراً أنيقاً",
      "خاصية التبريد السريع تيربو (Turbo) لتبديد الحرارة والوصول لدرجة الانتعاش في أقل وقت",
      "تشغيل هادئ بأقل مستوى ضوضاء بفضل التصميم المتطور للمروحة وتدفق الهواء نيو سيلينت",
      "توجيه ذكي للهواء الدافئ والبارد (سواء أعلى أو أسفل) لمنع التيارات المباشرة المزعجة",
      "وظيفة تتبع درجة الحرارة (Follow Me) لتوفير الراحة القصوى في مكان تواجدك بدقة",
      "وظيفة التشخيص الذاتي لاكتشاف الأعطال وحماية الجهاز تلقائياً وتسهيل عمليات الصيانة",
      "ضمان معتمد وشامل لمدة 5 سنوات من ميراكو كاريير ضد عيوب الصناعة"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierGallery,
    modelCodes: {
      "1.5 حصان": "53KHEFT12N8-708F",
      "2.25 حصان": "53KHEFT18N8-708F",
      "3 حصان": "53KHEFT24N8-708F"
    },
    specs: [
      { label: "التشغيل", value: "تبريد فقط" },
      { label: "نوع الضاغط", value: "Fixed Speed" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://www.amazon.eg/-/en/Carrier-2026-XCOOL-Fixed-Split/dp/B0H2BKJ897",
    sourceLabel: "عرض Carrier على Amazon.eg",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 26415, id: "carrier-xcool-fixed-cool-1.5" },
      { capacity: "2.25 حصان", price: 37935, id: "carrier-xcool-fixed-cool-2.25" },
      { capacity: "3 حصان", price: 45520, id: "carrier-xcool-fixed-cool-3" }
    ]
  },
  {
    id: "carrier-xcool-fixed-heat-cool",
    brand: "carrier",
    name: "كاريير إكس كول فيكسد - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "نظام تشغيل بارد وساخن متطور لتوفير الأجواء المثالية والمريحة داخل الغرفة طوال فصول السنة",
      "تكنولوجيا جليترينج ديسبلاي (Glittering Display) لشاشة عرض جذابة مخفية تعطي مظهراً أنيقاً",
      "خاصية التبريد السريع تيربو (Turbo) لتبديد الحرارة والوصول لدرجة الانتعاش في أقل وقت",
      "تشغيل هادئ بأقل مستوى ضوضاء بفضل التصميم المتطور للمروحة وتدفق الهواء نيو سيلينت",
      "توجيه ذكي للهواء الدافئ والبارد (سواء أعلى أو أسفل) لمنع التيارات المباشرة المزعجة",
      "وظيفة تتبع درجة الحرارة (Follow Me) لتوفير الراحة القصوى في مكان تواجدك بدقة",
      "وظيفة التشخيص الذاتي لاكتشاف الأعطال وحماية الجهاز تلقائياً وتسهيل عمليات الصيانة",
      "ضمان معتمد وشامل لمدة 5 سنوات من ميراكو كاريير ضد عيوب الصناعة"
    ],
    image: "assets/carrier_xcool_indoor.jpg",
    gallery: carrierGallery,
    modelCodes: {
      "1.5 حصان": "53QHEFT12N8-708F",
      "2.25 حصان": "53QHEFT18N8-708F",
      "3 حصان": "53QHEFT24N8-708F"
    },
    specs: [
      { label: "التشغيل", value: "تبريد وتدفئة" },
      { label: "نوع الضاغط", value: "Fixed Speed" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://www.amazon.eg/-/en/Carrier-2026-XCOOL-Fixed-Split/dp/B0H2BKJ897",
    sourceLabel: "عرض Carrier على Amazon.eg",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 28630, id: "carrier-xcool-fixed-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 41345, id: "carrier-xcool-fixed-heat-cool-2.25" },
      { capacity: "3 حصان", price: 49015, id: "carrier-xcool-fixed-heat-cool-3" }
    ]
  },

  // --- منتجات ميديا إنفرتر (Midea AI ECO MASTER INVERTER) ---
  {
    id: "midea-ai-eco-master-cool",
    brand: "midea",
    name: "ميديا AI ECO MASTER إنفرتر - بارد فقط",
    type: "بارد فقط",
    features: [
      "تكنولوجيا الذكاء الاصطناعي AI ECO MASTER لإدارة وتوفير استهلاك الطاقة ذكياً وبأعلى كفاءة",
      "تكنولوجيا الإنفرتر المتطورة التي تضمن خفضاً حقيقياً في فاتورة الكهرباء بنسبة تصل إلى 65%",
      "درع الحماية الذهبي المتطور Prime Guard لمقاومة الصدأ والتآكل في أصعب الظروف المناخية وعوامل الرطوبة",
      "تشغيل فائق الهدوء (Super Quiet) لتوفير بيئة نوم مريحة تماماً وبدون أي ضوضاء مزعجة",
      "نظام تنقية هواء مزدوج وفلاتر عالية الكثافة لحماية كاملة من الغبار، البكتيريا، ومسببات الحساسية",
      "خاصية التبريد الفوري السريع لتبديد حرارة الصيف والوصول للانتعاش المثالي في ثوانٍ معدودة"
    ],
    image: "assets/midea_ai_ecomaster.jpg",
    gallery: mideaAiGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12CRDN8F-Q8",
      "2.25 حصان": "M1SEFT-18CRDN8F-Q8",
      "3 حصان": "M1SEFT-24CRDN8F-Q8"
    },
    specs: [
      { label: "التشغيل", value: "تبريد فقط" },
      { label: "نوع الضاغط", value: "Inverter" },
      { label: "التقنيات", value: "AI Comfort Saving + Smart Home" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://www.karnakac.com/products/midea-ai-ecomaster-inverter-1-5hp-cool-only-split-air-conditioner-m1seft-12crdn8f-q8",
    sourceLabel: "مصدر مواصفات Midea",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 27525, id: "midea-ai-eco-master-cool-1.5" },
      { capacity: "2.25 حصان", price: 40510, id: "midea-ai-eco-master-cool-2.25" },
      { capacity: "3 حصان", price: 46050, id: "midea-ai-eco-master-cool-3" }
    ]
  },
  {
    id: "midea-ai-eco-master-heat-cool",
    brand: "midea",
    name: "ميديا AI ECO MASTER إنفرتر - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "نظام مزدوج للتبريد المنعش صيفاً والتدفئة الدافئة شتاءً لراحة متكاملة تدوم طوال فصول السنة",
      "تكنولوجيا الذكاء الاصطناعي AI ECO MASTER الذكية لضمان أعلى مستويات الأداء والتوفير الفائق للكهرباء",
      "درع الحماية الذهبي المتطور Prime Guard لمقاومة الصدأ والتآكل في أصعب الظروف المناخية وعوامل الرطوبة",
      "توزيع هواء ذكي ثلاثي الأبعاد لملء كافة زوايا وأركان الغرفة بتدفق هواء متوازن ومريح للغاية",
      "وظيفة التنظيف الذاتي الفعّالة لمنع تكون العفن أو الرطوبة داخل الوحدة الداخلية وضمان هواء نقي دائماً",
      "شاشة عرض ديجيتال مخفية أنيقة تعرض درجة الحرارة وحالة التشغيل بلمسة جمالية عصرية"
    ],
    image: "assets/midea_ai_ecomaster.jpg",
    gallery: mideaAiGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12HRDN8F-Q8",
      "2.25 حصان": "M1SEFT-18HRDN8F-Q8",
      "3 حصان": "M1SEFT-24HRDN8F-Q8"
    },
    specs: [
      { label: "التشغيل", value: "تبريد وتدفئة" },
      { label: "نوع الضاغط", value: "Inverter" },
      { label: "التقنيات", value: "AI Comfort Saving + Smart Home" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://www.amazon.eg/-/en/Midea-Master-Inverter-Heat-Split/dp/B0FRXW8PDH",
    sourceLabel: "عرض Midea على Amazon.eg",
    inverter: true,
    variants: [
      { capacity: "1.5 حصان", price: 29990, id: "midea-ai-eco-master-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 43815, id: "midea-ai-eco-master-heat-cool-2.25" },
      { capacity: "3 حصان", price: 49800, id: "midea-ai-eco-master-heat-cool-3" }
    ]
  },

  // --- منتجات ميديا العادي الثابت (Midea FIXED XTREME PRO) ---
  {
    id: "midea-xtreme-pro-cool",
    brand: "midea",
    name: "ميديا FIXED XTREME PRO - بارد فقط",
    type: "بارد فقط",
    features: [
      "تصميم Xtreme Pro العصري المتطور وشديد التحمل والمقاوم لعوامل الطقس الصعبة",
      "تكنولوجيا التبريد الفوري السريع والأقوى لضمان تدفق هواء منعش خلال أقل وقت ممكن",
      "درع الحماية الذهبي المتكامل Prime Guard لحماية الوحدتين الداخلية والخارجية من الصدأ والتآكل",
      "نظام تنقية هواء ثنائي الفلاتر فائق الكفاءة للتخلص من الأتربة الدقيقة والبكتيريا ومسببات الحساسية",
      "وظيفة تتبع الحرارة الذكية (Follow Me) لتوجيه الهواء والراحة التامة في مكان تواجدك بدقة",
      "تشغيل هادئ مريح بأقل مستوى ضيج بفضل انسيابية حركة مروحة التدفق الداخلي المتطورة"
    ],
    image: "assets/midea_xtreme_pro.jpg",
    gallery: mideaXtremeGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12CRN8F-Q8",
      "2.25 حصان": "M1SEFT-18CRN8F-Q8",
      "3 حصان": "M1SEFT-24CRN8F-Q8"
    },
    specs: [
      { label: "التشغيل", value: "تبريد فقط" },
      { label: "نوع الضاغط", value: "Fixed Speed" },
      { label: "الحماية", value: "Prime Guard" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://www.karnakac.com/products/midea-xtreme-pro-1-5hp-cool-only-split-air-conditioner-m1seft-12crn8f-q8",
    sourceLabel: "مصدر مواصفات Midea",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 23430, id: "midea-xtreme-pro-cool-1.5" },
      { capacity: "2.25 حصان", price: 35210, id: "midea-xtreme-pro-cool-2.25" },
      { capacity: "3 حصان", price: 43160, id: "midea-xtreme-pro-cool-3" }
    ]
  },
  {
    id: "midea-xtreme-pro-heat-cool",
    brand: "midea",
    name: "ميديا FIXED XTREME PRO - بارد / ساخن",
    type: "بارد / ساخن",
    features: [
      "نظام تشغيل (بارد وساخن) عالي الاعتمادية لتوفير جو مثالي ومنعش داخل الغرفة على مدار العام",
      "تصميم وعبقرية هندسية Xtreme Pro لتوزيع متوازن ومثالي لتدفق الهواء الدافئ والبارد",
      "درع الحماية الذهبي المتكامل Prime Guard لحماية الوحدتين الداخلية والخارجية من الصدأ والتآكل",
      "شاشة عرض رقمية مخفية (Hidden Display) جذابة وأنيقة توضح درجات الحرارة بدقة",
      "وظيفة التشخيص الذاتي المتقدمة لاكتشاف الأعطال وحماية أجزاء الجهاز تلقائياً لتسهيل الصيانة",
      "مكونات داخلية وخارجية متينة وشديدة الاعتمادية تضمن عمراً افتراضياً أطول للجهاز ضد عيوب الصناعة"
    ],
    image: "assets/midea_xtreme_pro.jpg",
    gallery: mideaXtremeGallery,
    modelCodes: {
      "1.5 حصان": "M1SEFT-12HRN8F-Q8",
      "2.25 حصان": "M1SEFT-18HRN8F-Q8",
      "3 حصان": "M1SEFT-24HRN8F-Q8"
    },
    specs: [
      { label: "التشغيل", value: "تبريد وتدفئة" },
      { label: "نوع الضاغط", value: "Fixed Speed" },
      { label: "الحماية", value: "Prime Guard" },
      { label: "الفريون", value: "R32" },
      { label: "الضمان", value: "5 سنوات" }
    ],
    sourceUrl: "https://www.jumia.com.eg/midea-extreme-pro-2.25-hp-cool-heat-air-conditioner-m1seft-18hrn8f-q8-134505433.html",
    sourceLabel: "مصدر مواصفات Midea",
    inverter: false,
    variants: [
      { capacity: "1.5 حصان", price: 25435, id: "midea-xtreme-pro-heat-cool-1.5" },
      { capacity: "2.25 حصان", price: 38670, id: "midea-xtreme-pro-heat-cool-2.25" },
      { capacity: "3 حصان", price: 46350, id: "midea-xtreme-pro-heat-cool-3" }
    ]
  }
];
