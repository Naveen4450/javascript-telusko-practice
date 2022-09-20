var nums=[5,7,2,4]
console.log(nums)
var [a,b,,d]=nums
console.log(d)
var [a,b]=[b,a]
console.log(a,b)
let words="my name is naveen kumar".split(" ")
var [a,b,c,d,e]=words
console.log(a,b)
var [a,b,,...d]=words
console.log(d)