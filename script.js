// const slider = document.querySelector('.slider');
// const cards = document.querySelectorAll('.cards');
// const ArrowLeft = document.getElementById("prev");
// const ArrowRight = document.getElementById("next");
// console.log(cards)


document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.cards');
    const ArrowLeft = document.getElementById("prev");
    const ArrowRight = document.getElementById("next");
    const cardWidth = cards[0].offsetWidth;
    const numCards = cards.length;
    const margin = 20;
    let currentIndex = 0;
  
    function showCard(index) {
      if (index >= 0 && index < numCards) {
        currentIndex = index;
        // slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        slider.style.transform = `translateX(${-currentIndex * (cardWidth + margin)}px)`;
      }
    }
  

    function nextCard() {
        if (currentIndex < numCards - 2) {
          showCard(currentIndex + 1);
        }
      }
    
      function prevCard() {
        if (currentIndex > 0) {
          showCard(currentIndex - 1);
        }
      }

   

    ArrowRight.addEventListener("click",()=>{
        nextCard()
    })
    ArrowLeft.addEventListener("click",()=>{
       prevCard()
    })
  
  });
  