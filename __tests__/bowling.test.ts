import { calculerScore } from "../src/bowling";

describe("Calculer le score", () => {
  it("Au premier lancer, quand on ne fait tomber aucune quille, le score est à 0", () => {
    const carreaux = [];
    const score = calculerScore(carreaux);
    expect(score).toBe(0);
  })
  it("Au premier lancer, quand on fait tomber une quille, le score est à 1", () => {
    const carreaux = [[1]];
    const score = calculerScore(carreaux);
    expect(score).toBe(1);
  })
  it("Au premier lancer je fais tomber 3 quilles, au 2ème 5 quilles, le score est à 8", () => {
    const carreaux = [[3, 5]];
    const score = calculerScore(carreaux);
    expect(score).toBe(8);
  })
  it("Mes deux premiers lancers font un spare, mon troisième fait tomber 1 quille, le score est à 12", () => {
    const carreaux = [[3, 7], [1]];
    const score = calculerScore(carreaux);
    expect(score).toBe(12);
  })
  it("Troisième et quatrième lancers font un spare, mon cinquième fait tomber 4 quilles, le score est à 22", () => {
    const carreaux = [[1, 3], [4, 6], [4]];
    const score = calculerScore(carreaux);
    expect(score).toBe(22);
  })
  it("Mon premier lancer est un strike, mes deux lancer suivants font tomber 4 et 5 quilles, le score est de 28", () => {
    const carreaux = [[10], [4, 5]];
    const score = calculerScore(carreaux);
    expect(score).toBe(28);
  })
  it("En enchaînant spares et strikes, le score est correct", () => {
    const carreaux = [[10], [6, 4], [10], [10], [5, 3]];
    const score = calculerScore(carreaux);
    expect(score).toBe(86);
  })
})
