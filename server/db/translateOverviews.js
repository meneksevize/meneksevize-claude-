// Ülke sayfalarındaki "Genel Bakış" (overview) metinlerinin ve hızlı bilgi
// kutucuklarının (quick_facts) EN/AR çevirisi — çok dilli geçişte bilinçli
// olarak ertelenen son içerik parçası (bkz. plan, Faz 3 kapsam notu).
// 47 overview özgün metindir (şablon yok); quick_facts ise 8 etiket + 131
// farklı değere indirgenir, bu yüzden değerler tek tek sözlükten çevrilip her
// ülkenin JSON dizisi yeniden inşa edilir (translateDocuments.js deseni).
import { db } from './connection.js';

const overviews = {
  almanya: {
    en: "Germany is one of the Schengen countries in highest demand among applications from Turkey, both for business connections and family visits; cities like Berlin, Munich, and Frankfurt are also hubs for business trips thanks to automotive, engineering, and technology trade fairs. Due to the large Turkish diaspora living in Germany, family reunion and wedding/holiday visits make up a significant share of applications. We pay particular attention to the consistency of the invitation letter, accommodation, and travel insurance documents in your application, because German consulates scrutinize document consistency meticulously.",
    ar: "ألمانيا من دول شنغن الأكثر طلبًا بين الطلبات القادمة من تركيا، سواء من حيث علاقات عالم الأعمال أو الزيارات العائلية؛ ومدن مثل برلين وميونيخ وفرانكفورت هي أيضًا مراكز للزيارات التجارية بفضل معارض السيارات والهندسة والتكنولوجيا. ونظرًا للجالية التركية الكبيرة المقيمة في ألمانيا، تُشكِّل زيارات جمع شمل الأسرة وزيارات الأعراس/الأعياد جزءًا مهمًا من الطلبات. نولي عناية خاصة لاتساق خطاب الدعوة ووثائق الإقامة والتأمين الصحي للسفر في طلبك، لأن القنصليات الألمانية تدقق في اتساق الوثائق بدقة شديدة.",
  },
  fransa: {
    en: "The vast majority of applications to France target tourist routes such as the Louvre, the Eiffel Tower, and the French Riviera, with Paris at the forefront; alongside these, trade fairs in the fashion, retail, and gastronomy sectors make up a significant portion of business visits. Since consular appointment demand rises noticeably in the summer months and school holidays, we recommend starting the application process as soon as your travel date is clear. Having your accommodation reservations and travel plan match the dates on your application form exactly is an important detail that speeds up the evaluation process.",
    ar: "الغالبية العظمى من الطلبات المقدمة إلى فرنسا تستهدف المسارات السياحية مثل متحف اللوفر وبرج إيفل والريفييرا الفرنسية، وفي مقدمتها باريس؛ إلى جانب ذلك، تُشكِّل معارض قطاعات الموضة والتجزئة وفنون الطهي جزءًا مهمًا من الزيارات التجارية. وبما أن الطلب على مواعيد القنصلية يرتفع بشكل ملحوظ في أشهر الصيف والعطلات المدرسية، نوصي ببدء عملية التقديم فور وضوح تاريخ سفرك. تطابق حجوزات الإقامة وخطة السفر تمامًا مع التواريخ في نموذج طلبك تفصيل مهم يُسرِّع عملية التقييم.",
  },
  italya: {
    en: "Italy is a Schengen country that stands out for its business connections in the fashion and design sector as much as for its historical and artistic heritage; fashion weeks and trade fairs in Milan make up a significant share of business applications. Routes such as Rome, Venice, Florence, and the Amalfi Coast are the most preferred itineraries in tourist applications. Having your accommodation plan follow a clear city-to-city route and your reservations align with your application dates provides significant ease in the Italian consulate's evaluation.",
    ar: "إيطاليا دولة شنغن تتميز بعلاقات الأعمال في قطاع الموضة والتصميم بقدر ما تتميز بتراثها التاريخي والفني؛ وتُشكِّل أسابيع الموضة والمعارض في ميلانو جزءًا مهمًا من الطلبات التجارية. أما مسارات مثل روما والبندقية وفلورنسا وساحل أمالفي فهي الأكثر تفضيلًا في الطلبات السياحية. اتباع خطة إقامتك مسارًا واضحًا من مدينة إلى أخرى وتوافق حجوزاتك مع تواريخ طلبك يوفران سهولة كبيرة في تقييم القنصلية الإيطالية.",
  },
  ispanya: {
    en: "Spain is one of the most popular Schengen destinations among Turkish travelers, thanks to both its beach tourism and the cultural/entertainment life of cities like Barcelona and Madrid. In business applications, trade fairs in the technology, tourism, and food sectors usually stand out. Having your bank statement clearly show regular activity over the last three months provides significant ease in the financial sufficiency evaluation.",
    ar: "إسبانيا من أكثر وجهات شنغن شعبيةً بين المسافرين الأتراك، بفضل سياحة الشواطئ والحياة الثقافية/الترفيهية في مدن مثل برشلونة ومدريد على حد سواء. في الطلبات التجارية، تبرز عادةً معارض قطاعات التكنولوجيا والسياحة والأغذية. إظهار كشف حسابك المصرفي حركة منتظمة بوضوح خلال الأشهر الثلاثة الأخيرة يوفر سهولة كبيرة في تقييم الكفاية المالية.",
  },
  hollanda: {
    en: "The Netherlands is a Schengen country with heavy business traffic thanks to the Port of Rotterdam and the Amsterdam-centered logistics/trade sector; it is also a popular tourist choice with its canals, museums, and tulip gardens. For business applications, having the company activity certificate and invitation letter carry recent dates speeds up the evaluation process. April-May is the busiest period for tourist applications due to tulip season.",
    ar: "هولندا دولة شنغن تشهد حركة تجارية كثيفة بفضل ميناء روتردام وقطاع الخدمات اللوجستية/التجارة المتمركز في أمستردام؛ وهي أيضًا خيار سياحي مفضل بقنواتها المائية ومتاحفها وحدائق التوليب. في الطلبات التجارية، يُسرِّع حمل شهادة نشاط الشركة وخطاب الدعوة تواريخ حديثة عملية التقييم. تُعد الفترة من أبريل إلى مايو الأكثر ازدحامًا للطلبات السياحية بسبب موسم التوليب.",
  },
  avusturya: {
    en: "Austria appeals to different travel purposes year-round, with Vienna hosting city tourism through its classical music and palace architecture, and the Tyrol and Salzburg regions hosting winter sports. In the winter months, accommodation prices and occupancy rates change significantly due to ski tourism, so early booking is important. In business visits, engineering and tourism sector trade fairs stand out in particular.",
    ar: "تلبي النمسا أغراض سفر مختلفة على مدار العام، حيث تستضيف فيينا السياحة الحضرية بموسيقاها الكلاسيكية وعمارة قصورها، بينما تستضيف مناطق تيرول وسالزبورغ الرياضات الشتوية. في أشهر الشتاء، تتغير أسعار الإقامة ونسب الإشغال بشكل ملحوظ بسبب سياحة التزلج، لذا يُعد الحجز المبكر مهمًا. في الزيارات التجارية، تبرز بشكل خاص معارض قطاعي الهندسة والسياحة.",
  },
  belcika: {
    en: "Belgium is a country with heavy business and official visits due to the EU institutions located in Brussels; medieval cities like Bruges and Ghent stand out in tourist visits. For business invitations related to EU institutions, attaching the meeting program and invitation letter to the application speeds up the process. Chocolate and beer culture is another frequently preferred reason for short city breaks.",
    ar: "بلجيكا دولة تشهد زيارات تجارية ورسمية كثيفة بسبب مؤسسات الاتحاد الأوروبي الموجودة في بروكسل؛ وتبرز المدن القروسطية مثل بروج وغنت في الزيارات السياحية. في الدعوات التجارية المتعلقة بمؤسسات الاتحاد الأوروبي، يُسرِّع إرفاق برنامج الاجتماع وخطاب الدعوة بالطلب العملية. وتُعد ثقافة الشوكولاتة والبيرة سببًا آخر يُفضَّل كثيرًا للجولات القصيرة في المدن.",
  },
  bulgaristan: {
    en: "Bulgaria is a Schengen country frequently preferred for both short holidays and family visits, thanks to its land border with Turkey and the holiday resorts on its Black Sea coast (such as Sunny Beach and Nessebar). Centers like Bansko attract intense interest in the winter months for ski tourism. The same Schengen document set applies to land border crossings as well; that's why it's important to clarify the route in your travel plan.",
    ar: "بلغاريا دولة شنغن تُفضَّل كثيرًا للعطلات القصيرة والزيارات العائلية على حد سواء، بفضل حدودها البرية مع تركيا ومنتجعات العطلات على ساحل البحر الأسود (مثل صني بيتش ونيسيبار). وتجذب مراكز مثل بانسكو اهتمامًا كبيرًا في أشهر الشتاء لسياحة التزلج. تنطبق نفس مجموعة وثائق شنغن على العبور من الحدود البرية أيضًا؛ لذلك من المهم توضيح المسار في خطة سفرك.",
  },
  hirvatistan: {
    en: "Croatia, which joined the Eurozone and the Schengen area in 2023, is a destination in high demand especially in the summer months with Dubrovnik, Split, and island tours along the Adriatic coast. Due to boat tours and coastline routes, having a clear accommodation and transportation plan is important in the application evaluation. Since occupancy rates are high in the summer season, we recommend early booking and early application.",
    ar: "كرواتيا، التي انضمت إلى منطقة اليورو ومنطقة شنغن في عام 2023، وجهة تشهد طلبًا كثيفًا خاصة في أشهر الصيف مع دوبروفنيك وسبليت وجولات الجزر على طول الساحل الأدرياتيكي. ونظرًا لجولات القوارب ومسارات الشريط الساحلي، فإن وضوح خطة الإقامة والمواصلات مهم في تقييم الطلب. وبما أن نسب الإشغال مرتفعة في موسم الصيف، نوصي بالحجز المبكر والتقديم المبكر.",
  },
  cekya: {
    en: "Czechia is one of the most preferred Schengen countries for short city breaks, with the historic fabric of its capital Prague, including Charles Bridge and Prague Castle. Since it is not in the Eurozone, calculating the exchange rate correctly in your financial sufficiency documents is important; we clarify this calculation together in the initial consultation. In business visits, automotive and manufacturing sector trade fairs stand out.",
    ar: "تشيكيا من أكثر دول شنغن تفضيلًا للجولات القصيرة في المدن، بنسيجها التاريخي في العاصمة براغ، بما في ذلك جسر تشارلز وقلعة براغ. وبما أنها ليست في منطقة اليورو، فإن حساب سعر الصرف بشكل صحيح في وثائق كفايتك المالية مهم؛ ونوضح هذا الحساب معًا في الاستشارة الأولية. في الزيارات التجارية، تبرز معارض قطاعي السيارات والتصنيع.",
  },
  danimarka: {
    en: "Denmark is preferred by travelers who want to see Copenhagen's design and architecture culture and the Scandinavian lifestyle up close; family reunion applications also form an important category. Although not in the Eurozone, its own currency is pegged to the Euro at a fixed rate, which makes budget planning easier. In business visits, sustainability and design sector trade fairs stand out.",
    ar: "الدنمارك يفضلها المسافرون الراغبون في رؤية ثقافة التصميم والعمارة في كوبنهاغن ونمط الحياة الإسكندنافي عن قرب؛ كما تُشكِّل طلبات جمع شمل الأسرة فئة مهمة أيضًا. ورغم أنها ليست في منطقة اليورو، فإن عملتها الخاصة مرتبطة باليورو بسعر صرف ثابت، مما يُسهِّل التخطيط للميزانية. في الزيارات التجارية، تبرز معارض قطاعي الاستدامة والتصميم.",
  },
  estonya: {
    en: "Estonia is preferred for short city breaks with Tallinn's UNESCO-listed medieval old town, while business visits from the technology sector are also seen since it is one of the countries with the most digitalized public services in the world. It is usually visited together with Latvia and Lithuania as part of Baltic region tours. If you're planning a regional trip, it's important to clarify your route in the application.",
    ar: "إستونيا تُفضَّل للجولات القصيرة في المدن بمدينتها القديمة القروسطية في تالين المدرجة في قائمة اليونسكو، كما تشهد زيارات تجارية من قطاع التكنولوجيا لكونها من الدول ذات الخدمات الحكومية الأكثر رقمنة في العالم. وتُزار عادةً مع لاتفيا وليتوانيا ضمن جولات منطقة البلطيق. إذا كنت تخطط لرحلة إقليمية، من المهم توضيح مسارك في الطلب.",
  },
  finlandiya: {
    en: "Finland is the favorite route of travelers who want to see the northern lights in the Lapland region in the winter months, and of nature and lake tours in the summer months. Academic exchanges and business visits are also seen due to its renowned education system. Planning accommodation early for northern lights tours is important because occupancy rates are high in the winter season.",
    ar: "فنلندا هي الوجهة المفضلة للمسافرين الراغبين في رؤية الشفق القطبي في منطقة لابلاند في أشهر الشتاء، ولجولات الطبيعة والبحيرات في أشهر الصيف. كما تشهد زيارات التبادل الأكاديمي وزيارات العمل بفضل نظامها التعليمي الشهير. التخطيط المبكر للإقامة في جولات الشفق القطبي مهم لأن نسب الإشغال مرتفعة في موسم الشتاء.",
  },
  yunanistan: {
    en: "Greece leads the Schengen countries receiving the highest volume of applications every year, thanks to its Aegean islands and the short ferry/flight distance from Turkey. Summer tours to islands like Santorini, Mykonos, and Crete make up the vast majority of applications. Since consular appointment demand rises noticeably in the summer months compared to other months, we strongly advise starting the application process as soon as your travel date becomes clear.",
    ar: "تتصدر اليونان دول شنغن التي تستقبل أكبر حجم من الطلبات كل عام، بفضل جزرها في بحر إيجه وقصر مسافة العبّارة/الطيران من تركيا. وتُشكِّل الجولات الصيفية إلى جزر مثل سانتوريني وميكونوس وكريت الغالبية العظمى من الطلبات. وبما أن الطلب على مواعيد القنصلية يرتفع بشكل ملحوظ في أشهر الصيف مقارنة بالأشهر الأخرى، ننصح بشدة ببدء عملية التقديم فور وضوح تاريخ سفرك.",
  },
  macaristan: {
    en: "Hungary is frequently preferred for short city breaks with Budapest's night views along the Danube and its historic thermal baths. Since it is not in the Eurozone, we evaluate the current exchange rate together in the initial consultation for budget planning. In business visits, automotive supply industry and logistics sector trade fairs stand out.",
    ar: "المجر تُفضَّل كثيرًا للجولات القصيرة في المدن بمناظر بودابست الليلية على ضفاف نهر الدانوب وحماماتها الحرارية التاريخية. وبما أنها ليست في منطقة اليورو، نُقيِّم سعر الصرف الحالي معًا في الاستشارة الأولية للتخطيط للميزانية. في الزيارات التجارية، تبرز معارض قطاع الصناعات المغذية للسيارات والخدمات اللوجستية.",
  },
  izlanda: {
    en: "Iceland is one of the most preferred Schengen countries among nature photography and adventure tourism enthusiasts, with its geysers, glaciers, waterfalls, and northern lights. Since it is an island country and usually visited on its own, having a clear travel plan and accommodation reservations is important. Because weather conditions in the winter months can directly affect travel planning, a flexible program is recommended.",
    ar: "آيسلندا من أكثر دول شنغن تفضيلًا لدى هواة تصوير الطبيعة وسياحة المغامرات، بينابيعها الحارة وأنهارها الجليدية وشلالاتها وشفقها القطبي. وبما أنها دولة جزيرة وتُزار عادةً بمفردها، فإن وضوح خطة السفر وحجوزات الإقامة مهم. ولأن الأحوال الجوية في أشهر الشتاء قد تؤثر مباشرة على التخطيط للسفر، يُنصح ببرنامج مرن.",
  },
  letonya: {
    en: "Latvia is preferred in architecture and culture tours because its capital Riga has one of the richest art nouveau architectural fabrics in Europe. It is usually visited together with Estonia and Lithuania as part of Baltic region tours. If you're planning a regional itinerary, we recommend clarifying it in your application.",
    ar: "لاتفيا تُفضَّل في جولات العمارة والثقافة لأن عاصمتها ريغا تمتلك واحدًا من أغنى الأنسجة المعمارية بطراز الآرت نوفو في أوروبا. وتُزار عادةً مع إستونيا وليتوانيا ضمن جولات منطقة البلطيق. إذا كنت تخطط لمسار إقليمي، نوصي بتوضيحه في طلبك.",
  },
  lihtenstayn: {
    en: "Liechtenstein is a principality located at the foot of the Alps, one of the smallest countries in the world, and is usually visited briefly as part of a Switzerland or Austria trip. Due to its strong position in the finance sector, it is also occasionally the subject of business visits. It is commonly planned not on its own but as part of a regional trip.",
    ar: "ليختنشتاين إمارة تقع عند سفح جبال الألب، وهي من أصغر دول العالم، وتُزار عادةً لفترة قصيرة ضمن رحلة إلى سويسرا أو النمسا. ونظرًا لمكانتها القوية في القطاع المالي، تكون أحيانًا وجهة للزيارات التجارية أيضًا. من الشائع التخطيط لزيارتها كجزء من رحلة إقليمية لا بمفردها.",
  },
  litvanya: {
    en: "Lithuania is preferred in culture tours because its capital Vilnius has one of the largest baroque old towns in Europe. It is commonly visited together with Latvia and Estonia as part of Baltic region tours. In business visits, logistics and technology sector trade fairs stand out in particular.",
    ar: "ليتوانيا تُفضَّل في الجولات الثقافية لأن عاصمتها فيلنيوس تمتلك واحدة من أكبر المدن القديمة ذات الطراز الباروكي في أوروبا. ومن الشائع زيارتها مع لاتفيا وإستونيا ضمن جولات منطقة البلطيق. في الزيارات التجارية، تبرز بشكل خاص معارض قطاعي الخدمات اللوجستية والتكنولوجيا.",
  },
  luksemburg: {
    en: "Luxembourg, despite its small size, is a country with heavy business traffic thanks to EU institutions and the international banking sector. Its medieval castle and city center also allow for short tourist visits. It is usually planned as a short stop combined with a Belgium or Germany trip.",
    ar: "لوكسمبورغ، رغم مساحتها الصغيرة، دولة تشهد حركة تجارية كثيفة بفضل مؤسسات الاتحاد الأوروبي وقطاع الخدمات المصرفية الدولية. كما تتيح قلعتها القروسطية ومركز مدينتها زيارات سياحية قصيرة أيضًا. وعادةً ما يُخطط لزيارتها كمحطة قصيرة مدمجة مع رحلة إلى بلجيكا أو ألمانيا.",
  },
  malta: {
    en: "Malta is an island country located in the middle of the Mediterranean, preferred for its historic fortresses, diving tourism in its crystal-clear waters, and its English language education programs. Despite its small size, it can be visited in every season thanks to its mild year-round climate. For long-term visits for language education, attaching accommodation and school enrollment documents to the application is important.",
    ar: "مالطا دولة جزيرة تقع في وسط البحر المتوسط، تُفضَّل بقلاعها التاريخية وسياحة الغوص في مياهها الصافية وبرامجها لتعليم اللغة الإنجليزية. ورغم مساحتها الصغيرة، يمكن زيارتها في كل الفصول بفضل مناخها المعتدل على مدار العام. في الزيارات طويلة المدى بغرض تعليم اللغة، من المهم إرفاق وثائق الإقامة والتسجيل في المدرسة بالطلب.",
  },
  norvec: {
    en: "Norway, although not a member of the European Union, is part of the Schengen area and can be visited with the same Schengen visa. With its fjords, northern lights, and cruise tours, it is one of the most popular routes of nature tourism. Due to the high cost of living, it's important that your financial sufficiency documents are proportionate to the duration of your trip.",
    ar: "النرويج، رغم أنها ليست عضوًا في الاتحاد الأوروبي، جزء من منطقة شنغن ويمكن زيارتها بنفس تأشيرة شنغن. وبمضايقها البحرية وشفقها القطبي وجولاتها البحرية، تُعد من أشهر وجهات السياحة الطبيعية. ونظرًا لارتفاع تكلفة المعيشة، من المهم أن تكون وثائق كفايتك المالية متناسبة مع مدة رحلتك.",
  },
  polonya: {
    en: "Poland hosts both cultural tourism and business visits, with Krakow's UNESCO-listed historic center and Warsaw's modern business world. Thanks to its strongly growing economy, business visits are frequent especially from the manufacturing and logistics sectors. Since it is not in the Eurozone, we clarify the financial sufficiency calculation together in the initial consultation.",
    ar: "بولندا تستضيف السياحة الثقافية والزيارات التجارية على حد سواء، بمركز كراكوف التاريخي المدرج في قائمة اليونسكو وعالم الأعمال الحديث في وارسو. وبفضل اقتصادها المتنامي بقوة، تتكرر زيارات العمل خاصة من قطاعي التصنيع والخدمات اللوجستية. وبما أنها ليست في منطقة اليورو، نوضح حساب الكفاية المالية معًا في الاستشارة الأولية.",
  },
  portekiz: {
    en: "Portugal is a Schengen country preferred in both culture and holiday tourism, with Lisbon's colorful streets, Porto's vineyards, and the beaches of the Algarve coast. Being on the Atlantic coast, its climate is milder than other Schengen countries and suitable for visits year-round. Having your accommodation reservations consistent with your travel itinerary makes the application evaluation easier.",
    ar: "البرتغال دولة شنغن تُفضَّل في السياحة الثقافية وسياحة العطلات على حد سواء، بشوارع لشبونة الملونة وكروم بورتو وشواطئ ساحل الغارف. ولوقوعها على ساحل الأطلسي، فإن مناخها أكثر اعتدالًا من دول شنغن الأخرى ومناسب للزيارة على مدار العام. اتساق حجوزات إقامتك مع مسار سفرك يُسهِّل تقييم الطلب.",
  },
  romanya: {
    en: "Romania appeals to both culture and nature tourism, with the historic castles of the Transylvania region and the natural beauty of the Carpathian Mountains. Due to its geographic proximity to Turkey, it is also frequently preferred for short family visits. Since it is not in the Eurozone, we evaluate the current exchange rate information in the financial sufficiency documents together.",
    ar: "رومانيا تلبي السياحة الثقافية والطبيعية على حد سواء، بقلاع منطقة ترانسيلفانيا التاريخية وجمال جبال الكاربات الطبيعي. ونظرًا لقربها الجغرافي من تركيا، تُفضَّل كثيرًا للزيارات العائلية القصيرة أيضًا. وبما أنها ليست في منطقة اليورو، نُقيِّم معلومات سعر الصرف الحالي في وثائق الكفاية المالية معًا.",
  },
  slovakya: {
    en: "Slovakia is a Schengen country suitable for both short city breaks and winter sports, with the riverside castle of its capital Bratislava and the ski/nature tourism of the Tatra Mountains. It is usually visited as part of an Austria or Czechia trip. If you're planning a regional itinerary, we recommend clarifying it in the application.",
    ar: "سلوفاكيا دولة شنغن مناسبة للجولات القصيرة في المدن والرياضات الشتوية على حد سواء، بقلعة عاصمتها براتيسلافا على ضفة النهر وسياحة التزلج/الطبيعة في جبال تاترا. وتُزار عادةً ضمن رحلة إلى النمسا أو تشيكيا. إذا كنت تخطط لمسار إقليمي، نوصي بتوضيحه في الطلب.",
  },
  slovenya: {
    en: "Slovenia is a small but impressive Schengen country that stands out in nature tourism, with the islet of Lake Bled and its caves, and a geography that combines Alpine and Mediterranean climates at once. Ljubljana's compact old town is also suitable for short city breaks. It is usually planned in combination with an Italy, Austria, or Croatia trip.",
    ar: "سلوفينيا دولة شنغن صغيرة لكنها مبهرة، تبرز في السياحة الطبيعية بجزيرة بحيرة بليد الصغيرة وكهوفها وجغرافيا تجمع بين مناخي جبال الألب والبحر المتوسط في آن واحد. كما أن مدينة ليوبليانا القديمة المدمجة مناسبة للجولات القصيرة في المدن. وعادةً ما يُخطط لزيارتها مدمجة مع رحلة إلى إيطاليا أو النمسا أو كرواتيا.",
  },
  isvec: {
    en: "Sweden hosts both city tourism and nature trips, with Stockholm's archipelago structure spread across 14 islands and its Scandinavian design culture. Business visits are also frequent due to its strong technology and design sector. Since it is not in the Eurozone, we clarify the current exchange rate information together in the initial consultation for budget planning.",
    ar: "السويد تستضيف السياحة الحضرية والرحلات الطبيعية على حد سواء، ببنية ستوكهولم الأرخبيلية الممتدة على 14 جزيرة وثقافة التصميم الإسكندنافية. كما تتكرر الزيارات التجارية بفضل قطاعها القوي في التكنولوجيا والتصميم. وبما أنها ليست في منطقة اليورو، نوضح معلومات سعر الصرف الحالي معًا في الاستشارة الأولية للتخطيط للميزانية.",
  },
  isvicre: {
    en: "Switzerland, although not a member of the European Union, is part of the Schengen area and can be visited with the same Schengen visa. Thanks to its Alpine scenery, ski resorts, and the Geneva-based international organizations, it sees high demand in both tourist and business visits. Because living and accommodation costs are high, it is especially important that your financial sufficiency documents are proportionate to the duration of your trip.",
    ar: "سويسرا، رغم أنها ليست عضوًا في الاتحاد الأوروبي، جزء من منطقة شنغن ويمكن زيارتها بنفس تأشيرة شنغن. وبفضل مناظرها الألبية ومنتجعات التزلج والمنظمات الدولية المتمركزة في جنيف، تشهد طلبًا كبيرًا في الزيارات السياحية والتجارية على حد سواء. ولأن تكاليف المعيشة والإقامة مرتفعة، من المهم بشكل خاص أن تكون وثائق كفايتك المالية متناسبة مع مدة رحلتك.",
  },
  abd: {
    en: "The US visa process requires detailed preparation, from filling out the DS-160 form completely to the interview; interview performance is the most critical stage directly affecting the outcome. While the combined B1/B2 visa evaluates tourist and business travel in the same category, student (F1) and work visas require different document sets and school/employer approval. Since interview appointment dates can vary by consulate and season, we recommend starting the appointment process as soon as your plan is clear. In interview preparation, we work together on frequently asked questions and the documents showing your ties to Turkey.",
    ar: "تتطلب عملية التأشيرة الأمريكية استعدادًا مفصلًا، من تعبئة نموذج DS-160 بالكامل إلى المقابلة؛ ويُعد الأداء في المقابلة المرحلة الأكثر حسمًا التي تؤثر مباشرة على النتيجة. وبينما تُقيِّم تأشيرة B1/B2 الموحدة السفر السياحي والتجاري في الفئة نفسها، تتطلب تأشيرتا الطالب (F1) والعمل مجموعات وثائق مختلفة وموافقة المدرسة/صاحب العمل. وبما أن مواعيد المقابلة قد تختلف حسب القنصلية والموسم، نوصي ببدء عملية الحصول على الموعد فور وضوح خطتك. في الاستعداد للمقابلة، نعمل معًا على الأسئلة الشائعة والوثائق التي تُظهر ارتباطك بتركيا.",
  },
  ingiltere: {
    en: "The UK has its own independent visa system outside the Schengen area; that's why the application form, biometric appointment, and document set differ from Schengen countries. Cities like London above all, along with Manchester and Edinburgh, stand out in both tourist and education-purpose visits. Since student visa applications can only be started after the CAS document is obtained from the school, we recommend contacting us as soon as your acceptance letter arrives. Family reunion applications are subject to different financial sufficiency thresholds depending on the inviting person's residence status; we clarify these details together in the initial consultation.",
    ar: "تمتلك بريطانيا نظام تأشيرات مستقلًا خاصًا بها خارج منطقة شنغن؛ لذلك يختلف نموذج الطلب والموعد البيومتري ومجموعة الوثائق عن دول شنغن. وتبرز مدن مثل لندن في المقدمة، إلى جانب مانشستر وإدنبرة، في الزيارات السياحية والتعليمية على حد سواء. وبما أن طلبات تأشيرة الطالب لا يمكن بدؤها إلا بعد الحصول على وثيقة CAS من المدرسة، نوصي بالتواصل معنا فور وصول خطاب قبولك. وتخضع طلبات جمع شمل الأسرة لعتبات كفاية مالية مختلفة حسب وضع إقامة الشخص الداعي؛ ونوضح هذه التفاصيل معًا في الاستشارة الأولية.",
  },
  kanada: {
    en: "In applications for Canada, the most frequently preferred category is the standard visitor visa (TRV), and cities like Toronto, Vancouver, and Montreal stand out in both tourist and business visits. Since birth-purpose visits are not a separate visa category and are evaluated under the standard visitor visa, correctly declaring the pregnancy and intent to give birth and obtaining private health insurance are critically important in these applications (details are in the document list below). Work permit applications usually proceed based on an employer's offer. Documents showing your ties to Turkey (employment, property, family ties) play an important role in the evaluation for every category.",
    ar: "في الطلبات المقدمة إلى كندا، الفئة الأكثر تفضيلًا هي تأشيرة الزائر القياسية (TRV)، وتبرز مدن مثل تورونتو وفانكوفر ومونتريال في الزيارات السياحية والتجارية على حد سواء. وبما أن الزيارات بغرض الولادة ليست فئة تأشيرة منفصلة وتُقيَّم ضمن تأشيرة الزائر القياسية، فإن الإفصاح الصحيح عن الحمل ونية الولادة والحصول على تأمين صحي خاص أمران بالغا الأهمية في هذه الطلبات (التفاصيل في قائمة الوثائق أدناه). وتسير طلبات إذن العمل عادةً بناءً على عرض من صاحب العمل. وتلعب الوثائق التي تُظهر ارتباطك بتركيا (العمل، الملكية، الروابط العائلية) دورًا مهمًا في التقييم لكل فئة.",
  },
  dubai: {
    en: "The United Arab Emirates is one of the fastest-resolving destinations for Turkish citizens thanks to its fully online e-visa system; Dubai and Abu Dhabi above all attract intense interest in both tourism and the business world (trade fairs, commercial partnerships). For short transit stops, 48- or 96-hour transit visa options are also available. In e-visa applications, having a clear and legible passport scan positively affects the resolution time. Due to extreme heat in the summer months, travel planning usually concentrates on the autumn-spring period.",
    ar: "دولة الإمارات العربية المتحدة من أسرع الوجهات في اتخاذ القرار للمواطنين الأتراك بفضل نظام التأشيرة الإلكترونية الكامل عبر الإنترنت؛ وتجذب دبي وأبوظبي في المقدمة اهتمامًا كبيرًا في السياحة وعالم الأعمال (المعارض والشراكات التجارية) على حد سواء. وللتوقفات القصيرة العابرة، تتوفر أيضًا خيارات تأشيرة عبور لمدة 48 أو 96 ساعة. في طلبات التأشيرة الإلكترونية، يؤثر وضوح مسح جواز السفر وسهولة قراءته إيجابًا على مدة اتخاذ القرار. وبسبب الحرارة الشديدة في أشهر الصيف، يتركز التخطيط للسفر عادةً في فترة الخريف-الربيع.",
  },
  rusya: {
    en: "Russia offers Turkish citizens a fully online, fast-resolving application process with its unified e-Visa system; it is preferred in both tourist and business visits, with Moscow and Saint Petersburg at the forefront. The e-visa application is resolved within an average of 4 days and is valid for 120 days, but allows a stay of at most 30 days per single entry — for plans exceeding this limit, a different visa category may be required. Although travel health insurance is not mandatory, we recommend obtaining it against unforeseen situations. In business visits, the invitation letter is a document that speeds up the process (but is not mandatory).",
    ar: "تقدم روسيا للمواطنين الأتراك عملية تقديم كاملة عبر الإنترنت وسريعة الحسم بنظام التأشيرة الإلكترونية الموحدة؛ وتُفضَّل في الزيارات السياحية والتجارية على حد سواء، وفي مقدمتها موسكو وسانت بطرسبرغ. يُحسم طلب التأشيرة الإلكترونية في غضون 4 أيام في المتوسط وهي صالحة لمدة 120 يومًا، لكنها تسمح بإقامة أقصاها 30 يومًا في الدخول الواحد — وللخطط التي تتجاوز هذا الحد قد تلزم فئة تأشيرة مختلفة. ورغم أن التأمين الصحي للسفر غير إلزامي، نوصي بالحصول عليه تحسبًا للظروف غير المتوقعة. في الزيارات التجارية، خطاب الدعوة وثيقة تُسرِّع العملية (لكنها غير إلزامية).",
  },
  avustralya: {
    en: "Since Australia does not offer Turkish citizens an electronic travel authorization (eTA), applications are evaluated fully under the Visitor Visa (Subclass 600) and require a biometric appointment (fingerprints and photo) at the visa application center; this makes the process somewhat longer than some other countries. Routes like Sydney, Melbourne, and the Great Barrier Reef are the most preferred destinations in tourist applications. Because processing time can vary between 4-8 weeks, we recommend applying well in advance of your travel date. The health and character declaration is part of the standard evaluation; an additional health report may be requested if needed.",
    ar: "بما أن أستراليا لا تقدم للمواطنين الأتراك إذن سفر إلكترونيًا (eTA)، تُقيَّم الطلبات بالكامل ضمن تأشيرة الزائر (الفئة 600) وتتطلب موعدًا بيومتريًا (بصمات الأصابع والصورة) في مركز طلبات التأشيرة؛ وهذا يجعل العملية أطول نوعًا ما من بعض الدول الأخرى. ومسارات مثل سيدني وملبورن والحاجز المرجاني العظيم هي الوجهات الأكثر تفضيلًا في الطلبات السياحية. ولأن مدة المعالجة قد تتراوح بين 4-8 أسابيع، نوصي بالتقديم قبل تاريخ سفرك بوقت كافٍ. الإفصاح الصحي والأخلاقي جزء من التقييم القياسي؛ وقد يُطلب تقرير صحي إضافي عند الحاجة.",
  },
  japonya: {
    en: "Japan is a destination rapidly gaining popularity among Turkish travelers in recent years, with its cherry blossom season and its blend of modern and traditional culture; the Tokyo, Kyoto, and Osaka route is the most preferred itinerary. In business visits, trade fairs in the electronics, automotive, and robotics sectors stand out. The Japanese consulate requests a detailed day-by-day travel plan and clear accommodation information for every night; preparing this document completely directly speeds up the evaluation process. In financial sufficiency documents, regular account activity over the last three months is important.",
    ar: "اليابان وجهة تكتسب شعبية سريعة بين المسافرين الأتراك في السنوات الأخيرة، بموسم أزهار الكرز وثقافتها الممزوجة بين الحداثة والتقاليد؛ ومسار طوكيو وكيوتو وأوساكا هو الأكثر تفضيلًا. في الزيارات التجارية، تبرز معارض قطاعات الإلكترونيات والسيارات والروبوتات. تطلب القنصلية اليابانية خطة سفر مفصلة يومًا بيوم ومعلومات إقامة واضحة لكل ليلة؛ وإعداد هذه الوثيقة بالكامل يُسرِّع عملية التقييم مباشرة. في وثائق الكفاية المالية، تُعد حركة الحساب المنتظمة خلال الأشهر الثلاثة الأخيرة مهمة.",
  },
  'guney-kore': {
    en: "South Korea is a country in demand for both tourist and business visits, thanks to the interest in its popular culture (K-pop, film/TV industry) as well as its strong business connections in the electronics and automotive sectors. Seoul-centered city tours and technology fairs are the most common reasons for visits. Since Turkish citizens are not covered by a visa exemption, applications are evaluated through the consulate; a detailed and consistent travel plan along with current bank account activity play an important role in the evaluation process.",
    ar: "كوريا الجنوبية دولة مطلوبة للزيارات السياحية والتجارية على حد سواء، بفضل الاهتمام بثقافتها الشعبية (الكيبوب وصناعة الأفلام/المسلسلات) إلى جانب علاقاتها التجارية القوية في قطاعي الإلكترونيات والسيارات. والجولات الحضرية المتمركزة في سول ومعارض التكنولوجيا هي أكثر أسباب الزيارة شيوعًا. وبما أن المواطنين الأتراك غير مشمولين بإعفاء من التأشيرة، تُقيَّم الطلبات عبر القنصلية؛ وتلعب خطة سفر مفصلة ومتسقة مع حركة حساب مصرفي حديثة دورًا مهمًا في عملية التقييم.",
  },
  cin: {
    en: "A significant portion of applications to China consists of supply/trade fair visits in the textile, electronics, and wholesale trade sectors; Guangzhou, Yiwu, and Shanghai are the most preferred cities for these visits. In tourist visits, Beijing's historic fabric and Shanghai's modern skyline stand out. In business applications, having the invitation letter obtained from the Chinese business partner (usually issued by the fair organizer or the company) consistent with the application speeds up the process. The 72/144-hour visa-free transit option valid in certain cities for certain nationalities can also be considered in route planning.",
    ar: "جزء كبير من الطلبات المقدمة إلى الصين يتكون من زيارات التوريد/المعارض في قطاعات المنسوجات والإلكترونيات وتجارة الجملة؛ وقوانغتشو وييوو وشانغهاي هي المدن الأكثر تفضيلًا لهذه الزيارات. في الزيارات السياحية، يبرز نسيج بكين التاريخي وأفق شانغهاي الحديث. في الطلبات التجارية، يُسرِّع اتساق خطاب الدعوة المُستلَم من الشريك التجاري الصيني (يُصدره عادةً منظم المعرض أو الشركة) مع الطلب العملية. ويمكن أيضًا النظر في خيار العبور بدون تأشيرة لمدة 72/144 ساعة الساري في بعض المدن لجنسيات معينة عند التخطيط للمسار.",
  },
  hindistan: {
    en: "India offers Turkish citizens a fully online and relatively fast-resolving application process thanks to its e-Visa (e-Tourist/e-Business Visa) system; routes like the Taj Mahal, Kerala, and Rajasthan lead tourist visits, while business connections in the textile and pharmaceutical sectors make up a significant portion of business visits. In the e-visa application, having a clear passport scan and digital photo speeds up the approval process. Since additional permits may be required for travel to certain border regions (such as the Pakistan or China border), we recommend clarifying your route in advance.",
    ar: "تقدم الهند للمواطنين الأتراك عملية تقديم كاملة عبر الإنترنت وسريعة الحسم نسبيًا بفضل نظام التأشيرة الإلكترونية (السياحية/التجارية)؛ وتتصدر مسارات مثل تاج محل وكيرالا وراجاستان الزيارات السياحية، بينما تُشكِّل العلاقات التجارية في قطاعي المنسوجات والأدوية جزءًا مهمًا من الزيارات التجارية. في طلب التأشيرة الإلكترونية، يُسرِّع وضوح مسح جواز السفر والصورة الرقمية عملية الموافقة. وبما أن بعض المناطق الحدودية (مثل حدود باكستان أو الصين) قد تتطلب تصاريح إضافية، نوصي بتوضيح مسارك مسبقًا.",
  },
  meksika: {
    en: "Mexico grants a visa exemption to Turkish citizens who hold a valid US, Canada, UK, or Schengen visa, or a residence permit in one of these countries — this is an often unknown but very valuable shortcut, allowing an online \"authorization\" to be obtained in a short time. For applications that don't meet these conditions, the standard tourist visa process is carried out through the Mexican embassy. Cancún, Riviera Maya, and Mexico City are the most preferred routes. We clarify together in the initial consultation which path applies to you.",
    ar: "تمنح المكسيك إعفاءً من التأشيرة للمواطنين الأتراك الحاصلين على تأشيرة أمريكية أو كندية أو بريطانية أو شنغن سارية، أو على إذن إقامة في إحدى هذه الدول — وهذا اختصار غير معروف غالبًا لكنه قيّم جدًا، إذ يتيح الحصول على \"تصريح\" عبر الإنترنت في وقت قصير. وللطلبات التي لا تستوفي هذه الشروط، تُدار عملية التأشيرة السياحية القياسية عبر السفارة المكسيكية. وكانكون وريفييرا مايا ومكسيكو سيتي هي المسارات الأكثر تفضيلًا. نوضح معًا في الاستشارة الأولية أي مسار ينطبق عليك.",
  },
  'yeni-zelanda': {
    en: "Since New Zealand does not offer Turkish citizens an electronic travel authorization (NZeTA), applications are evaluated under the standard visitor visa through a fully online system (Immigration New Zealand). Due to the geographic distance, processing times can be longer than for some other destinations; that's why we recommend applying well in advance of your travel date. Nature routes like Milford Sound, Queenstown, and the North Island are the most preferred itineraries in tourist visits. Financial sufficiency and the consistency of the travel plan play an important role in the evaluation.",
    ar: "بما أن نيوزيلندا لا تقدم للمواطنين الأتراك إذن سفر إلكترونيًا (NZeTA)، تُقيَّم الطلبات ضمن تأشيرة الزائر القياسية عبر نظام كامل عبر الإنترنت (هيئة الهجرة النيوزيلندية). ونظرًا للبعد الجغرافي، قد تكون مدد المعالجة أطول من بعض الوجهات الأخرى؛ لذلك نوصي بالتقديم قبل تاريخ سفرك بوقت كافٍ. والمسارات الطبيعية مثل ميلفورد ساوند وكوينزتاون والجزيرة الشمالية هي الأكثر تفضيلًا في الزيارات السياحية. وتلعب الكفاية المالية واتساق خطة السفر دورًا مهمًا في التقييم.",
  },
  singapur: {
    en: "Singapore is one of the few exceptional countries in the region where Turkish citizens' visa applications are evaluated through authorized local agencies rather than directly through the embassy; that's why it's important that the application process is carried out with the right agency and the right document set. Its strong position in the finance and technology sectors fuels business visits, while Sentosa Island and the city's architecture fuel tourist visits. It is usually planned together with a Malaysia or Indonesia trip.",
    ar: "سنغافورة من الدول الاستثنائية القليلة في المنطقة التي تُقيَّم فيها طلبات تأشيرات المواطنين الأتراك عبر وكالات محلية معتمدة بدلًا من السفارة مباشرة؛ لذلك من المهم إدارة عملية التقديم مع الوكالة الصحيحة ومجموعة الوثائق الصحيحة. وتُغذي مكانتها القوية في قطاعي المال والتكنولوجيا الزيارات التجارية، بينما تُغذي جزيرة سنتوسا وعمارة المدينة الزيارات السياحية. وعادةً ما يُخطط لزيارتها مع رحلة إلى ماليزيا أو إندونيسيا.",
  },
  misir: {
    en: "Egypt offers Turkish citizens a fully online and fast-resolving application process thanks to its e-Visa system; the pyramids in Cairo, the ancient temples of Luxor, and the holiday resorts on the Red Sea coast (Hurghada, Sharm El-Sheikh) are the most preferred routes. In the e-visa application, having a clear passport scan and stating an entry-exit plan consistent with your travel dates speeds up the process. Some holiday resorts also offer a visa-on-arrival option, but obtaining an e-visa in advance lets you enter without waiting in queues.",
    ar: "تقدم مصر للمواطنين الأتراك عملية تقديم كاملة عبر الإنترنت وسريعة الحسم بفضل نظام التأشيرة الإلكترونية؛ وأهرامات القاهرة ومعابد الأقصر القديمة والمنتجعات السياحية على ساحل البحر الأحمر (الغردقة وشرم الشيخ) هي المسارات الأكثر تفضيلًا. في طلب التأشيرة الإلكترونية، يُسرِّع وضوح مسح جواز السفر وذكر خطة دخول وخروج متسقة مع تواريخ سفرك العملية. كما تقدم بعض المنتجعات خيار الحصول على التأشيرة عند الوصول، لكن الحصول على التأشيرة الإلكترونية مسبقًا يتيح لك الدخول دون انتظار في الطوابير.",
  },
  'guney-afrika': {
    en: "South Africa is a country preferred in both tourist and business visits, with safari tours (Kruger National Park), Cape Town's natural beauty, and business connections in the mining/energy sector. In applications, a yellow fever vaccination certificate may be requested depending on your travel route; that's why it's important to clarify your itinerary. For travel with children, submitting the birth certificate and, if applicable, custody documents is mandatory under South Africa's anti-child-abduction regulations.",
    ar: "جنوب أفريقيا دولة تُفضَّل في الزيارات السياحية والتجارية على حد سواء، بجولات السفاري (منتزه كروغر الوطني) وجمال كيب تاون الطبيعي والعلاقات التجارية في قطاع التعدين/الطاقة. في الطلبات، قد تُطلب شهادة التطعيم ضد الحمى الصفراء حسب مسار سفرك؛ لذلك من المهم توضيح مسارك. وفي السفر مع الأطفال، يُعد تقديم شهادة الميلاد ووثائق الحضانة إن وجدت إلزاميًا بموجب لوائح جنوب أفريقيا لمكافحة اختطاف الأطفال.",
  },
  tayland: {
    en: "Thailand offers Turkish citizens an online application option through its e-Visa system; Bangkok's temples, the beaches of islands like Phuket and Koh Samui, and Chiang Mai's mountainous northern region are the most preferred routes. In the e-visa application, having a clear return ticket and accommodation reservation is important. Considering that flight and hotel prices rise noticeably during busy holiday periods (New Year, the Songkran festival), we recommend early planning.",
    ar: "تقدم تايلاند للمواطنين الأتراك إمكانية التقديم عبر الإنترنت من خلال نظام التأشيرة الإلكترونية؛ ومعابد بانكوك وشواطئ جزر مثل بوكيت وكوه ساموي ومنطقة شيانغ ماي الجبلية الشمالية هي المسارات الأكثر تفضيلًا. في طلب التأشيرة الإلكترونية، من المهم وضوح تذكرة العودة وحجز الإقامة. وبالنظر إلى أن أسعار الطيران والفنادق ترتفع بشكل ملحوظ في مواسم العطلات المزدحمة (رأس السنة ومهرجان سونغكران)، نوصي بالتخطيط المبكر.",
  },
  vietnam: {
    en: "Vietnam offers Turkish citizens a fast and predictable application process thanks to its well-established e-Visa system; Halong Bay, Hanoi's old quarter, and the lively streets of Ho Chi Minh City are the most preferred routes. The e-visa is valid at all entry points (airports, land, and sea borders), which provides flexibility for travelers planning multi-point itineraries. Having the photo and passport scan uploaded in the application clear and current shortens the approval time.",
    ar: "تقدم فيتنام للمواطنين الأتراك عملية تقديم سريعة ويمكن التنبؤ بها بفضل نظامها الراسخ للتأشيرة الإلكترونية؛ وخليج ها لونغ وحي هانوي القديم وشوارع مدينة هو تشي منه النابضة بالحياة هي المسارات الأكثر تفضيلًا. والتأشيرة الإلكترونية صالحة في جميع نقاط الدخول (المطارات والحدود البرية والبحرية)، مما يوفر مرونة للمسافرين الذين يخططون لمسارات متعددة النقاط. ووضوح وحداثة الصورة ومسح جواز السفر المرفوعين في الطلب يُقصِّران مدة الموافقة.",
  },
  'sri-lanka': {
    en: "Sri Lanka offers Turkish citizens a fast and fully online application process with its Electronic Travel Authorization (ETA) system; with its tea plantations, historic temples, and the beaches of its southern coast, it appeals to both nature and culture tourism. The ETA application is usually approved within a few minutes, but it's recommended to keep a printout with you before traveling. Since the monsoon season varies by region (the west-south and east coasts receive rainfall in different periods), we offer route recommendations based on your travel date.",
    ar: "تقدم سريلانكا للمواطنين الأتراك عملية تقديم سريعة وكاملة عبر الإنترنت بنظام إذن السفر الإلكتروني (ETA)؛ وبمزارع الشاي ومعابدها التاريخية وشواطئ ساحلها الجنوبي، تلبي السياحة الطبيعية والثقافية على حد سواء. يُعتمد طلب ETA عادةً في غضون دقائق قليلة، لكن يُنصح بالاحتفاظ بنسخة مطبوعة معك قبل السفر. وبما أن موسم الرياح الموسمية يختلف حسب المنطقة (يتلقى الساحلان الغربي-الجنوبي والشرقي الأمطار في فترات مختلفة)، نقدم توصيات للمسار حسب تاريخ سفرك.",
  },
};

