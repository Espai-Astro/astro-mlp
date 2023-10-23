import type { artT } from '../../lib/types';
import type { textBiografiaT } from '../../lib/types';

export const obtenirTextBiografia = (
	any: number,
	textosBiografia: textBiografiaT[],
): textBiografiaT=> {
	const textBiografia = textosBiografia.find(
		(textBiografia: textBiografiaT) =>
			textBiografia.anys[0] <= any && textBiografia.anys[1] >= any
	);
		return textBiografia!;
	}

