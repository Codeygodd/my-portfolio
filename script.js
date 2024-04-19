function scrollToElement(elementSelector, instance = 0) {
   
    const elements = document.querySelectorAll(elementSelector);
    
    if (elements.length > instance) {
    
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
 
    scrollToElement('.row');
});

link3.addEventListener('click', () => {
    scrollToElement('.contact-page');
});