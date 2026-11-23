export const personalInfo = {
	name: "Habib Muhammad Sabir",
	firstName: "Habib",
	title: "Senior Full Stack Engineer",
	// Hero heading types through these in order, then loops
	roles: [
		"Senior Full Stack Engineer",
		"Mobile App Developer",
		"Frontend Engineer",
		"Senior React Native Engineer",
	],
	headline:
		"8+ years building scalable, production-grade React/Next.js web apps, Node.js/NestJS backends, and React Native iOS & Android apps shipped to millions of users across fintech, live events, sports, and healthcare.",
	email: "habib.kasbati@gmail.com",
	phone: "+92 335 2253363",
	phoneHref: "tel:+923352253363",
	location: "Karachi, Pakistan",
	linkedin: "https://www.linkedin.com/in/habib-muhammad-sabir-%E2%9C%AA-a61127166/",
	github: "https://github.com/HabibSabir1998",
	cv: {
		fileUrl: "assets/CV.pdf",
		fileName: "Habib-Muhammad-Sabir-CV.pdf",
	},
};

// Voice intro player in the hero. peaks = waveform bar heights (0–1)
// computed from the audio file, so the waveform renders without decoding it.
// If you replace intro.mp3, regenerate peaks to match.
export const introAudio = {
	src: "assets/intro.mp3",
	label: "🎧 Hear my intro",
	peaks: [0.85, 0.55, 0.6, 0.45, 0.1, 0.45, 0.4, 0.59, 0.49, 0.47, 0.29, 0.49, 0.48, 0.26, 0.12, 0.1, 0.74, 0.76, 0.23, 0.65, 1.0, 0.69, 0.57, 0.45, 0.52, 0.57, 0.38, 0.1, 0.78, 0.93, 0.47, 0.73, 0.63, 0.46, 0.52, 0.44, 0.1, 0.9, 0.66, 0.39, 0.88, 0.54, 0.59, 0.41, 0.71, 0.4, 0.1, 0.76, 0.49, 0.37, 0.58, 0.47, 0.13, 0.23, 0.7, 0.1, 0.53, 0.1, 0.85, 0.37, 0.68, 0.22, 0.1, 0.78, 0.62, 0.1, 0.38, 0.57, 0.45, 0.43, 0.22, 0.1],
};

export const about = [
	"Senior Full Stack Engineer with 8+ years building scalable, production-grade React/Next.js web applications, Node.js/NestJS backends, and React Native iOS & Android apps shipped to millions of users across fintech, live events, sports, and healthcare.",
	"Strong backend expertise across REST APIs, WebSockets (Socket.io), and event-driven architectures. Experienced with PostgreSQL, MongoDB, MySQL, and Redis via TypeORM and Prisma. Containerizes with Docker, deploys on AWS, and automates via GitHub Actions CI/CD.",
	"Pioneered AI-powered dev workflows with Figma MCP and Maestro MCP. Delivers full product ownership from system design to store submission across every platform.",
];

export const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Skills", link: "#skills" },
	{ name: "Projects", link: "#projects" },
	{ name: "Experience", link: "#experience" },
	{ name: "Education", link: "#education" },
	{ name: "Contact", link: "#contact" },
];

// Core stack shown in the About section
export const myTechStack = [
	"TypeScript",
	"JavaScript (ES6+)",
	"React.js",
	"Next.js",
	"React Native",
	"Expo",
	"Node.js",
	"NestJS",
	"Express.js",
	"REST APIs",
	"GraphQL",
	"WebSockets (Socket.io)",
	"PostgreSQL",
	"MongoDB",
	"Redis",
	"TypeORM",
	"Prisma",
	"Docker",
	"AWS",
	"GitHub Actions",
	"Figma MCP",
	"Maestro MCP",
	"Claude",
	"Gemini",
	"OpenAI Codex",
	"GitHub Copilot",
];

