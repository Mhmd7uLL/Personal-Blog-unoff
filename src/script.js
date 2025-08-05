

//    BURGER BAR TOGGLE AND ANIMATION     //
const toggle = document.getElementById('burger-bar-icon');
const menu = document.getElementById('burger-bar-menu');
const dropdown = document.getElementById('burger-bar');

let menuOpen = false;

toggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menu.classList.toggle('show', menuOpen);
    toggle.classList.toggle('rotate', menuOpen);

    // Ubah ikon jika kamu mau pakai gambar berbeda
    toggle.src = menuOpen ? 'src/assets/burgerbar-icon-active.png' : 'src/assets/burgerbar-icon-unactive.png';
});

  // Tutup dropdown saat klik di luar
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      menu.classList.remove('show');
      toggle.classList.remove('rotate');
      toggle.src = 'src/assets/burgerbar-icon-unactive.png';
      menuOpen = false;
    }
});


//    SCROLL ANIMATION     //
const sections = document.querySelectorAll('.title, .inner-content');
const innerContents = document.querySelectorAll('.title1, .inner-content-project');
const educationSection = document.querySelectorAll('.education');
let lastScrollY = window.scrollY;

function handleScroll() {

    // title and inner-content class animation
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY + window.innerHeight > sectionTop + sectionHeight / 2) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });


    // title1 and innerContent-project class animation

    innerContents.forEach(innerContent => {
        const contentTop = innerContent.getBoundingClientRect().top + window.scrollY;
        const contentHeight = innerContent.offsetHeight;

        if (window.scrollY + window.innerHeight > contentTop + contentHeight / 2) {
            innerContent.classList.add('show');
        } else {
            innerContent.classList.remove('show');
        }
    });

    // education class animation
    educationSection.forEach(education => {
        const educationTop = education.getBoundingClientRect().top + window.scrollY;
        const educationHeight = education.offsetHeight;

        if (window.scrollY + window.innerHeight > educationTop + educationHeight / 2) {
            education.classList.add('show');
        } else {
            education.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);
