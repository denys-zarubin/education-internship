;(function(){

    // IMG ANIMATION
    let comp_img = document.querySelector('.company-img');
    setTimeout(function(){
        comp_img.classList.add('full-height')
    }, 100);

    // USER PANEL
    let user_ic = document.querySelector('.user-icon'),
        user_inf = document.querySelector('.user-info');
    user_ic.addEventListener('click', () => {
        menu.classList.remove('active');
        user_inf.classList.toggle('visible');
    });

    // BURGER
    let burger = document.querySelector('.burger-btn'),
        menu = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=> {
        user_inf.classList.remove('visible');
        menu.classList.toggle('active');

    });

    // SEARCH
    let search = document.querySelector('.search'),
        input = document.querySelector('.global-search'),
        overlay = document.querySelector('.overlay');
    search.addEventListener('click', ()=> {
        overlay.classList.add('opened')
    })
    overlay.addEventListener('click', (e)=> overlay.classList.remove('opened'));
    input.addEventListener('click', (e)=> e.stopPropagation());


    // CAROUSEL
    window.addEventListener('resize', function(){
        carousel();
    });
    function carousel(){
        let prev = document.querySelector('.nav.prev'),
            next = document.querySelector('.nav.next'),
            allList = document.querySelector('.slides-all'),
            container = document.querySelector('.carousel-container')
            slides = document.querySelectorAll('.slide'),
            amountSlides = 4,
            index = amountSlides,
            position = 0;

        if(window.screen.width < 600){
            amountSlides = 1;
            container.style.width = '240px';

        }else if(window.screen.width < 840){
            amountSlides = 2;
            container.style.width = '490px';

        }else if(window.screen.width < 1200){
            amountSlides = 3;
            container.style.width = '746px';
        }else{
            amountSlides = 4;
            container.style.width = '100%';
        }
        prev.addEventListener('click', () =>{

            index--;
            if (index < amountSlides){
                index = slides.length;
                position = (slides.length-amountSlides) * (-255);
                allList.style.left = `${position}px`;
            }else{
                position += 255
                allList.style.left = `${position}px`
            }


        })
        next.addEventListener('click', () =>{

            index++;
            if (index > slides.length){
                index = amountSlides;
                position = 0;
                allList.style.left = `${position}px`;
            }else{
                position += -255
                allList.style.left = `${position}px`
            }

        })
    }

    carousel();

    //  HEADER FIXED
    let previosPos = 0,
        header = document.querySelector('.header'),
        main = document.querySelector('.main');


    window.addEventListener('scroll', () => {
        newPosition = window.scrollY;
        if ((newPosition > 100) && (newPosition >  previosPos)) {
            header.classList.add('fixed');

            setTimeout(() => {
                    header.style.top = '0';
                }
             ,1000)

        }else if (newPosition <  previosPos) {

            header.style.top = '-67px';
            setTimeout(() => {

                header.classList.remove('fixed');

            },1000)

        }
        previosPos = newPosition;
    })
}());