// quick_facts etiketleri (8 farklı) ve değerleri (131 farklı) — her ülkenin
// JSON dizisi bu iki sözlükten geçirilerek yeniden inşa edilir.
const qfLabels = {
  'Geçerlilik': { en: 'Validity', ar: 'الصلاحية' },
  'İşlem Süresi': { en: 'Processing Time', ar: 'مدة المعالجة' },
  'Kalış Süresi': { en: 'Length of Stay', ar: 'مدة الإقامة' },
  'Başkent & Para Birimi': { en: 'Capital & Currency', ar: 'العاصمة والعملة' },
  'Başkent & Dil': { en: 'Capital & Language', ar: 'العاصمة واللغة' },
  'Para Birimi': { en: 'Currency', ar: 'العملة' },
  'Dil': { en: 'Language', ar: 'اللغة' },
  'Öne Çıkanlar': { en: 'Highlights', ar: 'أبرز الملامح' },
};

const qfValues = {
  // --- Süre/işlem değerleri ---
  'Başvuru yoğunluğuna göre değişir': { en: 'Varies depending on application volume', ar: 'يختلف حسب حجم الطلبات' },
  'Konsolosluk randevu yoğunluğuna bağlı olarak değişir': { en: 'Varies depending on consular appointment demand', ar: 'يختلف حسب الطلب على مواعيد القنصلية' },
  'Ortalama 1-2 hafta': { en: 'On average 1-2 weeks', ar: 'في المتوسط 1-2 أسبوع' },
  'Ortalama 3-5 iş günü': { en: 'On average 3-5 business days', ar: 'في المتوسط 3-5 أيام عمل' },
  'Ortalama 4 gün (e-Vize)': { en: 'On average 4 days (e-Visa)', ar: 'في المتوسط 4 أيام (تأشيرة إلكترونية)' },
  'Ortalama 4-7 iş günü': { en: 'On average 4-7 business days', ar: 'في المتوسط 4-7 أيام عمل' },
  'Ortalama 4-8 hafta': { en: 'On average 4-8 weeks', ar: 'في المتوسط 4-8 أسابيع' },
  'Ortalama birkaç hafta': { en: 'On average a few weeks', ar: 'في المتوسط بضعة أسابيع' },
  'Ortalama birkaç hafta, başvuru yoğunluğuna göre değişir': { en: 'On average a few weeks, varies by application volume', ar: 'في المتوسط بضعة أسابيع، حسب حجم الطلبات' },
  'E-Vize başvurularında genellikle 3 iş günü': { en: 'Usually 3 business days for e-Visa applications', ar: 'عادةً 3 أيام عمل لطلبات التأشيرة الإلكترونية' },
  'E-Vize başvurularında genellikle 3-5 iş günü': { en: 'Usually 3-5 business days for e-Visa applications', ar: 'عادةً 3-5 أيام عمل لطلبات التأشيرة الإلكترونية' },
  'E-Vize başvurularında genellikle birkaç iş günü': { en: 'Usually a few business days for e-Visa applications', ar: 'عادةً بضعة أيام عمل لطلبات التأشيرة الإلكترونية' },
  'E-vize başvurularında genellikle birkaç iş günü': { en: 'Usually a few business days for e-visa applications', ar: 'عادةً بضعة أيام عمل لطلبات التأشيرة الإلكترونية' },
  'ETA başvurularında genellikle birkaç dakika-birkaç saat': { en: 'Usually a few minutes to a few hours for ETA applications', ar: 'عادةً من بضع دقائق إلى بضع ساعات لطلبات ETA' },
  'Muafiyet kapsamında birkaç gün, standart vizede daha uzun': { en: 'A few days under the exemption, longer for a standard visa', ar: 'بضعة أيام ضمن الإعفاء، وأطول للتأشيرة القياسية' },
  'Genellikle tek girişte 180 güne kadar': { en: 'Usually up to 180 days per single entry', ar: 'عادةً حتى 180 يومًا في الدخول الواحد' },
  'Genellikle tek girişte 3 aya kadar': { en: 'Usually up to 3 months per single entry', ar: 'عادةً حتى 3 أشهر في الدخول الواحد' },
  'Genellikle tek girişte 30 güne kadar': { en: 'Usually up to 30 days per single entry', ar: 'عادةً حتى 30 يومًا في الدخول الواحد' },
  'Genellikle tek girişte 6 aya kadar': { en: 'Usually up to 6 months per single entry', ar: 'عادةً حتى 6 أشهر في الدخول الواحد' },
  'Genellikle tek girişte 60 güne kadar': { en: 'Usually up to 60 days per single entry', ar: 'عادةً حتى 60 يومًا في الدخول الواحد' },
  'Genellikle tek girişte 9 aya kadar': { en: 'Usually up to 9 months per single entry', ar: 'عادةً حتى 9 أشهر في الدخول الواحد' },
  'Genellikle tek girişte 90 güne kadar': { en: 'Usually up to 90 days per single entry', ar: 'عادةً حتى 90 يومًا في الدخول الواحد' },
  'Herhangi 180 günlük dönemde en fazla 90 gün': { en: 'At most 90 days in any 180-day period', ar: 'بحد أقصى 90 يومًا في أي فترة 180 يومًا' },
  'Tek girişte en fazla 30 gün': { en: 'At most 30 days per single entry', ar: 'بحد أقصى 30 يومًا في الدخول الواحد' },
  'Standart ziyaretçi vizesinde genellikle 6 aya kadar': { en: 'Usually up to 6 months on a standard visitor visa', ar: 'عادةً حتى 6 أشهر بتأشيرة الزائر القياسية' },
  'Vize tipine göre değişir': { en: 'Varies by visa type', ar: 'يختلف حسب نوع التأشيرة' },
  'Vize tipine göre değişir, çoğunlukla çoklu giriş': { en: 'Varies by visa type, mostly multiple entry', ar: 'يختلف حسب نوع التأشيرة، وغالبًا دخول متعدد' },
  'Vize tipine göre genellikle 30 veya 90 gün': { en: 'Usually 30 or 90 days depending on visa type', ar: 'عادةً 30 أو 90 يومًا حسب نوع التأشيرة' },
  'Vize tipine göre genellikle 30-90 gün': { en: 'Usually 30-90 days depending on visa type', ar: 'عادةً 30-90 يومًا حسب نوع التأشيرة' },
  // --- Başkent · para birimi / dil ---
  'Abu Dabi · BAE Dirhemi (AED)': { en: 'Abu Dhabi · UAE Dirham (AED)', ar: 'أبوظبي · درهم إماراتي (AED)' },
  'Amsterdam · Hollandaca': { en: 'Amsterdam · Dutch', ar: 'أمستردام · الهولندية' },
  'Atina · Yunanca': { en: 'Athens · Greek', ar: 'أثينا · اليونانية' },
  'Bangkok · Tayland Bahtı (THB)': { en: 'Bangkok · Thai Baht (THB)', ar: 'بانكوك · بات تايلاندي (THB)' },
  'Berlin · Almanca': { en: 'Berlin · German', ar: 'برلين · الألمانية' },
  'Bern · Almanca / Fransızca / İtalyanca': { en: 'Bern · German / French / Italian', ar: 'برن · الألمانية / الفرنسية / الإيطالية' },
  'Bratislava · Slovakça': { en: 'Bratislava · Slovak', ar: 'براتيسلافا · السلوفاكية' },
  'Brüksel · Flamanca / Fransızca': { en: 'Brussels · Flemish / French', ar: 'بروكسل · الفلمنكية / الفرنسية' },
  'Budapeşte · Macarca': { en: 'Budapest · Hungarian', ar: 'بودابست · المجرية' },
  'Bükreş · Rumence': { en: 'Bucharest · Romanian', ar: 'بوخارست · الرومانية' },
  'Canberra · Avustralya Doları (AUD)': { en: 'Canberra · Australian Dollar (AUD)', ar: 'كانبرا · دولار أسترالي (AUD)' },
  'Hanoi · Vietnam Dongu (VND)': { en: 'Hanoi · Vietnamese Dong (VND)', ar: 'هانوي · دونغ فيتنامي (VND)' },
  'Helsinki · Fince': { en: 'Helsinki · Finnish', ar: 'هلسنكي · الفنلندية' },
  'Kahire · Mısır Poundu (EGP)': { en: 'Cairo · Egyptian Pound (EGP)', ar: 'القاهرة · جنيه مصري (EGP)' },
  'Kopenhag · Danca': { en: 'Copenhagen · Danish', ar: 'كوبنهاغن · الدنماركية' },
  'Lizbon · Portekizce': { en: 'Lisbon · Portuguese', ar: 'لشبونة · البرتغالية' },
  'Ljubljana · Slovence': { en: 'Ljubljana · Slovenian', ar: 'ليوبليانا · السلوفينية' },
  'Londra · İngiliz Sterlini (GBP)': { en: 'London · Pound Sterling (GBP)', ar: 'لندن · جنيه إسترليني (GBP)' },
  'Lüksemburg Şehri · Lüksemburgca / Fransızca / Almanca': { en: 'Luxembourg City · Luxembourgish / French / German', ar: 'مدينة لوكسمبورغ · اللوكسمبورغية / الفرنسية / الألمانية' },
  'Madrid · İspanyolca': { en: 'Madrid · Spanish', ar: 'مدريد · الإسبانية' },
  'Mexico City · Meksika Pesosu (MXN)': { en: 'Mexico City · Mexican Peso (MXN)', ar: 'مكسيكو سيتي · بيزو مكسيكي (MXN)' },
  'Moskova · Rus Rublesi (RUB)': { en: 'Moscow · Russian Ruble (RUB)', ar: 'موسكو · روبل روسي (RUB)' },
  'Oslo · Norveççe': { en: 'Oslo · Norwegian', ar: 'أوسلو · النرويجية' },
  'Ottawa · Kanada Doları (CAD)': { en: 'Ottawa · Canadian Dollar (CAD)', ar: 'أوتاوا · دولار كندي (CAD)' },
  'Paris · Fransızca': { en: 'Paris · French', ar: 'باريس · الفرنسية' },
  'Pekin · Çin Yuanı (CNY)': { en: 'Beijing · Chinese Yuan (CNY)', ar: 'بكين · يوان صيني (CNY)' },
  'Prag · Çekçe': { en: 'Prague · Czech', ar: 'براغ · التشيكية' },
  'Pretoria · Güney Afrika Randı (ZAR)': { en: 'Pretoria · South African Rand (ZAR)', ar: 'بريتوريا · راند جنوب أفريقي (ZAR)' },
  'Reykjavik · İzlandaca': { en: 'Reykjavik · Icelandic', ar: 'ريكيافيك · الآيسلندية' },
  'Riga · Letonca': { en: 'Riga · Latvian', ar: 'ريغا · اللاتفية' },
  'Roma · İtalyanca': { en: 'Rome · Italian', ar: 'روما · الإيطالية' },
  'Seul · Güney Kore Wonu (KRW)': { en: 'Seoul · South Korean Won (KRW)', ar: 'سول · وون كوري جنوبي (KRW)' },
  'Singapur · Singapur Doları (SGD)': { en: 'Singapore · Singapore Dollar (SGD)', ar: 'سنغافورة · دولار سنغافوري (SGD)' },
  'Sofya · Bulgarca': { en: 'Sofia · Bulgarian', ar: 'صوفيا · البلغارية' },
  'Sri Jayawardenepura Kotte · Sri Lanka Rupisi (LKR)': { en: 'Sri Jayawardenepura Kotte · Sri Lankan Rupee (LKR)', ar: 'سري جايواردنابورا كوتي · روبية سريلانكية (LKR)' },
  'Stockholm · İsveççe': { en: 'Stockholm · Swedish', ar: 'ستوكهولم · السويدية' },
  'Tallinn · Estonca': { en: 'Tallinn · Estonian', ar: 'تالين · الإستونية' },
  'Tokyo · Japon Yeni (JPY)': { en: 'Tokyo · Japanese Yen (JPY)', ar: 'طوكيو · ين ياباني (JPY)' },
  'Vaduz · Almanca': { en: 'Vaduz · German', ar: 'فادوز · الألمانية' },
  'Valletta · Maltaca / İngilizce': { en: 'Valletta · Maltese / English', ar: 'فاليتا · المالطية / الإنجليزية' },
  'Varşova · Lehçe': { en: 'Warsaw · Polish', ar: 'وارسو · البولندية' },
  'Vilnius · Litvanca': { en: 'Vilnius · Lithuanian', ar: 'فيلنيوس · الليتوانية' },
  'Viyana · Almanca': { en: 'Vienna · German', ar: 'فيينا · الألمانية' },
  'Washington D.C. · Amerikan Doları (USD)': { en: 'Washington D.C. · US Dollar (USD)', ar: 'واشنطن العاصمة · دولار أمريكي (USD)' },
  'Wellington · Yeni Zelanda Doları (NZD)': { en: 'Wellington · New Zealand Dollar (NZD)', ar: 'ولينغتون · دولار نيوزيلندي (NZD)' },
  'Yeni Delhi · Hindistan Rupisi (INR)': { en: 'New Delhi · Indian Rupee (INR)', ar: 'نيودلهي · روبية هندية (INR)' },
  'Zagreb · Hırvatça': { en: 'Zagreb · Croatian', ar: 'زغرب · الكرواتية' },
  // --- Para birimleri ---
  'Bulgar Levası (BGN)': { en: 'Bulgarian Lev (BGN)', ar: 'ليف بلغاري (BGN)' },
  'Çek Korunası (CZK)': { en: 'Czech Koruna (CZK)', ar: 'كورونا تشيكية (CZK)' },
  'Danimarka Kronu (DKK)': { en: 'Danish Krone (DKK)', ar: 'كرونة دنماركية (DKK)' },
  'Euro (EUR)': { en: 'Euro (EUR)', ar: 'يورو (EUR)' },
  'İsveç Kronu (SEK)': { en: 'Swedish Krona (SEK)', ar: 'كرونا سويدية (SEK)' },
  'İsviçre Frangı (CHF)': { en: 'Swiss Franc (CHF)', ar: 'فرنك سويسري (CHF)' },
  'İzlanda Kronu (ISK)': { en: 'Icelandic Krona (ISK)', ar: 'كرونا آيسلندية (ISK)' },
  'Macar Forinti (HUF)': { en: 'Hungarian Forint (HUF)', ar: 'فورنت مجري (HUF)' },
  'Norveç Kronu (NOK)': { en: 'Norwegian Krone (NOK)', ar: 'كرونة نرويجية (NOK)' },
  'Polonya Zlotisi (PLN)': { en: 'Polish Zloty (PLN)', ar: 'زلوتي بولندي (PLN)' },
  'Rumen Leyi (RON)': { en: 'Romanian Leu (RON)', ar: 'ليو روماني (RON)' },
  // --- Diller ---
  'Arapça': { en: 'Arabic', ar: 'العربية' },
  'Arapça (turizmde İngilizce yaygın)': { en: 'Arabic (English widely used in tourism)', ar: 'العربية (الإنجليزية شائعة في السياحة)' },
  'Çince': { en: 'Chinese', ar: 'الصينية' },
  'Hintçe / İngilizce': { en: 'Hindi / English', ar: 'الهندية / الإنجليزية' },
  'İngilizce': { en: 'English', ar: 'الإنجليزية' },
  'İngilizce / Fransızca': { en: 'English / French', ar: 'الإنجليزية / الفرنسية' },
  'İngilizce / Malayca / Çince': { en: 'English / Malay / Chinese', ar: 'الإنجليزية / الملايوية / الصينية' },
  'İngilizce ve 10 diğer resmi dil': { en: 'English and 10 other official languages', ar: 'الإنجليزية و10 لغات رسمية أخرى' },
  'İspanyolca': { en: 'Spanish', ar: 'الإسبانية' },
  'Japonca': { en: 'Japanese', ar: 'اليابانية' },
  'Korece': { en: 'Korean', ar: 'الكورية' },
  'Rusça': { en: 'Russian', ar: 'الروسية' },
  'Sinhalaca / Tamilce': { en: 'Sinhala / Tamil', ar: 'السنهالية / التاميلية' },
  'Tayca': { en: 'Thai', ar: 'التايلاندية' },
  'Vietnamca': { en: 'Vietnamese', ar: 'الفيتنامية' },
  // --- Öne Çıkanlar ---
  'Adriyatik kıyısındaki Dubrovnik ve ada turlarıyla yaz aylarının gözde rotalarından biridir': { en: 'One of the favorite summer routes with Dubrovnik and island tours along the Adriatic coast', ar: 'من الوجهات الصيفية المفضلة بجولات دوبروفنيك والجزر على الساحل الأدرياتيكي' },
  "Akdeniz'in ortasındaki tarihi kaleleri ve dalış noktalarıyla bilinir": { en: 'Known for its historic fortresses and diving spots in the middle of the Mediterranean', ar: 'تشتهر بقلاعها التاريخية ومواقع الغوص في وسط البحر المتوسط' },
  "Alpler'in eteğinde yer alan küçük ama müreffeh bir prenslik olmasıyla bilinir": { en: 'Known for being a small but prosperous principality at the foot of the Alps', ar: 'تشتهر بكونها إمارة صغيرة لكنها مزدهرة عند سفح جبال الألب' },
  'Alpler, saat işçiliği ve uluslararası finans merkezi olmasıyla bilinir (AB üyesi olmasa da Schengen bölgesinin bir parçasıdır)': { en: 'Known for the Alps, watchmaking, and being an international financial center (part of the Schengen area though not an EU member)', ar: 'تشتهر بجبال الألب وصناعة الساعات وكونها مركزًا ماليًا دوليًا (جزء من منطقة شنغن رغم أنها ليست عضوًا في الاتحاد الأوروبي)' },
  'Art nouveau mimarisi ve Baltık kıyı şeridiyle bilinir': { en: 'Known for its art nouveau architecture and Baltic coastline', ar: 'تشتهر بعمارتها بطراز الآرت نوفو وشريطها الساحلي على بحر البلطيق' },
  'Atlantik kıyıları, Porto şarabı ve tarihi sokaklarıyla bilinir': { en: 'Known for its Atlantic coasts, Port wine, and historic streets', ar: 'تشتهر بسواحلها الأطلسية ونبيذ بورتو وشوارعها التاريخية' },
  'Avrupa Birliği kurumlarına ev sahipliği yapan güçlü bir finans merkezi olmasıyla bilinir': { en: 'Known for being a strong financial center hosting European Union institutions', ar: 'تشتهر بكونها مركزًا ماليًا قويًا يستضيف مؤسسات الاتحاد الأوروبي' },
  "Avrupa Birliği'nin idari merkezi olması ve ortaçağdan kalma şehirleriyle bilinir": { en: "Known for being the European Union's administrative center and for its medieval cities", ar: 'تشتهر بكونها المركز الإداري للاتحاد الأوروبي وبمدنها القروسطية' },
  "Barcelona ve Madrid'in canlı şehir kültürü, sahilleri ve futbol tutkusuyla bilinir": { en: 'Known for the vibrant city culture of Barcelona and Madrid, its beaches, and its passion for football', ar: 'تشتهر بالثقافة الحضرية النابضة في برشلونة ومدريد وشواطئها وشغفها بكرة القدم' },
  'Barok mimarisiyle öne çıkan eski şehri ve Baltık kültürüyle bilinir': { en: 'Known for its old town notable for baroque architecture and its Baltic culture', ar: 'تشتهر بمدينتها القديمة البارزة بعمارتها الباروكية وثقافة البلطيق' },
  'Bled Gölü ve Alp-Akdeniz karışımı doğasıyla bilinir': { en: 'Known for Lake Bled and its blend of Alpine and Mediterranean nature', ar: 'تشتهر ببحيرة بليد وطبيعتها الممزوجة بين جبال الألب والبحر المتوسط' },
  'Dijital devlet uygulamalarındaki öncülüğü ve ortaçağdan kalma eski şehriyle bilinir': { en: 'Known for its pioneering digital government services and its medieval old town', ar: 'تشتهر بريادتها في الخدمات الحكومية الرقمية ومدينتها القديمة القروسطية' },
  'Fiyortları ve kuzey ışıklarıyla doğa turizminin başkenti olarak bilinir (AB üyesi olmasa da Schengen bölgesinin bir parçasıdır)': { en: 'Known as the capital of nature tourism with its fjords and northern lights (part of the Schengen area though not an EU member)', ar: 'تُعرف بعاصمة السياحة الطبيعية بمضايقها البحرية وشفقها القطبي (جزء من منطقة شنغن رغم أنها ليست عضوًا في الاتحاد الأوروبي)' },
  'Gayzerleri, buzulları ve kuzey ışıklarıyla doğa turizminin gözde rotalarından biridir': { en: 'One of the favorite routes of nature tourism with its geysers, glaciers, and northern lights', ar: 'من الوجهات المفضلة للسياحة الطبيعية بينابيعها الحارة وأنهارها الجليدية وشفقها القطبي' },
  "Güçlü ekonomisi, dünya çapındaki üniversiteleri ve Avrupa'nın en kalabalık Türk topluluğuna ev sahipliği yapmasıyla tanınır": { en: "Renowned for its strong economy, world-class universities, and hosting Europe's largest Turkish community", ar: 'تشتهر باقتصادها القوي وجامعاتها العالمية واستضافتها لأكبر جالية تركية في أوروبا' },
  "Kanalları, lale bahçeleri ve Avrupa'nın önemli ticaret merkezlerinden biri olmasıyla tanınır": { en: "Renowned for its canals, tulip gardens, and being one of Europe's major trade centers", ar: 'تشتهر بقنواتها المائية وحدائق التوليب وكونها من أهم المراكز التجارية في أوروبا' },
  "Karadeniz kıyıları ve Türkiye'ye yakınlığı sayesinde uygun maliyetli tatil seçenekleriyle tercih edilir": { en: 'Preferred for its affordable holiday options thanks to its Black Sea coasts and proximity to Turkey', ar: 'تُفضَّل لخيارات العطلات الميسورة التكلفة بفضل سواحلها على البحر الأسود وقربها من تركيا' },
  'Klasik müzik mirası, Alp manzaraları ve kayak turizmiyle öne çıkar': { en: 'Stands out with its classical music heritage, Alpine scenery, and ski tourism', ar: 'تبرز بتراثها في الموسيقى الكلاسيكية ومناظرها الألبية وسياحة التزلج' },
  "Krakow'un tarihi merkezi ve hızla büyüyen ekonomisiyle bilinir": { en: "Known for Krakow's historic center and its rapidly growing economy", ar: 'تشتهر بمركز كراكوف التاريخي واقتصادها سريع النمو' },
  'Kuzey ışıkları, binlerce gölü ve dünyaca tanınan eğitim sistemiyle bilinir': { en: 'Known for its northern lights, thousands of lakes, and world-renowned education system', ar: 'تشتهر بشفقها القطبي وآلاف بحيراتها ونظامها التعليمي المشهور عالميًا' },
  "Prag'ın masalsı mimarisi ve tarihi eski şehriyle bilinir": { en: "Known for Prague's fairy-tale architecture and historic old town", ar: 'تشتهر بعمارة براغ الساحرة ومدينتها القديمة التاريخية' },
  "Roma, Venedik ve Floransa gibi tarihi şehirleriyle Avrupa'nın en çok ziyaret edilen ülkelerinden biridir": { en: "One of Europe's most visited countries with historic cities like Rome, Venice, and Florence", ar: 'من أكثر دول أوروبا زيارةً بمدنها التاريخية مثل روما والبندقية وفلورنسا' },
  'Sanat, moda ve gastronomi alanındaki dünya çapındaki itibarıyla öne çıkar': { en: 'Stands out with its worldwide reputation in art, fashion, and gastronomy', ar: 'تبرز بسمعتها العالمية في الفن والموضة وفنون الطهي' },
  "Santorini ve Mikonos gibi adaları, Ege kıyıları ve Türkiye'ye yakınlığıyla en çok tercih edilen Schengen ülkelerinden biridir": { en: 'One of the most preferred Schengen countries with islands like Santorini and Mykonos, its Aegean coasts, and proximity to Turkey', ar: 'من أكثر دول شنغن تفضيلًا بجزرها مثل سانتوريني وميكونوس وسواحلها على بحر إيجه وقربها من تركيا' },
  'Tatra Dağları ve tarihi kalesiyle bilinir': { en: 'Known for the Tatra Mountains and its historic castle', ar: 'تشتهر بجبال تاترا وقلعتها التاريخية' },
  "Transilvanya'nın efsanevi kaleleri ve Karpat Dağları'yla bilinir": { en: "Known for Transylvania's legendary castles and the Carpathian Mountains", ar: 'تشتهر بقلاع ترانسيلفانيا الأسطورية وجبال الكاربات' },
  'Tuna Nehri manzarası ve termal kaplıcalarıyla bilinir': { en: 'Known for its Danube River views and thermal baths', ar: 'تشتهر بمناظر نهر الدانوب وحماماتها الحرارية' },
  "Yüksek yaşam kalitesi, tasarım kültürü ve Lego'nun anavatanı olmasıyla tanınır": { en: 'Renowned for its high quality of life, design culture, and being the homeland of Lego', ar: 'تشتهر بجودة الحياة العالية وثقافة التصميم وكونها موطن ليغو' },
  'İskandinav tasarımı, takımadaları ve yüksek yaşam standardıyla bilinir': { en: 'Known for its Scandinavian design, archipelagos, and high standard of living', ar: 'تشتهر بالتصميم الإسكندنافي وأرخبيلاتها ومستوى المعيشة المرتفع' },
};

