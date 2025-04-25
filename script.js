import { allProfiles } from "./profiles.js";

// LES VARIABLES : ------------------------------------------------------

// Boutons : 
const resetFilters = document.querySelector('#reset-filters');

// Zones :
const searchResults = document.querySelector('#search-results')
const moments = document.querySelector('#moments');
const searchCity = document.querySelector('#search-city');
const amountOfMoments = document.querySelector('#amount-of-moments')

// LES FONCTIONS : ------------------------------------------------------

const displayProfiles = (listOfProfiles) => {
    searchResults.innerText = '';
    let numberOfResults = 0;
    for (let x = 0; x < listOfProfiles.length; x++) {
        numberOfResults++;
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

        profileImg.src = `${listOfProfiles[x].imageUrl}`
        profileMoment.innerText = listOfProfiles[x].type;
        profileName.innerText = listOfProfiles[x].firstname;
        profileJobAndAge.innerText = `${listOfProfiles[x].job} ⸱ ${listOfProfiles[x].age} ans`;
        profileLocalisation.innerText = `${listOfProfiles[x].city} (${listOfProfiles[x].zipcode})`;
        profileDescription.innerText = listOfProfiles[x].description;
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
    if (numberOfResults < 2) {
        amountOfMoments.innerText = `${numberOfResults} moment trouvé`
    } else {
        amountOfMoments.innerText = `${numberOfResults} moments trouvés`
    }
}

const displayProfilesWithFilters = (listOfProfiles, activity) => {
    searchResults.innerText = '';
    let numberOfResults = 0;
    for (let x = 0; x < listOfProfiles.length; x++) {
        if (listOfProfiles[x].type === activity) {
            numberOfResults++;
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

            profileImg.src = `${listOfProfiles[x].imageUrl}`
            profileMoment.innerText = listOfProfiles[x].type;
            profileName.innerText = listOfProfiles[x].firstname;
            profileJobAndAge.innerText = `${listOfProfiles[x].job} ⸱ ${listOfProfiles[x].age} ans`;
            profileLocalisation.innerText = `${listOfProfiles[x].city} (${listOfProfiles[x].zipcode})`;
            profileDescription.innerText = listOfProfiles[x].description;
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
    }
    if (numberOfResults < 2) {
        amountOfMoments.innerText = `${numberOfResults} moment trouvé`
    } else {
        amountOfMoments.innerText = `${numberOfResults} moments trouvés`
    }
}
displayProfiles(allProfiles);

// LES EVENT LISTENERS : ------------------------------------------------
moments.addEventListener('change', () => {
    if (moments.value === 'all-moments') {
        displayProfiles(allProfiles);
    } else {
        displayProfilesWithFilters(allProfiles, moments.value);
    }
})
