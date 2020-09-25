// a) Implement a generic function which will take an array of any kind, and return the array reversed (just use the built-in reverse function),
// so the three first calls below will print the reversed array, and the last call will fail.

function reverseArr<T>(arg: T[]) {
  return arg.reverse();
}

const arrowReverseArr = <T>(arg: T[]): T[] => {
  return arg.reverse();
};

console.log(
  reverseArr<string>(["a", "b", "c"])
);
console.log(
  reverseArr<number>([1, 2, 3])
);
console.log(
  reverseArr<boolean>([true, true, false])
);
console.log(
  reverseArr<number>(["a", "b", "c"])
);

// b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:

class DataHolder<T> {
  _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(arg: T) {
    this._value = arg;
  }
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
