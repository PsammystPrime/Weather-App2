// import _ from 'lodash';
import './resources/styless.css';
import { loadLastSearchesFromLocalStorage } from './Console App/storage';
import { limitToTwoWords } from './resources/utility';
import { weatherSearchesStore } from './Frontend/weatherUI';

function initializePage() {
    const latestSearchesDisplay =  document.querySelector('.last-searches');
    latestSearchesDisplay.textContent = '';

    loadLastSearchesFromLocalStorage(weatherSearchesStore);
    weatherSearchesStore.forEach((weatherItem) => {
        const { temperature, formattedLocation } = weatherItem;

        const temperatureLocationHolder = document.createElement('div');
        const temperatureText = document.createElement('p');
        const locationText = document.createElement('p');

        temperatureText.textContent = `${temperature}°C`;
        locationText.textContent = limitToTwoWords(formattedLocation);

        temperatureLocationHolder.append(temperatureText, locationText);
        latestSearchesDisplay.appendChild(temperatureLocationHolder);
    });
}

// Call initializePage when the DOM is fully loaded
initializePage();