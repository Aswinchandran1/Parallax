let text = document.getElementById('text');
let mountain1 = document.getElementById('m1');
let mountain2 = document.getElementById('m2');
let tree1 = document.getElementById('t1');
let tree2 = document.getElementById('t2');
let man = document.getElementById('man');
let plants = document.getElementById('plants');
let moon=document.getElementById('moon')

window.addEventListener('scroll',()=>{
    let value=window.scrollY

    text.style.paddingBottom=value*1+"px"
    man.style.left=value*-.5+"px"
    mountain1.style.left=value*1+"px"
    mountain2.style.bottom=value*-1+"px"
    tree2.style.left=value*.2+"px"
    tree2.style.bottom=value*-.2+"px"
    moon.style.bottom=value*1+"px"
    plants.style.left=value*-1+"px"
    plants.style.bottom=value*-.5+"px"
})