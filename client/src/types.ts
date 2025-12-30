export interface Project {
  _id: string;
  title: string;
  category: 'fullstack' | 'ai' | 'api';
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Experience {
  _id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
   location?: string;
}

export interface Api {
  _id: string;
  name: string;
  description: string;
  endpoint: string;
  methods: string[];
  githubUrl: string;
}
