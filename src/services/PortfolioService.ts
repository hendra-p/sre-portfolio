import type { PortfolioData, Profile, Skill, Experience, Project, Certification } from '../models/ProfileData';

// Mock Data representing Hendra's resume
const MOCK_DATA: PortfolioData = {
  profile: {
    name: 'Platform Admin',
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
        'Designed and managed end-to-end monitoring systems using SolarWinds, Elasticsearch, and Grafana for real-time visibility across 100+ servers and business-critical applications.',
        'Leveraged Jenkins CI/CD to automate deployment of monitoring configurations and recovery scripts for consistent, scalable infrastructure changes, reducing manual deployment effort by ~60%.',
        'Developed Python and Bash automation scripts for proactive anomaly detection, significantly reducing manual operational toil.',
        'Visualized system performance metrics through Tableau to drive data-driven infrastructure capacity planning for management.'
      ],
      impact: 'Reduced operational toil by ~40% through automation. Zero SLA breach in 2024 across all P1 incidents.'
    },
    {
      id: 'exp2',
      role: 'IT Production Support L2',
      company: 'PT Bank SMBC Indonesia Tbk',
      period: 'August 2020 – Present',
      responsibilities: [
        'Resolved complex incident tickets via ServiceNow and Jira, performing deep-dive log analysis to identify and remediate root causes.',
        'Executed complex SQL queries for data remediation and technical reporting for business stakeholders.',
        'Operated AS400 Core Banking systems to support seamless daily banking operations.'
      ],
      impact: 'Resolved 50+ recurring production issues through deep-dive RCA, improving system stability and reducing repeat incidents.'
    },
    {
      id: 'exp3',
      role: 'IT Production Support L1',
      company: 'PT Bank SMBC Indonesia Tbk',
      period: 'August 2018 – August 2020',
      responsibilities: [
        'Handled initial incident response, service restarts, and basic error log analysis as first-line support.',
        'Supported the ITCCMS system to verify ATM card linkages and ensure backend data accuracy.'
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
      tags: ['Linux', 'Python', 'Log Analysis']
    },
    {
      id: 'proj2',
      title: 'BIFAST Integration Resiliency Improvement',
      description: 'Architectural and operational improvements for a critical inter-bank transfer system.',
      problem: 'Intermittent API timeouts caused transaction drops during peak hours.',
      solution: 'Analyzed middleware bottlenecks, tuned connection pools, and established strict retry policies.',
      impact: 'Zero transaction drops during the following peak season, ensuring high reliability for customer funds.',
      tags: ['Middleware', 'API', 'Troubleshooting', 'SQL']
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
    { name: 'Microsoft Certified: Fabric Analytics Engineer Associate', issuer: 'Dicoding Indonesia', year: '2026' },
    { name: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Dicoding Indonesia', year: '2026' },
    { name: 'Applied Data Science with Microsoft Fabric', issuer: 'Dicoding Indonesia', year: '2026' },
    { name: 'Generative AI Application Development with Microsoft Azure', issuer: 'Dicoding Indonesia', year: '2026' },
    { name: 'Data Processing Fundamentals', issuer: 'Dicoding Indonesia', year: '2026' },
    { name: 'Machine Learning for Beginners', issuer: 'Dicoding Indonesia', year: '2026' },
    { name: 'Python Programming Fundamentals', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'SQL Fundamentals', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Fundamentals of Data Science', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Fundamentals of AI', issuer: 'Dicoding Indonesia', year: '2025' },
    { name: 'Discover AI in Daily Life', issuer: 'Google', year: '2025' }
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
