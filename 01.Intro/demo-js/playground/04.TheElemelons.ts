abstract class Melon {
  constructor(public weight: number, public melonSort: string) {}

  abstract get elementIndex(): number;

  abstract toString(): string;
}

// ------------------------
// Elemelon класове
// ------------------------

class Watermelon extends Melon {
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}

class Firemelon extends Melon {
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}

class Earthmelon extends Melon {
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}

class Airmelon extends Melon {
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}

// ------------------------
// Melolemonmelon - може да сменя елементи
// ------------------------

class Melolemonmelon extends Melon {
  private elements = ['Water', 'Fire', 'Earth', 'Air'];
  private currentElementIndex = 0;

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  morph(): void {
    this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    const currentElement = this.elements[this.currentElementIndex];
    return `Element: ${currentElement}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}
// let test = new Melon(100, "Test"); // ❌ Throws error – abstract class

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100

let morphingMelon = new Melolemonmelon(10, "Morph");
console.log(morphingMelon.toString());
// Element: Water
// Sort: Morph
// Element Index: 50

morphingMelon.morph();
console.log(morphingMelon.toString());
// Element: Fire ...

morphingMelon.morph();
console.log(morphingMelon.toString());
// Element: Earth ...

morphingMelon.morph();
console.log(morphingMelon.toString());
// Element: Air ...

morphingMelon.morph();
console.log(morphingMelon.toString());
// Back to Water ...