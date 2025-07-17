const hamburgerBtn = document.querySelector('.hamburger-button');
const faqsTag = document.querySelectorAll('.faqs-tag');

const faqsMessage = document.querySelectorAll('.faqs-message');
const icons = document.querySelectorAll('.fa-plus')



hamburgerBtn.addEventListener('click', () => {
  const nav= document.querySelector('nav');

  nav.classList.toggle('swipe-right');
})

let matching;
faqsTag.forEach((Tag, index) => {
  Tag.addEventListener('click', () => {
     let match = index;
   
    
   faqsMessage.forEach((message, index) => {
    if (match === index ) {
      message.classList.toggle('show')
    }
   })

    icons.forEach((icon,index) => {
      if (match === index) {
        icon.classList.toggle('fa-minus')
       
      }
    });

   
    })
   
  
})

 //faqsMessage.classList.toggle('show')