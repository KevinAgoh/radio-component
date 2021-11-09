const stations = document.querySelector('.stations');
const radioInfos = document.querySelectorAll('.radio-text');

fetch('https://teclead.de/recruiting/radios')
.then(response => response.json())
.then((data) => {
  console.log(data.radios);
  data.radios.forEach((result) => {
    const radioStation = `<div id='radio-text'>
      <button id='btn-radio'>${result.name}</button> <p>${result.frequency}</p>
    </div>
    <div class="radio-image hidden">
      <i class="fas fa-minus-circle"></i>
      <img src="${result.image}" alt="radio station image" />
      <i class="fas fa-plus-circle"></i>
    </div>`;
    stations.insertAdjacentHTML('beforeend', radioStation);
  })
});

// example of javascript event delegation

stations.addEventListener('click', function(e) {
  const images = document.querySelectorAll('.radio-image');

  if (e.target && e.target.id == 'btn-radio') {
    images.classList.toggle('hidden');
  }
  
});