export const skillGroups = [
	{ category: "Languages", items: ["JavaScript", "TypeScript (ES6+)", "Python", "HTML", "CSS"] },
	{ category: "Frontend", items: ["React.js", "Next.js (App Router, SSR/SSG)", "Vite", "Vue"] },
	{
		category: "Mobile",
		items: ["React Native", "Expo", "iOS", "Android", "React Navigation", "Expo Router", "Live Activities"],
	},
	{ category: "UI Libraries", items: ["Material UI (MUI)", "Shadcn/UI", "Tailwind CSS", "Styled Components"] },
	{ category: "State Management", items: ["Redux Toolkit", "RTK Query", "Zustand", "React Query", "MobX"] },
	{
		category: "Backend",
		items: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "WebSockets (Socket.io)"],
	},
	{
		category: "Event-Driven",
		items: ["Apache Kafka", "Message Queues", "Event-Driven Architecture", "Pub/Sub"],
	},
	{ category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis (caching, sessions, pub/sub)"] },
	{ category: "ORM / ODM", items: ["TypeORM", "Prisma", "Sequelize", "Mongoose"] },
	{
		category: "Architecture",
		items: ["Microservices", "Modular Monolith", "Clean Architecture", "SOLID", "API-First"],
	},
	{ category: "Containerization", items: ["Docker", "Kubernetes (K8s)"] },
	{
		category: "Cloud",
		items: ["AWS (EC2, S3, CloudFront, ECS, RDS)", "Vercel", "Azure (familiarity)", "GCP (familiarity)"],
	},
	{ category: "CI/CD", items: ["GitHub Actions", "CircleCI", "Jenkins (familiarity)", "Fastlane"] },
	{
		category: "OTA & Releases",
		items: ["CodePush", "Stallion", "Expo Updates", "App Store Connect", "Google Play Console"],
	},
	{
		category: "Testing",
		items: ["Maestro (E2E)", "Jest", "React Native Testing Library", "Husky", "SonarQube"],
	},
	{
		category: "Payments",
		items: ["Stripe", "Hyperpay", "PayPal", "In-App Purchases (RevenueCat / RN Purchases)"],
	},
	{
		category: "Notifications",
		items: ["OneSignal", "Firebase Cloud Messaging", "Deep Linking", "Rich Media"],
	},
	{ category: "Monitoring", items: ["Sentry", "Crashlytics", "Firebase Analytics"] },
	{
		category: "AI & MCP Tools",
		items: ["Figma MCP", "Maestro MCP", "GitHub Copilot", "Claude", "Gemini", "OpenAI Codex"],
	},
	{
		category: "Tools",
		items: ["Git", "Docker", "Jira", "Swagger", "Postman", "Flipper", "SonarQube", "React Native DevTools"],
	},
];

