let modal = document.getElementById('id__modal');

let buttonOpen = document.getElementById('id__openModal');

let buttonClose = document.getElementById('id__closeModal');

/*
buttonOpen.onclick = function() {
    modal.style.display = "block";
  }
  
buttonClose.onclick = function() {
modal.style.display = "none";
  }
*/

buttonOpen.addEventListener('click', () => {
    modal.style.display = "block";
});

buttonClose.addEventListener('click', () => {
    modal.style.display = "none";
});

window.onclick = function(event) {
      if (event.target == modal) {
    modal.style.display = "none";
    }
}
