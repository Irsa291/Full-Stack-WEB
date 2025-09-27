console.log("TASK 1----!")
let a=12
let b=5

console.log('Difference of a and b are ' , (a-b))
console.log('Sum of a and b are ' , (a+b))
console.log('Quotient of a and b are ' , (a/b))
console.log('Remainder of a and b are ' , (a%b))
console.log('Exponent of a and b are ' , (a**b))

console.log("TASK 2----!")
let x=20
let y="20"

console.log('Check the value' , (x==y))
console.log('Check the value and datatype' , (x===y))

console.log("TASK 3----!")
let i=28

if(i%4==0)
    console.log("Even")
else
    console.log("Odd")

console.log("TASK 4----!")
let marks=82
if(marks>=90)
    console.log("Grade A")
else if(marks>=75)
    console.log("Grade B")
else if(marks>=50)
    console.log("Grade C")
else
    console.log("Fail")

console.log("TASK 5----!")
let age=19
hasId=true

if(age>=18 && hasId){
    console.log('U can enter club')
}
else{
    console.log('Entry denied')
}
if(age>=18 || hasId){
    console.log('U can enter club')
}
else{
    console.log('Entry denied')
}
if(!hasId){
    console.log('U do not hav ID')
}
else{
    console.log('U have an ID')
}
