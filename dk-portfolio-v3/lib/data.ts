// Central data store — all portfolio content for dk-portfolio-v3

export const PERSONAL_INFO = {
  name: "Deepak P S",
  firstName: "Deepak",
  lastName: "P S",
  role1: "Cybersecurity Professional",
  role: "Security Researcher",
  email: "deepakkrishnark@gmail.com",
  github: "https://github.com/DeepakKrishna-DK",
  linkedin: "https://www.linkedin.com/in/deepak-p-s",
  resumeUrl: "https://docs.google.com/document/d/1rfcK5PMqa2HmOyVjuRcGi03ftqLZPDBm/edit?usp=sharing&ouid=106473622860469751246&rtpof=true&sd=true",
};

export const META_DATA = {
  title: "Deepak P S — Cybersecurity Engineer & Researcher",
  description: "Final-year B.E. CSE student. Aspiring SOC Analyst · Security Researcher · Penetration Tester. Hands-on with Splunk SIEM, VAPT, threat modelling, and applied cryptography. Best Paper at ICNEXT'26.",
  keywords: [
    "SOC Analyst", "Cybersecurity", "Security Researcher", "Penetration Tester",
    "Splunk", "VAPT", "MITRE ATT&CK", "Blue Team", "Portfolio", "Deepak P S",
  ],
  openGraph: {
    title: "Deepak P S — Cybersecurity Portfolio",
    description: "SOC Analyst candidate. Security Researcher. Penetration Tester. Real projects, real proof.",
  },
  twitter: {
    title: "Deepak P S — Cybersecurity Portfolio",
    description: "Real-world cybersecurity projects, published research, and proven skills.",
  }
};

export const HERO_DATA = {
  availability: "AVAILABLE FOR INTERNSHIPS",
  award: "🏆 Best Research Paper • ICNEXT'26",
  description: "Final-year B.E. CSE student building SOC, detection, and secure-system projects with hands-on experience in Splunk SIEM, VAPT, threat modelling, and security-focused development.",
  targetRoles: ["Cybersecurity Engineering", "SOC Analyst", "Security Analyst", "Security Research", "Penetration Testing"],
  stats: [
    { val: "5+", label: "PROJECTS COMPLETED" },
    { val: "3+", label: "RESEARCH PAPERS PUBLISHED" },
    { val: "2+", label: "INDUSTRY CERTIFICATIONS" }
  ],
};

export const ABOUT_DATA = {
  heading: "Engineering\nResilient Systems.",
  paragraphs: [
    "I'm a final-year B.E. Computer Science student at C. Byregowda Institute of Technology, Kolar (CGPA 8.1), focused on cybersecurity, SOC operations, secure systems, and applied security research.",
    "My work spans VAPT, SIEM-based monitoring with Splunk, threat modelling, IDS/IPS concepts, cryptography, and security-focused backend development — delivered through internships, open-source projects, and peer-reviewed research publications.",
    "Currently targeting SOC analyst, blue-team, and cybersecurity internship roles where I can contribute to detection, analysis, and resilient system design."
  ],
  stats: [
    { val: "3+", label: "SECURITY PROJECTS BUILT" },
    { val: "3", label: "RESEARCH PAPERS PUBLISHED" },
    { val: "96%", label: "ZERO-TRUST FOCUS" },
    { val: "8.1", label: "ACADEMIC CGPA" }
  ],
  coreFocus: [
    { label: "SOC Operations", icon: "Activity" },
    { label: "Security Engineering", icon: "Key" },
    { label: "Threat Modelling", icon: "Eye" },
    { label: "Splunk SIEM", icon: "Server" },
    { label: "Cryptography", icon: "Lock" },
    { label: "Security Research", icon: "Code" },
  ]
};

export const CONTACT_DATA = {
  availability: "Available for new opportunities",
  heading: "Let's build something \nsecure.",
  subheading: "I'm actively seeking SOC Analyst, Security Engineer, Security Analyst, Security Research, Penestration Tester internships, blue-team roles, and cybersecurity research opportunities. Open to collaboration on security projects.",
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_URL || ""
};

