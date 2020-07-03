// Define the modals

var modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


const menuIcon = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle("change");
})