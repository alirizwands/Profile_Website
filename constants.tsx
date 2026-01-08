
import { Stat, ExpertiseItem, ProductDetail, ResearchProject, Publication } from './types';

export const STATS: Stat[] = [
  { label: "AI-SaMD Lifecycles", value: "7+" },
  { label: "Tech Licensing", value: "$2M+" },
  { label: "R&D Funding", value: "$2M+" },
  { label: "Clinical Samples", value: "30K+" },
  { label: "Peer-Reviewed Pubs", value: "20+" },
  { label: "Patents Filed", value: "5+" }
];

export const EXPERTISE: ExpertiseItem[] = [
  {
    title: "Translational Research & Innovation Management",
    subtitle: "Problem → Evidence → Prototype",
    points: [
      "Clinical problem framing and feasibility analysis",
      "Hypothesis-driven experimentation and validation",
      "Prototype formulation with proof-of-concept risk reduction",
      "Research translated into patents and protected IP"
    ]
  },
  {
    title: "Multimodal & Agentic AI Systems",
    subtitle: "Sense → Reason → Act",
    points: [
      "Multimodal data ingestion and fusion",
      "LLM, RAG, and agentic system design",
      "Longitudinal and predictive modeling pipelines",
      "Edge-to-cloud intelligent system architecture"
    ]
  },
  {
    title: "AI-Product Lifecycle Ownership",
    subtitle: "Roadmap → Clinical Validation",
    points: [
      "Product vision and roadmap definition",
      "Technical feasibility and cost modeling",
      "Clinical evidence and trial planning",
      "Lifecycle delivery and scale readiness"
    ]
  },
  {
    title: "AI Risk, Compliance & Governance",
    subtitle: "Scrutiny → Trust",
    points: [
      "Risk management system design",
      "Model validation and evaluation pipelines",
      "Bias, robustness, and drift auditing",
      "Audit evidence and traceability artifacts"
    ]
  }
];

