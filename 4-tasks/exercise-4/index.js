// Задача:
// Вы работаете с компанией по доставке товаров, которая ежедневно пользуется платной
// автомобильной дорогой. Плата за путешествие взимается на 10-и пунктах оплаты
// расположенных вдоль дороги. Водителям компании необходимо преодолеть весь путь,
// оплатив комиссию за проезд на каждом из пунктов.
// Сложность состоит в том, что по правилам, комиссию можно оплачивать только одной
// единственной монетой. В случае, если ее номинал выше, чем стоимость проезда,
// водитель сдачу не получает и остаток сгорает. Если же монета, наоборот, не полностью
// покрывает стоимость проезда, то вашей компании насчитывается долг. При этом
// стоимость проезда на каждом из пунктов абсолютно произвольно изменяется в конце дня,
// и может варьироваться в диапазоне от 1-ой до 10-и копеек включительно. Также
// известно, что несколько пунктов оплаты могут выставлять одну и ту же стоимость
// проезда, а общая сумма проезда через все пункты будет всегда больше 55-и копеек.
// Каждому водителю в начале пути выдается 10 монет, по одной монете каждого
// достоинства (т.е. одна монета достоинством в копейку, одна монета достоинством в две
// копейки, одна - три, и так далее, до десяти копеек включительно). Используя генетический
// алгоритм, вам необходимо найти такую стратегию оплат путешествия, при которой долг
// водителя в конце пути будет минимальным. Алгоритм будет применяться компанией в
// начале каждого дня, и использовать данные по новым, только что установленным,
// размерам комиссий на пунктах оплат для получения новой стратегии для водителей.
/////////////////////////////////////////////////////////////////////////////////
class Truckers {
  constructor(amountOfPayment) {
    //clone 2 array, for check coin and should coin order
    this.coin = amountOfPayment.slice();
    this.coinOrder = amountOfPayment.slice();
  }
  //find max Coin in Array
  maxCoinFromArray(arr) {
    return Math.max(...arr);
  }
  //method for create coin order
  coinOrder() {
    //we searched max coin,after this start from i = 10.
    for (let i = 10; i > 0; i--) {
      let index = this.coin.findIndex(
        item => item === this.maxCoinFromArray(this.coin)
      ); //find index in array with max coin value
      this.coin.splice(index, 1, 0); // after we remove this coin in array
      this.coinOrder.splice(index, 1, i); //whin coin remove , add optimal coin. in this momen it's i;
    }
    return this.coinOrder; //
  }
}
// Входящие параметры:
// Массив из десяти произвольных чисел от 1 до 10, представляющих собой размеры
// комиссий на каждом из пунктов. Числа в массиве могут повторятся, и их сумма будет
// всегда больше чем 55.
//////////////////////////////////////////support func for create random array/////////////////////////////
function createArrayWithRandomValue() {
  let costOnSpot = [];
  const fullCostOnSpot = randomValue(costOnSpot);
  return fullCostOnSpot;
}

function randomValue(array) {
  while (array.length < 10) {
    let randomValue = Math.round(Math.random() * 10);
    array.push(randomValue);
  }
  let summ = array.reduce(function(a, b) {
    return a + b;
  });
  console.log(summ);
  if (summ >= 55) {
    return array;
  }
}
//////////////////////////////////////////////////////////////////////////////////////
// Выходные данные:
// Массив из десяти чисел, представляющих собой достоинства монет, расположенные в
// порядке, оптимальном для оплат на каждом из пунктов (так чтобы долг компании после
// всех оплат был минимальным).
/////////////////////////////////////////////////////////
//in the assignment, I tried to do everything step by step.
let amountOfPayment = createArrayWithRandomValue();
let Trucker = new Truckers(amountOfPayment);
console.log(Trucker.coinOrder);
