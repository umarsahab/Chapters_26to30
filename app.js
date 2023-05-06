var positiveInteger = prompt("inter the positive number")

var roundPositiveInteger = Math.round(positiveInteger)
var floorPositiveInteger = Math.floor(positiveInteger)
var ceilPositiveInteger = Math.ceil(positiveInteger)
document.write("Number :" + positiveInteger)
document.write("<br>")
document.write("Round off value :" + roundPositiveInteger)
document.write("<br>")
document.write("floor value:" + floorPositiveInteger)
document.write("<br>")
document.write("ceil value :" + ceilPositiveInteger)
document.write("<br>")

var negativeInteger = prompt("inter the negative number")

var roundNegativeInteger = Math.round(negativeInteger)
var floorNegativeInteger = Math.floor(negativeInteger)
var ceilNegativeInteger = Math.ceil(negativeInteger)
document.write("<br>")
document.write("Number :" + negativeInteger)
document.write("<br>")
document.write("Round off value :" + roundNegativeInteger)
document.write("<br>")
document.write("floor value:" + floorNegativeInteger)
document.write("<br>")
document.write("ceil value :" + ceilNegativeInteger)

document.write("<br>")
document.write("<br>")


var negativeAbsoluteValue = -4
var positiveAbsolteValue = 4
document.write("The absolute value of " + negativeAbsoluteValue + " is " + positiveAbsolteValue)

document.write("<br>")
document.write("<br>")


var value2 = Math.random()
var num = (value2 * 6) + 1;
var floor1 = Math.floor(num)
document.write("random dice value : " + floor1)

document.write("<br>")
document.write("<br>")

var value3 = Math.random();
var num1 = (value3 * 6) + 1;
var floor2 = Math.floor(num1)
document.write("random dice value : " + floor2)

document.write("<br>")
document.write("<br>")

var coinTose1 = Math.random()
var num2 = (coinTose1 * 6) + 1;
var floor3 = Math.floor(num2)
document.write(floor3)
document.write("<br>")
document.write("random coin value: Heads")

document.write("<br>")
document.write("<br>")

var coinTose2 = Math.random()
var num3 = (coinTose2 * 6) + 1;
var floor4 = Math.floor(num3)
document.write(floor4)
document.write("<br>")
document.write("random coin value: Tails")

document.write("<br>")
document.write("<br>")

var randomNumber = Math.random();
var random100 = (randomNumber * 6) + 74;
var floor5 = Math.floor(random100)
document.write("random number between 1 and 100 : " + floor5)

document.write("<br>")
document.write("<br>")


var userweight = prompt('Plz tell me what is your weight in kgs')

document.write("The weigth of user is " + userweight + " Kilograms")

document.write("<br>")
document.write("<br>")

var secretNumber = Math.random()
var secretNumberAdd = (secretNumber * 6) + 4;
var floor6 = Math.floor(secretNumberAdd)
document.write("The random Secret number is "+floor6)

document.write("<br>")
document.write("<br>")

var userSecretNumber = +prompt("Inter the  Number between 1 to 10")
document.write("The user Secret number is " + userSecretNumber )
if(floor6 == userSecretNumber){
    alert('Congratulations')
}else{
    alert('Sorry')
}