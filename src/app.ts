// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [];
    new HumanHero(1, "Fireman", "male", 28, 100),
    new HumanHero(2, "Iceman", "male", 44, 40),
    new HumanHero(3, "WaterGirl", "female", 18, 88)
/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [];
    new TransformerHero(4, "Cyborg", 2, 0, "HalfBot,", "Nice"),
    new TransformerHero(5, "Robot", 0, 3,"FullBot", "Metal"),
    new TransformerHero(6, "Manny", 0, 0, "Human","Strong")