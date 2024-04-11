let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        const slides = document.querySelectorAll(".carousel ul li");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
      }


      document.addEventListener("DOMContentLoaded", function() {
        var lazyloadImages = document.querySelectorAll(".lazyload");
    
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove("lazyload");
                    observer.unobserve(img);
                }
            });
        });
    
        lazyloadImages.forEach(function(img) {
            observer.observe(img);
        });
    });
    