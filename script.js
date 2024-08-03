const texts = ["Web Developer", "Student"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector(".typing").textContent = letter;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    setTimeout(type, 100);
  } else {
    setTimeout(type, isDeleting ? 50 : 150);
  }
})();

function toggleMenu() {
  var sideMenu = document.getElementById("side-menu");
  if (sideMenu.style.width === "250px") {
    sideMenu.style.width = "0";
  } else {
    sideMenu.style.width = "250px";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project__card');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.appendChild(modal);

  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const img = this.querySelector('img').cloneNode();
      modal.innerHTML = '';
      modal.appendChild(img);
      modal.classList.add('active');
    });
  });

  modal.addEventListener('click', function() {
    modal.classList.remove('active');
  });
});

