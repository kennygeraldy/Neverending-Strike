let currentSlide = 1;
const $slider = $(".slides");
const slideCount = $slider.children().length;
const slideTime = 5000;
const animationTime = 1500;

setInterval(function() {
    $slider.animate({
        marginLeft : '-=900px'
    } , animationTime , function() {
        currentSlide++;
        if(currentSlide === slideCount) {
           currentSlide = 1;
           $(this).css("margin-left" , "0px"); 
        }
    });;
} , slideTime);

