
    
let score1 = 0
let score2 = 0
let score1EL = document.getElementById("score1-el")
console.log(score1EL)
let score2EL = document.getElementById("score2-el")
console.log(score2EL)

function btn1(){
    score1 += 1
    score1EL.textContent = score1
    console.log(score1)
}

function btn2(){
    score1 += 2
    score1EL.textContent = score1
    console.log(score1)
}

function btn3(){
    score1 += 3
    score1EL.textContent = score1
    console.log(score1)
}

function btn11(){
    score2 += 1
    score2EL.textContent = score2
    console.log(score2)
}

function btn22(){
    score2 += 2
    score2EL.textContent = score2
    console.log(score2)
}

function btn33(){
    score2 += 3
    score2EL.textContent = score2
    console.log(score2)
}