// Featured work carousel (Projects section). Images live in public/assets/projects/.
export const showcase = [
	{
		title: "Koora Break",
		category: "Mobile App · iOS & Android",
		img: "assets/projects/koora-break.webp",
		description: "Live football scores, leagues, match details and news with iOS Live Activities.",
		techs: ["React Native", "Redux Toolkit", "NestJS"],
		link: "https://apps.apple.com/us/app/koora-break-live-scores-news/id6456176348",
	},
	{
		title: "The Ring Magazine",
		category: "Web Platform",
		img: "assets/projects/ring-magazine-web.webp",
		description: "Boxing platform with live fight updates, rankings, schedules and fantasy boxing.",
		techs: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Redux Toolkit"],
		link: "https://www.ringmagazine.com",
	},
	{
		title: "Ring Magazine App",
		category: "Mobile App · iOS & Android",
		img: "assets/projects/ring-magazine-app.webp",
		description: "Boxing news, fighter rankings, live events calendar and in-depth fighter stats.",
		techs: ["React Native", "TypeScript", "Redux Toolkit"],
		link: "https://apps.apple.com/us/app/ring-magazine/id1261206136",
	},
	{
		title: "Riyadh Season",
		category: "Web & Mobile",
		img: "assets/projects/riyadh-season.webp",
		description: "Event discovery, ticketing, bookings and an interactive zone map for millions of attendees.",
		techs: ["React Native", "JavaScript (ES6)", "Node.js", "PostgreSQL"],
		link: "https://apps.apple.com/pk/app/riyadh-season/id6467569767",
	},
	{
		title: "Alinma Pay",
		category: "Mobile App · Digital Wallet",
		img: "assets/projects/alinma-pay.webp",
		description: "Digital wallet with transfers, bill payments, QR payments and virtual cards.",
		techs: ["React Native", "TypeScript", "Redux Toolkit", "Node.js", "NestJS", "Expo"],
		link: "https://apps.apple.com/us/app/alinmapay-e-wallet/id1492900777",
	},
	{
		title: "inPay",
		category: "Fintech Website & Mobile Wallet",
		img: "assets/projects/inpay.webp",
		description: "Borderless payments with instant transfers, QR payments, biometric login and a live dashboard.",
		techs: ["JavaScript", "PHP", "Laravel", "MySQL", "REST API", "Firebase", "Swift", "Kotlin"],
		link: "https://apps.apple.com/am/app/inpay/id6741436449",
	},
	{
		title: "Takaful Bazaar",
		category: "Web & Mobile · Insurance",
		img: "assets/projects/takaful-bazaar.webp",
		description: "Islamic insurance platform to compare plans and buy auto, travel, health and home cover.",
		techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "PostgreSQL"],
		link: "https://takafulbazaar.pk",
	},
	{
		title: "Salaam Takaful Virtual Clinic",
		category: "Web & Mobile · Healthcare",
		img: "assets/projects/salaam-takaful.webp",
		description: "Online doctor consultations, appointments, medical records and digital prescriptions.",
		techs: ["React", "Next.js", "React Native", "NestJS", "PostgreSQL", "AWS"],
		link: "https://online.salaamtakaful.com",
	},
	{
		title: "TNFS",
		category: "Mobile App · Health",
		img: "assets/projects/tnfs.webp",
		description: "Quit-smoking companion with Apple Health & Google Fit tracking, streaks and insights.",
		techs: ["React Native (Expo)", "Redux Toolkit", "PostgreSQL", "NestJS"],
		link: "https://apps.apple.com/us/app/tnfs/id6739621897",
	},
	{
		title: "MyKontrax",
		category: "Web & Mobile · AI SaaS",
		img: "assets/projects/mykontrax.webp",
		description: "AI-powered contract lifecycle management with AI agents, smart search and workflows.",
		techs: ["React", "Next.js", "Node.js", "MongoDB", "Redis", "Socket.IO", "LLM"],
		link: "https://mykontrax.com",
	},
	{
		title: "SageTap",
		category: "Web & Mobile · AI Platform",
		img: "assets/projects/sagetap.webp",
		description: "AI orchestration platform to build and monitor LLM workflows across providers.",
		techs: ["React", "Next.js", "Node.js", "PostgreSQL", "LangChain", "LLM"],
		link: "https://www.sagetap.io",
	},
	{
		title: "Think Fitness Life",
		category: "Mobile App · Fitness",
		img: "assets/projects/think-fitness-life.webp",
		description: "Fitness companion for workouts, goals, progress and health tracking.",
		techs: ["React Native", "Node.js", "Express", "PostgreSQL", "Firebase"],
	},
	{
		title: "Shifaam",
		category: "Web & Mobile · Healthcare",
		img: "assets/projects/shifaam.webp",
		description: "Find doctors, book appointments and lab tests, order medicines and consult online.",
		techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB"],
	},
	{
		title: "OAKS",
		category: "Web & Mobile · E-commerce",
		img: "assets/projects/oaks.webp",
		description: "Fashion e-commerce with search, wishlists, order tracking and secure checkout.",
		techs: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Stripe"],
	},
	{
		title: "Valai",
		category: "Business Website",
		img: "assets/projects/valai.webp",
		description: "Fast, SEO-optimized business website and digital platform.",
		techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
	},
];

