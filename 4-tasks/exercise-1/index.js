// Задача:
// Создать приложение по переводу значения температуры между градусами цельсия,
// фаренгейта и кельвина.

class ConvertTemp {
  constructor(temp) {
    //check value : false , undefined ...
    this.checkValidValue(temp);
    let temperature = {};
  }
  //checking units
  checkUnitsTemp(temp) {
    //split data  on number and units
    const unitTemp = temp.slice(-1);
    const numbTemp = +this.fromStrToNum(temp);

    //check units , and choose strategy for certain values
    unitTemp === "C"
      ? this.convertCelsium(numbTemp)
      : unitTemp === "K"
      ? this.convertKelvin(numbTemp)
      : unitTemp === "F"
      ? this.convertFarengeit(numbTemp)
      : console.error("Uncorect units. Try again with C,K,F");
  }
  //simple method ,i dont kn0w what write about :)
  checkValidValue(value) {
    if (!value) {
      return console.error("valid temperature");
    } else if (typeof value === "number") {
      return console.error("Valid value , write 26С, 299K, or 79F.");
    } else {
      this.checkUnitsTemp(value);
    }
  }

  //func for transform str into numb
  fromStrToNum(str) {
    const numb = str.slice(0, -1);
    return numb;
  }
  //method for convert Celsium in Farenheit and Kelvin, and write in temperature
  convertCelsium(temp) {
    const F = Math.round((9 / 5) * temp + 32);
    const K = +(temp + 273.15).toFixed(0);
    return (this.temperature = { F, K });
  }
  //method for convert Farenheit in Celsium and Kelvin, and write in temperature
  convertFarengeit(temp) {
    const C = Math.round((5 / 9) * (temp - 32));
    const K = +(C + 273.15).toFixed(0);
    return (this.temperature = { C, K });
  }
  //method for convert Kelvin in Farenheit and Celsium, and write in temperature
  convertKelvin(temp) {
    const C = +(temp - 273.15).toFixed(0);
    const F = Math.round((9 / 5) * (temp - 273.15) + 32);
    return (this.temperature = { C, F });
  }
  //method for get temp data in format JSON
  getTemp() {
    return JSON.stringify(this.temperature);
  }
}

// Входящие параметры:
// Значение температуры вместе с указанием шкалы (цельсий, фаренгейт или кельвин),
// например: 26С, 299K, или 79F.

const temp = new ConvertTemp("123421C"); //<---- input data

// Выходные данные:
// Целые значения температур в JSON формате для всех шкал измерения, кроме указанной
// во входящих параметрах, например: {K: 299, F: 79F}

console.log(temp.getTemp()); //<---- output data
