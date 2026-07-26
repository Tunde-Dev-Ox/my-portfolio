import { GoStar, GoGear, GoGoal } from "react-icons/go";

// this is the category data for the home page...the data on the card
import Image from "next/image";
export const HomeCategoryData = [
    {
        icon: <Image src="/time.svg" alt="Time" width={25} height={25} />,
        title: "Experience",
        header: "+3 years",
        description: "Expertise in building products from scratch with an understanding of both technical and business needs.",
    },
    {
        icon: <Image src="/aitop.svg" alt="AI Products" width={25} height={25} />,
        title: "AI Products",
        header: "3 Platforms",
        description: "Hands-on production experience integrating Azure AI, OpenAI, and Gemini APIs into real, shipped products.",
    },
    {
        icon: <Image src="/layers.svg" alt="Domains" width={25} height={25} />,
        title: "Domains",
        header: "4 Industries",
        description: "Shipped across logistics, food delivery, hospitality, and AI SaaS — each with distinct users and market dynamics.",
    },
    {
        icon: <Image src="/office.svg" alt="Home Office" width={25} height={25} />,
        title: "Product stack",
        header: "Full lifecycle",
        description: "From user research and roadmap planning to technical scoping and cross-functional delivery — I own every stage.",
    }
]



// this is the category data for the about page...the data on the card
export const AboutCategoryData = [
    {
        icon: <Image src="/time.svg" alt="Time" width={25} height={25} />,
        title: "Experience",
        header: "+3 years",
        description: "Product, MVP launch, one-to-n product scaling, collaboration with the product team",
    },
    {
        icon: <Image src="/aitop.svg" alt="AI Products" width={25} height={25} />,
        title: "Specialty",
        header: "Product strategy",
        description: "I help teams identify opportunities, define product direction, and turn ideas into successful products.",
    },
    {
        icon: <Image src="/layers.svg" alt="Domains" width={25} height={25} />,
        title: "Technical basis",
        header: "Front-end & AI",
        description: "Experience in building products from scratch with an understanding of both technical and business needs.",
    },
    {
        icon: <Image src="/office.svg" alt="Home Office" width={25} height={25} />,
        title: "Work model",
        header: "Remote / Hybrid",
        description: "Ready to work remotely or hybrid, depending on the work arrangement. Open to relocation for the right opportunity.",
    }
]


// this contains all projects data for the projects page
export const ProjectsData = [
    {
        slug: "keru",
        img: "/keru.png",
        title: "Keru",
        description: "Led the end-to-end development of Keru, a three-sided cargo logistics platform connecting van owners with businesses moving goods — built for iOS and Android",
        link: "/projects/keru",
        metric: "3 apps + admin dashboard delivered",
        metricColor: "bg-teal-100",
    },
    {
        slug: "goover",
        img: "/goover.png",
        title: "Goover",
        description: "An AI-powered product that translates your PM local market experience into global hiring-ready format — fully powered by Gemini.",
        link: "/projects/goover",
        metric: "Solo-built, fully shipped",
        metricColor: "bg-violet-100",
    },
    {
        slug: "pizza-jungle",
        img: "/pj.png",
        title: "Pizza Jungle",
        description: "Managed product iteration for one of Nigeria's largest pizza chains with 40k+ users, driving feature prioritization and order conversion improvements.",
        link: "/projects/pizza-jungle",
        metric: "60% drop in bug complaints",
        metricColor: "bg-blue-100",
    },
    {
        img: "/lingroks.png",
        slug: "lingroks",
        title: "Lingroks",
        description: "An AI translator built for the Microsoft Imagine Cup 2025 — translates text, explains meanings, and runs text-to-speech. Powered by Azure AI. Scaled to hundreds of users",
        link: "/projects/lingroks",
        metric: "Microsoft Imagine Cup 2025",
        metricColor: "bg-amber-100",
    },
    {
        slug: "brooi",
        img: "/brooi-logo.png",
        title: "Brooi",
        description: "Joined as the founding PM at an early-stage marketplace startup — built product culture, delivery processes, and shipped an MVP from scratch.",
        link: "/projects/brooi",
        metric: "100+ host listings, MVP shipped",
        metricColor: "bg-rose-100",
    }
];


