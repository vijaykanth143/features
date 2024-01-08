class Vehical {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}
const vehicle = new Vehical("black");
console.log(vehicle.color);
class Cars extends Vehical {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Drive the car vijay");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const cars = new Cars(4, "blue");
cars.startDrivingProcess();
