//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll Selection
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        
        if(top >= offset && top < offset+height){
            // active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });   
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this 
        else{
            sec.classList.remove('show-animate');
        }
    });
    // sticy header
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
function validateForms(event){
    // to prevent the form from submitting
    event.preventDefault();
    
    let firstName = document.forms['myForm']['firstName'].value;
    let lastName = document.forms['myForm']['lastName'].value;
    let email = document.forms['myForm']['email'].value;
    let mobile = document.forms['myForm']['mobile'].value;

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let mobilePattern = /^[0-9]+$/;

    if(!namePattern.test(firstName)){
        alert("First name must contain only letters,Please try again!!!");
        window.location.replace('./index.html');
    }
    if(!namePattern.test(lastName)){
        alert("Last name must contain only letters,Please try again!!!");
        window.location.replace('./index.html');
    }
    if(!mobilePattern.test(mobile)){
        alert("Mobile number must a number");
        window.location.replace('./index.html');
    }
    if(!emailPattern.test(email)){
        alert("Email must contain @gmail.com");
        window.location.replace('./index.html');
    }

    return true;
}

