function incrementComptadors(
  idComptador: 'mostres' | 'valoracions' | 'comentaris',
  valorCorrent: number = 0,
  valorFinal: number,
  durada: number,
  lletra: string = ''
): Promise<void> {
  return new Promise<void>((resolve) => {
    let comptador = document.getElementById(idComptador) as HTMLElement;
    let pasTemps = Math.abs(Math.floor(durada / valorFinal));
    console.log('Inicia -->', idComptador, 'amb pasTemps de', pasTemps, 'ms');

    /* let interval = setInterval(() => {
      if (valorCorrent < valorFinal) {
        valorCorrent++;
        comptador.innerText = valorCorrent.toString() + lletra;
      } else {
        comptador.innerText = valorFinal.toString() + lletra;
        clearInterval(interval);
        resolve();
        console.log('Resolta -->', idComptador);
      }
    }, pasTemps); */

    const interval = () =>
      setTimeout(() => {
        if (valorCorrent < valorFinal) {
          valorCorrent++;
          comptador.innerText = valorCorrent.toString() + lletra;
          interval();
        } else {
          comptador.innerText = valorFinal.toString() + lletra;
          resolve();
          console.log('Resolta -->', idComptador);
        }
      }, pasTemps);

    if (valorCorrent < valorFinal) {
      interval();
    }
  });
}

export async function dispararComptadors(): Promise<void> {
  const promeses = [
    incrementComptadors('mostres', 0, 85, 2000),
    incrementComptadors('valoracions', 0, 350, 2000, 'k'),
    incrementComptadors('comentaris', 0, 325, 2000),
  ];
  await Promise.allSettled(promeses);
}
