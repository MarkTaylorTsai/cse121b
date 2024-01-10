/* W02-Task - Profile Home Page */
const fullName = 'Mark Tsai'
const currentYear = 2024
const profilePicture = '../images/59379.jpg'

const nameElement = document.getElementById('name')
const yearElement = document.querySelector('#year')
const imageElement = document.querySelector('img')

nameElement.innerHTML = `<strong>${fullName}</strong>`
imageElement.setAttribute('src', profilePicture)

const favoriteFood = ['Hot pots', 'Stake', 'Sasimi']

const foodElement = document.getElementById('food')
favoriteFood.forEach(food => {
    foodElement.innerHTML += `${food}, `
})

let anoFavFood = 'Curry'
favoriteFood.push(anoFavFood) 
foodElement.innerHTML += '<br>' + favoriteFood.join(', ') + '<br> '

favoriteFood.shift()
foodElement.innerHTML += favoriteFood.join(', ') + '<br> '

favoriteFood.pop()
foodElement.innerHTML += favoriteFood.join(', ') + ''

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */




/* Step 3 - Element Variables */





/* Step 4 - Adding Content */






/* Step 5 - Array */






