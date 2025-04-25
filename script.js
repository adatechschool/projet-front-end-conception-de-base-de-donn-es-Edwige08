import { allProfiles } from "./profiles.js";

// LES VARIABLES : ------------------------------------------------------

// Boutons : 
const searchMoment = document.querySelector('#search-zone>button')
const resetFilters = document.querySelector('#reset-filters');

// Zones :
const searchResults = document.querySelector('#search-results')
const moments = document.querySelector('#moments');
const searchCity = document.querySelector('#search-city');
const amountOfMoments = document.querySelector('#amount-of-moments')

// LES FONCTIONS : ------------------------------------------------------
const creatingProfileCards = (profiles) => {
    const profileArticle = document.createElement('article');
    const profileImgDiv = document.createElement('div');
    const profileImg = document.createElement('img');
    const profileDetailsDiv = document.createElement('div');
    const profileMoment = document.createElement('p');
    const profileName = document.createElement('p');
    const profileJobAndAge = document.createElement('p');
    const profileLocalisation = document.createElement('p');
    const profileDescription = document.createElement('p');
    const profileButton = document.createElement('button');

    profileArticle.classList.add('profile-article');
    profileImgDiv.classList.add('profile-img-div');
    profileImg.classList.add('profile-img');
    profileDetailsDiv.classList.add('profile-details-div')
    profileMoment.classList.add('profile-moment');
    profileName.classList.add('profile-name');
    profileJobAndAge.classList.add('profile-job-age');
    profileLocalisation.classList.add('profile-city');
    profileDescription.classList.add('profile-description');
    profileButton.classList.add('btn-primary');

    profileImg.src = `${profiles.imageUrl}`
    profileMoment.innerText = profiles.type;
    profileName.innerText = profiles.firstname;
    profileJobAndAge.innerText = `${profiles.job} ⸱ ${profiles.age} ans`;
    profileLocalisation.innerText = `${profiles.city} (${profiles.zipcode})`;
    profileDescription.innerText = profiles.description;
    profileButton.innerText = 'Programmer un moment'

    profileImgDiv.appendChild(profileImg)
    profileArticle.appendChild(profileImgDiv);
    profileDetailsDiv.appendChild(profileMoment);
    profileDetailsDiv.appendChild(profileName);
    profileDetailsDiv.appendChild(profileJobAndAge);
    profileDetailsDiv.appendChild(profileLocalisation);
    profileDetailsDiv.appendChild(profileDescription);
    profileArticle.appendChild(profileDetailsDiv);
    profileArticle.appendChild(profileButton);
    searchResults.appendChild(profileArticle);
}
const displayProfiles = (listOfProfiles) => {
    searchResults.innerText = '';
    let numberOfResults = 0;
    for (let x = 0; x < listOfProfiles.length; x++) {
        numberOfResults++;
        creatingProfileCards(listOfProfiles[x]);
    }
    if (numberOfResults < 2) {
        amountOfMoments.innerText = `${numberOfResults} moment trouvé`
    } else {
        amountOfMoments.innerText = `${numberOfResults} moments trouvés`
    }
}

const displayProfilesWithFilters = (listOfProfiles, activity, city) => {
    searchResults.innerText = '';
    let numberOfResults = 0;
    for (let x = 0; x < listOfProfiles.length; x++) {
        if (listOfProfiles[x].type === activity) {
            if (listOfProfiles[x].city.toLowerCase() === city.toLowerCase()) {
                numberOfResults++;
                creatingProfileCards(listOfProfiles[x]);
            }
        } 
        if (moments.value === 'all-moments') {
            if (listOfProfiles[x].city.toLowerCase() === city.toLowerCase()) {
                numberOfResults++;
                creatingProfileCards(listOfProfiles[x]);
            }
        }
    }
    if (numberOfResults === 0) {
        amountOfMoments.innerText = `${numberOfResults} moment trouvé`
        searchResults.innerText = '';
        const noResultDiv = document.createElement('p');
        noResultDiv.classList.add('no-result');
        noResultDiv.innerText = "Nous sommes désolés, mais nous n'avons pas de résultat pour la ville que vous avez entrée.";
        searchResults.appendChild(noResultDiv);
    }
    if (numberOfResults < 2) {
        amountOfMoments.innerText = `${numberOfResults} moment trouvé`
    } else {
        amountOfMoments.innerText = `${numberOfResults} moments trouvés`
    }
}
displayProfiles(allProfiles);

// LES EVENT LISTENERS : ------------------------------------------------
searchMoment.addEventListener('click', (event) => {
    event.preventDefault();
    if (searchCity.value === '') {
        searchCity.focus();
        searchCity.style.background = ' #ffc412'
    } else {
        searchCity.style.background = ''
        displayProfilesWithFilters(allProfiles, moments.value, searchCity.value);
    }
})

resetFilters.addEventListener('click', () => {
    moments.value = 'all-moments';
    searchCity.value = '';
    displayProfiles(allProfiles)
})