// let name = document.querySelector('#name')
// let age = document.querySelector('#age')
// let btnCast = document.querySelector('#btnCast')
// let myForm1 = document.querySelector('#myForm1')
// let display = document.querySelector('#display')

// btnCast.addEventListener('submit', (name, age,) => {
//     // alert('i was clicked')


//   if (age.value < 18 )
// })



// let name = document.querySelector('#name')
// let age = document.querySelector('#age')
// let btnCast = document.querySelector('#btnCast')
// let myForm1 = document.querySelector('#myForm1')
// let display = document.querySelector('#display')

// myForm1.addEventListener('submit', (event) => {
//        event.preventDefault()


//   if (age.value < 18 || age.value > 100){
//     display.innerHTML = `${name.value} you cannot vote this time`
//   } else {
//       display.innerHTML = `${name.value} go ahead and vote`
//   }
// } )

document.body.style.background = "purple"


// h1.addEventListener('click', () => {
//   h1.style.textDecoration = 'line-through'
// })













let btnDone = document.querySelector("#btn")
const d = new Date();
let day = d.getDay();

btnDone.addEventListener('click', show)

function show(e){
  e.preventDefault()
  if(d.getDay()==0 ||d.getDay()==6){
    alert('not available')
  }
  else{
    alert('available')
  }
}