export const PRODUCTS: ProductDetail[] = [
  {
    id: 1,
    title: "CoughLog",
    subtitle: "Foundational Respiratory Data Engine",
    problem: "Respiratory AI development was stalled by the global lack of large-scale, diverse, and clinically labeled cough datasets.",
    solution: "Created the world's largest clinical-grade multimodal respiratory acoustics dataset with standardized acquisition.",
    techStack: {
      models: "12-class annotation schema (cough, speech, noise), auto-segmentation VAD tools.",
      tech: "Secure HIPAA-compliant backend on AWS, Python-based annotation UI, Firebase Realtime Sync.",
      architecture: "Cloud-native microservices for ingestion with Edge-processing for privacy-preserving VAD."
    },
    clinicalValidation: "Validated across 3 international clinical sites with 7,000+ participants and 30,000+ gold-standard labels.",
    keyChallenges: [
      "Managing high-fidelity audio data at scale with low latency.",
      "Developing a standardized labeling protocol for diverse clinical environments.",
      "Ensuring sub-millisecond voice activity detection on edge devices."
    ],
    regulatory: "GDPR & HIPAA compliant; ISO 13485 ready documentation; Peer-reviewed validation data.",
    outcome: "Licensed to top tier 1 universities and Fortune 500 R&D labs. Forms the bedrock for global respiratory AI research.",
    icon: "activity"
  },
  {
    id: 2,
    title: "AI4COVID",
    subtitle: "Global Respiratory Screening",
    problem: "Urgent need for rapid, low-cost screening tool to overcome diagnostic delays from limited PCR testing during the pandemic.",
    solution: "An AI-based screening tool using cough sounds, deployable on any smartphone for rapid triaging.",
    techStack: {
      models: "Ensemble of Deep CNNs for spectrogram classification + Grad-CAM for explainability.",
      tech: "PyTorch, MLflow for experiment tracking, Dockerized inference nodes, React Native.",
      architecture: "Asynchronous inference pipeline with human-in-the-loop audit logs."
    },
    clinicalValidation: "Retrospective study on 3,000+ samples; achieved >95% cough detection accuracy in diverse noise profiles.",
    keyChallenges: [
      "Handling environmental noise artifacts in real-world recordings.",
      "Achieving model robustness across varying smartphone microphone hardware.",
      "Implementing real-time saliency maps for clinical trust."
    ],
    regulatory: "EUA (Emergency Use Authorization) path ready; Class IIa SaMD design controls.",
    outcome: "Successfully processed over 50k screenings; major multi-million dollar licensing deal signed with global health tech lead.",
    icon: "shield-check"
  },
  {
    id: 3,
    title: "Inhaler Adherence AI",
    subtitle: "Tackling the #1 Modifiable Risk Factor",
    problem: "Up to 80% of asthma patients use inhalers incorrectly, leading to poor medication delivery and hospitalizations.",
    solution: "First automatic inhaler-use detection system using IMU sensors from a smartwatch/mobile.",
    techStack: {
      models: "Siamese CNN for gesture similarity + Deep CNN for multi-step temporal classification.",
      tech: "TensorFlow Lite for on-device inference, CoreML, AWS SageMaker for training.",
      architecture: "Sensor-fusion architecture combining accelerometer, gyroscope, and acoustic modalities."
    },
    clinicalValidation: "Achieved >93% accuracy in detecting correct technique stages (Shake, Exhale, Inhale, Hold) in lab settings.",
    keyChallenges: [
      "Mitigating signal noise from non-inhaler hand movements.",
      "Battery-efficient continuous background sensing on wearables.",
      "Developing a universal sensor mapping for different inhaler form factors."
    ],
    regulatory: "Clinical evidence gathered for 510(k) submission; Part 11 compliant data management.",
    outcome: "Pilot deployment in UK clinics showed a 40% improvement in patient adherence within 3 months.",
    icon: "wind"
  },
  {
    id: 4,
    title: "Exacerbation Prediction AI",
    subtitle: "Proactive Care for Asthma & COPD",
    problem: "Exacerbations lead to millions of ER visits. Current monitoring relies on symptoms that appear too late.",
    solution: "Multimodal AI system that predicts exacerbations before clinical symptoms are detectable.",
    techStack: {
      models: "Bi-directional LSTM-GRU with Attention Mechanism for longitudinal time-series forecasting.",
      tech: "Python, Scikit-learn, MLflow, AWS Lambda for serverless inference.",
      architecture: "Feature store architecture for real-time calculation of 'Nocturnal Cough Index'."
    },
    clinicalValidation: "Validated on longitudinal data from 500+ COPD patients; 0.88 AUC for 72-hour prediction window.",
    keyChallenges: [
      "Designing features that capture subtle physiological 'drift' before visible symptoms.",
      "Handling missing data in real-world outpatient monitoring logs.",
      "Minimizing false alarms to avoid 'alert fatigue' for patients and doctors."
    ],
    regulatory: "Class IIb SaMD risk profiling; ISO 14971 risk management integration.",
    outcome: "Predicted exacerbations ~3.4 days ahead of onset, potentially reducing ER visits by up to 25%.",
    icon: "clock"
  },
  {
    id: 5,
    title: "ECG Arrhythmia Detection",
    subtitle: "High-Fidelity Cardiac Screening",
    problem: "Consumer single-lead ECGs primarily detect only AFib, ignoring other clinically important arrhythmias.",
    solution: "AI system for smartphone/wearable ECG to screen for 5+ arrhythmia classes including PVCs and Bradycardia.",
    techStack: {
      models: "1D-ResNet with Squeeze-and-Excitation blocks for PQRST pattern recognition.",
      tech: "Keras/TensorFlow, CoreML for iOS, C++ for embedded optimization.",
      architecture: "Model-agnostic signal preprocessing pipeline for diverse hardware inputs."
    },
    clinicalValidation: "Achieved >90% sensitivity and specificity across PVC, PAC, and Sinus Bradycardia compared to 12-lead baseline.",
    keyChallenges: [
      "Robustness against high-motion artifacts in wearable ECG leads.",
      "Real-time explainability (Highlighting specific P-waves and QRS complexes).",
      "Model quantization without significant loss of clinical precision."
    ],
    regulatory: "CE-Mark Class IIa compliance dossier; clinical performance evaluation report (PER) completed.",
    outcome: "Expanded screening capabilities of a top-tier wearable brand beyond simple AFib detection.",
    icon: "heart"
  },
  {
    id: 6,
    title: "Precision Diet Coach",
    subtitle: "Biomarker Intelligence",
    problem: "Generic diet apps fail due to inaccurate self-reporting and a lack of physiological feedback loops.",
    solution: "Biomarker-driven AI nutrition coach that creates a continuous metabolic feedback loop.",
    techStack: {
      models: "Gradient Boosting Regressors for HRV-Stress correlation + CNN for visual food logging.",
      tech: "Swift, Kotlin, Python/FastAPI, MongoDB for flexible logging schemas.",
      architecture: "Personalized 'Digital Twin' modeling for individualized glycemic response prediction."
    },
    clinicalValidation: "HRV-based metabolic stress classifier achieved >85% agreement with continuous glucose monitor (CGM) trends.",
    keyChallenges: [
      "Aligning delayed metabolic responses with discrete nutritional intake events.",
      "Developing a high-accuracy food volume estimator from single-image perspectives.",
      "User engagement strategies to maintain high-quality data input."
    ],
    regulatory: "Wellness-to-General-Wellness guidance alignment; GDPR Data Privacy Impact Assessment (DPIA).",
    outcome: "Integrated into a corporate wellness platform with a 65% user retention rate after 6 months.",
    icon: "utensils"
  },
  {
    id: 7,
    title: "Respire LYF",
    subtitle: "Unified Respiratory AI Ecosystem",
    problem: "Respiratory care is fragmented across intermittent clinic visits and single-purpose apps.",
    solution: "Integrated SaMD suite combining all AI modules into a unified digital companion for patients and clinicians.",
    techStack: {
      models: "Holistic Ensemble model combining acoustics, gesture, and physiological sensor data.",
      tech: "React Native, Node.js, AWS CloudFormation (IaC), Tableau for Clinician Dashboards.",
      architecture: "Multi-tenant SaaS architecture with FHIR/HL7 interoperability layers."
    },
    clinicalValidation: "Full ecosystem pilot in 2 major hospital trusts; demonstrated bridge between home and clinic data.",
    keyChallenges: [
      "Interoperability with disparate Electronic Health Record (EHR) systems.",
      "Orchestrating 7+ background AI models without impacting device performance.",
      "Designing a clinician UI that simplifies complex multimodal AI outputs."
    ],
    regulatory: "Master Device File created for modular SaMD updates; comprehensive post-market surveillance (PMS) plan.",
    outcome: "Forms the commercial backbone for a digital therapeutics startup; secured Series A funding based on the platform vision.",
    icon: "layers"
  }
];

