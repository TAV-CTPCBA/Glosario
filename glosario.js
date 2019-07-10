  const searchInput = document.querySelector('.search');
  const results = document.getElementById('results');
  var html;


  function populate() {
    html = `
      <tr class="header">
        <th>Inglés</th>
        <th>Neutro</th>
        <th>Variaciones</th>
      </tr>
        ${palabras.map(palabra => `
        <tr>
        <td>${palabra.ingles}</td>
        <td>${palabra.neutro}</td>
        <td>${palabra.variaciones}</td>
        </tr>`).join('')}
`;
  results.innerHTML = html;
  }


  function findMatches(wordToMatch, palabras) {
    return palabras.filter(palabra => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return palabra.ingles.match(regex) || palabra.español.match(regex) || palabra.otras.match(regex)
    });
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, palabras);
      if(this.value.length >= 1 && matchArray.length >= 1) {
        const html = `          <tr class="header">
        <th>Inglés</th>
        <th>Neutro</th>
        <th>Variaciones</th>
      </tr> ${matchArray.map(palabra => {
          return `
          <tr>
            <td> ${palabra.ingles} </td>
            <td> ${palabra.neutro} </td>
            <td> ${palabra.variaciones}</td>
          </tr>
          `;
        }).join('')}`;
        results.innerHTML = html;
    }
    if(this.value.length < 1) {
      populate();
    }
  };

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
  window.addEventListener('load', populate);

