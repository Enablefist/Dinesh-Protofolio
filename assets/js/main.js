// /*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }
// showMenu('nav-toggle','nav-menu')

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//     const scrollDown = window.scrollY

//   sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//             sectionsClass.classList.add('active-link')
//         }else{
//             sectionsClass.classList.remove('active-link')
//         }                                                    
//     })
// }
// window.addEventListener('scroll', scrollActive)

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
// //     reset: true
// });

// sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
// sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 
// sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
// sr.reveal('.experience__data, .experience__img',{interval: 200});
// sr.reveal('.projects__data, .projects__img',{interval: 200});
// sr.reveal('.work__item', { 
//     interval: 200,
//     origin: 'bottom'
// });

// /* Professional Experience */
// sr.reveal('.experience__item', { 
//     interval: 200,
//     origin: 'left'
// });
// <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
// /*===== CONTACT FORM EMAILJS =====*/
// (function () {
//   emailjs.init("YOUR_PUBLIC_KEY"); // replace with your public key
// })();

// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', function (e) {
//   e.preventDefault(); // prevent page reload

//   emailjs.sendForm(
//     'YOUR_SERVICE_ID',   // service ID
//     'YOUR_TEMPLATE_ID',  // template ID
//     this
//   )
//   .then(() => {
//     alert('Message sent successfully ✅');
//     contactForm.reset(); // refresh form
//   })
//   .catch(() => {
//     alert('Failed to send message ❌');
//   });
// });


// /* ===== SCROLL REVEAL ANIMATION ===== */
// const revealElements = document.querySelectorAll('.reveal');

// const revealOnScroll = () => {
//   const windowHeight = window.innerHeight;

//   revealElements.forEach(el => {
//     const elementTop = el.getBoundingClientRect().top;
//     const revealPoint = 100;

//     if (elementTop < windowHeight - revealPoint) {
//       el.classList.add('active');
//     }
//   });
// };
// /* Home */
// sr.reveal('.home__data, .home__img, .home__social-icon', { interval: 200 });

// /* About */
// sr.reveal('.about__img, .about__subtitle, .about__text', { interval: 200 });

// /* Skills */
// sr.reveal('.skills__data, .skills__img', { interval: 200 });

// /* Projects (WORK – TEXT BASED) */
// sr.reveal('.work__item', { 
//     interval: 200,
//     origin: 'bottom'
// });

// /* Professional Experience */
// sr.reveal('.experience__item', { 
//     interval: 200,
//     origin: 'left'
// });

// /* Contact */
// sr.reveal('.contact__input', { interval: 200 });

// sr.reveal('.experience__item', {
//   interval: 150,
//   origin: 'left',
//   distance: '40px',
//   duration: 1000
// });

// sr.reveal('.work__item', {
//   interval: 150,
//   origin: 'bottom',
//   distance: '30px',
//   duration: 900
// });
// sr.reveal('.work__item', { interval: 200 });
// /*===== DARK LIGHT THEME =====
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'  
// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')          
// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
// // We validate if the user previously chose a topic
// if (selectedTheme) {
//     // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
// }
// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })  
// /*===== REDUCE THE SIZE AND PRINT ON AN A4 SHEET =====
// function scaleCV(){
//     document.body.classList.add('scale-cv')
// }

// /*===== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED =====
// function removeScale(){
//     document.body.classList.remove('scale-cv')
// }
// /*===== PRINT THE CV =====
// function printCV(){
//     scaleCV()
//     window.print()
//     removeScale()
// }
// /*===== BUTTON PRINT =====
// const printButton = document.getElementById('print-button')
// printButton.addEventListener('click', printCV)
// */
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link =>
  link.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.remove("show");
  })
);

/*===== SCROLL ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add("active-link");
    } else {
      link?.classList.remove("active-link");
    }
  });
});

/*===== SCROLL REVEAL =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  reset: false
});

/* Home */
sr.reveal(".home__data, .home__img, .home__social-icon", { interval: 200 });

/* About */
sr.reveal(".about__img, .about__subtitle, .about__text", { interval: 200 });

/* Skills */
sr.reveal(".skills__data, .skills__img", { interval: 150 });

/* Projects */
sr.reveal(".work__item", {
  interval: 150,
  origin: "bottom"
});

/* Experience */
sr.reveal(".experience__item", {
  interval: 150,
  origin: "left"
});

/* Contact */
sr.reveal(".contact__input, .contact__button", { interval: 150 });

/*===== EMAILJS =====*/
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const form = document.querySelector(".contact__form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("Message sent successfully ✅");
      form.reset();
    })
    .catch(() => {
      alert("Message failed ❌");
    });
});