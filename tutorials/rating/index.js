const starContainer = document.getElementById('star-container');
const stars = document.querySelectorAll('.star');
let filled = 0;

starContainer.addEventListener('click', (e) => {
  const currIndex = e.target.dataset.index;
  for (let i = 0; i < filled; i++) {
    stars[i].classList.remove('star-selected');
  }

  for (let i = 0; i < currIndex; i++) {
    stars[i].classList.add('star-selected');
  }
  filled = currIndex;
});

starContainer.addEventListener('mouseover', (e) => {
  const currIndex = e.target.dataset.index;
  
  for (let i = 0; i < filled; i++) {
    stars[i].classList.remove('star-selected');
  }
  
  for (let i = 0; i < currIndex; i++) {
    stars[i].classList.add('star-selected');
  }
});

starContainer.addEventListener('mouseout', (e) => {
  const currIndex = e.target.dataset.index;
  for (let i = 0; i < filled; i++) {
    stars[i].classList.add('star-selected');
  }

  for (let i = filled; i < stars.length; i++) {
    stars[i].classList.remove('star-selected');
  }
});

const getText = (filled) => {
    
}
