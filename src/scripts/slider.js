//Сладйер для баннера
let currentSlide = 0;
const slides = document.querySelectorAll(".banner_slider--item");
const dots = document.querySelectorAll('.dot');

const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));

const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
    init(currentSlide);
  };
  
  const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
    init(currentSlide);
  };
  
  document.querySelector(".slider-arrow-next").addEventListener('click', next);
  document.querySelector(".slider-arrow-prev").addEventListener('click', prev);

  setInterval(() => {
    next();
  }, 5000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      init(index);
      currentSlide = i;
    })
  })

  //Слайдер для продукции

  window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToScroll: 1,
  slidesToShow: 1,
  draggable: false,
  dots: 'false',
  rewind: 'true',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
       // screens greater than >= 775px
       breakpoint: 768,
       settings: {
         // Set to `auto` and provide item width to adjust to viewport
         slidesToShow: '2',
         slidesToScroll: '1',
        
      }
    },
    {
      // screens greater than >= 775px
      breakpoint: 1024,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '2',
        slidesToScroll: '1',
        
      }
    },
    {
      // screens greater than >= 775px
      breakpoint: 1440,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: '4',
        slidesToScroll: '1',
        
        
      }
      
    },
    
    // destroy(),
  ]
})

// document.querySelector('.glider').addEventListener('glider-destroy', function(event){
//   // after destroy
// });
  
  })
  