export type ProjectStatus = 'LIVE' | 'DEV' | 'RESEARCH';

export interface Project {
  category: string;
  status: ProjectStatus;
  title: string;
  description: string;
  tags: string[];
}

export interface EcoModule {
  id: string; // Ejemplo: "MOD::01"
  title: string;
  description: string;
  chipText: string;
  icon: React.ReactNode; // Para pasar el SVG directamente
}