// this contains the detailed content for each project's detail page
export const ProjectDetailsData = [
    {
        slug: "keru",
        img: "/keru.png",
        title: "Keru",
        subtitle: "Three-sided cargo logistics marketplace connecting van owners with businesses that need to move goods—an Uber for cargo.",
        role: "Product Manager",
        company: "Mactavis",
        timeline: "2025 — 2026",
        teamSize: "Team of 8",
        platform: "iOS, Android, Web",
        problem: "Van owners across Nigeria park their vehicles for hours waiting for cargo while businesses waste days hunting for reliable transport. Without a central marketplace, both sides lose revenue and time — and the economy moves slower than it should.",
        approach: "I started with couple of sessions with the stakeholders to understand the business goals and objectives. Then, I proceeded with user and market research to understand the pain points of the users and map their daily workflows and pain points, and to understand the market and industry to identify gaps and opportunities. The key insight was that both sides had tried informal WhatsApp groups but failed due to trust and reliability issues. I prioritised the matching and verification features over a payments system because trust was the real unlock — without it, payments wouldn't matter anyway. The major tradeoff was scope: we could either build a full transaction platform or launch fast with a lead-generation model. I chose speed to validate demand first.",
        solution: "We built three separate applications — an iOS and Android app for fleet owners to manage fleet and logistics, an iOS and Android app for drivers who needs to get jobs to transport cargo, an iOS and Android app for cargo owners (everyday users) to move their goods from one place to another, and a web admin dashboard for admin operations management. The core innovation was a verification system that vetted van owners' documents and vehicle condition before they could accept jobs, solving the trust gap that killed earlier informal attempts. We chose separate apps over a single unified app because each user's workflow was fundamentally different — a van owner managing trips on the go has nothing in common with a cargo owner trying to find a van to move their goods from one place to another.",
        outcomes: "Successfully delivered all three client-facing applications — iOS and Android apps for van owners, drivers, and cargo owners — plus a web admin dashboard for operations management. The platform passed internal testing and is currently in a controlled beta phase with the business managing rollout. Delivery was completed on scope and the product is fully functional and in active use internally.",
        lessons: "The biggest lesson from Keru is that building trust is more important than building features. In a marketplace, if users don't trust each other, they won't use the platform. If I could redo it, I'd start with a simpler single-sided MVP (just connecting businesses to our managed fleet) before adding marketplace dynamics. The three-sided model is powerful but the coordination overhead nearly killed the project twice. Next time, I'll sequence the sides more carefully. I'd also build a more robust on-boarding process for van owners and drivers. The onboarding process was a bit manual and time consuming.",
        tags: ["Logistics", "Marketplace", "Mobile", "Web", "Zero-to-One"],
        links: {
            live: "https://www.keru.app",
        },
    },
    {
        slug: "goover",
        img: "/goover.png",
        title: "Goover",
        subtitle: "A personal AI tool that translates my Nigerian PM experience into globally competitive job applications.",
        role: "Prouct builder",
        company: "Personal project",
        timeline: "2026 — Present",
        teamSize: "Solo Project",
        platform: "Web",
        problem: "As a PM in Lagos applying for international roles, I kept running into the same wall — my experience was real but my language wasn't landing. Western hiring managers couldn't map 'cargo logistics marketplace' or 'Nigerian bank platform' onto their mental model of a strong PM candidate. I needed a tool that didn't exist, so I built it.",
        approach: "I built this entirely to solve my own problem — no user interviews, no external validation. The decisions were personal and deliberate: I chose Gemini AI for the translation layer because its tone is measured and professional, which matters when reframing experience for hiring contexts where hallucination or exaggeration is career-ending. The core design principle was conservative accuracy over impressive-sounding output.",
        solution: "Built an AI-powered web app where PMs paste their local experience and get it reframed in globally-standard PM terminology — OKRs, stakeholder management, cross-functional leadership, and impact metrics. The app also runs a gap analysis showing what global hiring managers look for versus what the user has. I chose Gemini over GPT-4 for its more moderate and professional tone, which is better for professional resume context where hallucination risk is unacceptable.",
        outcomes: "A working personal tool I use actively for international job applications. Built with React/Vite, Supabase Edge Functions, and Gemini AI, deployed on Vercel. The real outcome is this portfolio — Goover is proof that I can identify a problem, scope a solution, and ship it independently with LLM technology and modern tools without a team or a budget.",
        lessons: "Building for yourself is deceptively hard. Without external users pushing back, it's easy to over-engineer for imagined needs. I caught myself adding features I thought users would want rather than what I actually needed. The discipline of asking 'do I actually use this?' was a useful forcing function I'll carry into team settings. I realized that building a shippable product is more important than building a perfect product. Also, I realized that sometimes the best product is the one that solves your own problem",
        tags: ["AI", "SaaS", "Web", "Zero-to-One", "Gemini"],
        links: {
            live: "https://wegoover.vercel.app/",
        },
    },
    {
        slug: "pizza-jungle",
        img: "/pj.png",
        title: "Pizza Jungle",
        subtitle: "Product iteration for one of Nigeria's largest pizza chains with 40k+ monthly active users.",
        role: "Product Manager",
        company: "Mactavis",
        timeline: "2025 — 2026",
        teamSize: "Team of 10",
        platform: "Mobile (iOS, Android) and Web",
        problem: "40,000 monthly active users but a product that was buckling under its own weight — weekly bug complaints were piling up and the app had crashed during the previous year's Black Friday, one of the highest revenue days of the year. The cost wasn't just user frustration — it was direct revenue loss at the worst possible time.",
        approach: "I prioritised ruthlessly: stability before features, always. The CEO wanted new features; the data and the support queue told me the product needed to be fixed before it needed to be grown. I ran systematic product testing cycles, worked closely with engineering to triage and resolve the highest-impact issues first, and treated Black Friday as a hard deadline that we had to engineer toward. I also identified the Order Later feature as a low-effort, high-value addition that addressed a consistent user request without adding system complexity.",
        solution: "Simplified the customisation flow from a dense grid of options to a conversational step-by-step interface with visual previews. Removed 40% of topping combinations that had zero historical orders to reduce decision fatigue. Added a 'Recommended' preset based on the most popular combinations for each pizza. The guiding principle was reducing cognitive load without reducing actual choice — unpopular options were hidden, not removed.",
        outcomes: "Cut weekly bug complaints by 60% through systematic product testing and issue resolution. The app handled Black Friday sales without a single crash — a direct reversal of the previous year's failure. Shipped the Order Later feature, allowing users to schedule pizza deliveries at a time of their choosing, which addressed one of the most common user requests in the support queue.",
        lessons: "My biggest lesson here was that fixing what's broken is almost always more valuable than building something new. I had to push back against feature pressure from leadership repeatedly — and the Black Friday result vindicated that call. Data and a clear prioritisation framework are the only things that protect you from stakeholder pressure in those situations.",
        tags: ["Food Delivery", "Mobile", "Consumer", "Growth"],
        links: {
            live: "https://pizzajungleng.com/",
        },
    },
    {
        slug: "lingroks",
        img: "/lingroks.png",
        title: "Lingroks",
        subtitle: "AI translator with context-aware explanations and text-to-speech, built for the Microsoft Imagine Cup 2025.",
        role: "Product & Frontend",
        company: "Lingroks",
        timeline: "July 2024 — Jan 2025",
        teamSize: "University team of 4",
        platform: "Web",
        problem: "Existing translation tools give you words but not meaning. Students and professionals lose context when translating between languages — leading to misunderstandings in academic and business communication. No free tool explained why a translation was the right one.",
        approach: "We were a university team with zero budget, so every decision was about maximum impact per hour. I prioritised the 'explain translation' feature over polish because no competitor was doing it. The tradeoff was brutal: we launched with a slower, less polished product that did something unique rather than a refined product that did the same thing as Google Translate. We used Azure AI for the translation and explanation layer.",
        solution: "Built a web app that translates text AND explains the meaning and context behind each translation, plus text-to-speech for pronunciation. The 'explain' feature was the differentiator — it tells you why 'estar' versus 'ser' was chosen in Spanish, for example. We chose a simple chat-like interface because our users (students) were already comfortable with conversational UIs, making the learning curve zero.",
        outcomes: "Submitted to the Microsoft Imagine Cup 2025 — our first competitive product submission as a team. Proved that context-aware translation had real user appetite before the team disbanded due to funding constraints.",
        lessons: "Killing the product was the hardest but most important decision. We had users who loved it, but we couldn't find a sustainable model. What surprised me was how attached we got — we kept finding excuses to keep it running for three extra months. I learned that product love without a business model isn't a product — it's a hobby. I'd set clear shutdown criteria from day one next time and stick to them.",
        tags: ["AI", "Translation", "Web", "Zero-to-One", "Imagine Cup"],
        links: {
            live: "#",
        },
    },
    {
        slug: "brooi",
        img: "/brooi-logo.png",
        title: "Brooi",
        subtitle: "Joined as the founding PM at an early-stage vacation rental startup — built product culture, delivery processes, and shipped an MVP from scratch.",
        role: "Product Associate",
        company: "Brooi",
        timeline: "Sept. 2022 — Jan 2025",
        teamSize: "Startup team of 7",
        platform: "Web",
        problem: "The Vacation Rental Industry in Nigeria was running on Instagram DMs and WhatsApp Status — hosts couldn't list products easily, guests couldn't discover them, and the hosts had no way to track bookings. Without a proper platform, scaling was impossible and every booking was a manual nightmare.",
        approach: "As the first product hire, I had no existing processes to lean on. I spent my first month just observing and learning about the industry and the users. Firstly, together with the founders, we built a communication and async working culture within the team to ensure smooth workflows and effective collaboration. After that, we mapped out the entire user journey for both hosts and guests, understanding their needs and pain points. Then, we prioritised the features that would provide the most value to our users and help us validate our business model. I created user personas, conducted user interviews, and developed user stories to guide the development process. I also worked closely with the engineering team to ensure that the product was built to spec and that the development process was smooth and efficient.",
        solution: "Built an MVP with host dashboard and guest flow. Skipped payments in v1 — sales team closed leads instead. Validated demand before committing to payments infra.",
        outcomes: "Shipped an MVP that onboarded early users and partnered with over 100 hosts and listings. Established product management processes from scratch — sprint planning, backlog management, research cadence — that didn't exist before I joined. Worked closely with a small engineering team in a high-ambiguity environment to keep delivery moving despite the chaos typical of an early-stage startup.",
        lessons: "Founding PM in a chaotic startup taught me that proximity to engineering is as important as staying close to the user. The closer I stayed to the engineers, the faster we moved and the fewer surprises we hit. I'd do that even more deliberately next time — less ceremony, more conversation.",
        tags: ["Marketplace", "Web", "Zero-to-One", "Early-stage"],
        links: {
            live: "https://www.brooi.com",
        },
    },
];


