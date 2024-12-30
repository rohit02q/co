// Get theme toggle elements
const themeToggle = document.getElementById('switch-theme');
const body = document.body;

// Load saved theme from localStorage
let savedTheme = localStorage.getItem('theme');

// Set the theme on page load
if (!savedTheme) {
  savedTheme = 'light-theme'; // Default theme
  localStorage.setItem('theme', savedTheme);
}
body.classList.add(savedTheme);

// Synchronize the checkbox state with the saved theme
if (savedTheme === 'dark-theme') {
  themeToggle.checked = true;
} else {
  themeToggle.checked = false;
}

// Add event listener for theme toggle
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});







/*===== MENU SHOW =====*/
document.getElementById('form').addEventListener("click",() => {
    alert("Fill this form")

    window.location.href="https://rohit02q.github.io/Rohit/DataForm.html"
     target="_blank"
})
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


document.getElementById('contact2').addEventListener("click",() =>{

    window.location.href="mailto:rohit021108@gmail.com?subject=Hello%20Rohit&body=I%20have%20a%20doubt"
    target="_blank"
}
)
document.getElementById('call').addEventListener("click",() => {
    window.location.href="https://wa.me/919199594185?text=Hello%20Rohit,"
     target="_blank"
})
 

//using internet::

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 


