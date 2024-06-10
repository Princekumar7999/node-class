let f = document.getElementById("f");
let d = documnet.getElementById("d");
let p = document.getElementById("p");

f.addEventListener("click", function(e) {
    console.log("f");
    e.stopPropagation
    },true);

d.addEventListener("click",function(e){
        console.log("d")
        e.stopPropagation
    },true);

p.addEventListener("click", function(e) {
        console.log("f");
        e.stopPropagation
        },true);