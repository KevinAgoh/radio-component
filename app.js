const stations = document.querySelector('.radio');

fetch('https://teclead.de/recruiting/radios')
  .then(response => response.json())
  .then((data) => {
    data.radios.forEach((result) => {
      const radio = `<div class='radio-text'>
        <p>${result.name} ${result.frequency}</p>
      </div>`;
      stations.insertAdjacentHTML('beforeend', radio)
    })
    console.log(data.radios);
  });