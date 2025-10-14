const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

// floating hearts
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

window.addEventListener('scroll', function() {
  const second = document.querySelector('.second');
  const rect = second.getBoundingClientRect();

  if (rect.top < window.innerHeight - 150) {
    second.classList.add('visible');
  }
});
