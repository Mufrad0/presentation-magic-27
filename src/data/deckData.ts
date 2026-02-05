export interface TeamMember {
  name: string;
  role: string;
  proof: string;
  isAdvisor?: boolean;
}

export interface Quote {
  text: string;
  author: string;
  title: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
}

export interface GTMStage {
  stage: string;
  title: string;
  description: string;
}

export interface FinancialItem {
  label: string;
  value: number;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Daniel Guzman",
    role: "CEO",
    proof: "Sustainability researcher, geospatial and permitting workflows, product direction"
  },
  {
    name: "Marissa Ponce",
    role: "COO",
    proof: "Environmental economics, operations and compliance execution, former Lawrence Berkeley National Laboratory"
  },
  {
    name: "Mohammad Mufrad Chowdhury",
    role: "Co-founder",
    proof: "Finance, strategy, analytics at London School of Economics, pricing, go to market, fundraising"
  },
  {
    name: "Paul Bozzo",
    role: "Advisor",
    proof: "Startup strategy and fundraising, execution support",
    isAdvisor: true
  }
];

export const proofChips = [
  "Geospatial analytics and automation",
  "Compliance workflow understanding",
  "Pricing and fundraising strategy",
  "Partnership-led distribution"
];

export const quotes: Quote[] = [
  {
    text: "This sounds like it could be incredibly helpful!",
    author: "Kathryn Fronabarger",
    title: "Compliance Professional"
  },
  {
    text: "It's silly to be charging billable hours for what is essentially just pulling data.",
    author: "Alex Willson",
    title: "ERM, Air Quality Consultant"
  },
  {
    text: "Permitting is a hot topic these days, with everyone trying to figure out how to streamline it.",
    author: "Bill Graham",
    title: "CalEPA"
  },
  {
    text: "I've used phase 1 tools before but finally found a product that works for me as a consultant.",
    author: "Victor Ladipo",
    title: "21st Century Environmental Consultant Inc."
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    price: "$199",
    description: "Screening report, key risk layers, citations"
  },
  {
    name: "Pro",
    price: "$999",
    description: "AI consultant-style narrative, mitigation summary, exportable appendix",
    popular: true
  },
  {
    name: "Premium",
    price: "$2,499",
    description: "Full compliance suite, jurisdiction checks, permit checklist and timelines"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "API, volume pricing, integrations, dedicated support"
  }
];

export const gtmStages: GTMStage[] = [
  {
    stage: "Stage 1",
    title: "Land",
    description: "Environmental consultants and CEQA specialists buy per report"
  },
  {
    stage: "Stage 2",
    title: "Expand",
    description: "Developers and engineering firms adopt subscriptions for repeat projects"
  },
  {
    stage: "Stage 3",
    title: "Scale",
    description: "Enterprise API for municipalities and large portfolios"
  }
];

export const financials2026: FinancialItem[] = [
  { label: "Pro Reports (200 × $999)", value: 200000 },
  { label: "Subscriptions (50 × $450/mo × 6mo)", value: 135000 },
  { label: "Enterprise (2 deals)", value: 120000 }
];

export const financials2027: FinancialItem[] = [
  { label: "Reports", value: 700000 },
  { label: "Subscriptions", value: 900000 },
  { label: "Enterprise", value: 400000 }
];

export const tractionItems = [
  "Alpha completed, beta live",
  "Customer discovery with senior practitioners",
  "Pilot motion underway with consultant workflows",
  "Partnership with Ophanim AI for outreach"
];

export const useOfFunds = [
  { label: "Product", description: "Compliance automation, QA, dashboard, API" },
  { label: "Go to Market", description: "Consultant partnerships, outbound conversion" },
  { label: "Hiring", description: "Engineering + compliance expertise" },
  { label: "Operations", description: "Cloud, data pipeline, security" }
];

export const comparisonData = [
  { metric: "Speed", traditional: "14–56 days", terrafox: "< 60 seconds" },
  { metric: "Cost", traditional: "$15K–$75K", terrafox: "$199–$2,499" },
  { metric: "Capacity", traditional: "10–20/month", terrafox: "24/7 scale" },
  { metric: "Quality", traditional: "Inconsistent", terrafox: "Cited, audit-ready" }
];

export const moatItems = [
  {
    title: "Jurisdiction Logic",
    description: "Regulatory mapping library across states and municipalities"
  },
  {
    title: "Data Pipeline",
    description: "Reproducible outputs with citations and audit trail"
  },
  {
    title: "Workflow Integration",
    description: "Consultant templates and developer portfolio monitoring"
  },
  {
    title: "Distribution Wedge",
    description: "Consultants drive repeat usage across client projects"
  }
];
