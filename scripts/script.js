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