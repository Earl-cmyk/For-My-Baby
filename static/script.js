document.addEventListener("DOMContentLoaded", () => {

  /* ===== ENVELOPE OPEN/CLOSE ===== */
  const envelopes = document.querySelectorAll(".envelope");
  envelopes.forEach((envelope) => {
    envelope.addEventListener("click", () => {
      envelope.classList.toggle("open");
    });
  });

  /* ===== FLOATING HEARTS ===== */
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    const duration = 4 + Math.random() * 3;
    heart.style.animationDuration = duration + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }
  setInterval(createHeart, 600);

  /* ===== FADE-IN OBSERVER ===== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  const second = document.querySelector(".second");
  const scrollSection = document.querySelector(".scroll-section");

  if (second) observer.observe(second);
  if (scrollSection) observer.observe(scrollSection);

  /* ===== SCROLL BUTTON OPEN ===== */
  const openScrollBtn = document.getElementById('openScrollBtn');
  if (openScrollBtn && scrollSection) {
    openScrollBtn.addEventListener('click', () => {
      scrollSection.classList.add('open', 'visible'); // visible ensures fade-in
      openScrollBtn.style.display = 'none'; // hide button after opening
    });
  }

/* ===== POKÉMON BOX WITH TELEPORTING NO BUTTON ===== */
const pokemonBox = document.getElementById('pokemonBox');
const dogContainer = document.getElementById('dogContainer');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

if (yesBtn && noBtn && pokemonBox && dogContainer) {
  yesBtn.addEventListener('click', () => {
    pokemonBox.style.display = 'none';
    dogContainer.style.display = 'block';
  });

  noBtn.addEventListener('click', () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Add smooth transition
    noBtn.style.position = 'absolute';
    noBtn.style.transition = 'all 0.3s ease';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
  });
}

});
