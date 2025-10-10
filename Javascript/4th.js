console.log('--------Task of Pushing--------')
let todos=['Buy Groceries','Clean room','Study Javascript']
// pushing
console.log('Before pushing '+todos.length)
console.log(todos)
todos.push('Call Mama')
console.log('After pushing '+todos.length)
console.log(todos)
// Poping
console.log('--------Task of Popping--------')
let playlist=['Shape of you','Perfect','Photograph','Bad Habits']
console.log('Before Popping '+playlist.length)
console.log(playlist)
playlist.pop("Shape of You")
console.log('After Popping '+playlist.length)
console.log(playlist)
// Unshift
console.log('--------Task of Unshifting--------')
let movies=['Inception','Interstellar','The dark knight']
console.log('Before Unshifting '+movies.length)
console.log(movies)
movies.unshift('Oppenheimer')
console.log('After Unshifting '+movies.length)
console.log(movies)
// Shift
console.log('--------Task of Shifting--------')
let patients=['Ali','Sara','Ahmad','Fatima']
console.log('Before Shifting '+patients.length)
console.log(patients)
patients.shift()
console.log('After Shifting  '+patients.length)
console.log(patients)
// Slice
console.log('--------Task of Slicing--------')
let students=['Ayesha','Bilal','Hassan','Iqra','Zara']
console.log('Before Slicing '+students.length)
console.log(students)
console.log('After Slicing '+'3')
console.log(students.slice(1,4))
// Overall
console.log('--------Task of Overall(Push,Shift,Slice)--------')
let orders=['Order 1','Order 2','Order 3','Order 4','Order 5']
console.log(orders)
orders.push('Order 6')
console.log('After push order ',orders)
orders.shift()
console.log('After shift order ',orders)
console.log('After slice orders ',(orders.slice(0,3)))




