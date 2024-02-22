export const calculerScore = (carreaux: number[][]): number => {
  let score = 0;
  for (let index = 0; index < carreaux.length; index++) {
    const quillesDuCarreau = carreaux[index];
    score += recupererScoreDuCarreau(quillesDuCarreau);
    if (quillesDuCarreau[1] && estUnSpare(quillesDuCarreau[0], quillesDuCarreau[1])) {
      const prochainCarreau = recupererProchainCarreau(carreaux, index);
      score += prochainCarreau[0];
    }
    if (estUnStrike(quillesDuCarreau[0])) {
      const prochainCarreau = recupererProchainCarreau(carreaux, index);
      score += recupererScoreDuCarreau(prochainCarreau);
    }
  }
  return score;
}

const estUnSpare = (premierLancer, deuxiemeLancer): boolean => {
  return premierLancer + deuxiemeLancer === 10;
}

const estUnStrike = (premierLancer: number): boolean => {
  return premierLancer === 10;
}

const recupererProchainCarreau = (carreaux: number[][], index: number) => {
  return carreaux[index + 1];
}

const recupererScoreDuCarreau = (carreau: number[]): number => {
  let score = 0;
  for (let index = 0; index < carreau.length; index++) {
    score += carreau[index];
  }
  return score;
}
