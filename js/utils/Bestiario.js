
//Lista de monstros de nível de dificuldade 1
goblin = new Monstro ('Goblin', 8, 14, 10, 'pequeno', 3, cimitarra, 2, 6, 0, 4, 50);
drow = new Monstro ('Drow', 10, 14, 10, 'medio', 3, arcoCurto, 3, 8, 0, 4, 50);
esqueleto = new Monstro ('Esqueleto', 10, 14, 15, 'medio', 1, espadaCurta, 2, 8, 4, 4, 50);
zumbi = new Monstro ('Zumbi', 13, 6, 16, 'medio', 0, pancadaDoZumbi, 3, 8, 9, 3, 50);

//Arrays de monstros por nível de dificuldade(ND)
let monstrosND1 = [goblin, drow, esqueleto, zumbi];
