
export interface Stat {
  label: string;
  value: string;
}

export interface ExpertiseItem {
  title: string;
  subtitle: string;
  points: string[];
}

export interface ProductDetail {
  id: number;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  techStack: {
    models: string;
    tech: string;
    architecture?: string;
  };
  clinicalValidation: string;
  keyChallenges: string[];
  regulatory: string;
  outcome: string;
  icon: string;
}

export interface ResearchProject {
  title: string;
  location: string;
  funding?: string;
  description: string;
  deliverables: string[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  link: string;
}
