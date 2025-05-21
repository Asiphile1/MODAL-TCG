'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');


const modalContents = [
  {
    heading: "Modal 1 Heading",
    paragraph: "You lost the lion is feasting on you! But don't worry, you can try another door.",
    image: "https://t4.ftcdn.net/jpg/11/06/51/53/360_F_1106515383_9CQYK7BrNroxvY1QFgArr8kTS57zs2Pj.jpg ",
  },
  {
    heading: "Modal 2 Heading",
    paragraph: "A glass of water, Thats it.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZZPRAraqqJt3Ez7soxSaYeLm3u_PgtA-ug&s",
  },
  {
    heading: "Modal 3 Heading",
    paragraph: "Third times a charm, here's your pot of gold!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLm3YLA4b3fd9TtGGK0pL-M5bEEXpvp4xjA&s",
  },
];


const openModal = (index) => {
  const content = modalContents[index];
  modal.innerHTML = `
    <button class="close-modal">&times;</button>
    <h1>${content.heading}</h1>
    <p>${content.paragraph}</p>
    <img src="${content.image}" alt="Modal image" style="width:100%; margin-top:2rem; border-radius:0.5rem;">
  `;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  
  document.querySelector('.close-modal').addEventListener('click', closeModal);
};


const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


showModalBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => openModal(index));
});


overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
