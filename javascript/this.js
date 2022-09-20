//it represents current object we are calling
let laptop1={
    cpu:"i9",
    getconfig:function(){
        console.log(this.cpu)
    }
}
let laptop2={
    cpu:"i11",
    getconfig:function(){
        console.log(this.cpu)
    }
}
laptop2.getconfig()