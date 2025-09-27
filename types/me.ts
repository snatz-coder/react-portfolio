
export type SkillSet = {
  languages: string[];
  frameworks: string[];
  data: string[];
  tools: string[];
  other: string[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  years: string;
};

export type Me = {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
  skills: SkillSet;
  experience: ExperienceItem[];
  education: EducationItem[];
};
