// Diccionario EN (ES se toma del HTML original)
const messages = {
  en: {
    "header.logoTitle": "ADD Systems",
    "header.logoSub": "Systems for local businesses",
    "header.badge": "Pilot version for Louisville",
    "header.faq": "FAQ",
    "header.viewPlans": "View plans",
    "header.tryDemo": "Try demo",

    "hero.eyebrow": "Turn messages into bookings, orders and payments without living glued to your phone.",
    "hero.title": "ADD digital systems for businesses that can’t keep handling everything through WhatsApp.",
    "hero.subtitle": "ADD Bookings, ADD Orders and ADD Automations. Three simple systems to stop losing clients to chaos, no-shows and unanswered messages.",
    "hero.ctaPlans": "View ADD plans",
    "hero.ctaCompare": "Compare features",
    "hero.note": "No weird apps. Everything runs with links, a simple page and your existing payment processors.",

    "hero.panelTitle": "Estimated monthly impact",
    "hero.panelPill": "Example: barbershop & restaurant",
    "hero.beforeTitle": "Before ADD Systems",
    "hero.beforeBadge": "Silent loss",
    "hero.beforeRow1Label": "No-show appointments",
    "hero.beforeRow1Value": "10–15 / month",
    "hero.beforeRow2Label": "Forgotten orders",
    "hero.beforeRow2Value": "8–12 / month",
    "hero.beforeRow3Label": "Time on WhatsApp",
    "hero.beforeRow3Value": "2–3 h / day",
    "hero.afterTitle": "With ADD Bookings + Orders",
    "hero.afterBadge": "Order & control",
    "hero.afterRow1Label": "No-shows",
    "hero.afterRow1Value": "–60% with deposit",
    "hero.afterRow2Label": "Clear orders",
    "hero.afterRow2Value": "+30% effective",
    "hero.afterRow3Label": "Free time per day",
    "hero.afterRow3Value": "+1–2 h free",
    "hero.panelFooter": "Approximate results depending on business type. ADD Automations boosts the effect even more.",

    "pain.label": "The real problem",
    "pain.title": "Your business doesn’t need more social media. It needs order.",
    "pain.subtitle": "Most local businesses don’t lose money because of lack of likes, but because of chaos in bookings, orders and payments. ADD Systems attacks that bottleneck.",
    "pain.withoutTitle": "Without ADD Systems",
    "pain.without1": "Schedule in WhatsApp, a notebook or your memory.",
    "pain.without2": "Clients who don’t show up because you never confirmed the appointment.",
    "pain.without3": "Orders lost between voice notes.",
    "pain.without4": "Payments that are “later” and never arrive.",
    "pain.without5": "You or your team glued to the phone all day.",
    "pain.withTitle": "With ADD Systems",
    "pain.with1": "Each booking or order goes through a simple system.",
    "pain.with2": "Deposits and payments before reserving or cooking.",
    "pain.with3": "Automatic reminders reduce no-shows.",
    "pain.with4": "Post-sale messages that ask for reviews and repeat clients.",
    "pain.with5": "Your time goes back to focusing on the business, not the chat.",

    "plans.label": "ADD Plans",
    "plans.title": "Three simple systems. You pick one, we set it up and it starts working.",
    "plans.subtitle": "We don’t sell “pretty websites”. We sell systems that turn messages into bookings, orders and payments. Every plan includes initial implementation and ongoing support.",

    "plans.bookings.name": "ADD Bookings",
    "plans.bookings.for": "For barbershops, nails, spa, hair salons, personal trainers.",
    "plans.bookings.setup": "$199 setup",
    "plans.bookings.month": "$39 / month – booking system with basic payments.",
    "plans.bookings.li1": "Booking page ready to use.",
    "plans.bookings.li2": "Calendar configured to your real hours.",
    "plans.bookings.li3": "Simple automatic confirmations.",
    "plans.bookings.li4": "Fast payments (Stripe / PayPal).",
    "plans.bookings.li5": "Basic panel to view and manage bookings.",
    "plans.bookings.li6": "Basic support through agreed channel.",
    "plans.bookings.cta": "Start with ADD Bookings",
    "plans.bookings.note": "Ideal if your main pain is the booking agenda and clients who don’t show up.",

    "plans.orders.pill": "Recommended",
    "plans.orders.name": "ADD Orders",
    "plans.orders.for": "For restaurants, food trucks, bakeries, dark kitchens, workshops.",
    "plans.orders.setup": "$399 setup",
    "plans.orders.month": "$59 / month – clear orders and upfront payments.",
    "plans.orders.li1": "Menu / catalog in a single page.",
    "plans.orders.li2": "“Place order” button with structured message.",
    "plans.orders.li3": "Pickup or delivery option in the same flow.",
    "plans.orders.li4": "Fast payments (Stripe / PayPal) before starting the order.",
    "plans.orders.li5": "Optional Square integration for those already using it.",
    "plans.orders.li6": "Priority support and adjustments based on demand.",
    "plans.orders.cta": "Activate ADD Orders",
    "plans.orders.note": "Recommended if you waste time explaining the menu or confirming every order.",

    "plans.automations.name": "ADD Automations",
    "plans.automations.for": "For higher-volume businesses that want the system to work on its own.",
    "plans.automations.setup": "$699 setup",
    "plans.automations.month": "$149 / month – full automations and reports.",
    "plans.automations.li1": "Includes everything from ADD Bookings or ADD Orders (as needed).",
    "plans.automations.li2": "Automatic reminders before the appointment or delivery.",
    "plans.automations.li3": "Post-sale messages for reviews and next bookings.",
    "plans.automations.li4": "Advanced integrations with Square and other tools.",
    "plans.automations.li5": "Basic monthly usage and performance reports.",
    "plans.automations.li6": "Premium support and ongoing flow improvements.",
    "plans.automations.cta": "Boost your business with ADD Automations",
    "plans.automations.note": "Designed for those who already bill well but want order, data and automation.",

    "compare.label": "Features detail",
    "compare.title": "Quick comparison between ADD Bookings, Orders and Automations.",
    "compare.subtitle": "Same focus: less chaos, more control. Each plan adds a new layer: first bookings, then orders, then automations.",
    "compare.colFeature": "Feature",
    "compare.colBookings": "ADD Bookings",
    "compare.colOrders": "ADD Orders",
    "compare.colAutomations": "ADD Automations",
    "compare.row1": "Personalized page",
    "compare.row2": "Online bookings",
    "compare.row3": "Catalog / Menu",
    "compare.row4": "Fast payments",
    "compare.row5": "Optimized WhatsApp button",
    "compare.row6": "Structured order",
    "compare.row7": "Automatic reminders",
    "compare.row8": "Post-sale follow-up",
    "compare.row9": "Square integration",
    "compare.row10": "Monthly reports",
    "compare.row11": "Setup",
    "compare.row12": "Monthly fee",

    "demo.label": "Next step",
    "demo.title": "See a live demo or book a quick call.",
    "demo.subtitle": "The most efficient way: see the flow applied to a real business like yours.",
    "demo.text": "What do you want to see first?\nYou can test a barbershop-style booking system (ADD Bookings) or a restaurant / dark kitchen-style order flow (ADD Orders).",
    "demo.ctaBookings": "View ADD Bookings demo (barbershop)",
    "demo.ctaOrders": "View ADD Orders demo (restaurant)",
    "demo.ctaCall": "Book a direct call",

    "faq.label": "Frequently asked questions",
    "faq.title": "Typical doubts before activating ADD Systems.",
    "faq.q1": "Do I have to change everything I already use?",
    "faq.a1": "No. ADD Systems runs on top of what you already have. If you already use WhatsApp, Instagram or Square, we plug them into the flow and use them in your favor.",
    "faq.q2": "What does each plan include in practice?",
    "faq.a2": "Bookings focuses on schedule and deposits; Orders on menu, higher tickets and delivery; Automations adds reminders, post-sale messages and advanced integrations.",
    "faq.q3": "How long does it take to get the system ready?",
    "faq.a3": "Bookings: 3–7 days; Orders: 5–10 days; Automations: phased, depending on volume.",
    "faq.q4": "What don’t we do, to avoid false expectations?",
    "faq.a4": "We don’t manage your social media, we don’t answer messages for you, and we don’t promise guaranteed sales. Our focus is the system, not external marketing.",
    "faq.ctaFull": "See full FAQ →",

    "ctaFinal.title": "Your business already generates interest. Now it needs that interest to become a system.",
    "ctaFinal.text": "Pick a plan, watch a quick demo or review the full FAQ and we’ll see if ADD Systems fits your business.",
    "ctaFinal.cta": "View ADD plans again",
  },
};

(function () {
  const DEFAULT_LANG = "es";

  function applyLanguage(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!el.dataset.es) {
        el.dataset.es = el.textContent.trim();
      }

      if (lang === "en") {
        const msg = messages.en && messages.en[key];
        if (msg) {
          el.textContent = msg;
        }
      } else {
        if (el.dataset.es) {
          el.textContent = el.dataset.es;
        }
      }
    });

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      if (lang === "en") {
        toggle.textContent = "ES";
        toggle.dataset.langNext = "es";
      } else {
        toggle.textContent = "EN";
        toggle.dataset.langNext = "en";
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Idioma por defecto
    applyLanguage(DEFAULT_LANG);

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        const next = toggle.dataset.langNext === "en" ? "en" : "es";
        applyLanguage(next);
      });
    }
  });
})();
