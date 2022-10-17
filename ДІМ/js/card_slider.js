var cardSlideIndex = 1;
      showCardSlides(cardSlideIndex);
      
      function plusCardSlides(n) {
        showCardSlides(cardSlideIndex += n);
      }
      
      function currentCardSlide(n) {
        showCardSlides(cardSlideIndex = n);
      }
      
      function showCardSlides(n) {
        var i;
        var slides = document.getElementsByClassName("myCardSlides");
        var dots = document.getElementsByClassName("cardDot");
        if (n > slides.length) {cardSlideIndex = 1}    
        if (n < 1) {cardSlideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[cardSlideIndex-1].style.display = "flex";  
        dots[cardSlideIndex-1].className += " active";
      }