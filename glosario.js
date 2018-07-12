const searchInput = document.querySelector('.search');
const results = document.getElementById('results');
var html;


function populate() {
  html = `
  <div class="inner-wrapper">
    ${palabras.map(palabra => `<li>${palabra.ingles} - ${palabra.español}</li>`).join('')}
  </div>
`;
results.innerHTML = html;
}


function findMatches(wordToMatch, palabras) {
  return palabras.filter(palabra => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return palabra.ingles.match(regex)
  });
}


function displayMatches() {
  const matchArray = findMatches(this.value, palabras);
    if(this.value.length >= 3 ) {
      const html = matchArray.map(palabra => {
        return `
          <div class="inner-wrapper">
            <li>${palabra.ingles} - ${palabra.español}</li>
          </div>
        `;
      }).join('');
      results.innerHTML = html;
  }
  if(this.value.length < 3) {
    populate();
  }
};

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
window.addEventListener('load', populate);

