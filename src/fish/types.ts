export type FishRef = {
  label: string;
  url: string;
};

export type FishColors = {
  primary: string;
  secondary: string;
  belly: string;
  fin: string;
};

export type Fish = {
  id: string;
  name: string;
  scientific: string;
  image: string[];
  features: string[];
  keyFeature: string;
  habitat: string;
  size: string;
  funFact: string;
  refs: FishRef[];
  colors: FishColors;
};

export type FeatureOption = {
  correct: string;
  wrong: string[];
};

export type TrueFalseQuestion = {
  statement: string;
  answer: boolean;
  fishId: string;
};
