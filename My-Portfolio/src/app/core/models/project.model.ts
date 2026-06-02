export type ProjectStatus = 'Production' | 'In Development' | 'Archived';

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}
