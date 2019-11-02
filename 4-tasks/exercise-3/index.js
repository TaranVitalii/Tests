// Задача:
// Вы участвуете в рыцарском поединке по стрельбе из лука. Поединок начинается с того,
// что оба соперника располагаются на расстоянии двадцати шагов друг от друга, и каждому
// дается только одна стрела и, соответственно, только один шанс на выстрел. В течение
// поединка соперники ходят по очереди, каждый ход участник может либо сделать шаг
// вперед, либо произвести выстрел. Чем ближе находятся соперники друг к другу, тем
// выше шанс попадания. При этом шанс попадания увеличивается линейно, начиная с
// определенного значения в начале поединка до 100% при полном сближении.
// Сложность состоит в том, что если вы сделаете выстрел и промахнетесь, соперник будет
// иметь право сделать необходимое количество шагов, подойти к вам вплотную, и
// выстрелить с гарантированным попаданием, что обеспечит ему победу.
// Создайте алгоритм, который, отталкиваясь от заданных значений шансов попадания для
// вас и соперника в начале поединка, будет определять номер шага когда вам нужно
// произвести выстрел для получения наиболее высоких шансов на победу.

class counTheNumberOfSteps {
  // write all the input data
  constructor(robinGoodChance, legolasChance, first, second) {
    this.robinGoodChance = robinGoodChance;
    this.legolasChance = legolasChance;
    this.first = first;
    this.second = second;
    this.robinGoodStep = 0;
    this.legolasStep = 0;
    this.optimalStep();
  }
  //func calc chance and step for Legolas and Robin Good
  optimalStep() {
    if (this.first === true) {
      for (let i = 0; i < 10; i++) {
        //archer have 1 action or step or shot if first Robin is writing step ++ and chance linearly + 10%
        this.robinGoodStep++;
        this.robinGoodChance = this.robinGoodChance + 10;
        //after each step should check if chance === 100 or more
        if (this.robinGoodChance >= 100) {
          this.result = console.log(
            `optimal step for Robin Good, its step #${
              this.robinGoodStep
            } with chance ${this.robinGoodChance}. Legolas on step#${
              this.legolasStep
            } with chance ${this.legolasChance}%`
          );
          return this.result;
        }
        //archer2 have 1 action or step or shot after first archer.And legolas is writing step ++ and chance linearly + 10%
        this.legolasStep++;
        this.legolasChance = this.legolasChance + 10;
        //after each step should check if chance === 100 or more
        if (this.legolasChance >= 100) {
          this.result = console.log(
            `optimal step for Legolas, its step #${
              this.legolasStep
            } with chance ${this.legolasChance}. Robin Good on step#${
              this.robinGoodStep
            } with chance ${this.robinGoodChance}%`
          );
          return this.result;
        }
      }
    }
    if (this.second === true) {
      for (let i = 0; i < 10; i++) {
        //archer1 have 1 action or step or shot if first Legolas is writing step ++ and chance linearly + 10%
        this.legolasStep++;
        this.legolasChance = this.legolasChance + 10;
        //after each step should check if chance === 100 or more
        if (this.legolasChance >= 100) {
          this.result = console.log(
            `optimal step for Legolas, its step #${
              this.legolasStep
            } with chance ${this.legolasChance}. Robin Good on step#${
              this.robinGoodStep
            } with chance ${this.robinGoodChance}%`
          );
          return this.result;
        }
        //archer2 have 1 action or step or shot after first archer.And RobinGood is writing step ++ and chance linearly + 10%
        this.robinGoodStep++;
        this.robinGoodChance = this.robinGoodChance + 10;
        //after each step should check if chance === 100 or more
        if (this.robinGoodChance >= 100) {
          this.result = console.log(
            `optimal step for Robin Good, its step #${
              this.robinGoodStep
            } with chance ${this.robinGoodChance}. Legolas on step#${
              this.legolasStep
            } with chance ${this.legolasChance}%`
          );
          return this.result;
        }
      }
    }
  }
}

// Входящие параметры:
// Значения шансов попадания в начале поединка (разные для вас и соперника, и оба в
// диапазоне от 0.1 до 0.3), а также номер участника, который ходит первым.

//I used percent to replace unit fractions
const robinGoodChance = 0;
const legolasChance = 0;
const robinGoodFirstShot = false;
const legolasFirstShot = true;

// Выходные данные:
// Наиболее оптимальный шаг для произведения выстрела (в диапазоне от 1 до 10).

//in the assignment, I tried to do everything step by step.
const steper = new counTheNumberOfSteps(
  robinGoodChance,
  legolasChance,
  robinGoodFirstShot,
  legolasFirstShot
);
