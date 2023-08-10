// Navbar
var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("bg-dark"); // Mengubah warna ketika di scroll
  } else {
    nav.classList.remove("bg-dark");
  }
});
// Akhir Navbar

// Text Berjalan
const phrases = ["Front-End Developer", "Graphic Designer"]; // Kata-kata yang ingin di animasikan

let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Kecepatan mengetik (milidetik per karakter)
const typingTextElement = document.getElementById("typing-text");

function typeNextChar() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (!isDeleting && charIndex <= currentPhrase.length) {
    typingTextElement.innerHTML = currentPhrase.substring(0, charIndex);
    charIndex++;
    setTimeout(typeNextChar, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    typingTextElement.innerHTML = currentPhrase.substring(0, charIndex);
    charIndex--;
    setTimeout(typeNextChar, typingSpeed / 2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
    setTimeout(typeNextChar, typingSpeed);
  }
}

typeNextChar();
// Akhir Text Berjalan

// Script untuk menambahkan event listener pada menu navigasi
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
});

// Fungsi untuk menangani smooth scrolling
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  const navbarHeight = document.querySelector("nav").offsetHeight;
  const offsetTop = targetElement.getBoundingClientRect().top;
  const scrollPosition = offsetTop + window.pageYOffset - navbarHeight;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}

// Navbar Active
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Dapatkan semua elemen section
  const navLinks = document.querySelectorAll(".nav-link"); // Dapatkan semua tautan navigasi

  window.addEventListener("scroll", () => {
    // Fungsi untuk mengaktifkan tautan navigasi yang sesuai saat pengguliran
    const currentScroll = window.scrollY;
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - navbar.offsetHeight; // Sesuaikan dengan posisi yang diinginkan
      const sectionBottom = sectionTop + section.offsetHeight;
      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      } else {
        navLinks[index].classList.remove("active");
      }
    });
  });
});

// Animasi saat di scroll
const fadeElements = document.querySelectorAll(".fade-in");

function checkFade() {
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", checkFade);

// Panggil fungsi checkFade saat halaman dimuat pertama kali
window.addEventListener("load", checkFade);