// this is the data for the specialization buttons on the home hero section
export const SpecializationData = [
    { label: "Product Strategy", color: "bg-violet-500 text-white" },
    { label: "Roadmapping", color: "bg-teal-400 text-white" },
    { label: "User Research", color: "bg-blue-400 text-white" },
    { label: "AI Prototyping", color: "bg-amber-400 text-black" },
    { label: "Zero-to-One PM", color: "bg-red-500 text-white" },
    { label: "Product Analytics", color: "bg-indigo-400 text-white" },
    { label: "Agile", color: "bg-slate-200 text-black" },
    { label: "React", color: "bg-amber-600 text-white" },
    { label: "SQL", color: "bg-sky-400 text-white" },
];



// this is the data for the tools card
export const ToolsData = [
    {
        img: "/claude.svg",
        title: "Claude",
        subtitle: "For AI assisted development"
    },
    {
        img: "/jira.svg",
        title: "Jira",
        subtitle: "For roadmaps, sprints & delivery"
    },
    {
        img: "/miro.svg",
        title: "Miro",
        subtitle: "For product discovery & whiteboarding"
    },
    {
        img: "/figma.svg",
        title: "Figma",
        subtitle: "For user flows & wireframes"
    },
    {
        img: "/google.svg",
        title: "Google Analytics",
        subtitle: "For product analytics & insights"
    },
    {
        img: "/slack.svg",
        title: "Slack",
        subtitle: "For team communication & collaboration"
    },
    {
        img: "/notion.svg",
        title: "Notion",
        subtitle: "For product documentation & knowledge base"
    },
    {
        img: "/mixpanel.svg",
        title: "Mixpanel",
        subtitle: "For product analytics, A/B testing, and user behavior insights"
    },
    {
        img: "/database.svg",
        title: "SQL",
        subtitle: "For data analysis and manipulation"
    },
    {
        img: "/agile.svg",
        title: "Agile",
        subtitle: "Expertise in managing projects using agile methodology"
    },
    {
        img: "/ai.svg",
        title: "AI Products",
        subtitle: "Hands-on experience in building AI products"
    },
    {
        img: "/research.svg",
        title: "User Research",
        subtitle: "Expertise in conducting user research to identify user needs and pain points"
    },
    {
        img: "/sense.svg",
        title: "Product Sense",
        subtitle: "Ability to understand user needs and pain points, and translate them into product requirements and features"
    },
    {
        img: "/strategy.svg",
        title: "Product Strategy",
        subtitle: "Ability to analyze market trends, identify opportunities, and develop strategies to achieve business goals"
    }
]



