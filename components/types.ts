// types.ts (recommended to keep all interfaces in one place)

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  experience: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  duration: string;
  client: string;
  description: string;
  details: string;
  features: string[];
  status: 'Ongoing' | 'Completed';
  image: string;
}

export interface Machinery {
  name: string;
  owned: number;
  hired: number;
  description: string;
  icon: string;
}


export interface clients {
    name : string,
    category : string,
    logo : string
}

//home section miltestone

export interface miltestone{
  year: number,
  description: string
}