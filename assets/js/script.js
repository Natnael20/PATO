/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*for bigger screens*/
function openNav() {
  document.getElementById("mySidenav").classList.add("open");
}

function closeNav() {
  document.getElementById("mySidenav").classList.remove("open");
}

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navigation-container");
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    slides[index].classList.add('active');
    slides[(index + 1) % slides.length].classList.add('next');
    slides[(index - 1 + slides.length) % slides.length].classList.add('prev');

    // Highlight active dot
    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[index].classList.add('active-dot');
}

// Attach button events
document.querySelector('.btn.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.btn.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Attach dot events
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);

// Auto advance
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Select all timer elements
// Set target date for event
// Select all timer elements in all slides
const countdownDate = new Date("2025-12-31T23:59:59").getTime();

const slidesTimers = document.querySelectorAll(".slide");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    slidesTimers.forEach(slide => {
        const daysEl = slide.querySelector(".Days");
        const hoursEl = slide.querySelector(".hours");
        const minutesEl = slide.querySelector(".mintues");
        const secondsEl = slide.querySelector(".seconds");

        daysEl.innerHTML = `<span>${days}</span><small>Days</small>`;
        hoursEl.innerHTML = `<span>${hours}</span><small>Hours</small>`;
        minutesEl.innerHTML = `<span>${minutes}</span><small>Minutes</small>`;
        secondsEl.innerHTML = `<span>${seconds}</span><small>Seconds</small>`;
    });
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); 

const modal = document.getElementById('videoModal');
const iframe = document.getElementById('youtubeVideo');
const playBtn = document.querySelector('.play-btn');
const closeBtn = document.querySelector('.close-btn');

// Replace VIDEO_ID with your YouTube video ID
const videoURL = 'https://www.youtube.com/embed/5k1hSu2gdKE?autoplay=1';

playBtn.addEventListener('click', () => {
    iframe.src = videoURL;
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    iframe.src = ''; // stop the video
    modal.style.display = 'none';
});

// Close modal if clicking outside video
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        iframe.src = '';
        modal.style.display = 'none';
    }
});

function fixChromeVH() {
  const isChrome = /Chrome/.test(navigator.userAgent) && !/Edg/.test(navigator.userAgent);
  if (isChrome) {
    document.querySelector(".reservation-container").style.height = window.innerHeight + "px";
  }
}

fixChromeVH();
window.addEventListener("resize", fixChromeVH);
