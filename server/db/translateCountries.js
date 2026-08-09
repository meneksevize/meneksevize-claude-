// Tek seferlik çeviri yazma script'i (bkz. plan — "Çok Dilli Site" Faz 3).
// 47 ülkenin title/home_description/services_description/intro alanlarını
// İngilizce ve Arapça'ya çevirip _en/_ar kardeş kolonlarına yazar.
//
// 29 Schengen ülkesi TR verisinde birebir aynı şablonu kullanıyor (sadece
// "öne çıkan özellik" cümlesi farklı) — bu yüzden şablonu bir kez EN/AR için
// tanımlayıp sadece o kısa özellik cümlesini ülke başına çeviriyoruz; 18
// Schengen-dışı ülke ise kendine özgü olduğu için ayrı ayrı çevrildi.
import { db } from './connection.js';

const schengenFeatures = {
  almanya: {
    en: "is known for its strong economy, world-renowned universities, and hosting Europe's largest Turkish community",
    ar: 'تشتهر باقتصادها القوي وجامعاتها المرموقة عالميًا واستضافتها لأكبر جالية تركية في أوروبا',
  },
  fransa: {
    en: 'stands out for its world-renowned reputation in art, fashion, and gastronomy',
    ar: 'تتميز بسمعتها العالمية في الفن والأزياء وفنون الطهي',
  },
  italya: {
    en: "is one of Europe's most visited countries, with historic cities such as Rome, Venice, and Florence",
    ar: 'هي واحدة من أكثر الدول زيارة في أوروبا، بمدنها التاريخية مثل روما والبندقية وفلورنسا',
  },
  ispanya: {
    en: "is known for the vibrant city culture of Barcelona and Madrid, its beaches, and its passion for football",
    ar: 'تُعرف بثقافتها الحضرية النابضة بالحياة في برشلونة ومدريد وشواطئها وشغفها بكرة القدم',
  },
  hollanda: {
    en: "is known for its canals, tulip gardens, and being one of Europe's major trade hubs",
    ar: 'تُعرف بقنواتها وحدائق التوليب وكونها أحد مراكز التجارة الرئيسية في أوروبا',
  },
  avusturya: {
    en: 'stands out for its classical music heritage, alpine landscapes, and ski tourism',
    ar: 'تتميز بتراثها في الموسيقى الكلاسيكية ومناظرها الألبية وسياحة التزلج',
  },
  belcika: {
    en: 'is known for being the administrative center of the European Union and its medieval cities',
    ar: 'تُعرف بكونها المركز الإداري للاتحاد الأوروبي ومدنها من العصور الوسطى',
  },
  bulgaristan: {
    en: 'is a popular choice thanks to its Black Sea coastline and proximity to Turkey, offering affordable holiday options',
    ar: 'تُفضَّل بفضل سواحلها على البحر الأسود وقربها من تركيا، مع خيارات عطلات ميسورة التكلفة',
  },
  hirvatistan: {
    en: 'is one of the favorite summer destinations with Dubrovnik on the Adriatic coast and its island tours',
    ar: 'هي واحدة من أفضل وجهات الصيف بمدينة دوبروفنيك على ساحل البحر الأدرياتيكي ورحلات جزرها',
  },
  cekya: {
    en: "is known for Prague's fairy-tale architecture and historic old town",
    ar: 'تُعرف بعمارة براغ الخيالية وبلدتها القديمة التاريخية',
  },
  danimarka: {
    en: 'is known for its high quality of life, design culture, and being the home of Lego',
    ar: 'تُعرف بجودة حياتها العالية وثقافة التصميم وكونها موطن ليجو',
  },
  estonya: {
    en: 'is known for its leadership in digital government services and its medieval old town',
    ar: 'تُعرف بريادتها في الخدمات الحكومية الرقمية وبلدتها القديمة من العصور الوسطى',
  },
  finlandiya: {
    en: 'is known for the northern lights, thousands of lakes, and its world-renowned education system',
    ar: 'تُعرف بالأضواء الشمالية وآلاف البحيرات ونظامها التعليمي المشهور عالميًا',
  },
  yunanistan: {
    en: 'is one of the most preferred Schengen countries thanks to islands like Santorini and Mykonos, its Aegean coastline, and its proximity to Turkey',
    ar: 'هي واحدة من أكثر دول شنغن المفضلة بجزرها مثل سانتوريني وميكونوس وسواحلها على بحر إيجه وقربها من تركيا',
  },
  macaristan: {
    en: 'is known for its Danube River views and thermal spas',
    ar: 'تُعرف بمناظر نهر الدانوب ومنتجعاتها الحرارية',
  },
  izlanda: {
    en: 'is one of the favorite destinations for nature tourism with its geysers, glaciers, and northern lights',
    ar: 'هي واحدة من أفضل وجهات السياحة الطبيعية بينابيعها الحارة وأنهارها الجليدية وأضواءها الشمالية',
  },
  letonya: {
    en: 'is known for its art nouveau architecture and Baltic coastline',
    ar: 'تُعرف بعمارة الآرت نوفو وساحلها على بحر البلطيق',
  },
  lihtenstayn: {
    en: 'is known for being a small but prosperous principality at the foot of the Alps',
    ar: 'تُعرف بكونها إمارة صغيرة ولكن مزدهرة عند سفح جبال الألب',
  },
  litvanya: {
    en: 'is known for its old town, notable for its baroque architecture, and Baltic culture',
    ar: 'تُعرف ببلدتها القديمة المميزة بعمارتها الباروكية وثقافتها البلطيقية',
  },
  luksemburg: {
    en: 'is known for being a strong financial center that hosts European Union institutions',
    ar: 'تُعرف بكونها مركزًا ماليًا قويًا يستضيف مؤسسات الاتحاد الأوروبي',
  },
  malta: {
    en: 'is known for its historic fortresses and diving spots in the middle of the Mediterranean',
    ar: 'تُعرف بقلاعها التاريخية ومواقع الغوص في وسط البحر المتوسط',
  },
  norvec: {
    en: 'is known as the capital of nature tourism with its fjords and northern lights (not an EU member, but part of the Schengen area)',
    ar: 'تُعرف بأنها عاصمة السياحة الطبيعية بمضايقها البحرية وأضواءها الشمالية (ليست عضوًا في الاتحاد الأوروبي لكنها جزء من منطقة شنغن)',
  },
  polonya: {
    en: "is known for Krakow's historic center and its rapidly growing economy",
    ar: 'تُعرف بمركز كراكوف التاريخي واقتصادها سريع النمو',
  },
  portekiz: {
    en: 'is known for its Atlantic coastline, Porto wine, and historic streets',
    ar: 'تُعرف بسواحلها الأطلسية ونبيذ بورتو وشوارعها التاريخية',
  },
  romanya: {
    en: "is known for Transylvania's legendary castles and the Carpathian Mountains",
    ar: 'تُعرف بقلاع ترانسيلفانيا الأسطورية وجبال الكاربات',
  },
  slovakya: {
    en: 'is known for the Tatra Mountains and its historic castle',
    ar: 'تُعرف بجبال تاترا وقلعتها التاريخية',
  },
  slovenya: {
    en: 'is known for Lake Bled and its blend of alpine and Mediterranean nature',
    ar: 'تُعرف ببحيرة بليد وطبيعتها التي تمزج بين الألب والمتوسط',
  },
  isvec: {
    en: 'is known for Scandinavian design, its archipelago, and a high standard of living',
    ar: 'تُعرف بالتصميم الاسكندنافي وأرخبيلها ومستوى معيشتها المرتفع',
  },
  isvicre: {
    en: 'is known for the Alps, watchmaking, and being an international financial center (not an EU member, but part of the Schengen area)',
    ar: 'تُعرف بجبال الألب وصناعة الساعات وكونها مركزًا ماليًا دوليًا (ليست عضوًا في الاتحاد الأوروبي لكنها جزء من منطقة شنغن)',
  },
};

