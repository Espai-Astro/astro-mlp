export type TextIniciT = {
  id: number;
  text: string;
  claus: string[];
};

export type TextBiografiaT = {
  id: number;
  src: string;
  anys: number[];
  titol: string;
  text: string;
  claus: string[];
};

export type PostT = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ArtT = {
  id: number;
  src: string;
  alt: string;
  title: string;
  any: number;
  mida: string;
  tecnica: string;
  descripcio: string;
  descripcioLlarga: string;
};

export type XsT = {
  id: number;
  nom: string;
  src: string;
  alt: string;
  title: string;
};
