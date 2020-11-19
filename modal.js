let modal = document.querySelector('.modal');

let buttonOpen = document.querySelector('.modal__open');

let buttonClose = document.querySelector('.modal__close');

buttonOpen.addEventListener('click', () => {
  modal.classList.add('modal__visible');
});

buttonClose.addEventListener('click', () => {
  modal.classList.remove('modal__visible');
  });

window.onclick = function(event) {
      if (event.target == modal) {
      modal.classList.remove('modal__visible'); 
    }
}


