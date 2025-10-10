console.log('Task 1-------!')
let a=12
let b=5

console.log('Sum of a & b = ' +(a+b))
console.log('Difference of a & b = ' +(a-b))
console.log('Product of a & b = ' +(a*b))
console.log('Quotient of a & b = ' +(a/b))
console.log('Exponent of a & b = ' +(a**b))
console.log('Remainder of a & b = ' +(a%b))

console.log('Task 2-------!')
let x=20
let y="20"

console.log('Value check = ' + (x==y))
console.log('Datatype & value check   = ' +(x===y))

console.log('Task 3-------!')
let age=19
hasId=true
if(age & hasId)
{
    console.log('The person can enter a club.')
}else if(age || hasId)
{
    console.log('They can enter with age or id.')
}else if(age != hasId)
{
    console.log('hasId is false.')
}
console.log('Task 4-------!')
let num=10
if(num%2==0)
{
    console.log('Even')
}else {
    console.log('Odd')
}

console.log('Task 5-------!')
let marks=82
if(marks>=90)
{
    console.log('Grade "A" ')
}else if(marks>=75){
    console.log('Grade "B" ')
}else if(marks>=50){
    console.log('Grade "C" ')
}else {console.log(' "Fail" ')}

console.log('------LOOPS-------')
console.log('Task 6-------!')

for(let c=1; c<=10;c++){
    console.log(c);
}
console.log('Task 7-------!')
for(let d=1; d<=10; d++){
    console.log('5*'+d);
}
console.log('Task 8-------!')
for(let e=2; e<=20; e+=2){
    console.log(e);
}
console.log('Task 9-------!')
let sum=0;
for(let f=1; f<=50; f++){
    sum+=f;
}
console.log("The sum of 1 to 50 = "+sum)
console.log('Task 10-------!')
function grademarks(marks){
    if(marks>=90){console.log("A")}
    else if(marks>=80 && marks<=90){console.log("B")}
    else if(marks>=70 && marks<=79){console.log("C")}
else{console.log("Fail")}
}
grademarks(95)
grademarks(85)
grademarks(75)
grademarks(60)
console.log('Task 11-------!')
function checknum(number){
    if(number>0){
        console.log("Positive") }
        else if(number<0){
            console.log("Negative")}
            else {console.log("Zero")}
}
checknum(-9)
checknum(10)
checknum(0)

console.log('Task 12-------!')
function leapyear(year){
if (year%400===0){
    console.log("True")
}else if(year%4===4 && year%100!==9){
    console.log("True")
}else {console.log("False")}
}
leapyear(2000)
leapyear(1990)
console.log('Task 13-------!')
function eligibility(age){
    if(age>=18){
        console.log("Eligible to vote")
    } else{ console.log("Not eligible to vote")}
}
eligibility(34)
eligibility(10)