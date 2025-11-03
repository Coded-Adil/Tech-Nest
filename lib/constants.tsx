// Define a type for the raw event data without Mongoose document properties
export interface EventData {
    title: string;
    slug: string;
    description: string;
    overview: string;
    image: string;
    venue: string;
    location: string;
    date: string;
    time: string;
    mode: string;
    audience: string;
    agenda: string[];
    organizer: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

export const events: EventData[] = [
    {
        title: "React Conf 2024",
        slug: "react-conf-2024",
        description: "Join us for the largest React conference in North America. Learn about the latest React features, best practices, and future of web development.",
        overview: "Three days of intense React learning, networking, and hands-on workshops with industry experts.",
        image: "/images/event1.png",
        venue: "Moscone Center",
        location: "San Francisco, CA",
        date: "2024-03-15",
        time: "09:00",
        mode: "hybrid",
        audience: "React developers, web developers, technical leads",
        agenda: [
            "Keynote: Future of React",
            "Server Components Deep Dive",
            "React Performance Optimization",
            "Building Design Systems with React",
            "State Management in 2024"
        ],
        organizer: "React Community",
        tags: ["react", "javascript", "web development", "frontend"],
        createdAt: new Date("2023-12-01T08:00:00Z"),
        updatedAt: new Date("2023-12-01T08:00:00Z")
    },
    {
        title: "Next.js Summit",
        slug: "nextjs-summit",
        description: "The premier Next.js conference featuring the latest updates, best practices, and real-world case studies.",
        overview: "Learn about App Router, Server Components, and the future of Next.js directly from the Vercel team.",
        image: "/images/event2.png",
        venue: "Austin Convention Center",
        location: "Austin, TX",
        date: "2024-04-22",
        time: "10:00",
        mode: "in-person",
        audience: "Next.js developers, full-stack developers",
        agenda: [
            "Next.js 14 Features",
            "Building with App Router",
            "Enterprise Next.js Patterns",
            "Performance Optimization",
            "Deployment Strategies"
        ],
        organizer: "Vercel",
        tags: ["nextjs", "react", "web development", "full-stack"],
        createdAt: new Date("2023-12-15T09:30:00Z"),
        updatedAt: new Date("2023-12-15T09:30:00Z")
    },
    {
        title: "JavaScript World Conference",
        slug: "javascript-world",
        description: "The world's largest JavaScript conference covering everything from core fundamentals to cutting-edge features.",
        overview: "Three days of JavaScript excellence with industry leaders and innovators.",
        image: "/images/event3.png",
        venue: "Javits Center",
        location: "New York, NY",
        date: "2024-05-08",
        time: "08:30",
        mode: "hybrid",
        audience: "JavaScript developers of all levels",
        agenda: [
            "Modern JavaScript Features",
            "TypeScript in Production",
            "Node.js Performance",
            "Web Assembly and JavaScript",
            "Testing Best Practices"
        ],
        organizer: "JavaScript Foundation",
        tags: ["javascript", "typescript", "web development", "programming"],
        createdAt: new Date("2024-01-05T10:00:00Z"),
        updatedAt: new Date("2024-01-05T10:00:00Z")
    },
    {
        title: "AI Innovation Hackathon",
        slug: "ai-hackathon-2024",
        description: "48-hour hackathon focused on building innovative AI solutions using cutting-edge technologies.",
        overview: "Build, learn, and compete in teams to create AI-powered applications that solve real-world problems.",
        image: "/images/event4.png",
        venue: "Seattle Tech Campus",
        location: "Seattle, WA",
        date: "2024-06-14",
        time: "09:00",
        mode: "in-person",
        audience: "Developers, data scientists, AI enthusiasts",
        agenda: [
            "Opening Ceremony",
            "Team Formation",
            "48-Hour Build Time",
            "Project Presentations",
            "Awards Ceremony"
        ],
        organizer: "AI Innovation Lab",
        tags: ["ai", "machine learning", "hackathon", "innovation"],
        createdAt: new Date("2024-01-20T11:15:00Z"),
        updatedAt: new Date("2024-01-20T11:15:00Z")
    },
    {
        title: "Web3 Developer Meetup",
        slug: "web3-developer-meetup",
        description: "Evening of Web3 insights, networking, and hands-on blockchain development workshops.",
        overview: "Connect with Web3 developers and learn about the latest developments in blockchain technology.",
        image: "/images/event5.png",
        venue: "Miami Tech Hub",
        location: "Miami, FL",
        date: "2024-07-20",
        time: "18:00",
        mode: "in-person",
        audience: "Web3 developers, blockchain enthusiasts",
        agenda: [
            "State of Web3",
            "Smart Contract Development",
            "DeFi Implementation",
            "Security Best Practices",
            "Networking Session"
        ],
        organizer: "Web3 Miami",
        tags: ["web3", "blockchain", "ethereum", "smart contracts"],
        createdAt: new Date("2024-02-01T14:20:00Z"),
        updatedAt: new Date("2024-02-01T14:20:00Z")
    },
    {
        title: "Full Stack Conference",
        slug: "fullstack-conference",
        description: "Comprehensive conference covering both frontend and backend development technologies.",
        overview: "Learn about modern full-stack development practices and architecture patterns.",
        image: "/images/event6.png",
        venue: "Denver Convention Center",
        location: "Denver, CO",
        date: "2024-08-12",
        time: "09:00",
        mode: "hybrid",
        audience: "Full-stack developers, software engineers",
        agenda: [
            "Modern Architecture Patterns",
            "API Design Best Practices",
            "Frontend Performance",
            "Database Optimization",
            "DevOps for Full-Stack"
        ],
        organizer: "Tech Conferences Co",
        tags: ["full-stack", "web development", "backend", "frontend"],
        createdAt: new Date("2024-02-15T16:45:00Z"),
        updatedAt: new Date("2024-02-15T16:45:00Z")
    },
    {
        title: "DevOps Unleashed",
        slug: "devops-unleashed",
        description: "Conference focused on modern DevOps practices, tools, and methodologies.",
        overview: "Learn about CI/CD, containerization, and cloud-native development from industry experts.",
        image: "/images/event1.png",
        venue: "Chicago Tech Center",
        location: "Chicago, IL",
        date: "2024-09-05",
        time: "08:00",
        mode: "in-person",
        audience: "DevOps engineers, SREs, platform engineers",
        agenda: [
            "Modern CI/CD Practices",
            "Kubernetes at Scale",
            "Infrastructure as Code",
            "Observability",
            "Security in DevOps"
        ],
        organizer: "DevOps Chicago",
        tags: ["devops", "kubernetes", "ci-cd", "cloud"],
        createdAt: new Date("2024-03-01T09:00:00Z"),
        updatedAt: new Date("2024-03-01T09:00:00Z")
    },
    {
        title: "Mobile Development Summit",
        slug: "mobile-dev-summit",
        description: "Summit focused on iOS, Android, and cross-platform mobile development.",
        overview: "Explore the latest in mobile development across all major platforms.",
        image: "/images/event2.png",
        venue: "LA Convention Center",
        location: "Los Angeles, CA",
        date: "2024-10-18",
        time: "09:30",
        mode: "hybrid",
        audience: "Mobile developers, app designers",
        agenda: [
            "Cross-Platform Development",
            "Native App Performance",
            "Mobile UI/UX Trends",
            "App Store Optimization",
            "Mobile Security"
        ],
        organizer: "Mobile Dev Association",
        tags: ["mobile", "ios", "android", "cross-platform"],
        createdAt: new Date("2024-03-15T10:30:00Z"),
        updatedAt: new Date("2024-03-15T10:30:00Z")
    },
    {
        title: "Cybersecurity Conference",
        slug: "cybersecurity-conference",
        description: "Premier cybersecurity event covering latest threats, defenses, and best practices.",
        overview: "Learn about cyber threats, security protocols, and defensive strategies.",
        image: "/images/event3.png",
        venue: "Boston Security Center",
        location: "Boston, MA",
        date: "2024-11-02",
        time: "08:00",
        mode: "in-person",
        audience: "Security professionals, developers, IT managers",
        agenda: [
            "Threat Intelligence",
            "Cloud Security",
            "Zero Trust Architecture",
            "Incident Response",
            "Security Automation"
        ],
        organizer: "CyberSec Boston",
        tags: ["security", "cybersecurity", "infosec", "cloud-security"],
        createdAt: new Date("2024-04-01T08:15:00Z"),
        updatedAt: new Date("2024-04-01T08:15:00Z")
    },
    {
        title: "Data Science Hackathon",
        slug: "data-science-hackathon",
        description: "72-hour hackathon focused on solving real-world problems using data science.",
        overview: "Build innovative solutions using machine learning and data analytics.",
        image: "/images/event4.png",
        venue: "San Diego Innovation Center",
        location: "San Diego, CA",
        date: "2024-12-07",
        time: "09:00",
        mode: "hybrid",
        audience: "Data scientists, analysts, ML engineers",
        agenda: [
            "Problem Statement",
            "Data Exploration",
            "Model Development",
            "Solution Implementation",
            "Final Presentations"
        ],
        organizer: "DS Community SD",
        tags: ["data-science", "machine-learning", "analytics", "ai"],
        createdAt: new Date("2024-04-15T11:45:00Z"),
        updatedAt: new Date("2024-04-15T11:45:00Z")
    },
    {
        title: "Cloud Native Meetup",
        slug: "cloud-native-meetup",
        description: "Evening meetup focusing on cloud-native technologies and practices.",
        overview: "Discuss cloud-native architecture, microservices, and container orchestration.",
        image: "/images/event5.png",
        venue: "Portland Tech Hub",
        location: "Portland, OR",
        date: "2025-01-15",
        time: "18:30",
        mode: "in-person",
        audience: "Cloud engineers, DevOps, architects",
        agenda: [
            "Microservices Patterns",
            "Container Orchestration",
            "Service Mesh",
            "Cloud-Native Security",
            "Case Studies"
        ],
        organizer: "Cloud Native PDX",
        tags: ["cloud-native", "kubernetes", "microservices", "docker"],
        createdAt: new Date("2024-05-01T15:00:00Z"),
        updatedAt: new Date("2024-05-01T15:00:00Z")
    },
    {
        title: "Frontend Masters Conference",
        slug: "frontend-masters",
        description: "Advanced frontend development conference for experienced developers.",
        overview: "Deep dive into advanced frontend topics and emerging technologies.",
        image: "/images/event6.png",
        venue: "Nashville Music City Center",
        location: "Nashville, TN",
        date: "2025-02-28",
        time: "09:00",
        mode: "hybrid",
        audience: "Senior frontend developers, architects",
        agenda: [
            "Advanced React Patterns",
            "State Management",
            "Performance Optimization",
            "Web Assembly",
            "Micro-Frontends"
        ],
        organizer: "Frontend Masters",
        tags: ["frontend", "javascript", "react", "web-performance"],
        createdAt: new Date("2024-05-15T13:30:00Z"),
        updatedAt: new Date("2024-05-15T13:30:00Z")
    }
] as const;