// ---- Uygulama ----
const rows = db.prepare('SELECT id, quick_facts FROM countries').all();
const update = db.prepare(`
  UPDATE countries SET overview_en = @ovEn, overview_ar = @ovAr,
                       quick_facts_en = @qfEn, quick_facts_ar = @qfAr
  WHERE id = @id
`);

function translateFacts(factsJson, lang) {
  const facts = JSON.parse(factsJson || '[]');
  return JSON.stringify(facts.map((f) => {
    const label = qfLabels[f.label];
    const value = qfValues[f.value];
    if (!label) console.warn(`Çevirisi olmayan etiket: "${f.label}"`);
    if (!value) console.warn(`Çevirisi olmayan değer: "${f.value}"`);
    return {
      label: label ? label[lang] : f.label,
      value: value ? value[lang] : f.value,
    };
  }));
}

let count = 0;
rows.forEach((row) => {
  const ov = overviews[row.id];
  if (!ov) {
    console.warn(`Çevirisi olmayan overview: ${row.id}`);
    return;
  }
  update.run({
    id: row.id,
    ovEn: ov.en,
    ovAr: ov.ar,
    qfEn: translateFacts(row.quick_facts, 'en'),
    qfAr: translateFacts(row.quick_facts, 'ar'),
  });
  count += 1;
});

console.log(`${count} ülkenin overview + quick_facts çevirisi yazıldı.`);
