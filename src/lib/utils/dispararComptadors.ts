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

    let interval = setInterval(() => {
      if (valorCorrent < valorFinal) {
        valorCorrent++;
        comptador.innerText = valorCorrent.toString() + lletra;
      } else {
        comptador.innerText = valorFinal.toString() + lletra;
        clearInterval(interval);
        resolve();
        console.log('Resolta -->', idComptador);
      }
    }, pasTemps);
  });
}

export async function dispararComptadors(): Promise<void> {
  const promeses = [
    incrementComptadors('mostres', 0, 85, 1000),
    incrementComptadors('valoracions', 0, 350, 1000, 'k'),
    incrementComptadors('comentaris', 0, 325, 1000),
  ];
  await Promise.allSettled(promeses);
}
