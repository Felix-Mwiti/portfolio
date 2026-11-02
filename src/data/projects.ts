export interface PortfolioProject {
  number: string
  title: string
  category: string
  description: string
  technologies: string[]
  link: string
}

export const projects: PortfolioProject[] = [
  {
    number: '01',
    title: 'HRMS management system',
    category: 'Team project',
    description:
      'A human resource management platform featuring an admin dashboard, employee management, payroll configuration and employee self-service.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: '#contact',
  },
]
