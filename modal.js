const modal = document.querySelector('.modal');

const buttonOpen = document.querySelector('.modal__open');

const buttonClose = document.querySelector('.modal__close');

const buttonGreen = document.querySelector('.btn--green');

const buttonRed = document.querySelector('.btn--red');

buttonOpen.addEventListener('click', () => {
  modal.classList.add('modal__visible');
  buttonClose.focus();
});

buttonClose.addEventListener('click', () => {
  modal.classList.remove('modal__visible');
  });

buttonGreen.addEventListener('click', () => {
    modal.classList.remove('modal__visible');
});

buttonRed.addEventListener('click', () => {
    modal.classList.remove('modal__visible');
});

window.onclick = function(event) {
      if (event.target == modal) {
      modal.classList.remove('modal__visible'); 
    }
}


