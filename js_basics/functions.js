// function demo(name){
//     if(name === undefined){
//         return `no name entered`
//     }
//     return `the name is ${name}`
// }
// console.log(demo())


// rest operator
// when we need to take multiple arguments without definite number of inputs

// ex
function print_num(...num){
    return num + 1
}
// console.log(print_num(2,3,4,5,6)) //returns an array of all these elements



//////////////// Arrow functions ///////////////////////

const one = function() {
    const username = "hello"
    // console.log(this.username)
}
// console.log(this)
one()

let a = Number("456a")
console.log(typeof a)
console.log(a)

for (let index = 0; index < 10; index++) {
    const element = array[index];
    
}