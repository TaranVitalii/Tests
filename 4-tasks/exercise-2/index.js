// Задача:
// Вам необходимо создать приложение для автоматизации работы погрузочных кранов,
// позволяющих перемещать плиты между грузовыми автомобилями на крупной
// строительной площадке.
// Приложение должно предоставлять кранам последовательность разгрузки, оптимальную
// для переноса груза с автомобиля на автомобиль, учитывая следующее:
// ● плиты размещаются на автомобилях одна над другой (от 3 до 8 штук в высоту), и
// отсортированы по весу (от тяжелых - снизу, к легким - сверху)
// ● кран может снимать и перемещать только самую верхнюю плиту с грузовика, и при
// разгрузке не может устанавливать более тяжелые плиты на более легкие
// ● перенос груза с загруженного автомобиля на пустой нужно осуществить используя
// только одно дополнительное место для временного хранения плит

////////////////////////////////////////////////////////////////////////////////////
class Cran {
  constructor(plates) {
    this.plates = plates;
    this.validNumberPlates(plates);
  }
  validNumberPlates(plates) {
    if (!plates || plates < 3 || plates > 8)
      return console.log("uncorect plates number");
    // mark slots using numbers 1, 2, 3
    let slot_a = 1;
    let slot_c = 2;
    this.createAutomationCranProgram(plates, slot_a, slot_c);
  }

  createAutomationCranProgram(plates, slot_a, slot_c) {
    //if n === 1 its the largest plate, which will be located at the base and it will be placed immediately on "slot_c"
    if (plates === 1) {
      console.log(`#${plates} move from ${slot_a} -> ${slot_c}`);
    } else {
      // we find slot_b , 1+2+3 = 6  and if we want find someone slot, use n.
      let slot_b = 6 - slot_a - slot_c;
      // and this solved by recursion
      this.createAutomationCranProgram(plates - 1, slot_a, slot_b);
      console.log(`#${plates} move from ${slot_a} -> ${slot_c}`);
      this.createAutomationCranProgram(plates - 1, slot_b, slot_c);
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////
//  Выходные данные:
// Стратегия перемещения плит с автомобиля на автомобиль:
// ● #1 slot_a -> slot_c
// ● #2 slot_a -> slot_b
// ● #1 slot_c -> slot_b
// ● ...
// где: slot_a - разгружаемый автомобиль, slot_b - дополнительное место для
// промежуточного хранения плит, slot c - пустой автомобиль, куда нужно перенести весь
// груз, #n - номер перемещаемой плиты.

// Входящие параметры:
// Количество плит на автомобиле, который требуется разгрузить (от 3 до 8)

// in this task i am use Hanoi tower algorithm
let AutomizeCran = console.log(new Cran(3));
