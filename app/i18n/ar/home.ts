import { type HomeType } from '../types/home';

const home: HomeType = {
  introSection: {
    text: 'Virufy رحبًا بك في',
    text2: 'رفيقك الرقمي للصحة',
    subText: [
      {
        type: 'text',
        text: 'مقدمة عن ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: ', التطبيق المتطور الذي يستخدم خوارزميات الصوت المتقدمة والذكاء الاصطناعي التوليدي لتحليل أنماط تنفسك وتقديم رؤى حول أعراض العدوى المحتملة.',
      },
    ],
    buttonText: 'تجربة التطبيق',
    disclaimers: [
      '*أي جهاز يحتوي على متصفح ويب وميكروفون (مثل iPhone، Android، الكمبيوتر المحمول، iPad).',
      '*التطبيق لا يزال قيد التطوير، دعمنا من خلال المساهمة بأصوات سعالكم في تطبيق جمع البيانات لدينا.',
    ],
    mainText2: 'كيف يعمل',
    subText2: [
      {
        type: 'text',
        text: 'مع مجرد سعال متعمد في ميكروفون جهازك، ',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: ' يستخدم قوة الذكاء الاصطناعي لاكتشاف أنماط الصوت الفريدة المرتبطة بالأمراض التنفسية، مثل COVID-19، السل، الإنفلونزا، RSV، مرض الانسداد الرئوي المزمن، والربو.',
      },
    ],
  },
  section2: {
    text: 'صحتك هي أولويتنا',
    subtext:
      'في فيروفي، صحتك هي محور كل ما نقوم به. نحن نولي الأولوية للخصوصية، مما يضمن أن تظل بياناتك آمنة وسرية.',
    title: ['تحليل فوري', 'خصوصية في المنزل', 'واجهة مستخدم سهلة'],
    sub: [
      'استجابة سريعة لخصائص السعال الخاصة بك ونمط الشذوذ بناءً على نمط صوت السعال',
      'اشعر بالأمان عندما تعلم أن نتائجك مخصصة لعينيك فقط.',
      'تصميم بديهي لسهولة التنقل وتجربة مستخدم سلسة.',
    ],
    disclaimer:
      '*فيروفي ليس بديلاً عن الاستشارة الطبية المهنية أو التشخيص أو العلاج. يُنصح المستخدمون بالتشاور مع مقدم رعاية صحية مرخص بشأن أي مخاوف أو قرارات طبية.',
    buttonText: 'تقنيتنا',
  },
};

export default home;