// this contains the data for my blog cards
export const BlogCardData = [
    {
        img: "/blog1.avif",
        title: "Why junior product managers get stuck in the project management trap",
        date: "August 8, 2025 | Mind the Product",
        description: "Junior product managers are often brilliant, driven, and full of ideas. But many find themselves trapped in project management, unable to make strategic impact. Here&apos;s why this happens — and how to break free and become a true product leader.",
        link: "https://www.mindtheproduct.com/why-junior-product-managers-get-stuck-in-the-project-management-trap/",
    },
    {
        img: "/pinterest.jpg",
        title: "How Pinterest Turns a Ping Into 30 Minutes of Engagement",
        date: "October 1, 2025 | Notes by Tunde",
        description: "A deep dive into how Pinterest designs its products to keep users engaged for long periods using notifications and recommendations.",
        link: "https://open.substack.com/pub/notesbytunde/p/how-pinterest-turns-a-ping-into-30?r=27yhv7&utm_campaign=post&utm_medium=web",
    },
    {
        img: "/logistics.avif",
        title: "A case study: What launching a 3-sided logistics app taught me about building for real people",
        date: "June 30, 2026 | Notes by Tunde",
        description: "I once built a 3-sided logistics app connecting cargo vans, businesses, and drivers. After six months of development for the three mobile apps (iOS and Android), a web admin dashboard, and business process automation, it was deployed. It taught me couple of things that I'm excited to share with you",
        link: "https://open.substack.com/pub/notesbytunde/p/what-launching-a-3-sided-logistics?r=27yhv7&utm_campaign=post&utm_medium=web",
    },
    {
        img: "/blog2.jpg",
        title: "Why product sense will outlast every AI tool",
        date: "July 9, 2026 | Notes by Tunde",
        description: "In the age of AI, many product managers worry about becoming obsolete. But the truth is, product sense is the one skill that will always be in demand.",
        link: "https://open.substack.com/pub/notesbytunde/p/why-product-sense-will-outlast-every?r=27yhv7&utm_campaign=post-expanded-share&utm_medium=web",
    }
]


