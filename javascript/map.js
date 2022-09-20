let map=new Map()
map.set("naveen","java")
map.set("kumar","android")
map.set("sandeep","ml")
console.log(map.has("naveen"))
console.log(map.get("naveen"))
for (let [k,v] of map){
    console.log(k,":",v)
}