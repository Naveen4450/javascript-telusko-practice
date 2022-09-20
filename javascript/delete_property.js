let alian={
    name:"naveen",
    tech:"js",
    laptop:{
        cpu:"i7",
        ram:4,
        brand:"apple"
    }
}
//delete alian.laptop
console.log(alian)
console.log(alian.laptop.brand.length)
console.log(alian.laptop?.brand?.length)//?checks whether laptop,brand exists or not