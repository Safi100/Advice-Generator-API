const dice = document.querySelector(".dice")
const dice_button = document.querySelector(".dice-container")

dice_button.addEventListener('click', RotateDice)

function RotateDice(){
    let advice_number = Math.floor(Math.random() * 224) + 1
    console.log(advice_number)
    fetch(`https://api.adviceslip.com/advice/${advice_number}`)
    .then(res => res.json())
    .then(data =>{
         console.log(data.slip)
         document.querySelector('.advice_number').innerHTML = `Advice # ${data.slip.id}`
         document.querySelector('.quotes').innerHTML = `${data.slip.advice}`
    })
    .catch(err => console.log(err))
    dice.classList.toggle('roll')
}
RotateDice()