import { siteConfig } from "@/lib/constants";

export const legalLinks = [
  { href: "/legal", label: "Coaching Disclaimer" },
];

export const coachingDisclaimerShort =
  "Personal development coaching only — not therapy, counseling, psychology, psychiatry, or any form of mental health treatment.";

export const coachingAcknowledgmentLabel =
  "I understand this is coaching and mentorship — not therapy, counseling, or mental health treatment.";

export const legalSections = [
  {
    id: "nature-of-services",
    title: "Nature of Services",
    paragraphs: [
      `${siteConfig.name} (${siteConfig.legalName}), operated by ${siteConfig.founder}, provides personal development, accountability, and mentorship coaching for men. All services are educational and developmental in nature.`,
      "Coaching is not therapy, counseling, psychology, psychiatry, social work, or any other licensed mental health profession. No services offered through this website diagnose, treat, cure, or prevent any mental health condition, emotional disorder, or medical condition.",
      `${siteConfig.founder} is not a licensed therapist, counselor, psychologist, psychiatrist, social worker, or medical doctor. No professional relationship of any healthcare or therapeutic kind is created through use of this website or participation in coaching.`,
    ],
  },
  {
    id: "scope",
    title: "Scope of Coaching",
    paragraphs: [
      "Coaching focuses on forward-looking personal and professional growth, including confidence, communication, relationships, personal style, work-life balance, and goal-setting.",
      "Coaching sessions may discuss life challenges, but they are not a substitute for qualified mental health care, medical care, legal advice, or financial advice. Clients are responsible for seeking appropriate licensed professionals when those services are needed.",
      "Coaching does not involve clinical assessment, diagnosis, treatment planning for mental illness, trauma processing as clinical therapy, or crisis intervention beyond directing clients to appropriate emergency resources.",
    ],
    list: [
      "Accountability and goal-setting",
      "Communication and interpersonal skills",
      "Personal style and professional presence",
      "Work-life balance and productivity",
      "Confidence and personal development",
    ],
    listTitle: "Coaching may include:",
  },
  {
    id: "not-provided",
    title: "Services Not Provided",
    paragraphs: [
      "To avoid any misunderstanding, the following services are expressly not offered:",
    ],
    list: [
      "Psychotherapy, counseling, or mental health treatment",
      "Diagnosis or treatment of depression, anxiety, PTSD, addiction, or any clinical condition",
      "Couples therapy, family therapy, or marriage counseling as licensed clinical services",
      "Crisis counseling or emergency mental health intervention",
      "Medical, psychiatric, or pharmaceutical advice",
      "Legal or financial advice",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    paragraphs: [
      "By using this website or engaging in coaching, you acknowledge that you are seeking personal development coaching — not mental health treatment.",
      "You are solely responsible for your decisions, actions, and outcomes. Coaching provides guidance and accountability; it does not guarantee specific results.",
      "You agree to provide accurate information and to notify your coach if you are currently under the care of a mental health professional, so that coaching complements — and does not conflict with — your existing care.",
      "Services are intended for adults. You must be at least 18 years of age to engage in coaching.",
    ],
  },
  {
    id: "crisis",
    title: "Crisis & Emergency Resources",
    paragraphs: [
      "Coaching is not appropriate for mental health emergencies. If you or someone you know is in crisis, experiencing suicidal thoughts, or needs immediate help, please contact emergency services or a qualified crisis line right away.",
      "Do not use this website, contact form, or coaching sessions as a substitute for emergency care.",
    ],
    list: [
      "Emergency Services: Call 911 (United States)",
      "988 Suicide & Crisis Lifeline: Call or text 988",
      "Crisis Text Line: Text HOME to 741741",
    ],
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    paragraphs: [
      `${siteConfig.legalName} and ${siteConfig.founder} shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of this website or coaching services.`,
      "Information on this website is provided for general informational purposes only and does not constitute professional, medical, psychological, or legal advice.",
      "You agree to indemnify and hold harmless ${siteConfig.legalName} from claims arising from your use of coaching services or reliance on website content, to the fullest extent permitted by applicable law.",
    ],
  },
  {
    id: "florida",
    title: "Florida Notice",
    paragraphs: [
      `${siteConfig.legalName} is based in South Florida. Life coaching and personal development services are distinct from regulated mental health professions under Florida law.`,
      "If you require licensed mental health services, please consult a qualified Florida-licensed provider. Coaching services offered here are strictly non-clinical personal development services.",
    ],
  },
  {
    id: "consent",
    title: "Consent",
    paragraphs: [
      "By accessing this website, submitting a contact form, booking a session, or engaging in coaching, you acknowledge that you have read, understood, and agree to this Coaching Disclaimer.",
      "If you do not agree, please do not use this website or coaching services.",
    ],
  },
];

export const legalFaqs = [
  {
    question: "Is Sarah a licensed therapist or counselor?",
    answer:
      "No. Sarah Angelo is a personal development coach and mentor. She is not a licensed therapist, counselor, psychologist, psychiatrist, or mental health professional, and does not hold herself out as one.",
  },
  {
    question: "Can coaching help with mental health conditions?",
    answer:
      "Coaching is not mental health treatment and is not designed to address clinical conditions. If you are experiencing depression, anxiety, trauma, or any mental health concern, please consult a licensed mental health professional. Coaching may complement your personal growth but is never a substitute for clinical care.",
  },
  {
    question: "What's the difference between coaching and therapy?",
    answer:
      "Therapy focuses on diagnosing and treating mental health conditions, often exploring past experiences with a licensed clinician. Coaching is forward-focused personal development — setting goals, building skills, and accountability — without clinical diagnosis or treatment.",
  },
  {
    question: "What if I'm in crisis?",
    answer:
      "Do not use coaching or this website for emergencies. Call 911 for immediate danger, or contact the 988 Suicide & Crisis Lifeline (call or text 988) for mental health crisis support.",
  },
];
