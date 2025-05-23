import { allProfiles } from "./profiles.js";

// ---------------------------------------------------------------------- //
// LES VARIABLES : ------------------------------------------------------ //
// ---------------------------------------------------------------------- //

// Boutons : 
const searchMoment = document.querySelector('#search-zone>button')
const resetFilters = document.querySelector('#reset-filters');

// Zones :
const searchResults = document.querySelector('#search-results')
const moments = document.querySelector('#moments');
const searchCity = document.querySelector('#search-city');
const amountOfMoments = document.querySelector('#amount-of-moments')
const noResultSection = document.querySelector('#no-result-section')

// URL Search Params : 
let url = new URL(window.location.toString());
let params = new URLSearchParams(url.search);

// ---------------------------------------------------------------------- //
// LES FONCTIONS : ------------------------------------------------------ //
// ---------------------------------------------------------------------- //

// Fonction qui permet l'affichage d'une carte profil :
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

    profileButton.addEventListener('click', () => {
        console.log(`Nom de l'aîné : ${profiles.firstname} // Son moment favori : ${profiles.type}`)
    })
}

// Fonction qui affiche toutes les cartes profil : 
const displayProfiles = (listOfProfiles) => {
    searchResults.innerText = '';
    noResultSection.innerText = '';
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

// Fonction qui affiche toutes les cartes profil en fonction des paramètres de recherche : 
const displayProfilesWithFilters = (listOfProfiles, activity, city) => {
    searchResults.innerText = '';
    noResultSection.innerText = '';
    let numberOfResults = 0;
    for (let x = 0; x < listOfProfiles.length; x++) {
        if (listOfProfiles[x].type === activity) {
            if (listOfProfiles[x].city.toLowerCase() === city.toLowerCase()) {
                numberOfResults++;
                creatingProfileCards(listOfProfiles[x]);
            }
        } 
        else if (moments.value === 'all-moments') {
            if (listOfProfiles[x].city.toLowerCase() === city.toLowerCase()) {
                numberOfResults++;
                creatingProfileCards(listOfProfiles[x]);
            }
        }
        //  JE DOIS RAJOUTER UN ELSE ICI
    }
    if (numberOfResults === 0) {
        amountOfMoments.innerText = `${numberOfResults} moment trouvé`
        noResultSection.innerText = '';
        const noResultDiv = document.createElement('p');
        noResultDiv.classList.add('no-result');
        noResultDiv.innerText = `😢
        Nous sommes désolés, nous n'avons aucun résultat pour vos critères de recherche.
        Nous pouvons vous conseiller : de sélectionner "Tous les moments", 
        de vérifier que vous avez bien orthographié le nom de la ville 
        ou de refaire votre recherche dans une autre ville.`;
        noResultSection.appendChild(noResultDiv);
    }
    if (numberOfResults < 2) {
        amountOfMoments.innerText = `${numberOfResults} moment trouvé`
    } else {
        amountOfMoments.innerText = `${numberOfResults} moments trouvés`
    }
}

// Affiche dans search.html les résultats de la recherche faite dans index.html s'il y a :
if (params.get('city') != null) {
    displayProfilesWithFilters(allProfiles, params.get('moments'), params.get('city'));
} else {
    displayProfiles(allProfiles);
}

// ---------------------------------------------------------------------- //
// LES EVENT LISTENERS : ------------------------------------------------ //
// ---------------------------------------------------------------------- //

// Bouton "Rechercher 🔎" :
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

// Bouton "Réinitialiser les filtres" : 
resetFilters.addEventListener('click', () => {
    moments.value = 'all-moments';
    searchCity.value = '';
    displayProfiles(allProfiles)
})