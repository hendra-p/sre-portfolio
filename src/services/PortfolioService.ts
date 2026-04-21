import type { PortfolioData, Profile, Skill, Experience, Project } from '../models/ProfileData';

// Mock Data representing Hendra's resume
const MOCK_DATA: PortfolioData = {
  profile: {
    name: 'Hendra Prasetyo',
    title: 'IT Application Support & Site Reliability Engineer',
    tagline: 'Reliability-focused problem solver. Ensuring system stability, minimizing MTTR, and driving operational excellence.',
    about: 'I am a seasoned IT professional with over 7 years of experience in the banking sector. My expertise lies in maintaining high-availability financial systems, rapidly resolving production incidents, and optimizing system performance. I bridge the gap between development and operations by implementing robust monitoring, scripting automation, and ensuring strict compliance with regulatory reporting standards (e.g., OJK). I approach complex technical challenges with a calm, methodical, and SRE-driven mindset.',
    email: 'hendra.prasetyo@example.com',
    linkedin: 'https://linkedin.com/in/hendra-prasetyo',
    github: 'https://github.com/hendra-prasetyo'
  },
  skills: [
    { name: 'Linux Administration', category: 'Technical' },
    { name: 'SQL & Database Mgmt', category: 'Technical' },
    { name: 'Python Scripting', category: 'Technical' },
    { name: 'Bash Scripting', category: 'Technical' },
    { name: 'Log Analysis', category: 'Tools' },
    { name: 'Monitoring (Prometheus/Grafana)', category: 'Tools' },
    { name: 'APIs & Middleware', category: 'Tools' },
    { name: 'Incident Management (MTTR, RCA)', category: 'Soft Skills' },
    { name: 'Problem Solving', category: 'Soft Skills' },
    { name: 'Calm under pressure', category: 'Soft Skills' }
  ],
  experiences: [
    {
      id: 'exp1',
      role: 'Site Reliability Engineer',
      company: 'Major Banking Institution',
      period: '2020 - Present',
      responsibilities: [
        'Lead incident response for critical financial systems and integration platforms (BIFAST).',
        'Monitor system logs, perform root cause analysis, and implement preventative measures.',
        'Support regulatory reporting systems ensuring 100% compliance with OJK requirements.'
      ],
      impact: 'Reduced Mean Time To Recovery (MTTR) by 35% through proactive monitoring and automated alert routing.'
    },
    {
      id: 'exp2',
      role: 'IT Application Support Engineer',
      company: 'Financial Services Tech',
      period: '2016 - 2020',
      responsibilities: [
        'Handled L2/L3 production issues for high-volume transaction systems.',
        'Developed Bash and Python scripts to automate routine log aggregation and daily health checks.',
        'Collaborated with development teams to deploy hotfixes and architecture optimizations.'
      ],
      impact: 'Achieved 99.99% system uptime and automated 20+ hours of weekly manual reporting tasks.'
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
    }
  ]
};

// Interface for the Service (Abstraction)
export interface IPortfolioService {
  getProfile(): Profile;
  getSkills(): Skill[];
  getExperiences(): Experience[];
  getProjects(): Project[];
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
}
