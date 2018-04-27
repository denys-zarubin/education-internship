;(function(){
    let comp_img = document.querySelector('.company-img');
    setTimeout(function(){
        comp_img.classList.add('full-height')
    }, 100);

    let user_ic = document.querySelector('.user-icon'),
        user_inf = document.querySelector('.user-info');
    user_ic.addEventListener('click', () => {
        menu.classList.remove('active');
        user_inf.classList.toggle('visible');
    });
    let burger = document.querySelector('.burger-btn'),
        menu = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=> {
        user_inf.classList.remove('visible');
        menu.classList.toggle('active');

    });

    let search = document.querySelector('.search'),
        input = document.querySelector('.global-search'),
        overlay = document.querySelector('.overlay');
    search.addEventListener('click', ()=> {
        overlay.classList.add('opened')
    })
    overlay.addEventListener('click', (e)=> overlay.classList.remove('opened'))
    input.addEventListener('click', (e)=> e.stopPropagation())

}());