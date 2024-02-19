/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const image = document.createElement('img');
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `Image of ${temple.location} temple`);

        article.appendChild(name);
        article.appendChild(image);

        templesElement.appendChild(article);
    })
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    } catch(error) {
        console.error('Fetch.error: ', error )
    }
};


/* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* filterTemples Function */
const filterTemples = (filterCriteria) => {
    reset();
    let filteredTemples;

    switch (filterCriteria) {
        case 'utah':
            filteredTemples = templeList.filter(temple => temple.location.includes("Utah"));
            break;
        case 'notutah':
            filteredTemples = templeList.filter(temple => !temple.location.includes("Utah"));
            break;
        case 'older':
            filteredTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case 'all':
            default:
                filteredTemples = templeList;
                break;
    }

    displayTemples(filteredTemples);
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();