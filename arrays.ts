const carMakers = ["fors", "toyato", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["BMW"], ["Audi"]];

// Help with inference when extracting values
const carName = carMakers[0];
const myCar = carMakers.pop();
console.log(myCar);

//prevent incompatible values
//carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexibl types
const importantDates: (string | Date)[] = [new Date()];

importantDates.push("Date");
importantDates.push(new Date());
//importantDates.push(100);