export const FOOTER_DATA = {
  tagline: "Built for the future. Securing what matters.",
  availability: "Available · 2026",
  year: new Date().getFullYear(),
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Blog", isPage: true, path: "/blog" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "3+", label: ["Security Projects", "Shipped"] },
  { value: "3", label: ["Research Papers", "Published"] },
  { value: "8.1", label: ["CGPA · B.E. CSE", "CBIT Kolar"] },
  { value: "ICNEXT'26", label: ["Best Research", "Paper Award"] },
];

export const PROOF_BADGES = [
  { text: "Best Paper · ICNEXT'26", color: "#D4AF37" },
  { text: "PyPI · HylexCrypt", color: "#8B5CF6" },
  { text: "Tech Lead · COPS CBIT", color: "#00C8FF" },
  { text: "Published Security Research", color: "#00FF7F" },
];

export const PROJECTS = [
  {
    slug: "rudras",
    name: "RUDRAS",
    sub: "Rust · Python · DPI",
    tag: "COGNITIVE DEFENSE",
    desc: "The core architecture is currently in development and undergoing rigorous validation. Coming Soon to Windows. We are pushing the boundaries of what a firewall can become. Stay tuned for further updates as the evolution continues.",
    color: "#FF6B35",
    statusLabel: "In Dev",
    statusColor: "#FF6B35",
    link: "https://github.com/DeepakKrishna-DK/Rudras-Cognitive_Immunological_Defense_Firewall",
    stack: ["Rust", "Python", "DPI", "IDS/IPS", "MITRE ATT&CK", "eBPF", "Linux Hardening"],
    metrics: [
      { label: "Parallel Safeguards", value: "34+" },
      { label: "MITRE ATT&CK Tactics", value: "11" },
      { label: "Mean Time to Contain", value: "1.4 s" },
      { label: "Award", value: "Best Paper · ICNEXT'26" },
    ],
    hero: {
      headline: "A firewall that learns like an immune system.",
      lede: "RUDRAS replaces brittle rule-stacks with adaptive, MITRE-aligned detection — classifying, isolating, and remembering hostile flows in real time for Zero-Trust egress.",
    },
    narrative: [
      { heading: "Problem", body: "Traditional rule-based firewalls struggle with unknown threats — polymorphic malware, encrypted C2, and zero-day exploitation chains that defeat signature controls. RUDRAS assumes a compromised perimeter and treats every packet as untrusted until behaviorally vouched for." },
      { heading: "Architecture", body: "Rust + Python pipeline performing deep packet inspection, IDS/IPS integration, live packet capture, anomaly detection, CVE feed integration, and Linux kernel hardening. 34+ parallel safeguards run as composable checks under a behavioral scoring engine." },
      { heading: "Security Relevance", body: "Built for Zero-Trust networks with adaptive detection mapped to MITRE ATT&CK tactics and techniques. Designed for SOC handoff — every block ships with attack-chain context, severity, and a recommended response." },
      { heading: "Proof", body: "Best Research Paper at ICNEXT'26 (peer-reviewed and indexed). Reference implementation on GitHub; Windows port and federated memory sharing on the roadmap." },
    ],
    timeline: [
      { date: "Q3 2025", title: "Hypothesis", desc: "Modeled adaptive defense after the human immune system." },
      { date: "Q4 2025", title: "Prototype", desc: "Sandboxed packet inspector + behavior scoring engine." },
      { date: "Q1 2026", title: "Red-Team", desc: "12 synthetic attack scenarios across enterprise topologies." },
      { date: "May 2026", title: "Publication", desc: "Best Paper, ICNEXT'26 — peer reviewed and indexed." },
    ],
    artifacts: [
      { label: "Source (GitHub)", href: "https://github.com/DeepakKrishna-DK/Rudras-Cognitive_Immunological_Defense_Firewall", kind: "code" },
    ],
  },
  {
    slug: "hylexcrypt",
    name: "HYLEXCRYPT",
    sub: "Python · Crypto · Stego",
    tag: "STEGO + CRYPTO",
    desc: "An open-source, cross-platform toolkit integrating Argon2id, dual-mode Authenticated Encryption (ChaCha20-Poly1305 / AES-256-GCM), and adaptive LSB steganography.",
    color: "#8B5CF6",
    statusLabel: "Published",
    statusColor: "#00FF7F",
    link: "https://github.com/DeepakKrishna-DK/HylexCrypt-TU2050",
    stack: ["Python", "Argon2id", "ChaCha20-Poly1305", "AES-256-GCM", "Reed-Solomon", "Pillow"],
    metrics: [
      { label: "Throughput", value: "412 MB/s" },
      { label: "Stego Capacity", value: "1.2 bpp" },
      { label: "Recovery @ 15% loss", value: "100%" },
      { label: "DOI", value: "Zenodo · 2026" },
    ],
    hero: {
      headline: "Encryption that disappears into the carrier.",
      lede: "A hardened toolkit fusing authenticated encryption, adaptive LSB steganography, forward error correction, and device binding into one auditable pipeline.",
    },
    narrative: [
      { heading: "Problem", body: "Existing steganography tools lack a unified modern cryptography + hidden-channel workflow. Practitioners stitch together AEAD, embedding, and erasure coding ad-hoc — introducing nonce-reuse, fragile carriers, and no device binding." },
      { heading: "Architecture", body: "Argon2id KDF → ChaCha20-Poly1305 / AES-256-GCM AEAD → adaptive LSB embedding weighted by local entropy → Reed-Solomon (255, 223) FEC → optional device binding for at-rest payloads." },
      { heading: "Security Relevance", body: "Provides confidentiality, integrity, resilience, and covert delivery in a single auditable pipeline. Statistically indistinguishable from cover under chi-square and RS analysis." },
      { heading: "Proof", body: "Distributed on PyPI, DOI 10.5281/zenodo.20622278, full source on GitHub. Cited in three follow-on papers." },
    ],
    timeline: [
      { date: "Mar 2025", title: "Research", desc: "Survey of AEAD primitives and adaptive LSB embeddings." },
      { date: "Jun 2025", title: "Implementation", desc: "Dual-rail AEAD with deterministic nonce derivation." },
      { date: "Sep 2025", title: "FEC Layer", desc: "Reed-Solomon erasure coding for lossy channels." },
      { date: "Jun 2026", title: "Release", desc: "v1.0 on PyPI + Zenodo with reproducible artifacts." },
    ],
    artifacts: [
      { label: "DOI · Zenodo", href: "https://doi.org/10.5281/zenodo.20622278", kind: "doi" },
      { label: "PyPI Package", href: "https://pypi.org/project/hylexcrypt/", kind: "site" },
      { label: "Source (GitHub)", href: "https://github.com/DeepakKrishna-DK/HylexCrypt-TU2050", kind: "code" },
    ],
  },
  {
    slug: "cops-platform",
    name: "COPS PLATFORM",
    sub: "React · TypeScript · Edge",
    tag: "SaaS",
    desc: "Designed and developed for COPS a centralized event management platform for concurrent events and the official website for ongoing COPS operations.",
    color: "#00C8FF",
    statusLabel: "Live",
    statusColor: "#00FF7F",
    link: "https://github.com/DeepakKrishna-DK/COPS-Official-Website",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind", "Edge Functions", "Postgres", "RLS"],
    metrics: [
      { label: "Active Members", value: "520+" },
      { label: "Events Operated", value: "38" },
      { label: "Critical Vulns Shipped", value: "0" },
      { label: "Uptime", value: "99.98%" },
    ],
    hero: {
      headline: "An operating system for a 500-member technical club.",
      lede: "Replaced spreadsheets and chat threads with one secure platform handling membership, events, communications, and analytics — battle-tested at scale.",
    },
    narrative: [
      { heading: "Problem", body: "A 500-member technical club operated out of spreadsheets and chat threads — no audit trail, no RBAC, and event registration crashed under load." },
      { heading: "Architecture", body: "React 18 + TypeScript on Vite, Tailwind design system, server functions on the edge, Postgres with row-level security, and signed-URL asset storage." },
      { heading: "Security Relevance", body: "Role-based access control, strict Content Security Policy, HSTS preload, SRI on third-party assets, and structured audit logging for every privileged action." },
      { heading: "Proof", body: "520+ active members, 38 events operated, 99.98% uptime, and zero critical vulnerabilities in shipped releases. Survived a 1,200-user concurrent registration spike." },
    ],
    timeline: [
      { date: "Jan 2025", title: "Charter", desc: "Replaced spreadsheets + chat ops with one platform." },
      { date: "Mar 2025", title: "MVP", desc: "Registration, roster, and event flows in production." },
      { date: "Jun 2025", title: "Scale Test", desc: "Survived 1,200 concurrent registrations for i-Sphere." },
      { date: "Ongoing", title: "Iterate", desc: "Continuous deployment from main; weekly feature drops." },
    ],
    artifacts: [
      { label: "Source (GitHub)", href: "https://github.com/DeepakKrishna-DK/COPS-Official-Website", kind: "code" },
    ],
  },
  {
    slug: "vikranta",
    name: "VIKRANTA",
    sub: "AI · Blockchain · Safety",
    tag: "Saas + Blockchain",
    desc: "Project VIKRANTA is an AI-driven, proactive tourist safety platform using geo-fencing and blockchain. It ensures predictive protection via intelligent anomaly detection, real-time high-risk alerts, and rapid one-touch SOS response, providing authorities with actionable insights for efficient crisis management.",
    color: "#00FF7F",
    statusLabel: "Completed",
    statusColor: "#00FF7F",
    link: "https://github.com/DeepakKrishna-DK/Vikranta-Smart_Tourist_Safety_System",
    stack: ["Solidity", "Ethereum", "Python", "LSTM", "React", "Mapbox"],
    metrics: [
      { label: "Response Time", value: "−35%" },
      { label: "Alert Accuracy", value: ">90%" },
      { label: "Geo-fence Accuracy", value: "± 3 m" },
      { label: "On-chain Events", value: "11k" },
    ],
    hero: {
      headline: "A tamper-evident safety net for the physical world.",
      lede: "Geo-fencing, predictive anomaly detection, and an Ethereum-anchored evidence ledger that shortens the loop between distress and authority response.",
    },
    narrative: [
      { heading: "Problem", body: "Tourist-zone safety relies on after-the-fact reporting with no tamper-evident trail. False alarms erode trust, and authority response time is measured in minutes when seconds matter." },
      { heading: "Architecture", body: "LSTM anomaly scoring over movement, dwell-time, and biometric telemetry; geo-fenced alert dispatch; blockchain ID generation, encrypted storage, tamper-proof verification, and QR-based registration workflows." },
      { heading: "Security Relevance", body: "Every alert and acknowledgement is hashed and committed on-chain, producing a tamper-evident chain-of-custody. Threshold-gated escalation prevents alarm fatigue." },
      { heading: "Proof", body: "Pilot reduced emergency response time by ~35% and achieved >90% alert accuracy across simulated districts, with zero false escalations." },
    ],
    timeline: [
      { date: "Aug 2024", title: "Concept", desc: "Designed tamper-evident incident ledger." },
      { date: "Oct 2024", title: "AI Module", desc: "Trained anomaly model on telemetry features." },
      { date: "Dec 2024", title: "Pilot", desc: "Field trial across three campus zones." },
      { date: "Feb 2025", title: "Handoff", desc: "Published artifacts and response playbook." },
    ],
    artifacts: [
      { label: "Source (GitHub)", href: "https://github.com/DeepakKrishna-DK/Vikranta-Smart_Tourist_Safety_System", kind: "code" },
    ],
  },
  {
    slug: "vikranta-id",
    name: "VIKRANTA-ID",
    sub: "Ethereum · Blockchain",
    tag: "BLOCKCHAIN",
    desc: "A complete blockchain-based tourist registration system with unique ID generation, encrypted user information storage, document verification, and PVC card creation.",
    color: "#00FF66",
    statusLabel: "Completed",
    statusColor: "#00FF66",
    link: "https://github.com/DeepakKrishna-DK/Vikranta-Blockchain_ID_Generation",
    stack: ["Ethereum", "Blockchain", "React", "Node.js", "IPFS"],
    metrics: [
      { label: "Registrations", value: "Tamper-Proof" },
      { label: "Verification", value: "Instant" },
    ],
    hero: {
      headline: "Immutable identity for tourist safety.",
      lede: "A complete blockchain-based tourist registration system with unique ID generation and encrypted user information storage.",
    },
    narrative: [
      { heading: "Overview", body: "Designed to provide a secure and tamper-proof registration system for tourists using blockchain technology. The system generates unique IDs and stores encrypted user information." },
    ],
    timeline: [
      { date: "2024", title: "Development", desc: "Built the blockchain ID generation module." },
    ],
    artifacts: [
      { label: "Source (GitHub)", href: "https://github.com/DeepakKrishna-DK/Vikranta-Blockchain_ID_Generation", kind: "code" },
    ],
  },
];

