console.log('Hello World!!!');

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

const markMass = 78 //kg
const markHeight = 1.69; //meters

const johnMass = 92
const johnHeight = 1.95

const BMIMark = markMass / (markHeight * markHeight)
const BMIJohn = johnMass / (johnHeight * johnHeight)

const markHigherBMI = BMIMark > BMIJohn
console.log('Is Mark\'s BMI higher than John\'s -' + markHigherBMI)


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀

*/

const johnscore1 = 89
const johnscore2 = 120
const johnscore3 = 103

const markScore1 = 116
const markScore2 = 94
const markScore3 = 123

const johnsTeamAvg = (johnscore1 + johnscore2 + johnscore3) / 3
const marksTeamAvg = (markScore1 + markScore2 + markScore3) / 3

if (johnsTeamAvg > marksTeamAvg) {
  console.log('John Wins!')
} else if ( marksTeamAvg > johnsTeamAvg) {
  console.log('Mark Wins!')
} else {
  console.log('there was a tie!')
}

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

const bill1 = 124
const bill2 = 48
const bill3 = 268

let tipArray = []
let finalBillsWithTips = []

const tip1 = tipCalculator(bill1)
const tip2 = tipCalculator(bill2)
const tip3 = tipCalculator(bill3)

tipArray.push(tip1, tip2, tip3)
console.log(tipArray)

const total1 = bill1 + tip1
const total2 = bill2 + tip2
const total3 = bill3 + tip3

finalBillsWithTips.push(total1, total2, total3)
console.log(finalBillsWithTips)

function tipCalculator(billTotal) {
  let tip
  if (billTotal < 50) {
    tip = billTotal * (20/100)
  } else if (billTotal >= 50 && billTotal <= 200) {
    tip = billTotal * (15/100)
  } else {
    tip = billTotal * (10/100)
  }

  return tip
}

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

const john = {
  name: 'John Smith',
  mass: 110,
  height: 1.95,
  calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  }
}

const mark = {
  name: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
  }
}

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//   console.log('They have the same BMI');
// }

// const mark = {
//   name: 'Mark',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
// }
// }

// const john = {
//   name: 'john',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
// }
// }

const johnHigherBMI = mark.bmi < john.bmi
john.calcBMI()
mark.calcBMI()
console.log('Is Mark\'s BMI higher than John\'s -' + johnHigherBMI)
console.log(john.name, john.bmi, mark.name, mark.bmi)