const schengenTitles = {
  almanya: { en: 'Germany', ar: 'ألمانيا' },
  fransa: { en: 'France', ar: 'فرنسا' },
  italya: { en: 'Italy', ar: 'إيطاليا' },
  ispanya: { en: 'Spain', ar: 'إسبانيا' },
  hollanda: { en: 'Netherlands', ar: 'هولندا' },
  avusturya: { en: 'Austria', ar: 'النمسا' },
  belcika: { en: 'Belgium', ar: 'بلجيكا' },
  bulgaristan: { en: 'Bulgaria', ar: 'بلغاريا' },
  hirvatistan: { en: 'Croatia', ar: 'كرواتيا' },
  cekya: { en: 'Czechia', ar: 'التشيك' },
  danimarka: { en: 'Denmark', ar: 'الدنمارك' },
  estonya: { en: 'Estonia', ar: 'إستونيا' },
  finlandiya: { en: 'Finland', ar: 'فنلندا' },
  yunanistan: { en: 'Greece', ar: 'اليونان' },
  macaristan: { en: 'Hungary', ar: 'المجر' },
  izlanda: { en: 'Iceland', ar: 'آيسلندا' },
  letonya: { en: 'Latvia', ar: 'لاتفيا' },
  lihtenstayn: { en: 'Liechtenstein', ar: 'ليختنشتاين' },
  litvanya: { en: 'Lithuania', ar: 'ليتوانيا' },
  luksemburg: { en: 'Luxembourg', ar: 'لوكسمبورغ' },
  malta: { en: 'Malta', ar: 'مالطا' },
  norvec: { en: 'Norway', ar: 'النرويج' },
  polonya: { en: 'Poland', ar: 'بولندا' },
  portekiz: { en: 'Portugal', ar: 'البرتغال' },
  romanya: { en: 'Romania', ar: 'رومانيا' },
  slovakya: { en: 'Slovakia', ar: 'سلوفاكيا' },
  slovenya: { en: 'Slovenia', ar: 'سلوفينيا' },
  isvec: { en: 'Sweden', ar: 'السويد' },
  isvicre: { en: 'Switzerland', ar: 'سويسرا' },
};

