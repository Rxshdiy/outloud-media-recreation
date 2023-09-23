const typingText = document.querySelector('#first-typing-text');

const textLoad = () => {
  setTimeout(() => {
    typingText.textContent = "We Are Outloud Media."
  }, 0)
  setTimeout(() => {
    typingText.textContent = "We Grow Your Audience."
  }, 4000)
  setTimeout(() => {
    typingText.textContent = "We Maximize Revenue."
  }, 8000)
  setTimeout(() => {
    typingText.textContent = "We Unlock Your Potential."
  }, 12000)
}

textLoad();
setInterval(textLoad, 16000)


//  when clicking a button, the button will link to another html page

// Path: contact.html

const contactButton = document.querySelector('.nav-button');

contactButton.addEventListener('click', () => {
  window.location.href = "contact.html";
})

// do the same with another button

const contactButton2 = document.querySelector('.footer-button');

contactButton2.addEventListener('click', () => {
  window.location.href = "contact.html";
})