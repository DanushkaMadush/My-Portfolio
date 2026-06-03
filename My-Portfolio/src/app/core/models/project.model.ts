export type ProjectStatus = 'Production' | 'Completed' | 'Personal' | 'In Development' | 'Archived';
export type ProjectType = 'professional' | 'academic' | 'personal';

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  type: ProjectType;
  company?: string;
  githubUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
  imageUrl?: string | null;
}