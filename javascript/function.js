function greet1(){
    console.log("its a greet function")
}
greet1()
function greet(user){
    return(`hello${user}!`)
}
let user="naveen"
let str=greet(user)
console.log(str)
let add=function(num1,num2)
{
    return num1+num2
}
let sum=add
let result=sum(5,6)
console.log(result)
console.log(sum)