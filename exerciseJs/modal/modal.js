const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    // grab the data-description of the parent card
    const card = button.closest(".card");
    // grab the image src
    const imgSrc = card.querySelector("img").src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // populate the modal with the new info (fix problem picture delay)
    modalInner.innerHTML = `
    <h2>${name}</h2>
  <img src="${imgSrc.replace('200', '600')}" alt="${name}"  width="600" height="600" />
  <p>${desc}</p>
`;

    modalOuter.classList.add("open");
};

function closeModal() {
    modalOuter.classList.remove('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));
modalOuter.addEventListener("click", e => {
    const isOutside = !e.target.closest('.modal-inner');
    console.log(e.target);
    console.log(isOutside);
    if (isOutside) {
        closeModal();
    }
});
window.addEventListener('keydown', event => {
    console.log(event);
    if (event.key === 'Escape') {
      closeModal();
    }
  });