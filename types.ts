export interface Metric {
  label: string;
  value: string;
  subValue?: string;
  meaning?: string;
  highlight?: boolean;
}

export interface DetailedMetric {
  title: string;
  name?: string;
  value: string;
  reason: string;
  interpretation: string;
}

export interface FunnelFlow {
  type: string;
  flow: string;
  name?: string;
  description: string;
  desc?: string;
}

export interface StrategyItemDetail {
  name: string;
  context: string;
  dataProof: string;
  spec: string;
}

export interface StrategyConceptDetail {
  definition: string;
  detail: string;
  emphasis: string;
}

export interface StrategyDetail {
  id?: string;
  name?: string; // fallback for legacy data
  title: string;
  sentiment?: string; // fallback for legacy data
  instance?: string; // fallback for legacy data
  logic?: any; // fallback for legacy data
  persona: {
    label: string;
    desc: string;
  };
  evidence: {
    label: string;
    desc: string;
  };
  item: StrategyItemDetail;
  concept: StrategyConceptDetail;
}

export interface SourcingPoint {
  title: string;
  subtitle?: string;
  content: string; // Used in App.tsx but data might have 'desc'
  desc?: string; // Adding optional to support data.ts if it uses desc
}

export interface EngagementData {
  likes: string; // or number depending on data
  avgLikes?: number; // supporting alternative
  comments: string; // or number
  avgComments?: number; // supporting alternative
  commentRatio: string;
  commentToLikeRatio?: string; // supporting alternative
  viewEr?: string;
  engagementRate?: string; // supporting alternative
  platformEr: string;
  shortsEr: string;
  avgViews?: number;
  saturationRate?: string;
}

export interface FormatData {
  longformRatio: number;
  longformAvg?: string;
  shortsAvg?: string;
  description?: string;
}

export interface LogicStep {
  step?: string; // Optional if not in data
  who?: string; // Support alternative
  why?: string;
  what?: string;
  how?: string;
  label?: string; // Support alternative
  desc?: string; // Support alternative
}

export interface BaseRequirementDetail {
  title: string;
  description: string; // or desc
  desc?: string;
  actionList?: string[]; // or items if string[]
  dataProof?: string;
  impact?: string;
}

export interface CelebQuantData {
  profile: {
    name: string;
    category: string;
    subscribers?: string;
    followerCount?: string; // supporting alternative
    growth: string; // growthMomentum
    growthMomentum?: string;
    target: string; // targetAudience
    targetAudience?: string;
    region: string;
    nicheCategory?: string;
  };
  kpis: Metric[];
  engagement: EngagementData;
  format: FormatData;
  coreDefinition: {
    title?: string;
    description: string;
    features: any[]; // string[] or object[]
    formatStrategy?: string;
  };
  top3Metrics: DetailedMetric[]; // or simple Metric[] with extra fields
  funnels: FunnelFlow[];
  executiveSummary: {
    title?: string;
    points: any[];
  };
}

export interface CelebContentData {
  reportTitle?: string;
  intro: {
    title?: string;
    background: string;
    objective?: string;
    logic?: string;
  };
  logicFramework: any[]; // LogicStep[]
  baseRequirements: {
    intro?: string;
    items: BaseRequirementDetail[];
  };
  strategies: StrategyDetail[];
  proposal: {
    intro?: string;
    philosophy?: string;
    points: any[];
    closing?: string;
    infrastructure: string;
  };
}

export interface FullCelebData {
  quant: CelebQuantData;
  content: CelebContentData;
}