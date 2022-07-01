let count =0
let a = document.getElementById("a")
let b = document.getElementById("b")


function increment(){
    count += 1
    a.textContent = count 

}

function save(){
    c = count + " - " 
    b.textContent += c
    count = 0
    a.textContent = 0
}

