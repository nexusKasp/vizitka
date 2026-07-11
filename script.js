// ===== Кнопка «Тема»: включает и выключает тёмный режим =====
// const themeBtn = document.getElementById('theme-btn');

// themeBtn.addEventListener('click', function () {
//   // БАГ №6: кнопка нажимается, но ничего не меняется.
//   // Этот класс не описан в style.css — посмотри, как там называется тёмная тема.
//   document.body.classList.toggle('dark-mode');
// });
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark'); // было 'dark-mode', стало 'dark'
});



// ===== Кнопка «Показать контакт»: показывает и прячет почту =====
// (Здесь спрятан БАГ №3 из index.html: id кнопки не совпадает.
//  Открой консоль браузера — F12 → Console — и прочитай ошибку.)
const contactBtn = document.getElementById('contact-btn'); // было contactBtn, стало contact-btn
const contact = document.getElementById('contact');

contactBtn.addEventListener('click', function () {
  contact.classList.toggle('hidden');
});


const likeBtn = document.getElementById('like-btn');
const likeCountSpan = document.getElementById('like-count');
let likeCount = 0;

likeBtn.addEventListener('click', () => {
  likeCount++;
  likeCountSpan.textContent = likeCount;
});