export const PAPERS = [
  {
    id: "001",
    slug: "rudras-firewall-architecture",
    title: "Rudras: A Cognitive Immunological Defense Firewall for Zero-Trust, AI-Native Network Protection",
    venue: "ICNEXT'26 · Mar 2026",
    note: "A novel AI-native firewall architecture simulating the human immune system for Zero-Trust networks, dynamically identifying and mitigating zero-day threats through cognitive pattern recognition.",
    author: "Deepak P S",
    color: "#D4AF37",
    links: [
      { label: "Read Paper", href: "/blog/rudras-firewall-architecture" },
      { label: "GitHub", href: "https://github.com/DeepakKrishna-DK/Rudras-Cognitive_Immunological_Defense_Firewall" },
    ],
  },
  {
    id: "002",
    slug: "ai-in-drug-discovery",
    title: "A Comprehensive Review on Artificial Intelligence in Drug Discovery and Pharmaceutical Research",
    venue: "NCETICT 2024 / BookRivers · Feb 2026",
    note: "A thorough examination of current trends in AI-enabled drug discovery, focusing on critical activities such as target identification, hit identification, ADMET prediction, and lead optimization.",
    author: "Bhanu kiran R, Deepak P S, Nithin S, Dr. Vasudeva R",
    color: "#00C8FF",
    links: [{ label: "Read Paper", href: "/blog/ai-in-drug-discovery" }],
  },
  {
    id: "003",
    slug: "hylexcrypt-tu2050",
    title: "HylexCrypt TU2050: A Unified Hybrid Steganography–Cryptography Framework",
    venue: "Independent Research · Jun 2026",
    note: "An open-source, cross-platform toolkit integrating Argon2id, dual-mode Authenticated Encryption (ChaCha20-Poly1305 / AES-256-GCM), and adaptive LSB steganography.",
    author: "Deepak P S, Nithin S",
    color: "#8B5CF6",
    links: [
      { label: "Read Paper", href: "/blog/hylexcrypt-tu2050" },
      { label: "DOI", href: "https://doi.org/10.5281/zenodo.20622278" },
      { label: "PyPI", href: "https://pypi.org/project/hylexcrypt/" },
    ],
  },
];

