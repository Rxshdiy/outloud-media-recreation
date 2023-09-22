const counters = document.querySelectorAll(".num");





function countingFunction(){
  counters.forEach(counter => {
    let initialScore = 0;
    let finalScore = counter.dataset.count;
  
    const counting = setInterval(updateCounting, 15)
  
    function updateCounting(){
      initialScore = initialScore + 1;
      
      if(finalScore == 300){
        initialScore = initialScore + 2;
        counter.innerText = '+' + initialScore + 'M';
      }
      else if(finalScore == 100){
        initialScore = initialScore + 1;
        counter.innerText = '+' + initialScore + '%';
      }
  
      else if(finalScore == 400){
        initialScore = initialScore + 4;
        counter.innerText = '+' + initialScore + '%'
      }
  
      else if(finalScore == 150){
        initialScore = initialScore + 1;
        counter.innerText = '+' + initialScore + 'M'
      }
  
      if(initialScore >= finalScore){
        clearInterval(counting)
      }
    }
  }
    
    )
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        console.log('Its intersecting')
        countingFunction()
        observer.unobserve(entry.target);
      }
    })
  }, {threshold: 0.5})

  

counters.forEach(
  (element) => observer.observe(element)
)

.observer.unobserve(counters)
