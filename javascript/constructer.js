function Alian(name,tech){
    this.name=name
    this.tech=tech
    this.work=function(){
        console.log("bugs")
    }
    return 7


}
let alian=new Alian("naveen","js")
let alian2=new Alian("kumar","python")
alian.tech="block"
console.log(alian)
alian.work()