// this is the data for the value drivers section on the about page
export const valueDrivers = [
    {
        icon: <GoStar className="w-6 h-6" />,
        title: "Zero-to-One Product Building",
        description: "I thrive in ambiguity. From a vague problem to a shipped product with real users — that's where I do my best work and generate the most impact.",
    },
    {
        icon: <GoGear className="w-6 h-6" />,
        title: "Strategic Cross-functional Leadership",
        description: "I connect engineering, design, and business to move in the same direction with clarity and speed, reducing wasted cycles and increasing output quality.",
    },
    {
        icon: <GoGoal className="w-6 h-6" />,
        title: "Data-informed Decision Making",
        description: "I combine quantitative signals with qualitative insights to make product decisions that actually move metrics, not just ship features.",
    },
];


// this is the data for the operating principles section on the about page
export const operatingPrinciples = [
    {
        step: "01",
        title: "Discover & Define",
        description: "I start by understanding the problem deeply — user research, market analysis, and stakeholder interviews — before defining what success looks like.",
    },
    {
        step: "02",
        title: "Build & Iterate",
        description: "I ship fast and learn faster. MVPs, prototypes, and continuous discovery loops are how I reduce risk and validate direction with real feedback.",
    },
    {
        step: "03",
        title: "Measure & Scale",
        description: "Once product-market fit is emerging, I focus on systems, metrics, and processes that turn a good product into a growing, scalable one.",
    },
];


