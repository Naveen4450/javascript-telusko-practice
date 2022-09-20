let num=1
function show(){
    console.log("hi",num)
    num++
    if(num<=7776){
        show()
    }

}

show()