// 34 blog yazısının EN/AR çevirisi (bkz. plan — Faz 4). Her post slug ile
// eşleştirilir (id yerine — bkz. connection.js'teki genel desen, local/prod DB
// arasında id tutarlılığı garanti değil). title/excerpt/content aynı markdown
// yapısını (## başlıklar, **kalın**, - liste) korur.
import { db } from './connection.js';

const posts = {
  'vize-basvurusunda-niyet-mektubu-nasil-yazilir': {
    en: {
      title: 'How to Write a Cover Letter for Your Visa Application?',
      excerpt: 'The cover letter is one of the most important documents that clearly explains to the consulate why and how you are traveling.',
      content: `A cover letter is one of the first documents the consular officer reads in your visa application, and it clearly sets out the purpose and duration of your trip along with the ties that bind you to return to Turkey. A well-prepared cover letter positively shapes how the rest of your file is read.

## What Should Be in the Cover Letter?

- **Identity information**: Full name, passport number, date of birth
- **Purpose of travel**: A clear definition — tourism, business, family visit, etc.
- **Travel plan**: Departure-return dates, cities to be visited
- **Proof of ties to Turkey**: Employment, family, property, and other reasons to return
- **Who will cover the expenses**

## Common Mistakes

The most common mistake is a cover letter that contradicts other documents — for example, dates in the letter not matching the flight/hotel reservations. Another mistake is drifting into an unnecessarily long, emotional narrative; the consular officer reviews a large number of files in a short time, so **clear and concise** language should be preferred.

## Our Approach

After listening to your purpose of travel in the initial consultation, we prepare your cover letter together with you, tailored to the country and visa type you're applying for. A letter that reflects your real situation is always stronger than a template text.

Keep in mind: a cover letter alone does not guarantee approval, but it makes a significant contribution to your file appearing consistent and credible. The final decision always rests with the relevant consulate.`,
    },
    ar: {
      title: 'كيف تكتب خطاب النية (Cover Letter) لطلب التأشيرة؟',
      excerpt: 'خطاب النية هو أحد أهم الوثائق التي تشرح للقنصلية بوضوح سبب سفرك وطبيعته.',
      content: `خطاب النية (cover letter) هو أحد أول الوثائق التي يقرأها الموظف القنصلي في طلب تأشيرتك، ويوضح بشكل واضح غرض سفرك ومدته وارتباطاتك التي تُثبت عودتك إلى تركيا. خطاب نية جيد الإعداد يؤثر بشكل إيجابي على كيفية قراءة بقية ملفك.

## ما يجب أن يتضمنه خطاب النية؟

- **المعلومات الشخصية**: الاسم الكامل، رقم جواز السفر، تاريخ الميلاد
- **غرض السفر**: تعريف واضح — سياحي، تجاري، زيارة عائلية، إلخ
- **خطة السفر**: تواريخ الذهاب والعودة، المدن التي ستُزار
- **إثبات الارتباط بتركيا**: العمل، العائلة، الملكية، وأسباب أخرى للعودة
- **من سيتحمل تكاليف السفر**

## الأخطاء الشائعة

أكثر خطأ شائع هو تعارض خطاب النية مع الوثائق الأخرى — مثل عدم تطابق التواريخ المذكورة في الخطاب مع حجوزات الطائرة/الفندق. خطأ آخر هو الانجراف إلى سرد طويل وعاطفي بلا داعٍ؛ فالموظف القنصلي يراجع عددًا كبيرًا من الملفات في وقت قصير، لذلك يُفضَّل استخدام لغة **واضحة ومختصرة**.

## نهجنا

بعد الاستماع إلى غرض سفرك في الاستشارة الأولية، نُعِدّ خطاب نيتك معك، مصممًا خصيصًا للدولة ونوع التأشيرة التي تتقدم لها. خطاب يعكس وضعك الحقيقي أقوى دائمًا من نص جاهز.

تذكر: خطاب النية وحده لا يضمن الموافقة، لكنه يساهم بشكل كبير في ظهور ملفك متسقًا وموثوقًا. القرار النهائي يبقى دائمًا بيد القنصلية المعنية.`,
    },
  },

  'vize-mulakatina-hazirlik-sik-sorulan-sorular': {
    en: {
      title: 'Preparing for a Visa Interview: Frequently Asked Questions and the Right Approach',
      excerpt: 'We compiled the most common question patterns for visa types that require an interview, and how to answer them correctly.',
      content: `For some visa types (especially the US B1/B2 visa), the interview is one of the decisive stages of the application. The interview does not expect memorized answers, but consistent and genuine information.

## Most Common Question Groups

1. **Purpose of travel**: "Why do you want to visit this country?"
2. **Financial situation**: "How will you cover your travel expenses?"
3. **Ties to Turkey**: "What is your job, when will you return?"
4. **Travel history**: "Have you traveled abroad before?"

## The Right Approach

What matters most in an interview is **consistency**. Your answers must match, word for word, the information in your application form and documents. Short, clear, and honest answers are far more effective than long, defensive explanations.

## Common Mistakes

- Giving memorized, unnatural-sounding answers
- Starting to answer before fully understanding the question
- Presenting a vague travel plan ("I don't exactly know where I'll go")

## Our Approach

Before your appointment, we review together the questions likely to come up for the visa type you're applying for, making sure your answers are consistent with your documents. Our goal isn't to have you "memorize the right answer," but to help you explain your genuine situation clearly and confidently.

The interview outcome depends entirely on the officer conducting it; preparation helps you present your application in the strongest way but does not mean a guarantee of approval.`,
    },
    ar: {
      title: 'الاستعداد لمقابلة التأشيرة: الأسئلة الشائعة والنهج الصحيح',
      excerpt: 'جمعنا أكثر أنماط الأسئلة شيوعًا في أنواع التأشيرات التي تتطلب مقابلة، وكيفية الإجابة عليها بالشكل الصحيح.',
      content: `في بعض أنواع التأشيرات (خاصة تأشيرة B1/B2 الأمريكية)، تُعد المقابلة إحدى المراحل الحاسمة في الطلب. لا تتوقع المقابلة إجابات محفوظة، بل معلومات متسقة وحقيقية.

## أكثر مجموعات الأسئلة شيوعًا

1. **غرض السفر**: "لماذا تريد زيارة هذه الدولة؟"
2. **الوضع المالي**: "كيف ستغطي تكاليف سفرك؟"
3. **الارتباط بتركيا**: "ما هو عملك، ومتى ستعود؟"
4. **تاريخ السفر**: "هل سافرت إلى الخارج من قبل؟"

## النهج الصحيح

أهم ما يُقدَّر في المقابلة هو **الاتساق**. يجب أن تتطابق إجاباتك تمامًا مع المعلومات الموجودة في نموذج طلبك ووثائقك. الإجابات القصيرة والواضحة والصادقة أكثر فعالية بكثير من التفسيرات الطويلة والدفاعية.

## الأخطاء الشائعة

- تقديم إجابات محفوظة وغير طبيعية
- البدء بالإجابة قبل فهم السؤال بالكامل
- تقديم خطة سفر غامضة ("لا أعرف بالضبط إلى أين سأذهب")

## نهجنا

قبل موعدك، نراجع معك الأسئلة المحتملة الخاصة بنوع التأشيرة التي تتقدم لها، ونتأكد من أن إجاباتك متسقة مع وثائقك. هدفنا ليس جعلك "تحفظ الإجابة الصحيحة"، بل مساعدتك على شرح وضعك الحقيقي بوضوح وثقة.

تعتمد نتيجة المقابلة كليًا على الموظف الذي يجريها؛ الاستعداد يساعدك على تقديم طلبك بأقوى شكل ممكن، لكنه لا يعني ضمان الموافقة.`,
    },
  },

  'seyahat-saglik-sigortasi-secerken-nelere-dikkat-etmeli': {
    en: {
      title: 'What to Watch Out for When Choosing Travel Health Insurance?',
      excerpt: 'We explain critical details like coverage amount and scope when choosing the travel health insurance required for Schengen applications.',
      content: `Travel health insurance is one of the mandatory documents for Schengen visa applications and must meet a minimum coverage of €30,000. However, not every policy fulfills this requirement in the same way.

## What to Look for in a Policy

- **Coverage amount**: Valid across the entire Schengen area, at least €30,000
- **Geographic scope**: Must cover the whole Schengen area, not just a single country
- **Date range**: Must cover your entire trip (including departure and return)
- **Emergency medical evacuation**: Must cover evacuation costs to Turkey in case of a serious health issue

## A Commonly Confused Point

Some travel insurance policies are offered as an extension of your domestic health insurance, but they are not accepted as valid for a Schengen visa application, because the visa application requires a specific document format and coverage structure. Always confirm that your policy is suitable for the visa application before purchasing it.

## In Special Cases Like a Canada Birth Visa

If you are traveling to Canada with the intent to give birth, standard travel health insurance is not sufficient — a policy specifically covering delivery and complication costs is required. We covered this topic in detail in a separate article.

In our initial consultation, we evaluate insurance options suitable for your destination country and visa type together, preventing your application from being rejected due to this requirement.`,
    },
    ar: {
      title: 'ما يجب مراعاته عند اختيار تأمين صحي للسفر؟',
      excerpt: 'نشرح التفاصيل الحاسمة مثل مبلغ التغطية ونطاقها عند اختيار التأمين الصحي للسفر المطلوب لطلبات تأشيرة شنغن.',
      content: `التأمين الصحي للسفر هو أحد الوثائق الإلزامية لطلبات تأشيرة شنغن ويجب أن يوفر تغطية لا تقل عن 30,000 يورو. ومع ذلك، لا تستوفي كل بوليصة هذا الشرط بالطريقة نفسها.

## ما يجب البحث عنه في البوليصة

- **مبلغ التغطية**: ساري في منطقة شنغن بالكامل، بحد أدنى 30,000 يورو
- **النطاق الجغرافي**: يجب أن يغطي منطقة شنغن بالكامل، لا دولة واحدة فقط
- **المدة الزمنية**: يجب أن تغطي رحلتك بالكامل (بما في ذلك الذهاب والعودة)
- **الإخلاء الطبي الطارئ**: يجب أن تغطي تكاليف الإخلاء إلى تركيا في حال حدوث مشكلة صحية جدية

## نقطة يكثر الخلط فيها

تُقدَّم بعض بوالص التأمين على أنها امتداد لتأمينك الصحي المحلي، لكنها لا تُقبل كصالحة لطلب تأشيرة شنغن، لأن طلب التأشيرة يتطلب شكلًا وبنية تغطية خاصة للوثائق المطلوبة. تأكد دائمًا من ملاءمة بوليصتك لطلب التأشيرة قبل شرائها.

## في حالات خاصة مثل تأشيرة الولادة في كندا

إذا كنت مسافرة إلى كندا بنية الولادة، فإن التأمين الصحي القياسي للسفر لا يكفي — يلزم بوليصة تغطي تكاليف الولادة والمضاعفات خصيصًا. تناولنا هذا الموضوع بالتفصيل في مقال منفصل.

في استشارتنا الأولية، نُقيّم معك خيارات التأمين المناسبة لدولتك الوجهة ونوع تأشيرتك، لمنع رفض طلبك بسبب هذا الشرط.`,
    },
  },

  'banka-hesap-ozeti-ile-mali-yeterlilik-nasil-kanitlanir': {
    en: {
      title: 'How to Prove Financial Sufficiency with a Bank Statement?',
      excerpt: 'One of the most question-raising topics in visa applications is the bank statement — how much balance is enough, which transactions raise flags?',
      content: `There is no single definitive answer to "how much balance should be enough" in visa applications — the consulate evaluates it together with the travel duration, the country, and the applicant's overall profile. Still, there are some general principles worth keeping in mind.

## What the Consulate Looks For

What matters more than the size of the balance is that the account shows a **regular and explainable** financial history. Sudden, large deposits with an unclear source in the last 3-6 months can raise suspicion.

## What to Watch Out For

- Account activity being consistent with your salary/income pattern
- Avoiding depositing a large "showcase" amount right before the application
- The bank statement carrying an official bank stamp/approval
- Supporting it with additional income documents if needed (payslip, tax certificate, etc.)

## A Common Mistake

Some applicants deposit a large sum into their account shortly before applying, only to withdraw it right after. This is clearly visible in the account activity and can be evaluated negatively by the consulate.

In the initial consultation, we assess your genuine financial situation together and clarify which additional documents would strengthen your file. Our goal is not to guide you toward creating a misleading appearance, but to help you present your actual situation as accurately and strongly as possible.`,
    },
    ar: {
      title: 'كيف تُثبت الكفاية المالية عبر كشف الحساب المصرفي؟',
      excerpt: 'من أكثر المواضيع التي تثير التساؤلات في طلبات التأشيرة: كشف الحساب المصرفي — كم يجب أن يكون الرصيد كافيًا، وأي حركات تثير الانتباه؟',
      content: `لا توجد إجابة واحدة قاطعة لسؤال "كم يجب أن يكون الرصيد الكافي" في طلبات التأشيرة — تُقيّم القنصلية ذلك مع مدة السفر والدولة والملف العام لمقدم الطلب. ومع ذلك، توجد بعض المبادئ العامة التي يجب مراعاتها.

## ما تبحث عنه القنصلية

الأهم من حجم الرصيد هو أن يُظهر الحساب تاريخًا ماليًا **منتظمًا وقابلًا للتفسير**. حركات الإيداع المفاجئة والكبيرة وغير واضحة المصدر خلال آخر 3-6 أشهر قد تثير الشك.

## ما يجب مراعاته

- أن تكون حركات الحساب متسقة مع نمط راتبك/دخلك
- تجنب إيداع مبلغ كبير "للعرض" قبل التقديم مباشرة
- أن يحمل كشف الحساب ختم/موافقة البنك الرسمية
- دعمه بوثائق دخل إضافية عند الحاجة (كشف راتب، بطاقة ضريبية، إلخ)

## خطأ شائع

يقوم بعض مقدمي الطلبات بإيداع مبلغ كبير في حسابهم قبل التقديم بفترة قصيرة، ثم يسحبونه مباشرة بعد ذلك. يظهر هذا بوضوح في حركات الحساب وقد تُقيّمه القنصلية بشكل سلبي.

في استشارتنا الأولية، نُقيّم معك وضعك المالي الحقيقي ونوضح أي وثائق إضافية قد تُقوّي ملفك. هدفنا ليس توجيهك لإنشاء مظهر مضلل، بل مساعدتك على تقديم وضعك الفعلي بأدق وأقوى شكل ممكن.`,
    },
  },

  'kanadada-dogum-yapmak-surec-maliyet-bilinmesi-gerekenler': {
    en: {
      title: 'Giving Birth in Canada: Process, Cost, and What You Need to Know',
      excerpt: 'The realities of the visa process, costs, and citizenship for families planning to give birth in Canada.',
      content: `Canada is one of the countries in the world that applies birthright citizenship (jus soli) — every child born on Canadian soil automatically becomes a Canadian citizen, regardless of the parents' nationality. This leads some families to choose to give birth in Canada. However, it's crucial to understand certain critical aspects of the process.

## There Is No Officially Separate "Birth Visa"

Those who wish to give birth in Canada apply with the standard **visitor visa (TRV)**. **Failing to clearly declare** your pregnancy status and intent to give birth during the application can be considered "misrepresentation" and may result in a ban from entering Canada of up to 5 years.

## Be Realistic About Cost

Since you are not covered by public health insurance under visitor status, delivery costs are entirely your responsibility. Even an uncomplicated birth typically costs between CAD 10,000-20,000, and costs can be much higher in case of complications. Many standard travel insurance policies do not cover pregnancy and childbirth — a policy with specific maternity coverage is essential.

## The Child Becomes a Citizen, the Parents Do Not

While the child born automatically becomes a Canadian citizen, this does **not grant** the parents any right to residency, work, or citizenship in Canada. Parents must return to Turkey once their visitor status expires.

## Our Approach

This is a sensitive matter that requires careful legal and financial planning. From document preparation to the hospital admission process, from insurance selection to the declaration text, we provide transparent and honest guidance at every step — because a family that is misinformed on this matter can face both financial and legal risks.`,
    },
    ar: {
      title: 'الولادة في كندا: العملية والتكلفة وما تحتاج إلى معرفته',
      excerpt: 'حقائق حول عملية التأشيرة والتكاليف والجنسية للعائلات التي تخطط للولادة في كندا.',
      content: `كندا من الدول في العالم التي تطبق مبدأ حق الأرض (jus soli) في الجنسية — كل طفل يُولد على الأراضي الكندية يصبح مواطنًا كنديًا تلقائيًا، بغض النظر عن جنسية والديه. هذا يدفع بعض العائلات لاختيار الولادة في كندا. لكن من المهم جدًا فهم بعض الجوانب الحاسمة في هذه العملية.

## لا توجد رسميًا "تأشيرة ولادة" منفصلة

من يرغب في الولادة في كندا يتقدم بطلب **تأشيرة الزائر القياسية (TRV)**. **عدم الإفصاح بوضوح** عن حالة الحمل ونية الولادة خلال الطلب قد يُعتبر "تحريفًا" وقد يؤدي إلى منع دخول كندا لمدة تصل إلى 5 سنوات.

## كن واقعيًا بشأن التكلفة

بما أنك لا تخضعين للتأمين الصحي العام بصفتك زائرة، فإن تكاليف الولادة تقع بالكامل على عاتقك. حتى الولادة دون مضاعفات تكلف عادةً بين 10,000-20,000 دولار كندي، وقد تكون التكاليف أعلى بكثير في حال حدوث مضاعفات. لا تغطي كثير من بوالص التأمين القياسية للسفر الحمل والولادة — لذا يُعد وجود بوليصة تغطي الولادة خصيصًا أمرًا ضروريًا.

## الطفل يصبح مواطنًا، والوالدان لا

بينما يصبح الطفل المولود مواطنًا كنديًا تلقائيًا، فإن هذا **لا يمنح** الوالدين أي حق في الإقامة أو العمل أو الجنسية في كندا. يجب على الوالدين العودة إلى تركيا عند انتهاء صلاحية وضعهما كزائرين.

## نهجنا

هذا موضوع حساس يتطلب تخطيطًا قانونيًا وماليًا دقيقًا. من إعداد الوثائق إلى عملية قبول المستشفى، ومن اختيار التأمين إلى نص الإفصاح، نقدم استشارة شفافة وصادقة في كل خطوة — لأن عائلة غير مُطّلعة بشكل صحيح على هذا الموضوع قد تواجه مخاطر مالية وقانونية.`,
    },
  },
  'ab-yeni-giris-cikis-sistemi-ees-schengen-seyahatinde-degisen': {
    en: {
      title: "The EU's New Entry-Exit System (EES) Is Live: What's Changing for Schengen Travel?",
      excerpt: 'The European Union has fully rolled out its new border system, which replaces passport stamps with digital records, across all Schengen countries as of April 10, 2026.',
      content: `The European Union's new **Entry/Exit System (EES)**, after starting to roll out gradually on October 12, 2025, became fully operational across all Schengen countries as of **April 10, 2026**. This is an important change that directly affects the border-crossing experience for Turkish citizens traveling to the Schengen area.

## What's Changing?

Your passport no longer receives a physical entry-exit stamp; instead, your **fingerprints, facial photo, and travel document information** are recorded digitally. The system automatically tracks the entries and exits of third-country nationals entering the Schengen area for short stays (under the 90/180-day rule).

## Why Does It Matter?

- **The 90/180-day rule is now calculated automatically** — the system digitally tracks how long you've stayed, which makes it more critical than ever for you to keep track of your own stay duration.
- Border crossings **may take longer than expected** during initial passages due to the biometric enrollment process; we recommend factoring this into your travel plan, especially during busy periods.
- Member states can temporarily relax checks during periods of congestion (for up to 90 days, extendable by 60 days if necessary).

## How Does It Affect Your Visa Application?

EES does not directly change your visa application process — your document list and application steps remain the same. However, when planning travel, we strongly advise our customers — especially those using multiple-entry visas and traveling frequently — to track their stay durations in line with this new system.

We follow the latest developments closely and provide you with tailored information during our initial consultation.`,
    },
    ar: {
      title: 'نظام الدخول والخروج الجديد للاتحاد الأوروبي (EES) يدخل حيز التنفيذ: ما الذي يتغير في السفر إلى منطقة شنغن؟',
      excerpt: 'طبّق الاتحاد الأوروبي بالكامل نظام الحدود الجديد، الذي يستبدل أختام الجوازات بسجلات رقمية، في جميع دول شنغن اعتبارًا من 10 أبريل 2026.',
      content: `دخل نظام **الدخول والخروج (EES)** الجديد للاتحاد الأوروبي حيز التنفيذ الكامل في جميع دول شنغن اعتبارًا من **10 أبريل 2026**، بعد أن بدأ تطبيقه تدريجيًا في 12 أكتوبر 2025. هذا تغيير مهم يؤثر مباشرة على تجربة عبور الحدود للمواطنين الترك المسافرين إلى منطقة شنغن.

## ما الذي يتغير؟

لن يُختم جوازك بعد الآن بختم دخول وخروج فعلي؛ بل يتم تسجيل **بصمات أصابعك وصورة وجهك ومعلومات وثيقة سفرك** رقميًا. يتتبع النظام تلقائيًا عمليات دخول وخروج مواطني الدول الأخرى الذين يدخلون منطقة شنغن لفترات قصيرة (بموجب قاعدة 90/180 يومًا).

## لماذا هذا مهم؟

- **يتم الآن حساب قاعدة 90/180 يومًا تلقائيًا** — يتتبع النظام رقميًا مدة إقامتك، لذا أصبح تتبع مدة إقامتك بنفسك أكثر أهمية من قبل.
- قد تستغرق نقاط العبور الحدودية **وقتًا أطول من المتوقع** في المرات الأولى بسبب عملية التسجيل البيومتري؛ نوصي بأخذ ذلك بعين الاعتبار في خطة سفرك، خاصة في المواسم المزدحمة.
- يمكن للدول الأعضاء تخفيف الرقابة مؤقتًا في حالات الازدحام (لمدة تصل إلى 90 يومًا، قابلة للتمديد 60 يومًا إذا لزم الأمر).

## كيف يؤثر على طلب تأشيرتك؟

لا يغيّر نظام EES عملية طلب التأشيرة مباشرة — تبقى قائمة الوثائق وخطوات التقديم كما هي. لكننا ننصح بشدة عملاءنا، خاصة من يستخدمون تأشيرات الدخول المتعدد ويسافرون بشكل متكرر، بتتبع مدد إقامتهم بما يتوافق مع هذا النظام الجديد عند التخطيط للسفر.

نتابع أحدث التطورات، ونقدم لك معلومات مخصصة في استشارتنا الأولية.`,
    },
  },

  'aile-birlesimi-vizesi-basvurusunda-dikkat-edilmesi-gerekenler': {
    en: {
      title: 'What to Pay Attention to in a Family Reunion Visa Application',
      excerpt: "We compiled critical points such as proof of kinship, the inviting person's documents, and financial sufficiency for family reunion visa applications.",
      content: `A family reunion visa requires a different set of documents and evaluation process for applicants who wish to join a family member living abroad. In this article, we cover the most commonly encountered points.

## Why Is Proof of Kinship So Important?

In family reunion applications, the consulate first evaluates the authenticity of the declared family relationship. Official documents such as a civil registry record, birth certificate, or marriage certificate must be current and complete.

## Documents Required from the Inviting Person

Your family member abroad is generally asked to prepare the following documents:

- A copy of the residence permit or citizenship document
- An invitation letter (stating the purpose and duration of the visit)
- A declaration of accommodation and financial support (if hosting you at their home)

## Common Mistakes

- Kinship documents not being current
- The invitation letter contradicting the information in the application form
- The visit duration being stated vaguely or unrealistically

## Our Approach

In family reunion applications, we evaluate both your documents and those of your inviting family member together, ensuring a consistent file is created between both parties. The attention paid to detail in this type of application can be decisive for the process to proceed smoothly.`,
    },
    ar: {
      title: 'ما يجب مراعاته في طلب تأشيرة جمع شمل الأسرة',
      excerpt: 'جمعنا نقاطًا حاسمة مثل إثبات القرابة ووثائق الشخص الداعي والكفاية المالية في طلبات تأشيرة جمع شمل الأسرة.',
      content: `تتطلب تأشيرة جمع شمل الأسرة مجموعة مختلفة من الوثائق وعملية تقييم مختلفة لمقدمي الطلبات الذين يرغبون في الانضمام إلى فرد من الأسرة يعيش في الخارج. في هذا المقال، نتناول أكثر النقاط شيوعًا.

## لماذا يُعد إثبات القرابة مهمًا جدًا؟

في طلبات جمع شمل الأسرة، تُقيّم القنصلية أولاً صحة العلاقة العائلية المُعلَنة. يجب أن تكون الوثائق الرسمية مثل سجل النفوس أو شهادة الميلاد أو عقد الزواج حديثة وكاملة.

## الوثائق المطلوبة من الشخص الداعي

يُطلب عادةً من فرد أسرتك في الخارج إعداد الوثائق التالية:

- نسخة من إذن الإقامة أو وثيقة الجنسية
- خطاب دعوة (يوضح غرض الزيارة ومدتها)
- إفصاح عن الإقامة والدعم المالي (في حال استضافتك في منزله)

## الأخطاء الشائعة

- عدم كون وثائق القرابة حديثة
- تعارض خطاب الدعوة مع المعلومات الواردة في نموذج الطلب
- ذكر مدة الزيارة بشكل غامض أو غير واقعي

## نهجنا

في طلبات جمع شمل الأسرة، نُقيّم معًا وثائقك ووثائق فرد أسرتك الداعي، لضمان إنشاء ملف متسق بين الطرفين. الاهتمام بالتفاصيل في هذا النوع من الطلبات قد يكون حاسمًا لسير العملية بسلاسة.`,
    },
  },

  'schengen-vizesi-reddi-en-sik-7-neden': {
    en: {
      title: 'Schengen Visa Refusal: The 7 Most Common Reasons and How to Prevent Them',
      excerpt: 'We explain the 7 most common reasons behind Schengen visa refusals and how to avoid them.',
      content: `When a Schengen visa application is refused, the underlying reason is often not a single major mistake, but a combination of several small shortcomings. We compiled the 7 most common reasons.

## 1. Doubt About the Purpose of Travel

Failing to present the purpose of your trip clearly and consistently in the application file is one of the most common reasons for refusal.

## 2. Insufficient or Inconsistent Financial Documents

A refusal can result if your bank statement doesn't cover your travel expenses or if account activity appears suspicious.

## 3. Weak Proof of Ties to Turkey

The consulate looks for strong evidence that the applicant will return to Turkey at the end of the trip (such as employment, family, or property).

## 4. Missing or Invalid Travel Health Insurance

Policies that don't meet the minimum €30,000 coverage requirement or don't cover the entire Schengen area get rejected.

## 5. Inconsistent or Contradictory Documents

Information in the cover letter, reservations, and application form not matching each other is a serious red flag.

## 6. A Previous Schengen Violation

Having overstayed a visa on a previous trip directly and negatively affects subsequent applications.

## 7. Deficiencies in the Invitation Letter or Employer Document

For business or family visit applications, missing or incorrect documents from the inviting party is a frequently encountered problem.

## How to Prevent It?

Most of these mistakes can be prevented by reviewing the file as a whole before applying. In our initial consultation, we check your file together against these 7 points, clarifying any missing or inconsistent details before you apply. We'd still like to point out: no consultancy firm can guarantee approval — the final decision always rests with the relevant consulate.`,
    },
    ar: {
      title: 'رفض تأشيرة شنغن: 7 أسباب شائعة وكيفية تجنبها',
      excerpt: 'نشرح أكثر 7 أسباب شيوعًا لرفض طلبات تأشيرة شنغن وكيف يمكن تجنبها.',
      content: `عندما يُرفض طلب تأشيرة شنغن، غالبًا لا يكون السبب الكامن خطأً كبيرًا واحدًا، بل تراكم عدة نقاط نقص صغيرة. جمعنا أكثر 7 أسباب شيوعًا.

## 1. الشك في غرض السفر

عدم توضيح غرض رحلتك بشكل واضح ومتسق في ملف الطلب من أكثر أسباب الرفض شيوعًا.

## 2. وثائق مالية غير كافية أو غير متسقة

قد ينتج الرفض إذا لم يغطِ كشف حسابك المصرفي تكاليف سفرك أو إذا بدت حركات الحساب مشبوهة.

## 3. ضعف إثبات الارتباط بتركيا

تبحث القنصلية عن أدلة قوية على أن مقدم الطلب سيعود إلى تركيا في نهاية الرحلة (مثل العمل أو العائلة أو الملكية).

## 4. تأمين صحي للسفر غير مكتمل أو غير صالح

تُرفض البوالص التي لا تستوفي شرط التغطية الأدنى البالغ 30,000 يورو أو التي لا تغطي منطقة شنغن بالكامل.

## 5. وثائق غير متسقة أو متعارضة

عدم تطابق المعلومات في خطاب النية والحجوزات ونموذج الطلب مع بعضها علامة تحذير جدية.

## 6. مخالفة سابقة في شنغن

تجاوز مدة تأشيرة سابقة في رحلة سابقة يؤثر سلبًا ومباشرة على الطلبات اللاحقة.

## 7. نقص في خطاب الدعوة أو وثيقة صاحب العمل

في طلبات الزيارة التجارية أو العائلية، يُعد نقص أو خطأ وثائق الطرف الداعي مشكلة شائعة.

## كيف يمكن تجنب ذلك؟

يمكن تجنب معظم هذه الأخطاء من خلال مراجعة الملف بشكل كامل قبل التقديم. في استشارتنا الأولية، نتحقق من ملفك معًا وفقًا لهذه 7 نقاط، ونوضح أي تفاصيل ناقصة أو غير متسقة قبل التقديم. نود أن نشير أيضًا: لا يمكن لأي شركة استشارية ضمان الموافقة — القرار النهائي يبقى دائمًا بيد القنصلية المعنية.`,
    },
  },

  'abd-yeni-250-dolar-visa-integrity-fee-kimleri-kapsiyor': {
    en: {
      title: 'The US\'s New $250 "Visa Integrity Fee": Who Does It Apply To?',
      excerpt: 'The US is starting to collect a new additional fee of $250 from most visa applicants. How does it affect B1/B2, F1, and H1B applicants?',
      content: `The United States is introducing a new **"Visa Integrity Fee"** for most nonimmigrant visa categories. This additional fee concerns a wide range of applicants, from the B1/B2 tourist-business visa to the F1 student visa, from the H-1B work visa to J-1 exchange programs.

## How Much Is the Fee and When Does It Start?

The new fee has been set at **$250** and is collected when the visa is approved (in addition to the existing MRV application fee). Although the law took effect on October 1, 2025, actual implementation is being rolled out during the 2026 fiscal year (by September 30, 2026), and the rollout timing differs between consulates — meaning when this fee starts being collected may vary depending on the consulate you apply to.

## Who Is Exempt?

Those traveling under the Visa Waiver Program and immigrant visa applicants are exempt from this fee. However, since Turkish citizens generally travel to the US with a visa, this exemption does not apply to most of our customers.

## Is the Fee Refundable?

Based on information available so far, the refund conditions and full implementation details of the fee are still being clarified; this fee does not replace the standard MRV fee and should be considered an **additional** cost.

## Our Recommendation

Since fee changes like this are a frequently updated area, if you're planning a US visa application, we clarify the current cost table with you in our initial consultation. This way, you can plan your budget without encountering a surprise additional cost.`,
    },
    ar: {
      title: 'رسم "سلامة التأشيرة" الأمريكي الجديد البالغ 250 دولارًا: من يشمله؟',
      excerpt: 'بدأت الولايات المتحدة بتحصيل رسم إضافي جديد بقيمة 250 دولارًا من معظم مقدمي طلبات التأشيرة. كيف يؤثر ذلك على مقدمي طلبات B1/B2 و F1 و H1B؟',
      content: `تُقدّم الولايات المتحدة رسمًا جديدًا يُسمى **"رسم سلامة التأشيرة" (Visa Integrity Fee)** لمعظم فئات التأشيرات غير الهجرية. يخص هذا الرسم الإضافي مجموعة واسعة من مقدمي الطلبات، من تأشيرة B1/B2 السياحية-التجارية إلى تأشيرة الطالب F1، ومن تأشيرة العمل H-1B إلى برامج التبادل J-1.

## كم قيمة الرسم ومتى يبدأ؟

حُدد الرسم الجديد بـ **250 دولارًا أمريكيًا** ويُحصَّل عند الموافقة على التأشيرة (بالإضافة إلى رسم طلب MRV الحالي). وعلى الرغم من أن القانون دخل حيز التنفيذ في 1 أكتوبر 2025، فإن التطبيق الفعلي يتم تدريجيًا خلال السنة المالية 2026 (حتى 30 سبتمبر 2026)، ويختلف توقيت التطبيق بين القنصليات — أي أن توقيت بدء تحصيل هذا الرسم قد يختلف حسب القنصلية التي تتقدم إليها.

## من المستثنى؟

يُستثنى من هذا الرسم المسافرون بموجب برنامج التنازل عن التأشيرة (Visa Waiver Program) ومقدمو طلبات تأشيرة الهجرة. لكن بما أن المواطنين الترك يسافرون إلى الولايات المتحدة عادةً بتأشيرة، فإن هذا الاستثناء لا ينطبق على معظم عملائنا.

## هل يُرد الرسم؟

بناءً على المعلومات المتاحة حتى الآن، لا تزال شروط استرداد الرسم وتفاصيل التطبيق الكاملة قيد التوضيح؛ هذا الرسم لا يحل محل رسم MRV القياسي ويجب اعتباره تكلفة **إضافية**.

## نصيحتنا

بما أن تغييرات الرسوم من هذا النوع مجال يُحدَّث بشكل متكرر، إذا كنت تخطط للتقديم على تأشيرة أمريكية، فإننا نوضح لك جدول التكاليف الحالي في استشارتنا الأولية. بهذه الطريقة، يمكنك التخطيط لميزانيتك دون مواجهة تكلفة إضافية مفاجئة.`,
    },
  },

  'schengen-vize-ucreti-90-euroya-yukseldi': {
    en: {
      title: 'Schengen Visa Fee Rises to €90: What You Need to Know',
      excerpt: 'The European Union raised the standard Schengen visa fee from €80 to €90 as of June 11, 2026.',
      content: `The European Union raised the standard visa application fee for the Schengen area from **€80 to €90**, effective **June 11, 2026**. This increase applies to all 29 Schengen member and associated countries.

## New Fee Table

- **Adult (standard)**: €90
- **Child aged 6-12**: €45
- **Child under 6**: Free

This increase corresponds to roughly a 12.5% rise. One important detail: **applications submitted before June 11, 2026** are evaluated under the old €80 rate.

## What's Not Included in This Fee?

The visa application center fee (for example, the additional service fee charged by service providers such as VFS Global or TLS Contact) is **not included** in this amount and remains unchanged. So your total application cost is the sum of the official visa fee plus the service provider's fee.

## Don't Confuse It with the Consultancy Fee

This fee is entirely an **official government/EU charge** and is paid directly to the relevant consulate or visa application center — it is completely separate from Menekşe Vize's consultancy fee and is not determined by us.

## Our Recommendation

We take this current fee into account when timing your application, and we give you clear, up-to-date information about the total cost in our initial consultation. We regularly follow changes in visa fees and share the current amounts with you.`,
    },
    ar: {
      title: 'رسوم تأشيرة شنغن ترتفع إلى 90 يورو: ما تحتاج إلى معرفته',
      excerpt: 'رفع الاتحاد الأوروبي رسوم تأشيرة شنغن القياسية من 80 يورو إلى 90 يورو اعتبارًا من 11 يونيو 2026.',
      content: `رفع الاتحاد الأوروبي رسوم طلب التأشيرة القياسية لمنطقة شنغن من **80 يورو إلى 90 يورو**، اعتبارًا من **11 يونيو 2026**. تنطبق هذه الزيادة على جميع دول شنغن الأعضاء والمنتسبة البالغ عددها 29 دولة.

## جدول الرسوم الجديد

- **البالغون (القياسي)**: 90 يورو
- **الأطفال من 6 إلى 12 عامًا**: 45 يورو
- **الأطفال دون 6 أعوام**: مجانًا

تُعادل هذه الزيادة نسبة ارتفاع تبلغ حوالي 12.5%. تفصيل مهم: **الطلبات المُقدَّمة قبل 11 يونيو 2026** تُقيَّم وفق التعريفة القديمة البالغة 80 يورو.

## ما لا يشمله هذا الرسم؟

رسوم مركز طلب التأشيرة (مثل رسوم الخدمة الإضافية التي تفرضها جهات مثل VFS Global أو TLS Contact) **غير مشمولة** في هذا المبلغ وتبقى دون تغيير. أي أن التكلفة الإجمالية لطلبك تتكون من الرسم الرسمي للتأشيرة بالإضافة إلى رسم مزود الخدمة.

## لا تخلط بينه وبين رسوم الاستشارة

هذا الرسم هو **رسم حكومي/أوروبي رسمي بالكامل** ويُدفع مباشرة إلى القنصلية المعنية أو مركز طلب التأشيرة — وهو مستقل تمامًا عن رسوم استشارة منكشة فيزا (Menekşe Vize) ولا نحدده نحن.

## نصيحتنا

نأخذ هذا الرسم الحالي في الاعتبار عند تحديد توقيت طلبك، ونقدم لك معلومات واضحة وحديثة حول التكلفة الإجمالية في استشارتنا الأولية. نتابع بانتظام التغييرات في رسوم التأشيرات ونشارك معك المبالغ الحالية.`,
    },
  },
  'vize-basvurusu-reddedildi-simdi-ne-yapmali': {
    en: {
      title: 'Your Visa Application Was Refused — Now What?',
      excerpt: 'A visa refusal is not the end of the road. A practical guide to understanding the reason for refusal and moving forward with the right steps.',
      content: `Receiving a visa refusal can be worrying, but there are a few clear steps to take before panicking.

## 1. Read the Refusal Reason Carefully

The refusal notice usually states one or more reasons (e.g., "purpose of travel not sufficiently proven," "insufficient proof of financial sufficiency"). This reason is the most important piece of information determining your next step.

## 2. Don't Repeat the Same Mistake

Before submitting a new application, you need to concretely address the shortcoming stated in the refusal reason. Resubmitting the same file with the same deficiencies usually results in a second refusal.

## 3. Consider Your Right to Appeal

In some countries (for example, Schengen visas), you have the right to a formal appeal against the refusal decision. This process varies by country and usually must be filed within a specific timeframe.

## 4. Is There a Waiting Period for a New Application?

Some countries may impose a minimum waiting period for a new application; it's important to confirm this information from the official sources of the country you're applying to.

## 5. Re-Evaluate Your File

The most valuable step after a refusal is to review your entire file as a whole — not just the specific shortcoming mentioned, but also other points that would ensure consistency across the whole file.

## Our Approach

For customers who receive a refusal, we first analyze the refusal reason together, then draw up a concrete action plan for a new application. Keep in mind: a refusal decision is a stage that can be overcome with the right preparation, and the final decision always rests with the relevant country's competent authority — no consultancy firm can guarantee approval for a second application either.`,
    },
    ar: {
      title: 'تم رفض طلب تأشيرتك، ماذا تفعل الآن؟',
      excerpt: 'رفض التأشيرة ليس نهاية الطريق. دليل عملي لفهم سبب الرفض والتقدم بالخطوات الصحيحة.',
      content: `يمكن أن يكون تلقي رفض التأشيرة أمرًا مقلقًا، لكن هناك بعض الخطوات الواضحة التي يجب اتخاذها قبل الذعر.

## 1. اقرأ سبب الرفض بعناية

يتضمن إشعار الرفض عادةً سببًا واحدًا أو أكثر (مثل "لم يُثبت غرض السفر بشكل كافٍ"، "وثيقة الكفاية المالية غير كافية"). هذا السبب هو أهم معلومة تحدد خطوتك التالية.

## 2. لا تكرر الخطأ نفسه

قبل تقديم طلب جديد، يجب عليك معالجة النقص المذكور في سبب الرفض بشكل ملموس. تقديم الملف نفسه بالنقائص نفسها يؤدي عادةً إلى رفض ثانٍ.

## 3. قيّم حقك في الاستئناف

في بعض الدول (مثل تأشيرات شنغن)، لديك حق تقديم استئناف رسمي ضد قرار الرفض. تختلف هذه العملية حسب الدولة ويجب تقديمها عادةً في غضون فترة زمنية محددة.

## 4. هل هناك فترة انتظار للطلب الجديد؟

قد تفرض بعض الدول فترة انتظار دنيا للطلب الجديد؛ من المهم التحقق من هذه المعلومة من المصادر الرسمية للدولة التي تتقدم إليها.

## 5. أعد تقييم ملفك

الخطوة الأكثر قيمة بعد الرفض هي مراجعة ملفك بالكامل — ليس فقط النقص المحدد المذكور، بل أيضًا النقاط الأخرى التي تضمن اتساق الملف بشكل عام.

## نهجنا

مع العملاء الذين يتلقون رفضًا، نحلل أولاً سبب الرفض معًا، ثم نضع خطة عمل ملموسة لطلب جديد. تذكر: قرار الرفض مرحلة يمكن تجاوزها بالاستعداد الصحيح، والقرار النهائي يبقى دائمًا بيد السلطة المختصة في الدولة المعنية — لا يمكن لأي شركة استشارية ضمان الموافقة على الطلب الثاني أيضًا.`,
    },
  },

  'etias-2026da-basliyor-turk-vatandaslarini-etkiliyor-mu': {
    en: {
      title: 'ETIAS Launches in Late 2026: Does It Affect Turkish Citizens?',
      excerpt: 'The European Travel Information and Authorisation System (ETIAS) launches in the last quarter of 2026. So what does this system mean for Turkish citizens?',
      content: `**ETIAS (European Travel Information and Authorisation System)** has been on the agenda for years as a repeatedly postponed system, and it is currently planned to launch in the **last quarter of 2026 (October-December)**. After it launches, following an approximately 6-month transition period, it is expected to become mandatory around **April 2027**.

## What Exactly Is ETIAS?

ETIAS is a system that requires citizens of around 60 visa-exempt countries (i.e., those who can enter the Schengen area without a visa) to obtain an online travel authorization before traveling — it works similarly to the US's ESTA system.

## Does It Affect Turkish Citizens?

**Short answer: No, not directly.** Since Turkish citizens **already cannot enter** the Schengen area without a visa, they are not on the list of "visa-exempt countries" covered by ETIAS. This means that for the vast majority of our Menekşe Vize customers, the process will continue independently of this system, in the form of a standard Schengen visa application.

## So Why Do We Need to Know About It?

- If you have family members or friends traveling with you who hold citizenship of a visa-exempt country (for example, a second nationality), they may need to obtain ETIAS.
- ETIAS, together with the previously launched EES (Entry/Exit System), is comprehensively digitalizing the EU's border control infrastructure — this shift may, in the medium term, also affect some aspects of visa processes (such as appointment systems and data sharing).

## Our Approach

We closely follow developments in EU border systems and properly inform you and any people of different nationalities traveling within your group. As ETIAS's exact start date becomes officially clear, we will continue to share up-to-date information through this blog.`,
    },
    ar: {
      title: 'نظام ETIAS ينطلق في أواخر 2026: هل يؤثر على المواطنين الترك؟',
      excerpt: 'ينطلق نظام معلومات وتصريح السفر الأوروبي (ETIAS) في الربع الأخير من عام 2026. فماذا يعني هذا النظام للمواطنين الترك؟',
      content: `يُعد نظام **ETIAS (نظام معلومات وتصريح السفر الأوروبي)** على جدول الأعمال منذ سنوات كنظام تأجَّل مرارًا، ومن المخطط حاليًا إطلاقه في **الربع الأخير من عام 2026 (أكتوبر-ديسمبر)**. وبعد إطلاقه، يُتوقع أن يصبح إلزاميًا حوالي **أبريل 2027** بعد فترة انتقالية تبلغ حوالي 6 أشهر.

## ما هو نظام ETIAS بالضبط؟

ETIAS نظام يُلزم مواطني حوالي 60 دولة معفاة من التأشيرة (أي يمكنهم دخول منطقة شنغن دون تأشيرة) بالحصول على تصريح سفر عبر الإنترنت قبل السفر — يعمل بشكل مشابه لنظام ESTA الأمريكي.

## هل يؤثر على المواطنين الترك؟

**الإجابة المختصرة: لا، لا يؤثر مباشرة.** بما أن المواطنين الترك **لا يمكنهم بالفعل** دخول منطقة شنغن دون تأشيرة، فهم غير مدرجين في قائمة "الدول المعفاة من التأشيرة" التي يغطيها ETIAS. أي أن العملية بالنسبة لغالبية عملاء منكشة فيزا (Menekşe Vize) ستستمر بشكل مستقل عن هذا النظام، في شكل طلب تأشيرة شنغن قياسي.

## فلماذا يجب أن نعرف عن هذا؟

- إذا كان لديك أفراد من عائلتك أو أصدقاء يسافرون معك يحملون جنسية دولة معفاة من التأشيرة (مثل جنسية ثانية)، فقد يحتاجون إلى الحصول على ETIAS.
- يعمل نظام ETIAS، إلى جانب نظام EES (نظام الدخول والخروج) الذي انطلق سابقًا، على رقمنة البنية التحتية لمراقبة الحدود في الاتحاد الأوروبي بشكل شامل — وقد يؤثر هذا التحول على المدى المتوسط في بعض جوانب عمليات التأشيرة أيضًا (مثل نظم المواعيد ومشاركة البيانات).

## نهجنا

نتابع عن كثب التطورات في أنظمة حدود الاتحاد الأوروبي، ونُطلعك بشكل صحيح أنت والأشخاص من جنسيات مختلفة الذين يسافرون معك ضمن مجموعتك. مع توضح تاريخ بدء ETIAS رسميًا، سنستمر في مشاركة المعلومات الحديثة عبر هذا البلوج.`,
    },
  },

  'yurt-disi-egitim-ogrenci-vizesi-basvuru-rehberi': {
    en: {
      title: 'What to Pay Attention to When Applying for a Student Visa for Studying Abroad',
      excerpt: 'We compiled the most question-raising points in student visa applications, from the acceptance letter to financial sufficiency.',
      content: `Student visa applications are examined in more detail by consulates than tourist or business visas, since they involve a longer-term planned stay. We compiled the points that raise the most questions.

## Letter of Acceptance

The foundation of the application is the official acceptance letter from the educational institution in the destination country. This document must clearly state the program name, duration, start date, and the school's recognition by the relevant authorities.

## Financial Sufficiency Expectations Are Higher

For student visas, financial sufficiency is evaluated not just for travel costs, but to cover the **entirety of education and living costs**. Sources such as scholarships, family support, or personal savings must be clear and documentable.

## Post-Study Intent Inquiry

Consular officers also assess the student's intent to return to their home country after finishing their studies. That's why elements such as family ties in Turkey and post-study career plans should be clearly expressed in the cover letter.

## Common Mistakes

- The acceptance letter not matching the program information in the application form
- Leaving unclear who will provide the financial resources and how
- The language proficiency certificate (if any) being incomplete or expired

## Our Approach

In student visa processes, we ensure both your acceptance process and financial documents are fully in line with the application requirements, and we prepare your file according to country-specific requirements. The final decision always rests with the relevant country's competent authority.`,
    },
    ar: {
      title: 'ما يجب مراعاته عند التقديم على تأشيرة الطالب للدراسة في الخارج',
      excerpt: 'جمعنا أكثر النقاط التي تثير التساؤلات في طلبات تأشيرة الطالب، من خطاب القبول إلى الكفاية المالية.',
      content: `تُفحص طلبات تأشيرة الطالب من قبل القنصليات بتفصيل أكبر من التأشيرات السياحية أو التجارية، لأنها تتضمن إقامة مخططة طويلة الأمد. جمعنا النقاط الأكثر إثارةً للتساؤلات.

## خطاب القبول

يُشكِّل خطاب القبول الرسمي من المؤسسة التعليمية في الدولة الوجهة أساس الطلب. يجب أن تتضمن هذه الوثيقة بوضوح اسم البرنامج ومدته وتاريخ بدايته، واعتماد المدرسة من الجهات المختصة.

## توقعات الكفاية المالية أعلى

في تأشيرات الطلاب، تُقيَّم الكفاية المالية ليس فقط لتغطية تكاليف السفر، بل لتغطية **إجمالي تكاليف الدراسة والمعيشة**. يجب أن تكون مصادر مثل المنح الدراسية أو دعم الأسرة أو المدخرات الشخصية واضحة وقابلة للتوثيق.

## استفسار النية بعد الدراسة

يُقيّم الموظفون القنصليون أيضًا نية الطالب في العودة إلى بلده بعد إنهاء دراسته. لذلك يجب التعبير بوضوح في خطاب النية عن عناصر مثل الروابط العائلية في تركيا وخطة المسار المهني بعد الدراسة.

## الأخطاء الشائعة

- عدم تطابق خطاب القبول مع معلومات البرنامج في نموذج الطلب
- عدم توضيح من سيوفر المصادر المالية وكيف
- عدم اكتمال شهادة إجادة اللغة (إن وجدت) أو انتهاء صلاحيتها

## نهجنا

في عمليات تأشيرة الطالب، نضمن توافق عملية قبولك ووثائقك المالية تمامًا مع شروط الطلب، ونُعِدّ ملفك وفقًا للمتطلبات الخاصة بكل دولة. يبقى القرار النهائي دائمًا بيد السلطة المختصة في الدولة المعنية.`,
    },
  },

  'ticari-vize-basvurusunda-davet-mektubu-ve-firma-belgeleri': {
    en: {
      title: 'How Should the Invitation Letter and Company Documents Be Prepared for a Business Visa Application?',
      excerpt: 'We explain how both your documents and those of the company inviting you should be prepared for business travel visa applications.',
      content: `Business (work-purpose) visa applications, unlike tourist applications, require both the applicant's documents and those of the inviting company abroad to be evaluated together as a whole.

## Documents Required from the Inviting Company

- An official invitation letter on company letterhead (stating the purpose, duration, and scope of the visit)
- The company's activity certificate or trade registry record
- If applicable, correspondence or a contract showing the business relationship between the two companies

## Documents Required from Your Company

- An official letter showing your position at your company
- Your company's activity certificate / tax certificate
- Clarifying whether travel expenses will be covered by the company or by you personally

## A Commonly Confused Point

A business visa should not be confused with a work permit — a business visa is issued for short-term activities such as meetings, trade fairs, or business negotiations; it does not permit paid employment in the destination country. The purpose of travel needs to be clearly defined within this framework in the application form.

## Common Mistakes

- The invitation letter being written with generic/vague statements (undetailed phrases like "for a business meeting")
- Missing documentation showing the relationship between the two companies
- The travel duration appearing disproportionate (too long) relative to the planned business schedule

## Our Approach

For business visa files, we evaluate both your documents and those of the inviting company together, preparing a file in which the business purpose is presented clearly and consistently.`,
    },
    ar: {
      title: 'كيف يجب إعداد خطاب الدعوة ووثائق الشركة لطلب تأشيرة العمل (التجارية)؟',
      excerpt: 'نشرح كيف يجب إعداد وثائقك ووثائق الشركة الداعية لك في طلبات تأشيرة السفر لأغراض العمل.',
      content: `تتطلب طلبات تأشيرة العمل (التجارية)، على عكس الطلبات السياحية، تقييم وثائق مقدم الطلب ووثائق الشركة الداعية في الخارج معًا كوحدة واحدة.

## الوثائق المطلوبة من الشركة الداعية

- خطاب دعوة رسمي على ورق رسمي للشركة (يوضح غرض الزيارة ومدتها ونطاقها)
- شهادة نشاط الشركة أو السجل التجاري
- إن وجدت، مراسلات أو عقد يُظهر العلاقة التجارية بين الشركتين

## الوثائق المطلوبة من شركتك

- خطاب رسمي يُظهر منصبك في شركتك
- شهادة نشاط شركتك / البطاقة الضريبية
- توضيح ما إذا كانت تكاليف السفر ستُغطّيها الشركة أو شخصيًا

## نقطة يكثر الخلط فيها

يجب عدم الخلط بين التأشيرة التجارية وإذن العمل — تُمنح التأشيرة التجارية لأنشطة قصيرة الأمد مثل الاجتماعات أو المعارض أو مفاوضات العمل؛ ولا تسمح بالعمل مدفوع الأجر في الدولة الوجهة. يجب تحديد غرض السفر بوضوح في نموذج الطلب ضمن هذا الإطار.

## الأخطاء الشائعة

- كتابة خطاب الدعوة بعبارات عامة/غامضة (عبارات غير مفصلة مثل "لأجل اجتماع عمل")
- نقص الوثيقة التي تُظهر العلاقة بين الشركتين
- ظهور مدة السفر غير متناسبة (طويلة جدًا) مقارنةً ببرنامج العمل المخطط

## نهجنا

في ملفات التأشيرة التجارية، نُقيّم وثائقك ووثائق الشركة الداعية معًا، ونُعِدّ ملفًا يُعرض فيه غرض العمل بوضوح واتساق.`,
    },
  },

  'vize-basvurusunda-biyometrik-fotograf-standartlari': {
    en: {
      title: 'Biometric Photo Standards in Visa Applications: Common Mistakes',
      excerpt: 'A detail that seems small but can delay your application: not following biometric photo standards. We explain how to get it right.',
      content: `One of the most underestimated yet most frequently application-delaying details in visa applications is failing to meet biometric photo standards. An unsuitable photo can result in your file being considered incomplete and your application being returned.

## General Standards

- **Size**: Usually 3.5 x 4.5 cm (may vary by country)
- **Background**: Plain, light-colored (usually white or light gray), no shadows
- **Date taken**: Must have been taken within the last 6 months
- **Facial expression**: Neutral expression, mouth closed, looking directly at the camera

## Common Mistakes

- A photo taken while wearing glasses (most countries now require photos without glasses)
- Any accessory covering the head or face other than a headscarf (hat, headband, etc.)
- Smiling or looking sideways expressions
- The photo being older than necessary (more than 1 year)
- Retouched or filtered photos

## Differences by Country

Not every country's biometric photo requirements are identical — for example, some countries require a digital format with a specific pixel resolution, while others only accept a printed photo. This detail must be confirmed before applying.

## Our Recommendation

We recommend having your photo taken at a professional studio, specifically requesting it as a "visa/passport photo." In our initial consultation, we clarify the current photo requirements of the country you're applying to, preventing your application from being delayed due to this small but important detail.`,
    },
    ar: {
      title: 'معايير الصورة البيومترية في طلبات التأشيرة: الأخطاء الشائعة',
      excerpt: 'تفصيل يبدو صغيرًا لكنه قد يؤخر طلبك: عدم اتباع معايير الصورة البيومترية. نشرح الطريقة الصحيحة.',
      content: `يُعد عدم استيفاء معايير الصورة البيومترية أحد أكثر التفاصيل التي يُقلَّل من شأنها لكنها تؤخر الطلب بشكل متكرر في طلبات التأشيرة. قد تؤدي صورة غير مناسبة إلى اعتبار ملفك غير مكتمل وإعادة طلبك.

## المعايير العامة

- **الحجم**: عادةً 3.5 × 4.5 سم (قد يختلف حسب الدولة)
- **الخلفية**: بسيطة، فاتحة اللون (عادةً بيضاء أو رمادية فاتحة)، بلا ظلال
- **تاريخ التصوير**: يجب أن تكون مأخوذة خلال آخر 6 أشهر
- **تعبير الوجه**: تعبير محايد، الفم مغلق، النظر مباشرة إلى الكاميرا

## الأخطاء الشائعة

- صورة مأخوذة أثناء ارتداء النظارات (تطلب معظم الدول الآن صورًا بدون نظارات)
- أي إكسسوار يغطي الرأس أو الوجه بخلاف الحجاب (قبعة، عصبة رأس، إلخ)
- تعبيرات مبتسمة أو النظر جانبًا
- كون الصورة أقدم من اللازم (أكثر من سنة)
- صور مُعدَّلة أو مُطبَّق عليها فلاتر

## الاختلافات حسب الدولة

لا تتطابق متطلبات الصورة البيومترية بين جميع الدول — فبعض الدول مثلًا تطلب صيغة رقمية بدقة بيكسل معينة، بينما تقبل دول أخرى فقط صورة مطبوعة. يجب التأكد من هذا التفصيل قبل التقديم.

## نصيحتنا

نوصي بتصوير صورتك في استوديو محترف، مع طلب صورة "تأشيرة/جواز سفر" خصيصًا. في استشارتنا الأولية، نوضح لك متطلبات الصورة الحالية للدولة التي تتقدم إليها، لمنع تأخير طلبك بسبب هذا التفصيل الصغير ولكن المهم.`,
    },
  },
  'coklu-giris-schengen-vizesi-nasil-alinir': {
    en: {
      title: 'How to Get a Multiple-Entry Schengen Visa?',
      excerpt: 'We explain who can obtain a multiple-entry Schengen visa, which offers great convenience for frequent travelers, and how the process works.',
      content: `For applicants who travel frequently to the Schengen area, obtaining a **multiple-entry** visa instead of a single-entry one removes the need to reapply before every trip. However, this type of visa is not granted automatically.

## Who Gets a Multiple-Entry Visa?

Consulates look at the applicant's **previous Schengen travel history** when evaluating a multiple-entry visa. The general trend is as follows:

- Those who obtained at least 2 Schengen visas in the last 3 years and used them in compliance with the rules receive a **1-year** multiple-entry visa
- Those who used a previous 2-year multiple-entry visa without issues receive a **2-year** multiple-entry visa
- Those who used a previous 3-year multiple-entry visa without issues receive a multiple-entry visa of **up to 5 years**

## An Important Condition: The Stay-Duration Rule

Even with a multiple-entry visa, you cannot stay in the Schengen area for **more than 90 days** within any 180-day period. With the EES system now in place, this rule is automatically tracked digitally.

## For First-Time Applicants

Applicants who have not previously held a Schengen visa are generally issued a single-entry or short-duration multiple-entry visa at first; as your travel history grows, it becomes possible to obtain a longer-duration multiple-entry visa on your next application.

## Our Recommendation

If you're planning to travel frequently, using your previous visas within their validity and in compliance with the rules is the strongest evidence for obtaining a longer-duration multiple-entry visa on your next application. In our initial consultation, we evaluate your travel history and prepare the strongest possible file for your application in this direction.`,
    },
    ar: {
      title: 'كيف تحصل على تأشيرة شنغن متعددة الدخول؟',
      excerpt: 'نشرح من يمكنه الحصول على تأشيرة شنغن متعددة الدخول، التي تُوفّر راحة كبيرة للمسافرين بشكل متكرر، وكيف تسير العملية.',
      content: `بالنسبة لمقدمي الطلبات الذين يسافرون بشكل متكرر إلى منطقة شنغن، فإن الحصول على تأشيرة **متعددة الدخول** بدلاً من تأشيرة دخول واحد يُلغي ضرورة إعادة التقديم قبل كل رحلة. لكن هذا النوع من التأشيرة لا يُمنح تلقائيًا.

## من يحصل على تأشيرة متعددة الدخول؟

تنظر القنصليات إلى **تاريخ سفر مقدم الطلب السابق إلى شنغن** عند تقييم طلب تأشيرة متعددة الدخول. الاتجاه العام هو كما يلي:

- من حصل على تأشيرتي شنغن على الأقل خلال آخر 3 سنوات واستخدمهما وفقًا للقواعد يحصل على تأشيرة متعددة الدخول لمدة **سنة واحدة**
- من استخدم تأشيرة متعددة الدخول سابقة لمدة سنتين دون مشاكل يحصل على تأشيرة متعددة الدخول لمدة **سنتين**
- من استخدم تأشيرة متعددة الدخول سابقة لمدة 3 سنوات دون مشاكل يحصل على تأشيرة متعددة الدخول **تصل إلى 5 سنوات**

## شرط مهم: قاعدة مدة الإقامة

حتى مع تأشيرة متعددة الدخول، لا يمكنك الإقامة في منطقة شنغن **أكثر من 90 يومًا** خلال أي فترة 180 يومًا. مع تفعيل نظام EES الآن، تُتابَع هذه القاعدة تلقائيًا رقميًا.

## لمقدمي الطلبات لأول مرة

يُمنح مقدمو الطلبات الذين لم يحصلوا على تأشيرة شنغن سابقًا عادةً تأشيرة دخول واحد أو تأشيرة متعددة الدخول قصيرة المدة في البداية؛ ومع تزايد تاريخ سفرك، يصبح ممكنًا الحصول على تأشيرة متعددة الدخول أطول مدة في طلبك التالي.

## نصيحتنا

إذا كنت تخطط للسفر بشكل متكرر، فإن استخدام تأشيراتك السابقة ضمن مدة صلاحيتها ووفقًا للقواعد هو أقوى دليل للحصول على تأشيرة متعددة الدخول أطول مدة في طلبك التالي. في استشارتنا الأولية، نُقيّم تاريخ سفرك ونُعِدّ أقوى ملف ممكن لطلبك في هذا الاتجاه.`,
    },
  },

  'ingiltere-eta-sistemi-turk-vatandaslarini-etkiliyor-mu': {
    en: {
      title: "The UK's ETA System Is Fully in Force: Does It Affect Turkish Citizens?",
      excerpt: "The UK's electronic travel authorization system, ETA, became mandatory as of February 2026 for all citizens of visa-exempt countries. So what's the situation for Turkish citizens?",
      content: `The UK's electronic travel authorization system, **ETA (Electronic Travel Authorisation)**, became fully mandatory as of February 25, 2026, for all citizens of visa-exempt countries traveling to the UK. Similar to the US's ESTA system, this application requires an online application and approval before travel.

## Nothing Changes for Turkish Citizens

An important clarification: **the ETA system only covers citizens of around 85 visa-exempt countries** — this list includes EU/EEA members, the US, Canada, Australia, and similar countries. Turkey **is not** on this list, because Turkish citizens already travel to the UK with a visa.

Therefore, the process continues exactly the same for our Menekşe Vize customers: Turkish citizens who wish to travel to the UK continue applying for a standard **UK visa (Standard Visitor Visa, etc.)** instead of an ETA application.

## So Why Should We Still Follow This News?

- In mixed-nationality family or friend groups (for example, if there's a family member who holds dual citizenship or an EU passport), that person may need to obtain an ETA — this shouldn't be confused with the visa process.
- The UK's trend toward digitalizing its border control systems (ETA, and additional digital controls planned for the future) may, in the medium term, also lead to changes in visa application and appointment processes.
- Confusing information circulating online about the ETA system can create a false impression such as "Can we now travel to the UK visa-free?" — this is **not the case** for Turkish citizens.

## Our Approach

We follow developments in the UK's border systems and clearly inform you about the correct visa category and current process.`,
    },
    ar: {
      title: 'نظام ETA البريطاني ساري المفعول بالكامل: هل يؤثر على المواطنين الترك؟',
      excerpt: 'أصبح نظام تصريح السفر الإلكتروني البريطاني ETA إلزاميًا اعتبارًا من فبراير 2026 لجميع مواطني الدول المعفاة من التأشيرة. فما هو الوضع بالنسبة للمواطنين الترك؟',
      content: `دخل نظام تصريح السفر الإلكتروني البريطاني **ETA (Electronic Travel Authorisation)** حيز التنفيذ الإلزامي الكامل اعتبارًا من 25 فبراير 2026 لجميع مواطني الدول المعفاة من التأشيرة المسافرين إلى بريطانيا. يشبه هذا التطبيق نظام ESTA الأمريكي، ويتطلب تقديم طلب عبر الإنترنت والحصول على الموافقة قبل السفر.

## لا يتغير شيء بالنسبة للمواطنين الترك

توضيح مهم: **يشمل نظام ETA فقط مواطني حوالي 85 دولة معفاة من التأشيرة** — تضم هذه القائمة أعضاء الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية، والولايات المتحدة، وكندا، وأستراليا، ودول مماثلة. تركيا **غير مدرجة** في هذه القائمة، لأن المواطنين الترك يسافرون بالفعل إلى بريطانيا بتأشيرة.

لذلك تستمر العملية بالضبط كما هي لعملاء منكشة فيزا (Menekşe Vize): يستمر المواطنون الترك الراغبون في السفر إلى بريطانيا بالتقديم على **تأشيرة بريطانية قياسية (تأشيرة الزائر القياسية، إلخ)** بدلاً من طلب ETA.

## فلماذا يجب أن نتابع هذا الخبر مع ذلك؟

- في المجموعات العائلية أو الصداقية ذات الجنسيات المختلطة (مثلًا إذا كان لديك فرد من العائلة يحمل جنسية مزدوجة أو جواز سفر أوروبي)، قد يحتاج ذلك الشخص إلى الحصول على ETA — لا ينبغي الخلط بين ذلك وعملية التأشيرة.
- قد يؤدي اتجاه بريطانيا نحو رقمنة أنظمة مراقبة الحدود (ETA، وضوابط رقمية إضافية مخطط لها في المستقبل) على المدى المتوسط إلى تغييرات في عمليات طلب التأشيرة والمواعيد أيضًا.
- قد تُنشئ المعلومات المُضلِّلة المتداولة على الإنترنت حول نظام ETA انطباعًا خاطئًا مثل "هل يمكننا الآن السفر إلى بريطانيا دون تأشيرة؟" — وهذا **غير صحيح** بالنسبة للمواطنين الترك.

## نهجنا

نتابع التطورات في أنظمة الحدود البريطانية، ونُطلعك بوضوح على فئة التأشيرة الصحيحة والعملية الحالية.`,
    },
  },

  'cocuklu-ailelerin-vize-basvurusunda-ekstra-belgeler': {
    en: {
      title: 'Extra Documents Required for Families Traveling with Children in Visa Applications',
      excerpt: 'We explain why extra documents such as a consent letter are critical for families traveling with children and single-parent trips.',
      content: `Families traveling together with a child must prepare certain special documents in addition to the standard document list. Missing these documents can lead to serious problems, especially at the border.

## When Is a Consent Letter Required?

If the child is traveling **with only one parent** or with an adult other than their parents (such as a grandparent, relative, or school group), a notarized **consent letter (travel permission document)** must be obtained from the parent(s) not traveling. This document becomes particularly important for divorced families and its form may vary depending on the custody situation.

## Generally Required Documents

- The child's birth certificate / civil registry record
- Photocopies of the parents' ID/passport
- A document showing the child's school enrollment (for long-term travel)
- Confirmation that the travel health insurance also covers the child

## Common Mistakes

- The consent letter not being notarized or not carrying a current date
- Not including the court decision clarifying custody status for divorced families
- The child's passport validity period being insufficient relative to the travel date

## Our Approach

For applications by families with children, we clarify exactly which additional documents are required specifically for your family structure (married, divorced, single parent, etc.), preparing your file completely to avoid problems both at the border and at the consulate.`,
    },
    ar: {
      title: 'الوثائق الإضافية المطلوبة للعائلات المسافرة مع الأطفال في طلبات التأشيرة',
      excerpt: 'نشرح لماذا تُعد الوثائق الإضافية مثل خطاب الموافقة حاسمة للعائلات المسافرة مع الأطفال ورحلات الوالد الوحيد.',
      content: `يجب على العائلات المسافرة مع طفل تحضير بعض الوثائق الخاصة إضافةً إلى قائمة الوثائق القياسية. قد يؤدي نقص هذه الوثائق إلى مشاكل جدية، خاصة عند نقطة الحدود.

## متى يلزم خطاب الموافقة؟

إذا كان الطفل يسافر **مع أحد الوالدين فقط** أو مع شخص بالغ غير والديه (مثل الجد/الجدة، أحد الأقارب، مجموعة مدرسية)، يجب الحصول على **خطاب موافقة (وثيقة إذن سفر)** موثّق من كاتب العدل من الوالد (الوالدين) غير المسافر(ين). تُصبح هذه الوثيقة مهمة بشكل خاص للعائلات المطلقة وقد يختلف شكلها حسب حالة الحضانة.

## الوثائق المطلوبة عمومًا

- شهادة ميلاد الطفل / سجل النفوس
- نسخ من هوية/جواز سفر الوالدين
- وثيقة تُظهر التحاق الطفل بالمدرسة (للسفر طويل المدى)
- تأكيد أن التأمين الصحي للسفر يشمل الطفل أيضًا

## الأخطاء الشائعة

- عدم توثيق خطاب الموافقة من كاتب العدل أو عدم حمله تاريخًا حديثًا
- عدم إدراج قرار المحكمة الذي يوضح حالة الحضانة للعائلات المطلقة
- عدم كفاية مدة صلاحية جواز سفر الطفل بالنسبة لتاريخ السفر

## نهجنا

في طلبات العائلات ذات الأطفال، نوضح بالضبط أي وثائق إضافية مطلوبة خصيصًا لبنية عائلتك (متزوجة، مطلقة، والد وحيد، إلخ)، ونُعِدّ ملفك بشكل كامل لتجنب المشاكل عند الحدود والقنصلية على حد سواء.`,
    },
  },

  'guvenilir-vize-danismanligi-nasil-secilir-dikkat-edilmesi-gerekenler': {
    en: {
      title: 'How to Choose a Trustworthy Visa Consultancy? What to Watch Out For',
      excerpt: 'We explain what to watch out for against misleading promises like a "guaranteed visa" in the visa consultancy industry.',
      content: `The visa consultancy industry, unfortunately, also includes some bad examples that try to gain customers through misleading promises. In this article, we explain what to watch out for when choosing a consultancy firm.

## Beware of the "Guaranteed Visa" Promise

No consultancy firm can guarantee visa approval — because the final decision always rests with the relevant country's consulate or immigration authority. Be cautious of firms making promises such as "100% guarantee" or "certain approval"; this is a promise no serious consultancy would make.

## Never Approve a Suggestion of Fake Documents or False Declaration

Some ill-intentioned consultants may suggest a fake invitation letter, a fabricated employment document, or financial documents that don't reflect reality, in order to increase the chances of approval. This is not just unethical but also an approach that carries **serious legal risk** — if detected, it can lead to entry bans lasting for years.

## Check for Transparency

A trustworthy consultancy firm:

- Clearly explains its fees and scope before the application
- Separates the official visa/consulate fee from its own consultancy fee
- Discusses honestly the possibility that your application could be refused
- Takes care that your documents are genuine and verifiable

## Our Approach

As Menekşe Vize, we never guarantee approval and never make any suggestion involving fake documents or false declarations. Our goal is to help you present your genuine situation to the relevant authority as accurately and strongly as possible — this is the only approach that is both ethical and in your interest in the long run.`,
    },
    ar: {
      title: 'كيف تختار استشارة تأشيرات موثوقة؟ ما يجب مراعاته',
      excerpt: 'نشرح ما يجب الحذر منه ضد الوعود المضللة مثل "تأشيرة مضمونة" في قطاع استشارات التأشيرات.',
      content: `يتضمن قطاع استشارات التأشيرات، للأسف، بعض الأمثلة السيئة التي تحاول جذب العملاء بوعود مضللة. في هذا المقال، نشرح ما يجب مراعاته عند اختيار شركة استشارية.

## احذر من وعد "التأشيرة المضمونة"

لا يمكن لأي شركة استشارية ضمان الموافقة على التأشيرة — لأن القرار النهائي يبقى دائمًا بيد القنصلية أو سلطة الهجرة المختصة في الدولة المعنية. كن حذرًا من الشركات التي تقدم وعودًا مثل "ضمان 100%" أو "موافقة مؤكدة"؛ هذا وعد لن تقدمه أي استشارة جدية.

## لا توافق أبدًا على اقتراح وثائق مزيفة أو إفصاح كاذب

قد يقترح بعض المستشارين ذوي النية السيئة خطاب دعوة مزيفًا أو وثيقة عمل مصطنعة أو وثائق مالية لا تعكس الحقيقة، لزيادة فرص الموافقة. هذا ليس غير أخلاقي فقط، بل يحمل أيضًا **مخاطر قانونية جدية** — في حال اكتشافه، قد يؤدي إلى منع دخول يمتد لسنوات.

## تحقق من الشفافية

الشركة الاستشارية الموثوقة:

- تُوضح رسومها ونطاق خدمتها بوضوح قبل التقديم
- تُفصل الرسوم الرسمية للتأشيرة/القنصلية عن رسوم استشارتها الخاصة
- تناقش بصدق إمكانية رفض طلبك
- تحرص على أن تكون وثائقك حقيقية وقابلة للتحقق

## نهجنا

بصفتنا منكشة فيزا (Menekşe Vize)، لا نضمن الموافقة أبدًا ولا نقدم أي اقتراح يتضمن وثائق مزيفة أو إفصاحًا كاذبًا. هدفنا هو مساعدتك على تقديم وضعك الحقيقي بأدق وأقوى شكل ممكن للسلطة المعنية — هذا هو النهج الوحيد الأخلاقي والذي يخدم مصلحتك على المدى الطويل.`,
    },
  },

  'kanada-ziyaretci-vizesinde-2026-degisiklikleri': {
    en: {
      title: "2026 Changes to Canada's Visitor Visa: Longer Stays, Stricter Review",
      excerpt: "In 2026, Canada made significant changes to its visitor visa policies: longer stay periods on one hand, and a stricter review process on the other.",
      content: `Canada's Immigration, Refugees and Citizenship Canada (IRCC) made two seemingly contradictory but actually complementary changes to visitor visa policies within 2026: more flexible stay periods and stricter application review.

## The Possibility of a Longer Stay

As of January 5, 2026, border officers can grant visitors with sufficient financial resources and a clear exit plan a stay permit of **up to 1 year**, instead of the previous standard 6-month period. This is an important convenience, especially for applicants planning long-term travel for family visits.

## But Review Is Stricter

During the same period, IRCC switched to evaluating visitor visa applications on a **case-by-case** basis — a 10-year multiple-entry visa is no longer granted automatically; each application is evaluated separately based on criteria such as purpose of travel, financial situation, and ties to Canada. Additional verification steps are also being applied to files from countries with high application volumes, and refusal rates are known to have remained high during the 2025-2026 period.

## What Does This Change Mean?

- There's no "automatic" right to a particular stay duration — presenting financial sufficiency and a clear return/exit plan has become even more important.
- The **consistency of your file and evidence of ties to Canada** (job, family, and property status in Turkey) play a decisive role in the evaluation of the application.
- Since a multiple-entry visa is no longer granted automatically, a clean previous travel history provides a significant advantage for your next application.

## Our Approach

We closely follow Canada's current policy changes and prepare your application as a consistent, strong file suited to this new case-by-case evaluation structure.`,
    },
    ar: {
      title: 'تغييرات 2026 في تأشيرة الزائر الكندية: إقامة أطول، وفحص أكثر صرامة',
      excerpt: 'أجرت كندا في عام 2026 تغييرات مهمة في سياسات تأشيرة الزائر: فترات إقامة أطول من جهة، وعملية فحص أكثر صرامة من جهة أخرى.',
      content: `أجرت وزارة الهجرة واللاجئين والجنسية الكندية (IRCC) تغييرين يبدوان متناقضين ولكنهما في الواقع متكاملان في سياسات تأشيرة الزائر خلال عام 2026: فترات إقامة أكثر مرونة وفحص طلبات أكثر صرامة.

## إمكانية إقامة أطول

اعتبارًا من 5 يناير 2026، يمكن لضباط الحدود منح الزائرين ذوي الموارد المالية الكافية وخطة خروج واضحة إذن إقامة **يصل إلى سنة واحدة**، بدلًا من فترة 6 أشهر القياسية السابقة. هذا تسهيل مهم، خاصة لمقدمي الطلبات الذين يخططون لسفر طويل المدى بغرض زيارة العائلة.

## لكن الفحص أكثر صرامة

في الفترة نفسها، انتقلت IRCC إلى تقييم طلبات تأشيرة الزائر على أساس **كل حالة على حدة** — لا تُمنح تأشيرة الدخول المتعدد لمدة 10 سنوات تلقائيًا بعد الآن؛ يُقيَّم كل طلب على حدة بناءً على معايير مثل غرض السفر والوضع المالي والارتباط بكندا. تُطبَّق أيضًا خطوات تحقق إضافية على الملفات القادمة من الدول ذات حجم الطلبات المرتفع، ومن المعروف أن معدلات الرفض ظلت مرتفعة خلال فترة 2025-2026.

## ما معنى هذا التغيير؟

- لا يوجد حق "تلقائي" لمدة إقامة معينة — أصبح تقديم الكفاية المالية وخطة عودة/خروج واضحة أكثر أهمية من أي وقت.
- تلعب **اتساق ملفك وأدلة الارتباط بكندا** (العمل والعائلة والملكية في تركيا) دورًا حاسمًا في تقييم الطلب.
- بما أن تأشيرة الدخول المتعدد لا تُمنح تلقائيًا، فإن تاريخ سفر سابق نظيف يوفر ميزة مهمة لطلبك التالي.

## نهجنا

نتابع عن كثب التغييرات الحالية في سياسات كندا، ونُعِدّ طلبك كملف متسق وقوي يناسب هذه البنية الجديدة للتقييم حالة بحالة.`,
    },
  },
  'almanya-vizesi-nasil-alinir-adim-adim-rehber': {
    en: {
      title: 'How to Get a Germany Visa? Step-by-Step Application Guide',
      excerpt: 'Germany is the Schengen country that receives the most applications from Turkey. The tourist, business, and family visit visa process, step by step.',
      content: `Germany, thanks to its strong economy, large Turkish community, and central location in Europe, is one of the Schengen countries that receives the highest volume of visa applications from Turkey. In this article, we cover the Germany visa process for tourism, business, and family visit purposes, step by step.

## Which Visa Type Do You Need?

Germany covers different travel purposes under a single Schengen visa:

- **Tourist visa**: Short-term visits for holiday or sightseeing purposes
- **Business visa**: Trade fair, business meeting, business partnership visits
- **Family visit visa**: Visiting family members living in Germany

## Application Process

1. **Preliminary preparation**: Clarify your purpose of travel and dates
2. **Appointment**: Get an appointment from the consulate or the authorized visa application center
3. **Gathering documents**: Passport, biometric photo, travel health insurance, accommodation and flight reservation, proof of financial sufficiency
4. **Submitting the application**: Submit your documents in full on the appointment day
5. **Tracking the result**: The evaluation period varies based on application volume

## How Long Does It Take to Get a Result?

The standard evaluation period is usually around 15 business days, but this can extend during busy periods (summer season, before holidays). Getting your appointment date a reasonable amount of time before your travel plan leaves a buffer against possible delays.

## Common Mistakes

One of the most common problems is inconsistency between the invitation letter and the travel plan — for example, the dates stated in the invitation letter not matching the dates on the flight reservation. Another important point is that, due to the Turkish community living in Germany, kinship documents in family visit applications must be complete and current.

## What Should You Do If You Get a Refusal?

If you encounter a Germany visa refusal, there's no need to panic; depending on the reason stated in the refusal letter, an appeal or a strengthened reapplication is generally possible. We covered this topic in more detail in [our article on the path to follow after a visa refusal](/vize-reddi).

## Our Approach

You can find detailed, up-to-date information boxes specific to this country and the required document list on [our Germany visa page](/ulkeler/almanya); we also have separate document lists for the [tourist](/ulkeler/almanya/turistik) and [business](/ulkeler/almanya/ticari) visa types. You can reach us through [our free initial assessment page](/on-degerlendirme) to describe your situation, and we can listen to your travel purpose in the initial consultation and prepare a personalized document checklist for you.`,
    },
    ar: {
      title: 'كيف تحصل على تأشيرة ألمانيا؟ دليل التقديم خطوة بخطوة',
      excerpt: 'ألمانيا هي دولة شنغن التي تستقبل أكبر عدد من الطلبات من تركيا. عملية التأشيرة السياحية والتجارية وزيارة العائلة، خطوة بخطوة.',
      content: `تُعد ألمانيا، بفضل اقتصادها القوي وجاليتها التركية الكبيرة وموقعها المركزي في أوروبا، من دول شنغن التي تستقبل أكبر حجم من طلبات التأشيرة من تركيا. في هذا المقال، نتناول عملية تأشيرة ألمانيا لأغراض السياحة والعمل وزيارة العائلة خطوة بخطوة.

## أي نوع تأشيرة تحتاجه؟

تشمل ألمانيا أغراض سفر مختلفة تحت تأشيرة شنغن واحدة:

- **التأشيرة السياحية**: زيارات قصيرة المدى بغرض العطلة أو السياحة
- **التأشيرة التجارية**: زيارات المعارض واجتماعات العمل والشراكات التجارية
- **تأشيرة زيارة العائلة**: زيارة أفراد العائلة الذين يعيشون في ألمانيا

## عملية التقديم

1. **التحضير المسبق**: وضّح غرض سفرك وتواريخك
2. **الموعد**: احجز موعدًا من القنصلية أو مركز طلب التأشيرة المعتمد
3. **جمع الوثائق**: جواز السفر، الصورة البيومترية، التأمين الصحي للسفر، حجز الإقامة والطائرة، وثائق الكفاية المالية
4. **تقديم الطلب**: قدم وثائقك كاملة في يوم الموعد
5. **تتبع النتيجة**: تختلف مدة التقييم حسب حجم الطلبات

## في أي مدة تحصل على النتيجة؟

مدة التقييم القياسية تكون عادةً حوالي 15 يوم عمل، لكن قد تطول هذه المدة في المواسم المزدحمة (موسم الصيف، قبل الأعياد). الحصول على موعدك قبل خطة سفرك بفترة معقولة يترك مساحة احتياطية للتأخيرات المحتملة.

## الأخطاء الشائعة

من أكثر المشاكل شيوعًا عدم اتساق خطاب الدعوة مع خطة السفر — مثلًا عدم تطابق التواريخ المذكورة في خطاب الدعوة مع تواريخ حجز الطائرة. نقطة مهمة أخرى هي أنه بسبب الجالية التركية التي تعيش في ألمانيا، يجب أن تكون وثائق القرابة في طلبات زيارة العائلة كاملة وحديثة.

## ماذا تفعل إذا تلقيت رفضًا؟

إذا واجهت رفض تأشيرة ألمانيا، لا حاجة للذعر؛ حسب السبب المذكور في خطاب الرفض، يكون الاستئناف أو إعادة التقديم بملف مُقوَّى ممكنًا عمومًا. تناولنا هذا الموضوع بتفصيل أكبر في [مقالنا حول المسار الذي يجب اتباعه بعد رفض التأشيرة](/vize-reddi).

## نهجنا

يمكنك أن تجد صناديق معلومات حديثة وتفصيلية خاصة بهذه الدولة وقائمة الوثائق المطلوبة في [صفحة تأشيرة ألمانيا لدينا](/ulkeler/almanya)؛ كما لدينا قوائم وثائق منفصلة لأنواع التأشيرة [السياحية](/ulkeler/almanya/turistik) و[التجارية](/ulkeler/almanya/ticari). يمكنك التواصل معنا من خلال [صفحة التقييم المسبق المجاني](/on-degerlendirme) لوصف حالتك، ويمكننا الاستماع إلى غرض سفرك في الاستشارة الأولية وإعداد قائمة تحقق وثائق مخصصة لك.`,
    },
  },

  'fransa-vizesi-paris-gezisi-icin-bilinmesi-gerekenler': {
    en: {
      title: 'France Visa: What You Need to Know for a Trip to Paris and France',
      excerpt: 'France is one of the most preferred Schengen countries for art and culture tourism. Key points to note during the visa process.',
      content: `France, with its reputation in art, fashion, and gastronomy — Paris above all — is one of the Schengen destinations most preferred by Turkish travelers. In this article, we compiled the points to pay attention to in a France visa application.

## Key Points in Tourist Applications

Routes like Paris, the French Riviera, and the Loire Valley make up the vast majority of tourist applications. Having your accommodation reservations and travel plan consistent with your itinerary provides significant ease in the evaluation of your application.

## What to Watch Out for in Business Visits

Trade fairs in the fashion and retail sector (especially centered in Paris) make up a significant portion of business visa applications. For these applications:

- The fair/business partner invitation letter must be current and clear
- Your company activity certificate must be issued close to the application date
- Your travel program (meeting dates, fair days) must match the invitation letter

## Seasonal Recommendation

Consular appointment demand increases noticeably during the summer months and school holiday periods. Starting the application process as soon as your travel dates become clear gives you an advantage in finding an appointment.

## Our Approach

You can find country-specific information on [our France visa page](/ulkeler/fransa); we have separate, ready document lists for [tourist](/ulkeler/fransa/turistik) and [business](/ulkeler/fransa/ticari) visa types. We manage the process together with you, from the initial consultation to tracking the result.`,
    },
    ar: {
      title: 'تأشيرة فرنسا: ما تحتاج إلى معرفته لرحلة إلى باريس وفرنسا',
      excerpt: 'فرنسا من أكثر دول شنغن المفضلة للسياحة الفنية والثقافية. نقاط مهمة يجب مراعاتها في عملية التأشيرة.',
      content: `تُعد فرنسا، بفضل سمعتها في الفن والموضة والمأكولات — وباريس في المقدمة — من أكثر الوجهات المفضلة للمسافرين الترك في منطقة شنغن. في هذا المقال، جمعنا النقاط التي يجب الانتباه إليها في طلب تأشيرة فرنسا.

## نقاط مهمة في الطلبات السياحية

تُشكِّل مسارات مثل باريس والريفييرا الفرنسية ووادي لوار الغالبية العظمى من الطلبات السياحية. يوفر اتساق حجوزات إقامتك وخطة سفرك مع مسارك سهولة كبيرة في تقييم طلبك.

## ما يجب مراعاته في الزيارات التجارية

تُشكِّل المعارض في قطاع الموضة والتجزئة (المتمركزة خاصة في باريس) جزءًا مهمًا من طلبات التأشيرة التجارية. في هذه الطلبات:

- يجب أن يكون خطاب دعوة المعرض/الشريك التجاري حديثًا وواضحًا
- يجب أن تكون شهادة نشاط شركتك صادرة قريبًا من تاريخ التقديم
- يجب أن يتطابق برنامج سفرك (تواريخ الاجتماعات، أيام المعرض) مع خطاب الدعوة

## نصيحة موسمية

يزداد الطلب على مواعيد القنصلية بشكل ملحوظ خلال أشهر الصيف وفترات العطلات المدرسية. بدء عملية التقديم بمجرد وضوح تواريخ سفرك يمنحك ميزة في الحصول على موعد.

## نهجنا

يمكنك أن تجد معلومات خاصة بهذه الدولة في [صفحة تأشيرة فرنسا لدينا](/ulkeler/fransa)؛ ولدينا قوائم وثائق جاهزة ومنفصلة لأنواع التأشيرة [السياحية](/ulkeler/fransa/turistik) و[التجارية](/ulkeler/fransa/ticari). نُدير العملية معك، من الاستشارة الأولية إلى تتبع النتيجة.`,
    },
  },

  'yunanistan-vizesi-yaz-sezonunda-erken-basvuru': {
    en: {
      title: 'Greece Visa: The Importance of Applying Early in the Summer Season',
      excerpt: 'Greece, with its proximity to Turkey and its islands, is one of the most preferred Schengen countries. Application timing in the summer season is critical.',
      content: `Greece, thanks to its Aegean coast islands and proximity to Turkey, is at the top of the Schengen countries receiving the highest volume of applications every year. Especially during the summer months, application timing is critically important for the process to proceed smoothly.

## Why Are the Summer Months So Busy?

Vacation plans to islands like Santorini, Mykonos, and Crete concentrate between May and September. During this period:

- Consulate appointment capacity can fill up
- Evaluation times can extend
- Accommodation prices and occupancy rates increase

## When Should You Apply?

As soon as your travel dates become clear, we recommend starting the application process 6-8 weeks before your trip if possible. This provides an advantage both for finding an appointment and for allowing time for any possible additional document requests.

## Document Planning for Island Tours

If you're planning an itinerary covering multiple islands, it's important that your ferry/flight reservations and accommodation plan clearly reflect the entire route. A piecemeal, inconsistent travel plan can complicate the evaluation process.

## Our Approach

You can find country-specific information on [our Greece visa page](/ulkeler/yunanistan), and the [tourist visa document list](/ulkeler/yunanistan/turistik) on a separate page. We closely track summer season demand and help you prepare your application on time and completely.`,
    },
    ar: {
      title: 'تأشيرة اليونان: أهمية التقديم المبكر في موسم الصيف',
      excerpt: 'اليونان، بفضل قربها من تركيا وجزرها، من أكثر دول شنغن المفضلة. توقيت التقديم في موسم الصيف أمر حاسم.',
      content: `تحتل اليونان، بفضل جزرها على ساحل بحر إيجه وقربها من تركيا، مقدمة دول شنغن التي تستقبل أكبر حجم من الطلبات كل عام. خاصةً خلال أشهر الصيف، يكون توقيت التقديم أمرًا بالغ الأهمية لسير العملية بسلاسة.

## لماذا تكون أشهر الصيف مزدحمة إلى هذا الحد؟

تتركز خطط العطلات إلى جزر مثل سانتوريني وميكونوس وكريت بين مايو وسبتمبر. خلال هذه الفترة:

- قد تمتلئ سعة مواعيد القنصلية
- قد تطول مدد التقييم
- ترتفع أسعار الإقامة ونسب الإشغال

## متى يجب التقديم؟

بمجرد وضوح تواريخ سفرك، نوصي ببدء عملية التقديم قبل 6-8 أسابيع من رحلتك إن أمكن. يوفر هذا ميزة سواء في الحصول على موعد أو في ترك وقت لأي طلبات وثائق إضافية محتملة.

## تخطيط الوثائق في جولات الجزر

إذا كنت تخطط لمسار يشمل عدة جزر، من المهم أن تعكس حجوزات العبّارة/الطائرة وخطة الإقامة المسار بالكامل بوضوح. قد تُعقّد خطة السفر المجزأة وغير المتسقة عملية التقييم.

## نهجنا

يمكنك أن تجد معلومات خاصة بهذه الدولة في [صفحة تأشيرة اليونان لدينا](/ulkeler/yunanistan)، وقائمة وثائق التأشيرة السياحية في [صفحة منفصلة](/ulkeler/yunanistan/turistik). نتابع عن كثب الطلب في موسم الصيف، ونساعدك على إعداد طلبك في الوقت المناسب وبشكل كامل.`,
    },
  },

  'italya-vizesi-basvurusunda-dikkat-edilmesi-gerekenler': {
    en: {
      title: 'What to Pay Attention to in an Italy Visa Application',
      excerpt: 'With routes like Rome, Venice, and Florence, Italy is one of the most-visited countries in the Schengen area. Important points in the application process.',
      content: `Italy sees intense tourist interest on routes like Rome, Venice, and Florence thanks to its historical and artistic heritage, while fashion and design industry trade fairs in Milan also make up a significant part of business applications.

## Planning for Multi-City Itineraries

The vast majority of travelers visiting Italy follow an itinerary covering more than one city. If you have such a plan:

- Prepare your inter-city transportation (train/flight) reservations in advance
- Make sure your accommodation reservation dates match your itinerary
- Present your travel plan consistently with your application form

## Fashion Industry Trade Fairs for Business Visas

Milan-centered fashion weeks and trade fairs are a frequently encountered category in business visa applications. For these applications, the invitation letter is expected to align with the fair/event dates, and company documents are expected to be current.

## Our Approach

You can find country-specific information on [our Italy visa page](/ulkeler/italya); we have separate document lists for [tourist](/ulkeler/italya/turistik) and [business](/ulkeler/italya/ticari) visa types. We check document consistency together for multi-city travel plans and prepare your application to be strong.`,
    },
    ar: {
      title: 'ما يجب مراعاته في طلب تأشيرة إيطاليا',
      excerpt: 'بمسارات مثل روما والبندقية وفلورنسا، تُعد إيطاليا من أكثر الدول زيارةً في منطقة شنغن. نقاط مهمة في عملية التقديم.',
      content: `تشهد إيطاليا اهتمامًا سياحيًا كبيرًا في مسارات مثل روما والبندقية وفلورنسا بفضل تراثها التاريخي والفني، بينما تُشكِّل معارض قطاع الموضة والتصميم في ميلانو جزءًا مهمًا من الطلبات التجارية أيضًا.

## التخطيط للمسارات متعددة المدن

يتبع الغالبية العظمى من المسافرين الذين يزورون إيطاليا مسارًا يشمل أكثر من مدينة واحدة. إذا كانت لديك خطة كهذه:

- حضّر حجوزات النقل بين المدن (قطار/طائرة) مسبقًا
- تأكد من تطابق تواريخ حجز الإقامة مع مسارك
- قدّم خطة سفرك بشكل متسق مع نموذج طلبك

## معارض قطاع الموضة للتأشيرة التجارية

تُعد أسابيع الموضة والمعارض المتمركزة في ميلانو فئة شائعة في طلبات التأشيرة التجارية. في هذه الطلبات، يُتوقَّع أن يتوافق خطاب الدعوة مع تواريخ المعرض/الفعالية، وأن تكون وثائق الشركة حديثة.

## نهجنا

يمكنك أن تجد معلومات خاصة بهذه الدولة في [صفحة تأشيرة إيطاليا لدينا](/ulkeler/italya)؛ ولدينا قوائم وثائق منفصلة لأنواع التأشيرة [السياحية](/ulkeler/italya/turistik) و[التجارية](/ulkeler/italya/ticari). نتحقق معًا من اتساق الوثائق في خطط السفر متعددة المدن، ونُعِدّ طلبك بشكل قوي.`,
    },
  },

  'dubai-bae-e-vizesi-en-hizli-vize-sureci': {
    en: {
      title: 'Dubai/UAE e-Visa: How One of the Fastest Visa Processes Works',
      excerpt: 'The United Arab Emirates, with its fully online e-visa system, is one of the fastest-resolving destinations for Turkish citizens.',
      content: `The United Arab Emirates (Dubai/UAE) has one of the fastest-resolving visa processes for Turkish citizens, thanks to its fully online e-visa system. In this article, we summarize how the e-visa process works.

## How Does the E-Visa Process Work?

The application is conducted entirely in a digital environment:

1. A passport scan and a digital passport-size photo are prepared
2. The online application form is filled out
3. A flight ticket reservation and travel health insurance valid in the UAE are added
4. The application is usually resolved within a few business days

## Tourist and Business Visits

Dubai and Abu Dhabi attract intense interest for both tourism and trade fair/business purposes. Depending on the visa type, the stay duration is generally set at 30 or 90 days.

## Short-Term Options for Transit Journeys

If you have a long layover, 48- or 96-hour transit visa options are also available; these visas are sponsored by the airline carrying you and must be arranged before travel.

## Our Approach

You can find current information on [our Dubai/UAE visa page](/ulkeler/dubai), and the [e-visa document list](/ulkeler/dubai/e-vize) on a separate page. We help you prepare your e-visa application completely and correctly.`,
    },
    ar: {
      title: 'التأشيرة الإلكترونية لدبي/الإمارات: كيف تعمل واحدة من أسرع عمليات التأشيرة؟',
      excerpt: 'دولة الإمارات العربية المتحدة، بنظام تأشيرتها الإلكترونية الكامل عبر الإنترنت، من أسرع الوجهات في اتخاذ القرار للمواطنين الترك.',
      content: `تتمتع دولة الإمارات العربية المتحدة (دبي/الإمارات) بواحدة من أسرع عمليات التأشيرة في اتخاذ القرار للمواطنين الترك، بفضل نظام التأشيرة الإلكترونية الكامل عبر الإنترنت. في هذا المقال، نُلخِّص كيف تعمل عملية التأشيرة الإلكترونية.

## كيف تعمل عملية التأشيرة الإلكترونية؟

يتم التقديم بالكامل في بيئة رقمية:

1. يتم تحضير مسح جواز السفر وصورة شخصية رقمية
2. يتم تعبئة نموذج الطلب عبر الإنترنت
3. تُضاف حجز تذكرة الطائرة والتأمين الصحي للسفر الساري في الإمارات
4. يُحل الطلب عادةً في غضون أيام عمل قليلة

## الزيارات السياحية والتجارية

تجذب دبي وأبو ظبي اهتمامًا كبيرًا لأغراض السياحة والمعارض/الأعمال على حد سواء. حسب نوع التأشيرة، تُحدَّد مدة الإقامة عمومًا بـ 30 أو 90 يومًا.

## خيارات قصيرة المدى لرحلات العبور

إذا كانت لديك فترة توقف طويلة، تتوفر أيضًا خيارات تأشيرة عبور لمدة 48 أو 96 ساعة؛ تُرعى هذه التأشيرات من شركة الطيران التي تنقلك ويجب ترتيبها قبل السفر.

## نهجنا

يمكنك أن تجد معلومات حديثة في [صفحة تأشيرة دبي/الإمارات لدينا](/ulkeler/dubai)، وقائمة وثائق [التأشيرة الإلكترونية](/ulkeler/dubai/e-vize) في صفحة منفصلة. نساعدك على إعداد طلب تأشيرتك الإلكترونية بشكل كامل وصحيح.`,
    },
  },
  'avustralya-vizesi-subclass-600-turk-vatandaslari': {
    en: {
      title: 'Australia Visa (Subclass 600): The Process for Turkish Citizens',
      excerpt: 'Since Turkey is not covered by the eTA, Australia applications are evaluated fully under the Visitor Visa (Subclass 600).',
      content: `Since Australia does not offer Turkish citizens an electronic travel authorization (eTA), applications are evaluated fully under the Visitor Visa (Subclass 600). This makes the process somewhat longer and more detailed compared to some other countries.

## Mandatory Biometric Appointment

For Subclass 600 applications, biometric enrollment (fingerprints and photo) must be taken at the visa application center. Unlike countries with an e-visa system, this step requires a physical appointment.

## How Long Does the Process Take?

Processing time generally varies between 4-8 weeks. For this reason, we recommend starting the application process well in advance of your travel date (2-3 months beforehand if possible).

## Important Elements in the Evaluation

- Bank statement and proof of financial sufficiency
- Documents showing your ties to Turkey (employment, property, family ties)
- A clear and consistent travel plan
- Health and character declaration (an additional health report may be requested if needed)

## Our Approach

You can find current information on [our Australia visa page](/ulkeler/avustralya), and the [tourist visa document list](/ulkeler/avustralya/turistik) on a separate page. We manage the process together with you, from the biometric appointment to the result.`,
    },
    ar: {
      title: 'تأشيرة أستراليا (الفئة 600): العملية للمواطنين الترك',
      excerpt: 'بما أن تركيا غير مشمولة بنظام eTA، تُقيَّم طلبات أستراليا بالكامل ضمن تأشيرة الزائر (الفئة 600).',
      content: `بما أن أستراليا لا تقدم للمواطنين الترك إذن سفر إلكتروني (eTA)، تُقيَّم الطلبات بالكامل ضمن تأشيرة الزائر (الفئة 600). هذا يجعل العملية أطول وأكثر تفصيلًا نوعًا ما مقارنةً ببعض الدول الأخرى.

## إلزامية موعد بيومتري

في طلبات الفئة 600، يجب أخذ التسجيل البيومتري (بصمات الأصابع والصورة) في مركز طلب التأشيرة. على عكس الدول التي تمتلك نظام تأشيرة إلكترونية، تتطلب هذه الخطوة موعدًا حضوريًا.

## ما مدة استغراق العملية؟

تتراوح مدة المعالجة عادةً بين 4-8 أسابيع. لذلك نوصي ببدء عملية التقديم قبل تاريخ سفرك بوقت كافٍ (قبل 2-3 أشهر إن أمكن).

## عناصر مهمة في التقييم

- كشف الحساب المصرفي ووثائق الكفاية المالية
- وثائق تُظهر ارتباطك بتركيا (العمل، الملكية، الروابط العائلية)
- خطة سفر واضحة ومتسقة
- إفصاح صحي وأخلاقي (قد يُطلب تقرير صحي إضافي عند الحاجة)

## نهجنا

يمكنك أن تجد معلومات حديثة في [صفحة تأشيرة أستراليا لدينا](/ulkeler/avustralya)، وقائمة وثائق [التأشيرة السياحية](/ulkeler/avustralya/turistik) في صفحة منفصلة. نُدير العملية معك، من الموعد البيومتري إلى النتيجة.`,
    },
  },

  'schengen-ulkelerinden-hangisine-basvurmaliyim': {
    en: {
      title: 'Which Schengen Country Should I Apply To?',
      excerpt: "If you're visiting more than one Schengen country, which country you must apply to depends on clear rules.",
      content: `Since the 29 countries in the Schengen area can be visited with the same visa, the question "which country should I apply to?" comes up frequently if you're planning a trip covering more than one country. The answer actually depends on clear rules.

## Visiting a Single Country

If you're only going to visit one Schengen country, the application is made directly to that country's representation in Turkey (consulate or authorized visa application center).

## Visiting More Than One Country

If your trip covers more than one Schengen country, two basic rules apply:

1. **The country of longest stay**: The application is made to the country where you will spend the majority of your trip
2. **First country of entry in case of equal duration**: If the durations are equal, the application is made to the country you will enter first in the Schengen area

## Why Is This Rule Important?

Applications made to the wrong country can increase the risk of refusal or processing delays. After clarifying your travel plan, determining the correct representation according to this rule is a critical step for the process to proceed smoothly.

## Our Approach

We evaluate your travel itinerary together with you and ensure that you apply to the correct country. You can find information about all Schengen countries on [our Services page](/hizmetler).`,
    },
    ar: {
      title: 'لأي دولة من دول شنغن يجب أن أتقدم؟',
      excerpt: 'إذا كنت ستزور أكثر من دولة شنغن، فإن الدولة التي يجب أن تتقدم إليها تخضع لقواعد واضحة.',
      content: `بما أنه يمكن زيارة 29 دولة في منطقة شنغن بالتأشيرة نفسها، يطرح السؤال "لأي دولة يجب أن أتقدم؟" بشكل متكرر إذا كنت تخطط لرحلة تشمل أكثر من دولة. الإجابة تعتمد في الواقع على قواعد واضحة.

## زيارة دولة واحدة فقط

إذا كنت ستزور دولة شنغن واحدة فقط، يُقدَّم الطلب مباشرة إلى تمثيل تلك الدولة في تركيا (القنصلية أو مركز طلب التأشيرة المعتمد).

## زيارة أكثر من دولة

إذا كانت رحلتك تشمل أكثر من دولة شنغن، تنطبق قاعدتان أساسيتان:

1. **دولة الإقامة الأطول**: يُقدَّم الطلب إلى الدولة التي ستقضي فيها الجزء الأكبر من رحلتك
2. **دولة الدخول الأولى في حال تساوي المدة**: إذا كانت المدد متساوية، يُقدَّم الطلب إلى الدولة التي ستدخلها أولاً في منطقة شنغن

## لماذا هذه القاعدة مهمة؟

قد تزيد الطلبات المُقدَّمة إلى الدولة الخاطئة من خطر الرفض أو تأخير المعالجة. بعد توضيح خطة سفرك، يُعد تحديد التمثيل الصحيح وفقًا لهذه القاعدة خطوة حاسمة لسير العملية بسلاسة.

## نهجنا

نُقيّم مسار سفرك معك ونضمن تقديمك للدولة الصحيحة. يمكنك أن تجد معلومات عن جميع دول شنغن في [صفحة خدماتنا](/hizmetler).`,
    },
  },

  'rusya-e-vizesi-turk-vatandaslari-hizli-basvuru': {
    en: {
      title: 'Russia e-Visa: Fast Application Process for Turkish Citizens',
      excerpt: 'Russia offers Turkish citizens a fully online application process with its unified e-Visa system, resolved in an average of 4 days.',
      content: `Russia offers Turkish citizens a fully online application process through its unified e-Visa system. In this article, we summarize how the process works and the points to pay attention to.

## The e-Visa Application Process

The application is made entirely in an electronic environment, using a machine-readable passport, a digital passport-size photo, and an online form. The process is usually resolved within an average of 4 days.

## Stay Duration Limitation

The e-Visa is valid for 120 days but allows a stay of up to 30 days per single entry. If your plans exceed this duration limit, a different visa category should be considered.

## Tourist and Business Visits

The same e-Visa system is used for both tourist and business visits, especially to Moscow and Saint Petersburg. For business visits, the invitation letter is a document that speeds up the process but is not mandatory.

## Our Approach

You can find current information on [our Russia visa page](/ulkeler/rusya), and the [e-visa document list](/ulkeler/rusya/e-vize) on a separate page. We're here for you to help your e-visa application proceed quickly and smoothly.`,
    },
    ar: {
      title: 'التأشيرة الإلكترونية لروسيا: عملية تقديم سريعة للمواطنين الترك',
      excerpt: 'تقدم روسيا للمواطنين الترك عملية تقديم كاملة عبر الإنترنت من خلال نظام تأشيرتها الإلكترونية الموحدة، تُحل في 4 أيام في المتوسط.',
      content: `تقدم روسيا للمواطنين الترك عملية تقديم كاملة عبر الإنترنت من خلال نظام تأشيرتها الإلكترونية الموحدة. في هذا المقال، نُلخِّص كيف تعمل العملية والنقاط التي يجب مراعاتها.

## عملية التقديم على التأشيرة الإلكترونية

يتم التقديم بالكامل في بيئة إلكترونية، باستخدام جواز سفر قابل للقراءة الآلية وصورة شخصية رقمية ونموذج عبر الإنترنت. تُحل العملية عادةً في غضون 4 أيام في المتوسط.

## قيد مدة الإقامة

التأشيرة الإلكترونية صالحة لمدة 120 يومًا لكنها تسمح بإقامة تصل إلى 30 يومًا في كل دخول واحد. إذا تجاوزت خططك هذا القيد، يجب النظر في فئة تأشيرة مختلفة.

## الزيارات السياحية والتجارية

يُستخدم نظام التأشيرة الإلكترونية نفسه للزيارات السياحية والتجارية على حد سواء، خاصة إلى موسكو وسانت بطرسبرغ. في الزيارات التجارية، يُعد خطاب الدعوة وثيقة تُسرّع العملية لكنها غير إلزامية.

## نهجنا

يمكنك أن تجد معلومات حديثة في [صفحة تأشيرة روسيا لدينا](/ulkeler/rusya)، وقائمة وثائق [التأشيرة الإلكترونية](/ulkeler/rusya/e-vize) في صفحة منفصلة. نحن هنا لمساعدتك على سير طلب تأشيرتك الإلكترونية بسرعة وسلاسة.`,
    },
  },

  'vize-basvurusunda-seyahat-sigortasi-konaklama-tutarliligi': {
    en: {
      title: 'Why Should Travel Insurance and Accommodation Reservation Be Consistent in a Visa Application?',
      excerpt: 'The most commonly overlooked detail in Schengen applications: the dates of insurance, accommodation, and flight reservations matching each other.',
      content: `One of the most common mistakes negatively affecting the evaluation of Schengen visa applications is date and content inconsistencies between the documents submitted. In this article, we cover the most common types of inconsistency and how to prevent them.

## Which Documents Need to Be Consistent?

- **Flight ticket reservation**: Departure-return dates
- **Hotel/accommodation reservation**: Duration of stay and city/cities
- **Travel health insurance**: The date range covered by the insurance (must cover the entire trip duration and the whole Schengen area, with a minimum coverage of €30,000)
- **Application form**: The declared travel dates

## Common Mistakes

The most common mistake is booking the hotel reservation only for the first few days and leaving the remaining days blank. Another common mistake is arranging the insurance policy to cover only part of the trip.

## Why Does This Matter So Much?

Consular officers evaluate the consistency of your file as an indicator of the authenticity of your travel plan. Inconsistent documents can lead to a request for additional documents or an extended evaluation process.

## Our Approach

Before submitting your application, we review all your documents together and check date and content consistency. You can also build your own checklist with [our Document Guide tool](/evrak-rehberi).`,
    },
    ar: {
      title: 'لماذا يجب أن يكون التأمين على السفر وحجز الإقامة متسقين في طلب التأشيرة؟',
      excerpt: 'التفصيل الأكثر إهمالًا في طلبات شنغن: تطابق تواريخ التأمين والإقامة وحجز الطائرة مع بعضها.',
      content: `من أكثر الأخطاء الشائعة التي تؤثر سلبًا على تقييم طلبات تأشيرة شنغن هي عدم اتساق التواريخ والمحتوى بين الوثائق المُقدَّمة. في هذا المقال، نتناول أكثر أنواع عدم الاتساق شيوعًا وكيفية تجنبها.

## أي الوثائق يجب أن تكون متسقة؟

- **حجز تذكرة الطائرة**: تواريخ الذهاب والعودة
- **حجز الفندق/الإقامة**: مدة الإقامة والمدينة (المدن)
- **التأمين الصحي للسفر**: المدة الزمنية التي يغطيها التأمين (يجب أن تغطي مدة الرحلة بالكامل ومنطقة شنغن بالكامل، بحد أدنى تغطية 30,000 يورو)
- **نموذج الطلب**: تواريخ السفر المُصرَّح بها

## الأخطاء الشائعة

أكثر خطأ شائع هو حجز الفندق فقط للأيام القليلة الأولى وترك الأيام المتبقية فارغة. خطأ شائع آخر هو ترتيب بوليصة التأمين لتغطي جزءًا فقط من الرحلة.

## لماذا هذا مهم إلى هذا الحد؟

يُقيّم الموظفون القنصليون اتساق ملفك كمؤشر على صحة خطة سفرك. قد تؤدي الوثائق غير المتسقة إلى طلب وثائق إضافية أو تمديد عملية التقييم.

## نهجنا

قبل تقديم طلبك، نراجع معك جميع وثائقك ونتحقق من اتساق التواريخ والمحتوى. يمكنك أيضًا إنشاء قائمة تحقق خاصة بك باستخدام [أداة دليل الوثائق لدينا](/evrak-rehberi).`,
    },
  },
  'vize-reddi-sonrasi-itiraz-mi-yeniden-basvuru-mu': {
    en: {
      title: 'After a Visa Refusal: Should You Appeal or Reapply?',
      excerpt: 'The right path to follow after a refused visa application depends on the reason for refusal, the country, and timing.',
      content: `When your visa application is refused, the first question that usually comes to mind is "what should I do now." The answer varies depending on which country you applied to and the reason for refusal; but the general framework can be summarized as follows.

## First, Read the Refusal Reason Correctly

The reason stated in the refusal letter (with a standard coding system in Schengen countries) determines your next step. A reason of "purpose and conditions of travel not sufficiently proven" and a reason of "fake/misleading document" require completely different strategies. Preparing a new application without reviewing the letter together carries the risk of repeating the same mistake.

## When Is an Appeal (Reconsideration) Meaningful?

Some Schengen countries grant the right to appeal against a refusal decision within a specific period (usually 15-30 days). An appeal makes particular sense in cases where the refusal reason is based on a clear evaluation error (for example, a document you submitted having been overlooked). Instead of submitting a new document, you're requesting a re-evaluation of your existing file.

## When Does Reapplying Make More Sense?

If the refusal reason is based on a point that is **missing/strengthenable**, such as financial sufficiency, clarity of purpose of travel, or insufficiently demonstrated ties to Turkey, reapplying with a strengthened file usually produces a faster result than losing time with an appeal process. In the new application, it's important to present additional documents that directly address the previous refusal's reason (a stronger bank statement, a clearer travel plan, an additional document from your employer, etc.).

## To Avoid Consecutive Refusals

To avoid encountering the same shortcoming in a second application, you need to clarify exactly why the previous application was found insufficient and concretely strengthen that specific point. Reapplying hastily with the same set of documents usually produces the same result.

## Our Approach

We evaluate your refusal letter together and decide whether an appeal or a strengthened reapplication is more appropriate, preparing your second application to directly address the previous refusal's reason. You can share your situation with us through [our Contact page](/iletisim).`,
    },
    ar: {
      title: 'بعد رفض التأشيرة: هل تستأنف أم تعيد التقديم؟',
      excerpt: 'المسار الصحيح الذي يجب اتباعه بعد رفض طلب التأشيرة يعتمد على سبب الرفض والدولة والتوقيت.',
      content: `عندما يُرفض طلب تأشيرتك، غالبًا يكون أول سؤال يطرح نفسه هو "ماذا يجب أن أفعل الآن". تختلف الإجابة حسب الدولة التي تقدمت إليها وسبب الرفض؛ لكن يمكن تلخيص الإطار العام كما يلي.

## اقرأ سبب الرفض بشكل صحيح أولاً

يحدد السبب المذكور في خطاب الرفض (بترميز قياسي في دول شنغن) خطوتك التالية. يتطلب سبب "عدم إثبات غرض وشروط السفر بشكل كافٍ" وسبب "وثيقة مزيفة/مضللة" استراتيجيتين مختلفتين تمامًا. إعداد طلب جديد دون مراجعة الخطاب معًا يحمل خطر تكرار الخطأ نفسه.

## متى يكون الاستئناف (إعادة النظر) منطقيًا؟

تمنح بعض دول شنغن حق الاستئناف ضد قرار الرفض خلال فترة محددة (عادةً 15-30 يومًا). يكون الاستئناف منطقيًا بشكل خاص في الحالات التي يعتمد فيها سبب الرفض على خطأ تقييم واضح (مثل إغفال وثيقة قدمتها). بدلاً من تقديم وثيقة جديدة، تطلب إعادة تقييم ملفك الحالي.

## متى تكون إعادة التقديم أكثر منطقية؟

إذا كان سبب الرفض يعتمد على نقطة **ناقصة/قابلة للتقوية** مثل الكفاية المالية أو وضوح غرض السفر أو عدم إظهار الارتباط بتركيا بشكل كافٍ، فإن إعادة التقديم بملف مُقوّى تُعطي عادةً نتيجة أسرع من إضاعة الوقت في عملية استئناف. في الطلب الجديد، من المهم تقديم وثائق إضافية تعالج سبب الرفض السابق مباشرة (كشف حساب مصرفي أقوى، خطة سفر أوضح، وثيقة إضافية من صاحب العمل، إلخ).

## لتجنب الرفض المتكرر

لتجنب مواجهة النقص نفسه في طلب ثانٍ، يجب توضيح السبب الدقيق الذي جعل الطلب السابق غير كافٍ وتقوية تلك النقطة بشكل ملموس. إعادة التقديم بعجلة بنفس مجموعة الوثائق يؤدي عادةً إلى النتيجة نفسها.

## نهجنا

نُقيّم خطاب الرفض معًا ونحدد ما إذا كان الاستئناف أو إعادة التقديم بملف مُقوّى أكثر مناسبة، ونُعِدّ طلبك الثاني ليعالج سبب الرفض السابق مباشرة. يمكنك مشاركة حالتك معنا من خلال [صفحة الاتصال لدينا](/iletisim).`,
    },
  },

  'yurt-disinda-ogrenci-olarak-ilk-ay': {
    en: {
      title: 'Your First Month Abroad as a Student: What to Do After Getting Your Visa',
      excerpt: 'Practical steps to pay attention to upon arrival and in the first weeks after your student visa is approved.',
      content: `After your student visa is approved, the real preparation is actually just beginning. Unlike the visa process, practical steps after your flight take center stage at this stage.

## What Needs to Be Completed Before Arrival

Most countries require those entering with a student visa to complete a local address notification or residence registration within a specific period from arrival (usually 7-14 days). Missing this period can create problems for future visa extension or residence permit applications. Your school's international student office usually accompanies you through this process; we recommend contacting this office within the first week.

## Bank Account and Local ID

To open a local bank account, an approved copy of your residence registration or school acceptance document is usually required. Transactions such as a lease agreement, a phone line, and in some countries a public transportation card, may also require a local ID/residence number; so prioritizing your residence registration speeds up all other transactions.

## Health Insurance Transition

The travel health insurance you presented in your visa application usually has short-term coverage. After settling in the country, you need to transition to a long-term health insurance required by your school or by registration in the local health system; not delaying this transition is important for uninterrupted access to healthcare services.

## Knowing the Limits of Your Right to Work

A student visa generally grants the right to part-time work with a specific weekly hour limit (varies by country, for example 20 hours per week). Working beyond this limit can put your visa/residence status at risk; we recommend confirming the current limits with your school's career office.

## Our Approach

In the student visa process, we're with you not only through the application but also by clarifying your first steps after arrival. You can find details about the student visa application process on [our Document Guide page](/evrak-rehberi).`,
    },
    ar: {
      title: 'شهرك الأول في الخارج كطالب: ما يجب فعله بعد الحصول على التأشيرة',
      excerpt: 'خطوات عملية يجب الانتباه إليها عند الوصول وفي الأسابيع الأولى بعد الموافقة على تأشيرة الطالب.',
      content: `بعد الموافقة على تأشيرة الطالب، تبدأ التحضيرات الحقيقية في الواقع. على عكس عملية التأشيرة، تبرز الخطوات العملية بعد رحلة الطائرة في هذه المرحلة.

## ما يجب إنجازه قبل الوصول

تطلب معظم الدول من الوافدين بتأشيرة الطالب إنجاز إشعار عنوان محلي أو تسجيل إقامة خلال فترة محددة من الوصول (عادةً 7-14 يومًا). قد يؤدي تفويت هذه الفترة إلى مشاكل في طلبات تمديد التأشيرة أو الإقامة في المستقبل. عادةً ما يرافقك مكتب الطلاب الدوليين في مدرستك خلال هذه العملية؛ نوصي بالتواصل مع هذا المكتب خلال الأسبوع الأول.

## الحساب المصرفي والهوية المحلية

لفتح حساب مصرفي محلي، تُطلب عادةً نسخة معتمدة من تسجيل إقامتك أو وثيقة قبول المدرسة. قد تتطلب معاملات مثل عقد الإيجار وخط الهاتف، وفي بعض الدول بطاقة النقل العام، أيضًا رقم هوية/إقامة محلي؛ لذا فإن إعطاء الأولوية لتسجيل الإقامة يُسرّع جميع المعاملات الأخرى.

## الانتقال إلى التأمين الصحي

يمتلك التأمين الصحي للسفر الذي قدمته في طلب التأشيرة عادةً تغطية قصيرة المدى. بعد الاستقرار في الدولة، يجب عليك الانتقال إلى تأمين صحي طويل المدى تطلبه مدرستك أو يتطلبه التسجيل في النظام الصحي المحلي؛ عدم تأخير هذا الانتقال مهم للحصول على خدمات صحية دون انقطاع.

## معرفة حدود حق العمل

تمنح تأشيرة الطالب عمومًا حق العمل بدوام جزئي بحد ساعات أسبوعي محدد (يختلف حسب الدولة، مثلًا 20 ساعة أسبوعيًا). قد يُعرّض العمل بما يتجاوز هذا الحد وضع تأشيرتك/إقامتك للخطر؛ نوصي بالتأكد من الحدود الحالية من مكتب التوظيف في مدرستك.

## نهجنا

في عملية تأشيرة الطالب، نكون معك ليس فقط خلال التقديم، بل أيضًا من خلال توضيح خطواتك الأولى بعد الوصول. يمكنك أن تجد تفاصيل عن عملية طلب تأشيرة الطالب في [صفحة دليل الوثائق لدينا](/evrak-rehberi).`,
    },
  },

  'aile-birlesimi-sonrasi-yurt-disinda-uyum': {
    en: {
      title: 'Adjusting to Life Abroad After Family Reunion: What You Need to Know',
      excerpt: 'Practical issues that family members moving abroad on a family reunion visa face in the first months, and preparation recommendations.',
      content: `Once your family reunion visa is approved, the process of moving to be with your family is the beginning of a new period, both emotionally and practically. Here are the most common questions encountered after visa approval.

## A Residence Permit Application Is Usually a Separate Step

A family reunion visa authorizes you to enter the country; but for a long-term stay, most countries require a residence permit application separate from the visa. This application usually must be made within a specific period after arrival, and you may be asked to resubmit the originals of your kinship/marriage documents; it's important to carry these documents with you.

## Language Course and Integration Obligations

Some countries (particularly Schengen countries like Germany, the Netherlands, and Austria) require those arriving through family reunion to attend an integration/language course within a specific period. Failing to fulfill this obligation can create problems in renewing your residence permit; we recommend learning the current requirements from the local foreigners' office (Ausländerbehörde and similar institutions) right after arrival.

## The Right to Work Varies from Country to Country

A family reunion residence permit does not always automatically grant the right to work; some countries may require a separate work permit application. If you're planning to work, clarifying this detail in advance prevents disappointment after arriving in the country.

## School Enrollment for Children

If you're moving with your child, school enrollment is usually tied to your residence address; so we recommend discussing with the school administration whether there's a temporary enrollment option before settling into a permanent address. In most countries, enrolling children of compulsory school age is a legal requirement.

## Our Approach

In your family reunion application, we provide guidance not only during the visa stage but also regarding the residence and integration processes after arrival. You can send us questions specific to your situation through [our Contact page](/iletisim).`,
    },
    ar: {
      title: 'التكيف مع الحياة في الخارج بعد جمع شمل الأسرة: ما تحتاج إلى معرفته',
      excerpt: 'قضايا عملية يواجهها أفراد العائلة المنتقلون إلى الخارج بتأشيرة جمع شمل الأسرة في الأشهر الأولى، ونصائح للاستعداد.',
      content: `بعد الموافقة على تأشيرة جمع شمل الأسرة، تُعد عملية الانتقال للانضمام إلى أسرتك بداية فترة جديدة، عاطفيًا وعمليًا على حد سواء. فيما يلي الأسئلة الأكثر شيوعًا التي تطرح بعد الموافقة على التأشيرة.

## طلب إذن الإقامة خطوة منفصلة عادةً

تُخوّلك تأشيرة جمع شمل الأسرة دخول الدولة؛ لكن للإقامة طويلة المدى، تتطلب معظم الدول طلب إذن إقامة منفصل عن التأشيرة. يجب تقديم هذا الطلب عادةً خلال فترة محددة بعد الوصول، وقد يُطلب منك إعادة تقديم أصول وثائق القرابة/الزواج؛ من المهم حمل هذه الوثائق معك.

## دورة اللغة وواجبات الاندماج

تتطلب بعض الدول (خاصة دول شنغن مثل ألمانيا وهولندا وأستراليا) من الوافدين عبر جمع شمل الأسرة حضور دورة اندماج/لغة خلال فترة محددة. قد يؤدي عدم الوفاء بهذا الواجب إلى مشاكل في تجديد إذن إقامتك؛ نوصي بمعرفة الشروط الحالية من مكتب الأجانب المحلي (Ausländerbehörde ومؤسسات مماثلة) فور الوصول.

## يختلف حق العمل من دولة إلى أخرى

لا يمنح إذن إقامة جمع شمل الأسرة حق العمل تلقائيًا دائمًا؛ قد تتطلب بعض الدول طلب إذن عمل منفصل. إذا كنت تخطط للعمل، فإن توضيح هذا التفصيل مسبقًا يمنع خيبة الأمل بعد الوصول إلى الدولة.

## تسجيل الأطفال في المدرسة

إذا كنت تنتقل مع طفلك، يرتبط تسجيل المدرسة عادةً بعنوان إقامتك؛ لذا نوصي بمناقشة إدارة المدرسة حول وجود خيار تسجيل مؤقت قبل الاستقرار في عنوان دائم. في معظم الدول، يُعد تسجيل الأطفال في سن التعليم الإلزامي التزامًا قانونيًا.

## نهجنا

في طلب جمع شمل أسرتك، نُقدّم التوجيه ليس فقط خلال مرحلة التأشيرة، بل أيضًا فيما يتعلق بعمليات الإقامة والاندماج بعد الوصول. يمكنك إرسال أسئلتك الخاصة بحالتك من خلال [صفحة الاتصال لدينا](/iletisim).`,
    },
  },

  'abd-vizesi-b1-b2-mulakatina-nasil-hazirlanilir': {
    en: {
      title: 'How to Prepare for the US Visa (B1/B2) Interview?',
      excerpt: 'Questions encountered in the consular interview, the heart of the US tourist/business visa application, and preparation recommendations.',
      content: `The US visa (B1/B2), unlike many Schengen countries, requires an in-person consular interview. Even if your documents are complete, the impression you make in the interview directly affects the outcome.

## Consistency in the Form Before the Interview Is Essential

The information you provided on the DS-160 form (purpose of travel, length of stay, your employment information) must be exactly consistent with the questions asked in the interview. Giving an answer different from what you wrote on the form creates a trust issue in the officer's eyes, even if small.

## Most Common Question Groups

Interviews generally focus on three main axes: the purpose and plan of the trip (where, for how long, with whom), ties to Turkey (reasons to return such as employment, family, and property), and financial sufficiency (who is financing the trip). Clear, brief, and consistent answers on these three axes are the biggest indicator of being prepared.

## Why "Ties to Home Country" Matters So Much

Consular officers look for concrete evidence that the applicant will return once the visa period ends. Elements such as stable employment, family ties, property ownership, or ongoing education strengthen this conviction. Being able to express these points briefly and clearly in the interview is more effective than long explanations.

## What Happens After a Refusal?

A US visa refusal does not place a permanent barrier on your file; the refusal reason is usually based on Section 214(b) (insufficient conviction of ties), and can be tried again in a new application with a strengthened file. To avoid getting refused again for the same reason, it's important to clarify which point was not found convincing in the previous interview.

## Our Approach

Before the interview, we prepare together the likely questions and an answer framework tailored to your specific situation, arranging your document set to support this consistency. You can find details about the process on [our US visa page](/ulkeler/abd), and a personalized assessment of your situation through [our free initial assessment page](/on-degerlendirme).`,
    },
    ar: {
      title: 'كيف تستعد لمقابلة تأشيرة الولايات المتحدة (B1/B2)؟',
      excerpt: 'الأسئلة التي تُطرح في المقابلة القنصلية، جوهر طلب تأشيرة الولايات المتحدة السياحية/التجارية، ونصائح للاستعداد.',
      content: `تتطلب تأشيرة الولايات المتحدة (B1/B2)، على عكس كثير من دول شنغن، مقابلة قنصلية حضورية. حتى إذا كانت وثائقك كاملة، فإن الانطباع الذي تتركه في المقابلة يؤثر مباشرة على النتيجة.

## الاتساق في النموذج قبل المقابلة أمر ضروري

يجب أن تتطابق المعلومات التي قدمتها في نموذج DS-160 (غرض السفر، مدة الإقامة، معلومات عملك) تمامًا مع الأسئلة المطروحة في المقابلة. تقديم إجابة مختلفة عما كتبته في النموذج يخلق مشكلة ثقة في نظر الموظف، حتى لو كانت صغيرة.

## أكثر مجموعات الأسئلة شيوعًا

تتركز المقابلات عمومًا على ثلاثة محاور أساسية: غرض وخطة الرحلة (إلى أين، لأي مدة، مع من)، الارتباط بتركيا (أسباب العودة مثل العمل والعائلة والملكية)، والكفاية المالية (من يُموّل الرحلة). الإجابات الواضحة والقصيرة والمتسقة في هذه المحاور الثلاثة هي أكبر مؤشر على الاستعداد.

## لماذا "الارتباط بالوطن" مهم إلى هذا الحد

يبحث الموظفون القنصليون عن دليل ملموس على أن مقدم الطلب سيعود عند انتهاء مدة التأشيرة. تُقوّي عناصر مثل العمل المستقر والروابط العائلية وملكية العقارات أو التعليم المستمر هذه القناعة. القدرة على التعبير عن هذه النقاط بشكل مختصر وواضح في المقابلة أكثر فعالية من التفسيرات الطويلة.

## ماذا يحدث بعد الرفض؟

لا يضع رفض تأشيرة الولايات المتحدة عائقًا دائمًا على ملفك؛ يعتمد سبب الرفض عادةً على القسم 214(b) (عدم كفاية قناعة الارتباط)، ويمكن المحاولة مجددًا في طلب جديد بملف مُقوّى. لتجنب الرفض مرة أخرى للسبب نفسه، من المهم توضيح النقطة التي لم تكن مقنعة في المقابلة السابقة.

## نهجنا

قبل المقابلة، نُعِدّ معك الأسئلة المحتملة وإطار إجابة مناسبًا لحالتك الخاصة، ونُرتّب مجموعة وثائقك لدعم هذا الاتساق. يمكنك أن تجد تفاصيل عن العملية في [صفحة تأشيرة الولايات المتحدة لدينا](/ulkeler/abd)، وتقييمًا مخصصًا لحالتك من خلال [صفحة التقييم المسبق المجاني](/on-degerlendirme).`,
    },
  },

  'ingiltere-vizesi-gerekli-belgeler-sik-hatalar': {
    en: {
      title: 'Required Documents for a UK Visa and Common Mistakes',
      excerpt: 'The most common shortcomings in document preparation for a UK visa application and how to avoid them.',
      content: `Since the UK has its own visa system outside the Schengen area, the application process and required documents differ in some respects. Although the online form and biometric appointment steps are clear, a few recurring mistakes in document preparation directly affect the outcome.

## The Most Common Mistake in the Bank Statement

For a UK visa application, the bank statement is expected to cover the last 6 months without interruption and to show no sudden/unexplained large deposits. Depositing a large amount into the account right before applying, instead of strengthening your financial sufficiency, can raise a question of credibility; that's why it's important for your account history to be regular months before the application.

## Clarity of the Travel Plan

Your accommodation and return flight ticket reservations must exactly match the declared travel dates. Even the smallest inconsistency between the reservation dates and the dates declared on the form can lead to a request for additional documents or a negative evaluation.

## Currency of Employment/Income Documents

Documents showing employment status (employment letter, leave document, income document) are expected to be close to the application date and current. An employment letter obtained months earlier may be found insufficient on the grounds that it doesn't reflect current employment status.

## Additional Documents for Family/Child Applications

If applying together with a minor child, additional documents such as a parental consent document and birth certificate are required; missing these documents can delay the entire family's application.

## Our Approach

Before submitting your application, we review your document set together against these commonly encountered points, correcting any date and consistency mismatches before applying. You can find details on [our UK visa page](/ulkeler/ingiltere), and the general document list on [our document guide page](/evrak-rehberi).`,
    },
    ar: {
      title: 'الوثائق المطلوبة لتأشيرة بريطانيا والأخطاء الشائعة',
      excerpt: 'أكثر النقائص شيوعًا في تحضير الوثائق لطلب تأشيرة بريطانيا وكيفية تجنبها.',
      content: `بما أن بريطانيا تمتلك نظام تأشيرة خاصًا بها خارج منطقة شنغن، تختلف عملية التقديم والوثائق المطلوبة في بعض النقاط. على الرغم من وضوح خطوات النموذج عبر الإنترنت والموعد البيومتري، تؤثر بعض الأخطاء المتكررة في تحضير الوثائق مباشرة على النتيجة.

## أكثر خطأ شائع في كشف الحساب المصرفي

في طلب تأشيرة بريطانيا، يُتوقَّع أن يغطي كشف الحساب المصرفي آخر 6 أشهر دون انقطاع وألا تظهر فيه إيداعات كبيرة مفاجئة/غير مفسرة. قد يؤدي إيداع مبلغ كبير في الحساب قبل التقديم مباشرة، بدلًا من تقوية كفايتك المالية، إلى إثارة تساؤل حول المصداقية؛ لذلك من المهم أن يكون تاريخ حسابك منتظمًا لأشهر قبل التقديم.

## وضوح خطة السفر

يجب أن تتطابق حجوزات إقامتك وتذكرة الطائرة للعودة تمامًا مع تواريخ السفر المُصرَّح بها. حتى أصغر عدم اتساق بين تواريخ الحجز والتواريخ المُصرَّح بها في النموذج قد يؤدي إلى طلب وثائق إضافية أو تقييم سلبي.

## حداثة وثائق العمل/الدخل

يُتوقَّع أن تكون الوثائق التي تُظهر حالة العمل (خطاب عمل، وثيقة إذن، وثيقة دخل) قريبة من تاريخ التقديم وحديثة. قد يُعتبر خطاب عمل تم الحصول عليه قبل أشهر غير كافٍ بحجة أنه لا يعكس حالة العمل الحالية.

## وثائق إضافية لطلبات العائلة/الطفل

إذا كان التقديم مع طفل قاصر، تُطلب وثائق إضافية مثل وثيقة موافقة الوالدين وشهادة الميلاد؛ قد يؤخر نقص هذه الوثائق طلب العائلة بالكامل.

## نهجنا

قبل تقديم طلبك، نراجع معك مجموعة وثائقك وفقًا لهذه النقاط الشائعة، ونُصحّح أي عدم تطابق في التواريخ والاتساق قبل التقديم. يمكنك أن تجد التفاصيل في [صفحة تأشيرة بريطانيا لدينا](/ulkeler/ingiltere)، وقائمة الوثائق العامة في [صفحة دليل الوثائق لدينا](/evrak-rehberi).`,
    },
  },
};

const update = db.prepare(`
  UPDATE posts SET title_en = @titleEn, excerpt_en = @excerptEn, content_en = @contentEn,
                    title_ar = @titleAr, excerpt_ar = @excerptAr, content_ar = @contentAr
  WHERE slug = @slug
`);

let count = 0;
const allSlugs = db.prepare('SELECT slug FROM posts').all().map((r) => r.slug);
allSlugs.forEach((slug) => {
  const t = posts[slug];
  if (!t) {
    console.warn(`Çevirisi olmayan post: ${slug}`);
    return;
  }
  update.run({
    slug,
    titleEn: t.en.title,
    excerptEn: t.en.excerpt,
    contentEn: t.en.content,
    titleAr: t.ar.title,
    excerptAr: t.ar.excerpt,
    contentAr: t.ar.content,
  });
  count += 1;
});

console.log(`${count} blog yazısı çevrildi.`);
