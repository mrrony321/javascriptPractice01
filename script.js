//Variables and Data types in JavaScript
var firstName = 'Mizanur';
var lastName = 'Rahman';
var age = 22;
var fullAge = true;
const name1 = 'horn2';

var job;
job = 'Teacher';
//console.log(firstName, lastName, age, name1, job)

/* ***************************** */
//Variable mutation and type coercion

// console.log('My name is '+firstName+' '+lastName+' is a '+job+ ' and I am '+age+' years old.')
// alesrt('My name is '+firstName+' '+lastName+' is a '+job+ ' and I am '+age+' years old.')
// lastName = prompt("what is the last name?")
// alert('My name is '+firstName+' '+lastName+' is a '+job+ ' and I am '+age+' years old.')


/* ------------------------------------ */
// oparator and precedence

var now = 2024
var yearRony = 1997
var fullAge = 18

//Multiple operators
var isFullAge = now - yearRony >= fullAge
console.log(isFullAge)

//Grouping
var ageRony = now - yearRony
var ageMark = 35
var average = (ageRony+ageMark)/2
// console.log(average)

//Multiple Assignments
var x,y;
x = y = (3+5)*4-6;
// console.log(x, y)

//more operators
x *= 2
// console.log(x)
x++
// console.log(x)
x--
// console.log(x)

// first coding challange
// var markHeight = prompt('please give Mark height in Meter :)')
// var markMass = prompt('please give Mark mass in KG :)')

// var johnHeight = prompt('please give John height in Meter <>')
// var johnMass = prompt('please give John mass in KG --')
var markHeight = 1.69 //kg
var markMass = 78 // meters

var johnHeight = 1.95 //meters
var johnMass = 92 // kg
var markBmi = markMass / (markHeight * markHeight)
var johnBmi = johnMass / (johnHeight * johnHeight)

var isMarkHasHighBmi = markBmi > johnBmi
// console.log(markBmi, johnBmi)
// console.log('Is Mark\'s BMI is higher than John\'s? '+isMarkHasHighBmi)
// console.log("Is Mark's BMI is higher than John's? "+isMarkHasHighBmi)

/* --------------- */ 
// Ternary operator 
var prothomNaam = 'Mizanur'
var age = 24

// age >= 18 ? console.log(prothomNaam + ' drinks beer.') : 
//     console.log(prothomNaam+ ' drinks juice')

var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink)

//switch statement
//what will be the content for switch(?)
//it will be the accepted value

// var job1 = 'cop'
// switch(job1) {
//     case 'teacher':
//         console.log(prothomNaam + ' teaches kids how to code')
//         break
//     case 'driver':
//         console.log(prothomNaam+ ' drives an Uber in city')
//         break
//     case 'designer':
//         console.log(prothomNaam+ 'designs beautiful websites')
//         break
//     default:
//         console.log(prothomNaam+ ' does something else')
    
// }

// age = 35

// switch(true){
//     case age<13:
//         console.log(prothomNaam + ' is a boy.')
//         break;
//     case age>=13 && age<20:
//         console.log(prothomNaam + ' is a teenager.')
//         break;
//     case age>=20 && age<30:
//         console.log(prothomNaam + ' is a young man.')
//         break;
//     default:
//         console.log(prothomNaam + ' is a man.')
// }

/************
 * Truthy and Falsy values and equity operators*
 *************/
//Falsy values : undefined, null, 0, ', NaN
//Truthy values: Not falsy values

// var height
// height = 23
// if(height){
//     console.log('Variable is defined')
// }else{
//     console.log('variable has not defined')
// }

//equality operators
// if(height == '23'){
//     console.log('The == operator does type coercion!')
// }

// if(height === '23'){
//     console.log('The == operator does type coercion!')
// }


// coding chalange 2
// var johnsTeam = [89,120,103]
// var mikesTeam = [116,94,123]

// var johnsTeamAvg = (89+120+103)/3
// var mikesTeamAvg = (116+94+123)/3

// switch(true){
//     case johnsTeamAvg > mikesTeamAvg :
//         console.log('winner team is John\'s team')
//         break
//     case johnsTeamAvg < mikesTeamAvg :
//         console.log('winner team is Mike\'s team. And the average score for the john\'s team is '+johnsTeamAvg+' and mike\'s team is '+mikesTeamAvg)
//         break
//     default:
//         console.log('It\'s a tie!')
// }

// function hi(text1){
//     if(text1)
//         return text1
//     else
//         return 'hello'
// }

// console.log("****"+hi("hello"))

// var whatDoyouDo = function(job){
//     switch(job){
//         case 'teacher':
//             return console.log('hiii '+job)
//         case 'doctor':
//             return console.log('hiii '+job)
//         default:
//             return console.log('hi '+job)
//     }
// }

// whatDoyouDo('teacher')
// console.log(whatDoyouDo,'++++++')


// coding challenge 3
var bills = [124,48,268]
var tips= [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])]
var finalBills = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

// if(count <= bill.length){
//     console.log(count)
//     count++
// }

function tipCalculator(bill){
    var parcentage
    if(bill < 50){
        parcentage =  0.2
    }else if(50<=bill && bill<=200){
        parcentage =  0.15
    }else{
        parcentage =  0.1
    }
    return parcentage * bill
}

console.log(tips)
console.log(finalBills)


// var tipsAndBillCalculator = function(bills){
//     var count = 0
    
//     if(count <= bills.length){
//         switch(true){
//             case bills[count] < 50:
//                 tips.push(bills[count]*0.2)
//                 finalBills.push(bills[count]+bills[count]*0.2)
//                 count++
//                 break
//             case 50<=bills[count]<=200:                
//                 tips.push(bills[count]*0.15)
//                 finalBills.push(bills[count]+bills[count]*0.15)
//                 count++
//                 break
//             case bills[count]>200:
//                 tips.push(bills[count]*0.10)
//                 finalBills.push(bills[count]+bills[count]*0.10)
//                 count++
//                 break
//         }
//     }
// }

// tipsAndBillCalculator(bill)
// console.log(tips,finalBills)


// assignment 4

var mark = {
    height: 1.69,
    mass: 78,
    calBMI : function(){
        this.bmi = this.mass / (this.height * this.height) 
    }
}

var john = {
    height: 1.95,
    mass: 92,
    calBMI : function(){
        this.bmi = this.mass / (this.height * this.height) 
    }
}

john.calBMI()
mark.calBMI()
console.log(john)
console.log(mark)

john.bmi > mark.bmi ? console.log('johns bmi is higher than marks bmi') : john.bmi < mark.bmi ? console.log('johns bmi is lower than marks bmi') : console.log('its tie')
// console.log(markBmi, johnBmi)
// console.log('Is Mark\'s BMI is higher than John\'s? '+isMarkHasHighBmi)
// console.log("Is Mark's BMI is higher than John's? "+isMarkHasHighBmi)