export interface Robot {
  id: string;
  name: string;
  image: string;
  creator: string;
  likes: number;
  description: string;
  specs: {
    height: string;
    weight: string;
    speed: string;
    battery: string;
  };
  features: string[];
  codeExample: {
    language: string;
    code: string;
  };
}