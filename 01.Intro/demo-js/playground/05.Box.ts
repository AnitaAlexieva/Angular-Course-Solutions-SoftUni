class Box<T> {
  private _elements: T[] = [];

  public add(element: T): void {
    this._elements.push(element); // добавя най-отгоре
  }

  public remove(): void {
    this._elements.pop(); // премахва най-отгоре
  }

  public get count(): number {
    return this._elements.length;
  }
}
let box = new Box<Number>();

box.add(1);

box.add(2);

box.add(3);

console.log(box.count);