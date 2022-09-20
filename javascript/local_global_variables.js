let user="naveen"
function greet2(user){
    let num=5
    console.log(num)
    return(`hello ${user}!!`)

}
let str2=greet2(user)
console.log(str2)
//console.log(num)//error

function greet(user){
    return(`hello${user}!`)
}
let str=greet(user)
console.log(str)
function add(num1,num2,num3=1){
    console.log(num1,num2,num3);
    return num1+num2+num3;
}
let result1=add(5,6,5)
let result2=add(5,6)
console.log(result1)
console.log(result2)