// Web projects (bento grid). className values keep the original grid layout;
// img values are the original template's animated backgrounds.
export const projects = [
	{
		id: 1,
		img: "https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif",
		title: "Joy Awards",
		description:
			"Official web platform for Saudi Arabia’s premier entertainment awards serving millions of visitors — multilingual SSR, real-time result reveals, Lighthouse score 93+ via SSR and edge caching.",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		titleClassName: "justify-end",
		link: "https://joyawards.sa/en",
		techs: ["Next.js", "TypeScript", "NestJS", "REST APIs", "CDN"],
	},
	{
		id: 2,
		img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
		title: "The Ring Magazine",
		description:
			"World’s most prestigious boxing publication — live WebSocket scoring server, fantasy league with dynamic leaderboards, boosting session duration by 32% for millions of global fans.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-start",
		link: "https://www.ringmagazine.com",
		techs: ["React", "Next.js", "Node.js", "WebSockets", "Fantasy Engine"],
	},
	{
		id: 3,
		img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
		title: "Webook",
		description:
			"Saudi Arabia’s leading event ticketing platform — NestJS queue workers for high-concurrency booking, multi-gateway payments, seat selection UI optimization reducing drop-off by 25%.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		titleClassName: "justify-center",
		link: "https://webook.com/en",
		techs: ["React", "Next.js", "NestJS", "Payment Gateways", "Queue Systems"],
	},
	{
		id: 4,
		img: "https://i.pinimg.com/736x/c7/de/01/c7de016c811fa5fae9d7120402f27645.jpg",
		title: "Takaful Bazaar",
		description:
			"Full-stack fintech platform: Next.js user portal + admin CMS, NestJS/PostgreSQL APIs for policy, claims, and payments; OCR onboarding reducing friction by 45%.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-start",
		link: "https://takafulbazaar.pk",
		techs: ["React", "Next.js", "NestJS", "PostgreSQL", "Redux Toolkit"],
	},
	{
		id: 5,
		img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
		title: "Salaam Takaful — Doctor Portal",
		description:
			"Telemedicine portal with real-time WebSocket appointment availability and video consultation flows, reducing clinic call volume by 30%.",
		className: "md:col-span-3 md:row-span-2",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		link: "https://online.salaamtakaful.com",
		techs: ["React", "Node.js", "WebSockets", "MongoDB"],
	},
	{
		id: 6,
		img: "https://i.pinimg.com/originals/bf/c3/fb/bfc3fb764ff5f4d8d9ecb6da8544709c.gif",
		title: "Kontrax",
		description:
			"Cloud document management SaaS with rich editor, NestJS e-signature workflows, RBAC, and audit trails — cut document processing time by 55%.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		link: "https://mykontrax.com",
		techs: ["React", "NestJS", "TypeScript", "Cloud Storage", "e-Signature"],
	},
	{
		id: 7,
		img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
		title: "Sagetap",
		description:
			"AI-powered B2B tech evaluation platform with recommendation engine via Node.js middleware — improved buyer-to-vendor conversion by 30%.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		titleClassName: "justify-start",
		link: "https://www.sagetap.io",
		techs: ["React", "Node.js", "AI APIs", "B2B SaaS"],
	},
	{
		id: 8,
		img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
		title: "Zaya Care",
		description:
			"US healthcare platform trusted by 100+ practices (NY & NJ) — provider onboarding, insurance verification, appointment booking; cut admin time by 40%.",
		className: "lg:col-span-3 md:col-span-3 md:row-span-1",
		titleClassName: "justify-start",
		link: "https://zayacare.com",
		techs: ["Next.js", "Node.js", "Insurance APIs", "WebSockets"],
	},
];

