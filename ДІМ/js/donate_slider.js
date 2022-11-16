var donateSlideIndex = 1;
      showdonateSlides(donateSlideIndex);
      
      function plusdonateSlides(n) {
        showdonateSlides(donateSlideIndex += n);
      }
      
      function currentdonateSlide(n) {
        showdonateSlides(donateSlideIndex = n);
      }
      
      function showdonateSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mydonateSlides");
        var dots = document.getElementsByClassName("donateDot");
        if (n > slides.length) {donateSlideIndex = 1}    
        if (n < 1) {donateSlideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[donateSlideIndex-1].style.display = "flex";  
        dots[donateSlideIndex-1].className += " active";
      }