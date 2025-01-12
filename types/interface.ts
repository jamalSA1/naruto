export interface Films {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Characters {
  id: number;
  name: string;
  family: {
    father: string;
    mother: string;
    son?: string;
    daughter?: string;
    wife?: string;
    adoptiveSon?: string;
    godfather?: string;
  };
  images: string[];
}