// img values are the original template's animated backgrounds (cycled)
export const mobileApps = [
	{
		id: 101,
		img: "https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif",
		title: "Koora Break",
		description:
			"Live sports scores with real-time updates, personalized feeds, push notifications, and iOS Live Activities for lock-screen match widgets.",
		techs: ["React Native", "TypeScript", "RTK Query", "Live Activities", "Expo"],
		appStore: "https://apps.apple.com/us/app/koora-break-live-scores-news/id6456176348",
		playStore: "https://play.google.com/store/apps/details?id=com.koora_break.app",
	},
	{
		id: 102,
		img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
		title: "Ring Magazine",
		description:
			"World’s most prestigious boxing publication app with live rankings, real-time scoring, fantasy league, and video streaming for millions of global fans.",
		techs: ["React Native", "TypeScript", "Redux Toolkit", "Video Streaming"],
		appStore: "https://apps.apple.com/us/app/ring-magazine/id1261206136",
		playStore: "https://play.google.com/store/apps/details?id=com.zeen101.ringtv.app.android",
	},
	{
		id: 103,
		img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
		title: "Joy Awards",
		description:
			"Official app for Saudi Arabia’s premier entertainment awards serving millions of users with nominations, live results, voting, and media gallery.",
		techs: ["React Native", "TypeScript", "RTK Query", "Optimized Listing"],
		appStore: "https://apps.apple.com/us/app/joy-awards/id1583000494",
		playStore: "https://play.google.com/store/apps/details?id=com.joyawards.android.prod",
	},
	{
		id: 104,
		img: "https://i.pinimg.com/736x/c7/de/01/c7de016c811fa5fae9d7120402f27645.jpg",
		title: "Riyadh Season",
		description:
			"Official app for Saudi Arabia’s largest entertainment festival with event discovery, ticketing, and in-app purchases for millions of attendees.",
		techs: ["React Native", "TypeScript", "Redux Thunk", "In-App Purchases"],
		appStore: "https://apps.apple.com/pk/app/riyadh-season/id6467569767",
		playStore: "https://play.google.com/store/apps/details?id=sa.gea.riyadhseason.main",
	},
	{
		id: 105,
		img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
		title: "EWC — Esports World Cup",
		description:
			"Official Esports World Cup app with tournament brackets, live leaderboards, team profiles, and integrated payments.",
		techs: ["React Native", "TypeScript", "MobX", "Payments"],
		appStore: "https://apps.apple.com/us/app/esports-world-cup/id6504853584",
		playStore: "https://play.google.com/store/apps/details?id=com.uxbert.ewc",
	},
	{
		id: 106,
		img: "https://i.pinimg.com/originals/bf/c3/fb/bfc3fb764ff5f4d8d9ecb6da8544709c.gif",
		title: "TNFS",
		description:
			"Health and wellness app with HealthKit/Google Fit biometric tracking, personalized insights, and full test coverage via Husky and SonarQube.",
		techs: ["React Native", "TypeScript", "RTK Query", "Apple HealthKit", "Google Fit", "Sentry", "Jest"],
		appStore: "https://apps.apple.com/us/app/tnfs/id6739621897",
		playStore: "https://play.google.com/store/apps/details?id=com.badaelcompany.hawaa",
	},
	{
		id: 107,
		img: "https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif",
		title: "Alinma Pay E-Wallet",
		description:
			"Saudi Arabia’s leading digital e-wallet with secure payments, money transfers, and real-time transaction tracking.",
		techs: ["React Native", "TypeScript", "RTK Query", "Payments"],
		appStore: "https://apps.apple.com/us/app/alinmapay-e-wallet/id1492900777",
		playStore: "https://play.google.com/store/apps/details?id=com.alinma.pay.consumer",
	},
	{
		id: 108,
		img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
		title: "Takaful Bazaar",
		description:
			"Pakistan’s leading Islamic fintech app with insurance purchases, OCR scanning, QR verification, and payment integrations.",
		techs: ["React Native", "TypeScript", "Redux Toolkit", "OCR", "Payments"],
		appStore: "https://apps.apple.com/pk/app/takaful-bazaar/id6445988230",
		playStore: "https://play.google.com/store/apps/details?id=com.takafulbazaar",
	},
	{
		id: 109,
		img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
		title: "Salaam Takaful",
		description:
			"Telemedicine app with doctor booking, live video consultations via Agora, and real-time WebSocket notifications.",
		techs: ["React Native", "TypeScript", "WebRTC", "WebSockets", "Agora"],
		appStore: "https://apps.apple.com/pk/app/salaam-takaful/id1570263059",
		playStore: "https://play.google.com/store/apps/details?id=com.avolox.salaamtakaful",
	},
	{
		id: 110,
		img: "https://i.pinimg.com/736x/c7/de/01/c7de016c811fa5fae9d7120402f27645.jpg",
		title: "InPay",
		description:
			"Borderless P2P payment app with instant transfers, spending tracking, and real-time balance updates.",
		techs: ["React Native", "JavaScript", "Redux", "Redux-Thunk", "Payments"],
		appStore: "https://apps.apple.com/am/app/inpay/id6741436449",
		playStore: "https://play.google.com/store/apps/details?id=ng.inpay.app",
	},
	{
		id: 111,
		img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
		title: "Litt",
		description:
			"Social entertainment app with live video streaming, real-time chat, and push notification-driven engagement.",
		techs: ["React Native", "TypeScript", "Redux Toolkit", "Live Chat", "Video Streaming"],
		appStore: "https://apps.apple.com/au/app/litt/id1481924695",
		playStore: "https://play.google.com/store/apps/details?id=com.littglobal.litt",
	},
	{
		id: 112,
		img: "https://i.pinimg.com/originals/bf/c3/fb/bfc3fb764ff5f4d8d9ecb6da8544709c.gif",
		title: "Levi’s",
		description:
			"Official Levi’s global retail app with product browsing, live chat, push campaigns, and checkout for millions of shoppers.",
		techs: ["React Native", "TypeScript", "Redux Thunk", "Live Chat", "Push Notifications"],
		appStore: "https://apps.apple.com/us/app/levis-shop-denim-more/id1481624020",
		playStore: "https://play.google.com/store/apps/details?id=com.levistrauss.customer",
	},
	{
		id: 113,
		img: "https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif",
		title: "Sporti",
		description:
			"Sports community app with real-time location tracking, live chat, and activity discovery.",
		techs: ["React Native", "TypeScript", "Live Chat", "Location Tracking", "SonarQube"],
		// Store links from the resume (App Store id1628232729, Play com.sporforya) currently return 404.
	},
	{
		id: 114,
		img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
		title: "Athlos",
		description:
			"Fitness and athletic training app with live streaming sessions and push-notification workout reminders.",
		techs: ["React Native", "TypeScript", "Live Streaming", "Push Notifications", "SonarQube"],
		appStore: "https://apps.apple.com/am/app/athlos-bill-matsangos/id1586986528",
		playStore: "https://play.google.com/store/apps/details?id=com.athlosbm.athlos",
	},
];