export const ACADEMIC_RESEARCH: ResearchProject[] = [
  {
    title: "AI-Powered Atrial Fibrillation Detection",
    location: "Al Ain University, UAE",
    funding: "ADEK Award (Grant: AARE18-203)",
    description: "Developed and validated novel ML models for high-precision AFib classification directly from ECG data.",
    deliverables: ["Foundational review paper in IEEE Reviews in Biomedical Engineering (2020)"]
  },
  {
    title: "Big Data Analytics for Self-Organizing Cellular Networks",
    location: "Ajman University, UAE",
    funding: "EPSRC Global Challenges Research Fund",
    description: "Built scalable big data pipelines to enable network self-optimization and autonomous management for 5G.",
    deliverables: ["Foundational chapter in Wiley 5G Ref", "IEEE PIMRC 2018 publication"]
  },
  {
    title: "Non-invasive Optical Sensing of Human Skin",
    location: "UAE University",
    funding: "ADEK Award (Grant: AARE17-019)",
    description: "Applying ML models to analyze non-invasive galvanic skin response data for hydration diagnostics.",
    deliverables: ["IEEE Sensors Journal publication (2019)", "IEEE Access publication"]
  }
];

export const INDUSTRIAL_RESEARCH: ResearchProject[] = [
  {
    title: "Performance-based Cell Classification in Cellular Networks",
    location: "Fujitsu, UK",
    description: "Designed novel ML algorithms that leverage Call Detail Record (CDR) data to intelligently classify network cells.",
    deliverables: ["IEEE International Conference on Communications", "IEEE Access publication (vol 9)"]
  },
  {
    title: "AI-Driven Self-Organising Networks (SON) for 5G",
    location: "QMIC, Qatar",
    funding: "$400K Initiative",
    description: "Engineered GAN-based models to overcome data sparsity and developed CDR-based auto-diagnosis frameworks.",
    deliverables: ["97.7% accuracy in network fault diagnosis", "Two provisional patent filings"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "State of the art in atrial fibrillation detection enabled by machine learning",
    authors: "A Rizwan, A Zoha, IB Mabrouk, HM Sabbour...",
    journal: "IEEE reviews in biomedical engineering",
    link: "https://ieeexplore.ieee.org/abstract/document/9016113"
  },
  {
    title: "Non-invasive hydration level estimation in human body using galvanic skin response",
    authors: "A Rizwan, NA Ali, A Zoha, M Ozturk, A Alomainy...",
    journal: "IEEE Sensors Journal",
    link: "https://ieeexplore.ieee.org/abstract/document/8955795/"
  },
  {
    title: "Nano-communication in future healthcare systems: A big data analytics perspective",
    authors: "A Rizwan, A Zoha, R Zhang, W Ahmad, K Arshad...",
    journal: "IEEE Access",
    link: "https://ieeexplore.ieee.org/abstract/document/8418698"
  },
  {
    title: "A zero-touch network service management approach using AI-enabled CDR analysis",
    authors: "A Rizwan, M Jaber, F Filali, A Imran, A Abu-Dayya",
    journal: "IEEE Access",
    link: "https://ieeexplore.ieee.org/abstract/document/9620089"
  }
];

export const PUBLICATION_STATS: Stat[] = [
  { label: "Citations", value: "680+" },
  { label: "h-index", value: "13" },
  { label: "i10-index", value: "15" }
];