function schengenTemplate(lang, title, feature) {
  if (lang === 'en') {
    return {
      home_description: `Schengen tourist, business, and family visit visa for ${title} — ${feature}.`,
      services_description: `${title} is a member of the Schengen area and ${feature}; it can be entered with the same Schengen visa for tourist, business, and family visit purposes.`,
      intro: `${title} ${feature}. It is a member of the Schengen area and can be visited with a single Schengen visa; we manage the process together, from start to finish, for your tourist, business, family visit, and transit applications.`,
    };
  }
  return {
    home_description: `تأشيرة شنغن السياحية والتجارية وزيارة العائلة لـ ${title} — ${feature}.`,
    services_description: `${title} عضو في منطقة شنغن و${feature}؛ يمكن الدخول إليها بتأشيرة شنغن نفسها لأغراض السياحة والتجارة وزيارة العائلة.`,
    intro: `${title} ${feature}. وهي عضو في منطقة شنغن ويمكن زيارتها بتأشيرة شنغن واحدة؛ نُدير العملية معًا من البداية إلى النهاية لطلبات السياحة والتجارة وزيارة العائلة والعبور.`,
  };
}

const nonSchengen = {
  abd: {
    title: { en: 'United States', ar: 'الولايات المتحدة الأمريكية' },
    en: {
      home_description: 'B1/B2 tourist-business, student (F1), and work visa processes.',
      services_description: 'Consultancy for B1/B2 tourist-business visa, F1 student visa, and work visa application processes.',
      intro: "We're with you for your US tourist/business, student, and work visa applications, from the DS-160 form to interview preparation.",
    },
    ar: {
      home_description: 'إجراءات تأشيرة B1/B2 السياحية والتجارية، وتأشيرة الطالب (F1)، وتأشيرة العمل.',
      services_description: 'استشارات لعمليات التقديم على تأشيرة B1/B2 السياحية والتجارية، وتأشيرة الطالب F1، وتأشيرة العمل.',
      intro: 'نحن معك في طلبات تأشيرة الولايات المتحدة السياحية/التجارية والدراسية والعمل، من نموذج DS-160 إلى التحضير للمقابلة.',
    },
  },
  ingiltere: {
    title: { en: 'United Kingdom', ar: 'المملكة المتحدة' },
    en: {
      home_description: 'Standard visitor visa, student, and family reunion applications.',
      services_description: 'End-to-end support for standard visitor visa, student visa, and family reunion applications.',
      intro: "We prepare your standard visitor, student, and family reunion visa applications according to the UK's current requirements.",
    },
    ar: {
      home_description: 'طلبات تأشيرة الزائر القياسية والدراسة وجمع شمل العائلة.',
      services_description: 'دعم شامل لطلبات تأشيرة الزائر القياسية وتأشيرة الطالب وجمع شمل العائلة.',
      intro: 'نُحضّر طلبات تأشيرتك القياسية للزائر والطالب وجمع شمل العائلة وفقًا لمتطلبات المملكة المتحدة الحالية.',
    },
  },
  kanada: {
    title: { en: 'Canada', ar: 'كندا' },
    en: {
      home_description: 'Support for tourist visitor visa, work permit, and birth-tourism visit applications.',
      services_description: 'Document and process support for tourist visitor visa (TRV), work permit, and birth-tourism visit applications.',
      intro: 'We provide support from document preparation to tracking for Canada tourist visitor visa (TRV), work permit, and birth-tourism visit applications.',
    },
    ar: {
      home_description: 'دعم لطلبات تأشيرة الزائر السياحي وإذن العمل والزيارة بغرض الولادة.',
      services_description: 'دعم بالوثائق والإجراءات لطلبات تأشيرة الزائر السياحي (TRV) وإذن العمل والزيارة بغرض الولادة.',
      intro: 'نقدم الدعم من تحضير الوثائق إلى التتبع لطلبات تأشيرة الزائر السياحي الكندية (TRV) وإذن العمل والزيارة بغرض الولادة.',
    },
  },
  dubai: {
    title: { en: 'Dubai / UAE', ar: 'دبي / الإمارات' },
    en: {
      home_description: 'Tourist and business e-visa applications, with fast process tracking.',
      services_description: 'Tourist and business e-visa applications; tracking support for fast-resolving processes.',
      intro: 'We manage your Dubai/UAE tourist and business e-visa applications quickly and with full traceability.',
    },
    ar: {
      home_description: 'طلبات التأشيرة الإلكترونية السياحية والتجارية، مع تتبع سريع للإجراءات.',
      services_description: 'طلبات التأشيرة الإلكترونية السياحية والتجارية؛ دعم التتبع للإجراءات السريعة.',
      intro: 'نُدير طلبات تأشيرتك الإلكترونية السياحية والتجارية لدبي/الإمارات بسرعة وبإمكانية تتبع كاملة.',
    },
  },
  rusya: {
    title: { en: 'Russia', ar: 'روسيا' },
    en: {
      home_description: 'A fast application process for tourist and business travel via the unified e-Visa.',
      services_description: "Fast process support for Turkish citizens applying for tourist and business travel through Russia's unified e-Visa system.",
      intro: "Russia offers Turkish citizens a unified e-Visa that can be applied for entirely online. We're with you in the application process for your tourist and business travel.",
    },
    ar: {
      home_description: 'عملية تقديم سريعة للسفر السياحي والتجاري عبر التأشيرة الإلكترونية الموحدة.',
      services_description: 'دعم إجرائي سريع للمواطنين الترك المتقدمين للسفر السياحي والتجاري عبر نظام التأشيرة الإلكترونية الموحدة لروسيا.',
      intro: 'توفر روسيا للمواطنين الترك تأشيرة إلكترونية موحدة يمكن التقديم لها بالكامل عبر الإنترنت. نحن معك في عملية التقديم لسفرك السياحي والتجاري.',
    },
  },
  avustralya: {
    title: { en: 'Australia', ar: 'أستراليا' },
    en: {
      home_description: 'Support for Visitor Visa (Subclass 600) applications, from the biometric appointment to the result.',
      services_description: 'Since Turkish citizens are not covered by the eTA, we provide end-to-end support for Australia Visitor Visa (Subclass 600) applications.',
      intro: 'Since Australia does not offer Turkish citizens an electronic visa (eTA), applications are evaluated fully under the Visitor Visa (Subclass 600). We manage the process together, from the biometric appointment to the result.',
    },
    ar: {
      home_description: 'دعم لطلبات تأشيرة الزائر (الفئة 600) من موعد البصمة الحيوية إلى النتيجة.',
      services_description: 'بما أن المواطنين الترك غير مشمولين بنظام eTA، نقدم دعمًا شاملاً لطلبات تأشيرة الزائر الأسترالية (الفئة 600).',
      intro: 'بما أن أستراليا لا تقدم للمواطنين الترك تأشيرة إلكترونية (eTA)، تُقيَّم الطلبات بالكامل ضمن تأشيرة الزائر (الفئة 600). نُدير العملية معًا من موعد البصمة الحيوية إلى النتيجة.',
    },
  },
  japonya: {
    title: { en: 'Japan', ar: 'اليابان' },
    en: {
      home_description: 'Support for the consulate process and document preparation for tourist and business visa applications.',
      services_description: 'Detailed travel plan, financial sufficiency, and consulate process tracking for Japan tourist and business visa applications.',
      intro: "We're with you for your Japan tourist and business visa application, from preparing your travel plan to the consulate process.",
    },
    ar: {
      home_description: 'دعم لعملية القنصلية وتحضير الوثائق لطلبات التأشيرة السياحية والتجارية.',
      services_description: 'خطة سفر مفصلة وكفاية مالية وتتبع عملية القنصلية لطلبات التأشيرة السياحية والتجارية لليابان.',
      intro: 'نحن معك في طلب تأشيرتك السياحية والتجارية لليابان، من تحضير خطة سفرك إلى عملية القنصلية.',
    },
  },
  'guney-kore': {
    title: { en: 'South Korea', ar: 'كوريا الجنوبية' },
    en: {
      home_description: 'Consulate process support for tourist and business visa applications.',
      services_description: 'Document preparation and consulate appointment tracking for South Korea tourist and business visa applications.',
      intro: "We provide support from document preparation to the consulate process for your South Korea tourist and business visa application.",
    },
    ar: {
      home_description: 'دعم عملية القنصلية لطلبات التأشيرة السياحية والتجارية.',
      services_description: 'تحضير الوثائق وتتبع موعد القنصلية لطلبات التأشيرة السياحية والتجارية لكوريا الجنوبية.',
      intro: 'نقدم الدعم من تحضير الوثائق إلى عملية القنصلية لطلب تأشيرتك السياحية والتجارية لكوريا الجنوبية.',
    },
  },
  cin: {
    title: { en: 'China', ar: 'الصين' },
    en: {
      home_description: 'Document and process support for tourist and business (trade fair/sourcing) visa applications.',
      services_description: 'Invitation letter, travel plan, and consulate process support for China tourist and business visa applications.',
      intro: 'We move forward together on your China tourist and business visa application, from the invitation letter to the consulate process.',
    },
    ar: {
      home_description: 'دعم بالوثائق والإجراءات لطلبات التأشيرة السياحية والتجارية (المعارض/التوريد).',
      services_description: 'دعم بخطاب الدعوة وخطة السفر وعملية القنصلية لطلبات التأشيرة السياحية والتجارية للصين.',
      intro: 'نتقدم معًا في طلب تأشيرتك السياحية والتجارية للصين، من خطاب الدعوة إلى عملية القنصلية.',
    },
  },
  hindistan: {
    title: { en: 'India', ar: 'الهند' },
    en: {
      home_description: 'A fast online application process for tourist and business travel via e-Visa.',
      services_description: "Fast process support for tourist and business travel applications through India's e-Visa system.",
      intro: 'India offers Turkish citizens an e-Visa that can be applied for online; we manage the process together for your tourist and business travel.',
    },
    ar: {
      home_description: 'عملية تقديم سريعة عبر الإنترنت للسفر السياحي والتجاري عبر التأشيرة الإلكترونية.',
      services_description: 'دعم إجرائي سريع لطلبات السفر السياحي والتجاري عبر نظام التأشيرة الإلكترونية للهند.',
      intro: 'تقدم الهند للمواطنين الترك تأشيرة إلكترونية يمكن التقديم لها عبر الإنترنت؛ نُدير العملية معًا لسفرك السياحي والتجاري.',
    },
  },
  meksika: {
    title: { en: 'Mexico', ar: 'المكسيك' },
    en: {
      home_description: 'Assessment of visa exemption conditions and, if needed, standard tourist visa application support.',
      services_description: 'Exemption assessment based on a valid US/Canada/UK/Schengen visa for travel to Mexico, or standard visa application support.',
      intro: 'We assess together whether you can benefit from a visa exemption for your trip to Mexico, and prepare your standard visa application if needed.',
    },
    ar: {
      home_description: 'تقييم شروط الإعفاء من التأشيرة، ودعم طلب التأشيرة السياحية القياسية عند الحاجة.',
      services_description: 'تقييم الإعفاء بناءً على تأشيرة أمريكية/كندية/بريطانية/شنغن سارية للسفر إلى المكسيك، أو دعم طلب التأشيرة القياسية.',
      intro: 'نُقيّم معًا إمكانية استفادتك من الإعفاء من التأشيرة لرحلتك إلى المكسيك، ونُحضّر طلب تأشيرتك القياسية إذا لزم الأمر.',
    },
  },
  'yeni-zelanda': {
    title: { en: 'New Zealand', ar: 'نيوزيلندا' },
    en: {
      home_description: 'Online process and document support for visitor visa applications.',
      services_description: 'Online form and document preparation support for New Zealand visitor visa applications.',
      intro: 'We manage the process together for your New Zealand visitor visa application, from filling out the online form to the result.',
    },
    ar: {
      home_description: 'دعم إجرائي عبر الإنترنت ودعم بالوثائق لطلبات تأشيرة الزائر.',
      services_description: 'دعم بتعبئة النموذج عبر الإنترنت وتحضير الوثائق لطلبات تأشيرة الزائر لنيوزيلندا.',
      intro: 'نُدير العملية معًا لطلب تأشيرة الزائر لنيوزيلندا، من تعبئة النموذج عبر الإنترنت إلى النتيجة.',
    },
  },
  singapur: {
    title: { en: 'Singapore', ar: 'سنغافورة' },
    en: {
      home_description: 'Tourist and business visa application support through authorized visa agencies.',
      services_description: 'Authorized agency process and document preparation support for Singapore tourist and business visa applications.',
      intro: 'We provide support for your Singapore tourist and business visa application, including the authorized agency process, from document preparation to the result.',
    },
    ar: {
      home_description: 'دعم لطلبات التأشيرة السياحية والتجارية عبر وكالات التأشيرات المعتمدة.',
      services_description: 'دعم بعملية الوكالة المعتمدة وتحضير الوثائق لطلبات التأشيرة السياحية والتجارية لسنغافورة.',
      intro: 'نقدم الدعم لطلب تأشيرتك السياحية والتجارية لسنغافورة، بما في ذلك عملية الوكالة المعتمدة، من تحضير الوثائق إلى النتيجة.',
    },
  },
  misir: {
    title: { en: 'Egypt', ar: 'مصر' },
    en: {
      home_description: 'A fast online application process for tourist travel via e-Visa.',
      services_description: "Fast process support for tourist travel applications through Egypt's e-Visa system.",
      intro: "Egypt offers Turkish citizens an e-Visa that can be applied for online; we're with you in the application process for your tourist travel.",
    },
    ar: {
      home_description: 'عملية تقديم سريعة عبر الإنترنت للسفر السياحي عبر التأشيرة الإلكترونية.',
      services_description: 'دعم إجرائي سريع لطلبات السفر السياحي عبر نظام التأشيرة الإلكترونية لمصر.',
      intro: 'تقدم مصر للمواطنين الترك تأشيرة إلكترونية يمكن التقديم لها عبر الإنترنت؛ نحن معك في عملية التقديم لسفرك السياحي.',
    },
  },
  'guney-afrika': {
    title: { en: 'South Africa', ar: 'جنوب أفريقيا' },
    en: {
      home_description: 'Consulate process support for tourist and business visa applications.',
      services_description: 'Document preparation and consulate process tracking for South Africa tourist and business visa applications.',
      intro: "We provide support from document preparation to the consulate process for your South Africa tourist and business visa application.",
    },
    ar: {
      home_description: 'دعم عملية القنصلية لطلبات التأشيرة السياحية والتجارية.',
      services_description: 'تحضير الوثائق وتتبع عملية القنصلية لطلبات التأشيرة السياحية والتجارية لجنوب أفريقيا.',
      intro: 'نقدم الدعم من تحضير الوثائق إلى عملية القنصلية لطلب تأشيرتك السياحية والتجارية لجنوب أفريقيا.',
    },
  },
  tayland: {
    title: { en: 'Thailand', ar: 'تايلاند' },
    en: {
      home_description: 'An online application process for tourist travel via e-Visa.',
      services_description: "Process support for tourist travel applications through Thailand's e-Visa system.",
      intro: "Thailand offers Turkish citizens an e-Visa that can be applied for online; we're with you in the application process for your tourist travel.",
    },
    ar: {
      home_description: 'عملية تقديم عبر الإنترنت للسفر السياحي عبر التأشيرة الإلكترونية.',
      services_description: 'دعم إجرائي لطلبات السفر السياحي عبر نظام التأشيرة الإلكترونية لتايلاند.',
      intro: 'تقدم تايلاند للمواطنين الترك تأشيرة إلكترونية يمكن التقديم لها عبر الإنترنت؛ نحن معك في عملية التقديم لسفرك السياحي.',
    },
  },
  vietnam: {
    title: { en: 'Vietnam', ar: 'فيتنام' },
    en: {
      home_description: 'A fast online application process for tourist travel via e-Visa.',
      services_description: "Fast process support for tourist travel applications through Vietnam's e-Visa system.",
      intro: "Vietnam offers Turkish citizens an e-Visa that can be applied for online; we're with you in the application process for your tourist travel.",
    },
    ar: {
      home_description: 'عملية تقديم سريعة عبر الإنترنت للسفر السياحي عبر التأشيرة الإلكترونية.',
      services_description: 'دعم إجرائي سريع لطلبات السفر السياحي عبر نظام التأشيرة الإلكترونية لفيتنام.',
      intro: 'تقدم فيتنام للمواطنين الترك تأشيرة إلكترونية يمكن التقديم لها عبر الإنترنت؛ نحن معك في عملية التقديم لسفرك السياحي.',
    },
  },
  'sri-lanka': {
    title: { en: 'Sri Lanka', ar: 'سريلانكا' },
    en: {
      home_description: 'A fast online application process for tourist travel via the Electronic Travel Authorization (ETA).',
      services_description: 'Fast process support for Sri Lanka Electronic Travel Authorization (ETA) applications.',
      intro: "Sri Lanka offers Turkish citizens an Electronic Travel Authorization (ETA) that can be applied for online; we're with you in the application process for your tourist travel.",
    },
    ar: {
      home_description: 'عملية تقديم سريعة عبر الإنترنت للسفر السياحي عبر إذن السفر الإلكتروني (ETA).',
      services_description: 'دعم إجرائي سريع لطلبات إذن السفر الإلكتروني (ETA) لسريلانكا.',
      intro: 'تقدم سريلانكا للمواطنين الترك إذن سفر إلكتروني (ETA) يمكن التقديم له عبر الإنترنت؛ نحن معك في عملية التقديم لسفرك السياحي.',
    },
  },
};