// Newest first
export const workExperience = [
	{
		id: 1,
		company: "Uxbert Labs",
		title: "Senior Software Engineer",
		location: "Saudi Arabia, Remote",
		period: "Dec 2024 – Present",
		achievements: [
			"Engineered end-to-end features across React/Next.js frontends and NestJS/Node.js backends for consumer products serving millions of active users, including a high-traffic sports platform and an event ticketing marketplace.",
			"Designed RESTful and WebSocket (Socket.io) APIs with NestJS and event-driven message queuing for booking and notification workflows; introduced Redis caching, reducing DB load by 45%.",
			"Engineered high-traffic React Native/Expo apps with reels, live podcasts, and video streaming (+28% avg. session duration); integrated Hyperpay and RevenueCat end-to-end, reducing checkout failure by 18%.",
			"Integrated Figma MCP for design-to-code (-40% UI time) and Maestro MCP E2E suites (-55% QA time); maintained GitHub Actions + Fastlane CI/CD with Docker on AWS, cutting manual release effort by 60%.",
		],
		skills: ["React", "Next.js", "NestJS", "React Native", "Redis", "Docker", "AWS", "Figma MCP"],
	},
	{
		id: 2,
		company: "NXT Labs",
		title: "Senior Software Engineer",
		location: "USA, Remote",
		period: "Nov 2023 – Dec 2024",
		achievements: [
			"Developed production React Native/TypeScript apps with Redux Toolkit and RTK Query, reducing redundant API calls by 45%; integrated Sentry cutting MTTR by 50%; compressed release cycles from 3 days to 4 hours via CI/CD.",
			"Built Next.js (App Router) frontends and Node.js/NestJS REST APIs; migrated a legacy Express monolith to modular NestJS with TypeORM-managed PostgreSQL, cutting technical debt by 35%.",
			"Introduced Redis for API caching and distributed sessions, reducing response latency by 38%; containerized services with Docker and automated deployments via GitHub Actions.",
			"Enforced strict TypeScript with shared type contracts across mobile, web, and API layers, reducing production bugs by 20%; led code reviews and mentored 3 engineers.",
		],
		skills: ["React Native", "Next.js", "NestJS", "PostgreSQL", "Redis", "Redux Toolkit", "Sentry"],
	},
	{
		id: 3,
		company: "Takaful Bazaar",
		title: "Senior Software Engineer",
		location: "Karachi, Pakistan",
		period: "Nov 2022 – Oct 2023",
		achievements: [
			"Led cross-platform React Native/TypeScript development of Pakistan’s leading Islamic fintech app; implemented OCR document scanning and QR verification reducing onboarding by 45%; improved performance 25% via FlashList and RTK Query.",
			"Built a Next.js SSR user portal and admin CMS dashboard; designed NestJS APIs with PostgreSQL/TypeORM for policy management, claims, and payments.",
			"Implemented a WebSocket (Socket.io) notification layer for live policy updates; introduced Redis caching improving API response by 30%.",
			"Containerized with Docker; automated mobile and web releases via GitHub Actions and CircleCI, reducing errors by 35%; built Jest + RNTL test suites cutting regressions by 35%.",
		],
		skills: ["React Native", "Next.js", "NestJS", "PostgreSQL", "Socket.io", "Redis", "Docker"],
	},
	{
		id: 4,
		company: "Salaam Takaful",
		title: "Software Engineer II",
		location: "Karachi, Pakistan",
		period: "Jan 2022 – Oct 2022",
		achievements: [
			"Built a telemedicine React Native app with WebRTC and Agora for video consultations (sub-3s connect time); implemented offline Redux Persist caching for low-connectivity clinical environments.",
			"Developed a React/Next.js doctor booking portal and Node.js/Express APIs; implemented WebSocket (Socket.io) notifications via NestJS gateways, reducing scheduling conflicts by 35%.",
			"Optimized MongoDB queries with indexed aggregation pipelines (+40% performance); managed PostgreSQL health records via TypeORM with row-level RBAC.",
			"Reduced re-renders by 40% via memoization; enforced ESLint, Prettier, and Husky across a 12-engineer cross-platform team.",
		],
		skills: ["React Native", "WebRTC", "Agora", "Next.js", "Node.js", "MongoDB", "PostgreSQL"],
	},
	{
		id: 5,
		company: "Symplex",
		title: "Software Engineer",
		location: "USA, Remote",
		period: "May 2021 – Jan 2022",
		achievements: [
			"Built cross-platform React Native apps; improved startup time by 40% via Hermes engine config, lazy loading, and deferred splash screens.",
			"Built React/Vite frontends and Node.js/Express backends with JWT REST APIs and MongoDB/Mongoose.",
			"Configured Docker and deployed to AWS EC2; integrated FCM push notifications boosting re-engagement by 22%.",
		],
		skills: ["React Native", "React", "Vite", "Node.js", "Express", "MongoDB", "AWS EC2"],
	},
	{
		id: 6,
		company: "House of Techies",
		title: "Software Engineer",
		location: "USA, Remote",
		period: "May 2020 – Apr 2021",
		achievements: [
			"Developed React Native/Expo apps with native module integration (camera, biometrics, sensors); reduced cold start by 35% via Metro config and Hermes tuning.",
			"Built Next.js SSR web apps and a shared Node.js/Express backend with JWT auth and RBAC.",
			"Managed MySQL and PostgreSQL schemas via Prisma ORM; containerized with Docker and set up GitHub Actions CI.",
		],
		skills: ["React Native", "Expo", "Next.js", "Node.js", "Prisma", "MySQL", "PostgreSQL"],
	},
	{
		id: 7,
		company: "AG Solutions",
		title: "Frontend Engineer",
		location: "Karachi, Pakistan",
		period: "Feb 2019 – Apr 2020",
		achievements: [
			"Built iOS/Android apps with React Native and web UIs with React.",
			"Integrated third-party REST APIs via Axios and React Query with caching, retry, and optimistic updates.",
			"Built reusable component libraries and design systems using Material UI and CSS-in-JS; implemented deep linking with React Navigation and dynamic routing in Next.js.",
		],
		skills: ["React Native", "React", "React Query", "Material UI", "Next.js"],
	},
];

export const education = [
	{
		id: 1,
		institution: "Sir Syed University of Engineering & Technology",
		degree: "Bachelor of Science in Computer Engineering",
		location: "Karachi, Pakistan",
		period: "2017 – 2020",
	},
];

// No certifications or awards are listed on the current resume.
// Add entries here ({ id, name, issuer, year, link? }) and a section will render.
export const certifications: {
	id: number;
	name: string;
	issuer: string;
	year: string;
	link?: string;
}[] = [];

export const socialMedia = [
	{
		id: 1,
		name: "GitHub",
		img: "assets/git.svg",
		link: personalInfo.github,
	},
	{
		id: 2,
		name: "LinkedIn",
		img: "assets/linkedin.svg",
		link: personalInfo.linkedin,
	},
	{
		id: 3,
		name: "Email",
		img: "assets/send.svg",
		link: `mailto:${personalInfo.email}`,
	},
];
