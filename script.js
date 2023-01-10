var b1 = window.document.getElementById('b1')
var b2 = window.document.getElementById('b2')
var b3 = window.document.getElementById('b3')
var b4 = window.document.getElementById('b4')
var b6 = window.document.getElementById('b6')
var b7 = window.document.getElementById('b7')
var b8 = window.document.getElementById('b8')
var b9 = window.document.getElementById('b9')
var texto = window.document.getElementById('texto')

b2.addEventListener('click', clicarnab2)
b4.addEventListener('click', clicarnab4)
b6.addEventListener('click', clicarnab6)
b8.addEventListener('click', clicarnab8)
b1.addEventListener('click', clicarnab1)
b3.addEventListener('click', clicarnab3)
b7.addEventListener('click', clicarnab7)
b9.addEventListener('click', clicarnab9)


function clicarnab2() {
  b1.style.display = 'none'
  b2.style.display = 'none'
  b3.style.display = 'none'
  b4.style.display = 'flex'
  b6.style.display = 'none'
  b7.style.display = 'none'
  b8.style.display = 'none'
  b9.style.display = 'none'
}

function clicarnab4() {
  b1.style.display = 'none'
  b2.style.display = 'none'
  b3.style.display = 'none'
  b4.style.display = 'none'
  b6.style.display = 'flex'
  b7.style.display = 'none'
  b8.style.display = 'none'
  b9.style.display = 'none'
}

function clicarnab6() {
  b1.style.display = 'none'
  b2.style.display = 'none'
  b3.style.display = 'none'
  b4.style.display = 'none'
  b6.style.display = 'none'
  b7.style.display = 'none'
  b8.style.display = 'flex'
  b9.style.display = 'none'
}

function clicarnab8() {
  b1.style.display = 'flex'
  b2.style.display = 'none'
  b3.style.display = 'none'
  b4.style.display = 'none'
  b6.style.display = 'none'
  b7.style.display = 'none'
  b8.style.display = 'none'
  b9.style.display = 'none'
}

function clicarnab1() {
  b1.style.display = 'none'
  b2.style.display = 'none'
  b3.style.display = 'flex'
  b4.style.display = 'none'
  b6.style.display = 'none'
  b7.style.display = 'none'
  b8.style.display = 'none'
  b9.style.display = 'none'
}

function clicarnab3() {
  b1.style.display = 'none'
  b2.style.display = 'none'
  b3.style.display = 'none'
  b4.style.display = 'none'
  b6.style.display = 'none'
  b7.style.display = 'flex'
  b8.style.display = 'none'
  b9.style.display = 'none'
}

function clicarnab7() {
  b1.style.display = 'none'
  b2.style.display = 'none'
  b3.style.display = 'none'
  b4.style.display = 'none'
  b6.style.display = 'none'
  b7.style.display = 'none'
  b8.style.display = 'none'
  b9.style.display = 'flex'
}

function clicarnab9() {
  b1.style.display = 'none'
  b2.style.display = 'none'
  b3.style.display = 'none'
  b4.style.display = 'none'
  b6.style.display = 'none'
  b7.style.display = 'none'
  b8.style.display = 'none'
  b9.style.display = 'none'
  texto.innerHTML = "Eu te amo D+! Clica no sim <3 <3 <3 <3 <3 <3"
}