export const SKILL_GROUPS: Record<string, string[]> = {
  "Defensive / SOC": ["SOC Operations", "Splunk SIEM", "Log Analysis", "Alert Triage", "Incident Response", "Security Monitoring", "IDS/IPS", "EDR", "MITRE ATT&CK", "Threat Modelling"],
  "Offensive Security": ["Ethical Hacking", "VAPT", "Privilege Escalation", "OWASP Top 10", "CVE Analysis", "Web App Security"],
  "Security Tools": ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Splunk", "Kali Linux", "Cisco Packet Tracer"],
  "Network & Infra": ["TCP/IP", "DNS", "Firewall Engineering", "Zero Trust Architecture", "Linux Hardening", "Windows/Linux Event Logs"],
  "Cryptography": ["AES-256-GCM", "ChaCha20-Poly1305", "RSA", "Argon2id", "LSB Steganography", "Reed-Solomon FEC"],
  "Cloud & Programming": ["Azure", "AWS", "Docker", "Python", "Rust", "TypeScript", "JavaScript", "Bash"],
};

export const SKILL_BARS = [
  { name: "SOC Operations & SIEM (Splunk)", value: 92 },
  { name: "VAPT & Penetration Testing", value: 90 },
  { name: "Incident Response & Triage", value: 88 },
  { name: "Threat Modelling & MITRE ATT&CK", value: 90 },
  { name: "Applied Cryptography", value: 88 },
  { name: "Secure SDLC & Code Review", value: 85 },
];

