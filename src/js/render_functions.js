import { refs } from './refs';

export const renderFunctions = response => {
  if (response.length === 1) {
    refs.cardCountry.insertAdjacentHTML(
      'beforeend',
      onMarkupCardCountry(response)
    );
    return;
  }
  refs.listCountries.insertAdjacentHTML(
    'beforeend',
    onMarkupListCountries(response)
  );
};

const onMarkupListCountries = response => {
  return response
    .map(
      ({ name, flags }) => `<li class="country-list__item">
      <img src="${flags.svg}" alt=">${flags.alt}" width='35' height='30'>
        <p class="country-list__name">${name.official}</p>
    </li>`
    )
    .join('');
};

const onMarkupCardCountry = response => {
    const languages = Object.values(response[0].languages).join(', ')
  return `<div class="country-info__title">
  <img class="country-info__flag" src="${response[0].flags.svg}" alt=">${
    response[0].flags.alt
  }" width='35' height='30'>
  <h2 class="country-info__name">${response[0].name.official}</h2>
  </div>
    <p class="country-info__capital"><b>Capital: </b>${response[0].capital}</p>
    <p class="country-info__population"><b>Population: </b>${
      response[0].population
    }</p>
    <p class="country-info__languages"><b>Languages: </b>${languages}</p>
    `;
};
