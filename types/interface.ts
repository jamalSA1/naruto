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
  natureType: string[];
  personal: {
    birthdate: string;
    sex: string;
    titles: string[];
    clan: string;
  };
  images: string[];
}

