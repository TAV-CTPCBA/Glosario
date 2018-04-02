const endpoint = 'https://gist.githubusercontent.com/marianjay/86027d7d96a06b8fc8604436ceeb7eea/raw/49efc5a05184a2ecaed6c32c06a4c8eb33612704/palabras.json';
const palabras = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => palabras.push(...data));
function findMatches(wordToMatch, palabras) {
  return palabras.filter(palabra => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return palabra.ingles.match(regex)
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, palabras);
  if(this.value.length >= 3) {
    const html = matchArray.map(palabra => {
      return `
        <div class="inner-wrapper">
          <p>${palabra.ingles}</p>
          <p>${palabra.español}</p>
        </div>
      `;
    }).join('');
    results.innerHTML = html;
  }
}

function checkInput() {
  if(searchInput.value === '') {
    results.innerHTML = '';
  }
}
const searchInput = document.querySelector('.search');
const results = document.getElementById('results');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('change', checkInput);
searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('keyup', checkInput);