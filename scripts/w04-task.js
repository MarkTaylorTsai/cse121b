/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Mark Tsai',
    photo : '/cse121b/images/59379.jpg',
    favoriteFoods : [
        'Hot Pot',
        'Steak'
    ],
    hobbies : ['Coding', 'Watching movies', 'Learning English'],
    placesLived : []
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'New Taipei City',
        length: '20 years'
    },
    {
        place: 'YunLin County',
        length: '3 months'
    },
    {
        place: 'Australia',
        length: '10 months'
    }
)

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li')
    li.textContent = food
    document.querySelector('#favorite-foods').appendChild(li)
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li')
    li.textContent = hobby
    document.querySelector('#hobbies').appendChild(li)
})

/* Places Lived DataList */
myProfile.placesLived.forEach(placeInfo => {
    let dt = document.createElement('dt')
    dt.textContent = placeInfo.place
    let dd = document.createElement('dd')
    dd.textContent = placeInfo.length

    let dl = document.querySelector('#places-lived')

    dl.appendChild(dt)
    dl.appendChild(dd)
})