// this is the data for the focus groups section on the about page
export const focusGroups = [
    {
        category: "Strategic",
        color: "bg-violet-500 text-white",
        items: ["Product Strategy", "Go-to-Market", "Product-led growth"],
    },
    {
        category: "User",
        color: "bg-teal-400 text-white",
        items: ["User Research", "Product Analytics", "Growth"],
    },
    {
        category: "Technical",
        color: "bg-blue-400 text-white",
        items: ["AI Products", "Prototyping", "React", "TypeScript", "JavaScript", "SQL", "Next.js"],
    },
    {
        category: "Process",
        color: "bg-amber-400",
        items: ["Agile", "Product Strategy", "Product-led growth"],
    },
];



// this is the data for the trajectory steps section on the about page
export const trajectorySteps = [
    {
        period: "Now",
        title: "Deepening AI & product-led growth",
        description: "I'm actively learning AI product management, software engineering, and deepening my expertise in product-led growth strategies to drive sustainable adoption.",
    },
    {
        period: "Next",
        title: "Product at a high-growth company",
        description: "I'm looking to join a product team where I can take real ownership — driving roadmap decisions, shaping product direction, and growing into broader strategic responsibility under leaders who invest in their people.",
    },
    {
        period: "Future",
        title: "Entrepreneurship & VC",
        description: "Long-term, I want to build and back products that solve structural problems across Africa — starting as a founder and eventually as an investor backing teams solving hard, meaningful problems.",
    },
];


// this is the data for the work history section on the about page
export const workHistory = [
    {
        img: "/mactavis.png",
        company: "Mactavis",
        role: "Mactavis | Product manager",
        date: "May 2025 - Present",
        description: "I currently ship products across logistics, food delivery, and fintech. I led the end-to-end development of Keru — a three-sided cargo logistics platform (iOS, Android, and a web admin dashboard) connecting van owners with businesses moving goods, now in beta. I also managed product for Pizza Jungle, one of Nigeria's largest pizza chains, for 6 months. Alongside this, I'm building a multi-sided marketplace platform for a major Nigerian bank, owning user research, roadmap planning, and cross-functional delivery across engineering, design, and executive stakeholders. We will see where this takes us.",
    },
    {
        img: "/lingroks.jpg",
        company: "Lingroks",
        role: "Lingroks | Product & Frontend",
        date: "July 2024 - Jan 2025",
        description: "Lingroks was a playground for me and my university friends. We built an AI translator that could translate, explain the meaning of texts, and run text-to-speech, helping students and professionals communicate better. It was built for the Microsoft Imagine Cup 2025 challenge, positioning the product against other AI and accessibility tools. We scaled to hundreds of users and shut down after due to funding.",
    },
    {
        img: "/brooi.jpg",
        company: "brooi",
        role: "Brooi | Product associate",
        date: "Sept. 2022 - Jan 2025",
        description: "I joined Brooi as the first product hire, working directly with the founding team to establish product culture and delivery systems. I started by supporting the core marketplace product — managing the backlog, prioritizing sprints, and working with engineering to ship improvements week in and week out. I owned the product from zero-to-one: defining the strategy, building the initial MVP with a small team, running user research, and leading the go-to-market launch that brought our first paying customers.",
    },
    {
        img: "/alvonant.svg",
        company: "Alvonant",
        role: "Alvonant | Junior Product manager",
        date: "June. 2022 - Sept. 2022",
        description: "My work at Alvonant was to help in doing boring tasks like writing user stories, refining the product backlog, and other tasks that the product manager at the time didn't have time to do. It was a great learning experience and I got to work on a variety of projects."
    },
];
