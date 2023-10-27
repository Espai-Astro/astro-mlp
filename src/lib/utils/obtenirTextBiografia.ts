import type { TextBiografiaT } from '../../lib/types';

export const obtenirTextBiografia = (
  any: number,
  textosBiografia: TextBiografiaT[]
): TextBiografiaT => {
  const textBiografia = textosBiografia.find(
    (textBiografia: TextBiografiaT) =>
      textBiografia.anys[0] <= any && textBiografia.anys[1] >= any
  );
  return textBiografia!;
};
