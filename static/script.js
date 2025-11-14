// Make all envelopes clickable (works for both envelope1 and envelope2)
document.addEventListener('DOMContentLoaded', () => {
  const envelopes = document.querySelectorAll('.envelope');
  envelopes.forEach((envelope) => {
    envelope.addEventListener('click', () => {
      envelope.classList.toggle('open');
    });
  });
});

// Floating hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 600);

// Reveal the 2nd section smoothly when scrolling
window.addEventListener('scroll', function() {
  const second = document.querySelector('.second');
  if (!second) return; // safety check

  const rect = second.getBoundingClientRect();
  if (rect.top < window.innerHeight - 150) {
    second.classList.add('visible');
  }
});