const update = db.prepare(`
  UPDATE countries SET
    title_en = @title_en, title_ar = @title_ar,
    home_description_en = @home_description_en, home_description_ar = @home_description_ar,
    services_description_en = @services_description_en, services_description_ar = @services_description_ar,
    intro_en = @intro_en, intro_ar = @intro_ar
  WHERE id = @id
`);

let count = 0;
const rows = db.prepare('SELECT id, title FROM countries').all();
rows.forEach((row) => {
  const { id, title } = row;
  let payload;
  if (schengenFeatures[id]) {
    const en = schengenTemplate('en', schengenTitles[id].en, schengenFeatures[id].en);
    const ar = schengenTemplate('ar', schengenTitles[id].ar, schengenFeatures[id].ar);
    payload = {
      title_en: schengenTitles[id].en, title_ar: schengenTitles[id].ar,
      home_description_en: en.home_description, home_description_ar: ar.home_description,
      services_description_en: en.services_description, services_description_ar: ar.services_description,
      intro_en: en.intro, intro_ar: ar.intro,
    };
  } else if (nonSchengen[id]) {
    const entry = nonSchengen[id];
    payload = {
      title_en: entry.title.en, title_ar: entry.title.ar,
      home_description_en: entry.en.home_description, home_description_ar: entry.ar.home_description,
      services_description_en: entry.en.services_description, services_description_ar: entry.ar.services_description,
      intro_en: entry.en.intro, intro_ar: entry.ar.intro,
    };
  } else {
    console.warn(`Çeviri bulunamadı: ${id} (${title})`);
    return;
  }
  update.run({ id, ...payload });
  count += 1;
});

console.log(`${count} ülke çevirisi yazıldı.`);
