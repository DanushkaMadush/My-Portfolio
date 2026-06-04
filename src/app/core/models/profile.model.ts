export interface ProfileContact {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  stack: string[];
  status: string;
  summary: string;
  philosophy: string[];
  focus: string[];
  contact: ProfileContact;
}
