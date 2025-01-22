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
    age: {
      "Part I": number;
      "Part II": number;
    };
    titles: string[];
    clan: string;
  };
  images: string[];
}