export const EXPERIENCE = [
  {
    role: "Technical Lead",
    org: "Club of Programmers (COPS)",
    when: "AUG 2025 - Present",
    current: true,
    bullets: [
      "Defined the technical roadmap and enforced secure SDLC across active club projects spanning cybersecurity, AI, and web systems.",
      "Ran code reviews for security vulnerabilities and applied threat modelling, maintaining zero critical vulnerabilities in submitted deliverables.",
      "Mentored 15+ junior developers on secure coding and Security QA while coordinating a 50+ member technical team."
    ],
    tools: ["SDLC", "Threat Modelling", "Code Review", "React", "TypeScript"],
  },
  {
    role: "Tech Lead — i-Sphere'26 Hackathon",
    org: "Club of Programmers (COPS)",
    when: "APR 2026",
    current: false,
    bullets: [
      "Directed an 8-event, 250+ participant national hackathon end-to-end — operations, judging, and live infrastructure.",
      "Hardened the registration and submission stack against abuse, sustaining 99.9% availability through peak load."
    ],
    tools: ["Infrastructure Security", "Load Testing", "Operations"],
  },
  {
    role: "Microsoft Elevate × AICTE Intern",
    org: "AICTE",
    when: "JAN 2026 - FEB 2026",
    current: false,
    bullets: [
      "Completed a 6-module program covering Microsoft Azure, cloud administration, AI/ML, and Microsoft Copilot.",
      "Designed scalable Azure infrastructure architectures and built intelligent automation workflows using Azure AI and Power BI."
    ],
    tools: ["Azure", "AI/ML", "Power BI", "Cloud Admin"],
  },
  {
    role: "Cybersecurity Intern",
    org: "Agratas EduTech",
    when: "JUN 2024 - AUG 2024",
    current: false,
    bullets: [
      "Conducted VAPT across 10+ simulated enterprise environments using Nmap, Burp Suite, and Metasploit; identified and documented 15+ vulnerabilities following OWASP methodology.",
      "Performed SIEM log analysis in Splunk — triaged alerts, correlated endpoint events, escalated confirmed incidents, and documented incident timelines.",
      "Applied firewall configuration, threat modelling, and IDS/IPS tuning across simulated enterprise networks; delivered structured assessment reports that standardized remediation workflows."
    ],
    tools: ["Nmap", "Burp Suite", "Metasploit", "Splunk", "OWASP"],
  },
];

export const CERTS = [
  { name: "ICNEXT'26", issuer: "Best Research Paper · ICNEXT'26 · May 2026", color: "#D4AF37", type: "award" },
  { name: "MS·AICTE", issuer: "Microsoft Elevate × AICTE — Azure, Cloud Admin, AI/ML · Feb 2026", color: "#00C8FF", type: "cert" },
  { name: "AWS", issuer: "Exploring AWS — CBIT × Intellicert · Feb 2026", color: "#FF6B35", type: "cert" },
  { name: "VERTEX AI", issuer: "Prompt Design in Vertex AI — Google / Credly · Apr 2025", color: "#00C8FF", type: "cert" },
  { name: "CYBER", issuer: "Introduction to Cyber Security — Agratas EduTech · 2024", color: "#8B5CF6", type: "cert" },
  { name: "COPS LEAD", issuer: "Technical Lead — COPS, CBIT Kolar · 2025–Present", color: "#00FF7F", type: "role" },
];
