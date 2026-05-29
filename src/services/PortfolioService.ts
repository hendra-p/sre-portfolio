import type { PortfolioData, Profile, Skill, Experience, Project, Certification } from '../models/ProfileData';

// Mock Data representing Hendra's resume
const MOCK_DATA: PortfolioData = {
  profile: {
    name: 'Hendra Prasetyo',
    title: 'Site Reliability Engineer | Infrastructure & Observability Specialist',
    tagline: 'Building reliable systems for 7+ years at a major Indonesian bank. Now helping teams modernize infrastructure with AI-powered observability. Open to freelance projects & collaborations.',
    about: "I am a seasoned IT professional with over 7 years of experience in the banking sector at PT Bank SMBC Indonesia Tbk. Progressed from L1 incident response to leading the Octopus Squad SRE Task Force, where I designed Jenkins CI/CD pipelines for monitoring deployments, developed Python/Bash automation for anomaly detection, and maintained strict banking SLAs through proactive incident management. My expertise lies in maintaining high-availability financial systems, rapidly resolving production incidents, and driving operational excellence through SRE principles. I approach complex technical challenges with a calm, methodical mindset — and I'm now open to freelance engagements where I can bring this expertise to your team.",
    email: 'hendraprasetyo94@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hendra-prasetyoo/',
    github: 'https://github.com/hendra-p'
  },
  skills: [
    { name: 'Linux Administration', category: 'Infrastructure & Ops' },
    { name: 'AS400 Core Banking', category: 'Infrastructure & Ops' },
    { name: 'Network Monitoring', category: 'Infrastructure & Ops' },
    { name: 'Windows Server', category: 'Infrastructure & Ops' },
    { name: 'Oracle', category: 'Infrastructure & Ops' },
    { name: 'Jenkins CI/CD', category: 'DevOps & Automation' },
    { name: 'Python Scripting', category: 'DevOps & Automation' },
    { name: 'Bash Scripting', category: 'DevOps & Automation' },
    { name: 'SQL & Database Mgmt', category: 'DevOps & Automation' },
    { name: 'Git', category: 'DevOps & Automation' },
    { name: 'Postman', category: 'DevOps & Automation' },
    { name: 'Grafana', category: 'Observability' },
    { name: 'Elasticsearch (ELK Stack)', category: 'Observability' },
    { name: 'SolarWinds', category: 'Observability' },
    { name: 'Tableau', category: 'Observability' },
    { name: 'API Log Analysis', category: 'Observability' },
    { name: 'Microsoft Fabric', category: 'Cloud & AI' },
    { name: 'Azure OpenAI / GenAI', category: 'Cloud & AI' },
    { name: 'Azure AI Fundamentals', category: 'Cloud & AI' },
    { name: 'Machine Learning (Beginner)', category: 'Cloud & AI' },
    { name: 'Power BI', category: 'Cloud & AI' },
    { name: 'Incident Management (RCA)', category: 'Soft Skills' },
    { name: 'ServiceNow & Jira', category: 'Soft Skills' },
    { name: 'Confluence', category: 'Soft Skills' }
  ],
  experiences: [
    {
      id: 'exp1',
      role: 'IT Monitoring & Service Recovery Engineer (SRE Task Force)',
      company: 'PT Bank SMBC Indonesia Tbk',
      period: 'May 2024 – Present',
      responsibilities: [
        'Built an end-to-end observability stack using SolarWinds, Elasticsearch, and Grafana for real-time visibility across 100+ servers and business-critical banking applications.',
        'Automated monitoring config deployments through Jenkins CI/CD pipelines, cutting manual deployment effort by ~60% while keeping changes consistent and version-controlled.',
        'Wrote Python and Bash detection scripts that reduced mean-time-to-detect (MTTD) by ~40%, shifting the team from reactive firefighting to catching issues before they escalate.',
        'Built Tableau dashboards for capacity planning, giving management clear visibility into resource utilization and production trends.',
        'Led technical response during P1 incidents, achieving MTTR under 30 minutes with zero SLA breaches across all critical incidents in 2024.'
      ],
      impact: 'Cut operational toil by ~40% through automation. Zero SLA breaches in 2024 across all P1 incidents.'
    },
    {
      id: 'exp2',
      role: 'IT Production Support L2',
      company: 'PT Bank SMBC Indonesia Tbk',
      period: 'August 2020 – Present',
      responsibilities: [
        'Handled complex incident and problem tickets in ServiceNow and Jira; ran root cause analysis on app logs for 50+ recurring production issues.',
        'Diagnosed and resolved system issues through deep troubleshooting and log analysis, documenting each fix in Confluence to build a reusable knowledge base.',
        'Worked closely with Business Analysts, QA teams, and vendors to catch problems before production; involved in UAT cycles.',
        'Monitored system integrations across Grafana, ELK, API logs, and middleware platforms — proactively surfacing errors before they hit end users.',
        'Ran advanced SQL queries for data fixes, issue diagnosis, and technical reporting to business stakeholders.',
        'Administered AS400 Core Banking systems and maintained documentation in Confluence and Jira.',
        'Part of the 24/7 on-call rotation for critical incidents and emergency response in banking operations.'
      ],
      impact: 'Resolved 50+ recurring production issues through deep-dive root cause analysis, reducing repeat incidents and improving overall system stability.'
    },
    {
      id: 'exp3',
      role: 'IT Production Support L1',
      company: 'PT Bank SMBC Indonesia Tbk',
      period: 'August 2018 – August 2020',
      responsibilities: [
        'Handled first-line incident response — service restarts, error log checks, and initial triage for production alerts.',
        'Supported the ITCCMS system to verify ATM card linkages and ensure backend data accuracy for card operations.'
      ],
      impact: 'Delivered reliable first-line support for banking operations, building strong incident management fundamentals.'
    }
  ],
  projects: [
    {
      id: 'proj1',
      title: 'Automated Log Monitoring & Alerting Pipeline',
      description: 'An internal tool built to aggregate disparate application logs into a centralized dashboard.',
      problem: 'Debugging production issues took hours due to scattered server logs.',
      solution: 'Implemented a robust pipeline using standard log shippers and custom Python parsers to feed metrics into a centralized monitoring system.',
      impact: 'Decreased anomaly detection time from 45 minutes to under 5 minutes.',
      tags: ['Linux', 'Python', 'Log Analysis'],
      architectureDiagram: 'App Servers → Log Shipper (Filebeat) → Python Parser → Elasticsearch → Grafana Dashboard → Alert (Email/Slack)'
    },
    {
      id: 'proj2',
      title: 'BIFAST Integration Resiliency Improvement',
      description: 'Architectural and operational improvements for a critical inter-bank transfer system.',
      problem: 'Intermittent API timeouts caused transaction drops during peak hours.',
      solution: 'Analyzed middleware bottlenecks, tuned connection pools, and established strict retry policies.',
      impact: 'Zero transaction drops during the following peak season, ensuring high reliability for customer funds.',
      tags: ['Middleware', 'API', 'Troubleshooting', 'SQL'],
      architectureDiagram: 'Core Banking → Middleware → BIFAST API → Retry Policy → Monitoring (Grafana) → Alert'
    },
    {
      id: 'proj3',
      title: 'InfraMonitor: Agent-Based Observability [LIVE DEMO]',
      description: 'A full-stack infrastructure monitoring system with real-time agent, API, and interactive dashboard.',
      problem: 'Lack of real-time visibility into local infrastructure performance and anomaly detection.',
      solution: 'Developed a Python-based monitoring agent that streams system metrics to a FastAPI backend, visualized through a React dashboard with threshold-based alerting.',
      impact: 'Provides real-time health insights for system components with automated RCA (Root Cause Analysis).',
      tags: ['SRE', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
      hasLiveDemo: true,
      demoSectionId: 'live-demo'
    }
  ],
  certifications: [
    { name: 'Applied Data Science with Microsoft Fabric', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Generative AI Application Development with Microsoft Azure', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Data Processing Fundamentals', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Machine Learning for Beginners', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Fundamentals of Structured Query Language (SQL)', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Fundamentals of Artificial Intelligence (AI)', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Fundamentals of Data Science', issuer: 'Dicoding Indonesia', year: '2025' }
  ]
};

// Interface for the Service (Abstraction)
export interface IPortfolioService {
  getProfile(): Profile;
  getSkills(): Skill[];
  getExperiences(): Experience[];
  getProjects(): Project[];
  getCertifications(): Certification[];
}

// Implementation of the Service (Concrete Class)
export class PortfolioService implements IPortfolioService {
  private data: PortfolioData;

  constructor(data: PortfolioData = MOCK_DATA) {
    this.data = data;
  }

  public getProfile(): Profile {
    return this.data.profile;
  }

  public getSkills(): Skill[] {
    return this.data.skills;
  }

  public getExperiences(): Experience[] {
    return this.data.experiences;
  }

  public getProjects(): Project[] {
    return this.data.projects;
  }

  public getCertifications(): Certification[] {
    return this.data.certifications;
  }
}
