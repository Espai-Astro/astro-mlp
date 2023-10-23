export type textIniciT = {
  id: number;
  text: string;
  claus: string[];
};

export type textBiografiaT = {
  id: number;
  src: string;
  anys: number[];
  titol: string;
  text: string;
  claus: string[];
};

export type postT = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type artT = {
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

export type xsT = {
  id: number;
  nom: string;
  src: string;
  alt: string;
  title: string;
};
