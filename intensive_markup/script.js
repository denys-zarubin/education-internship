console.log('hello')
const footerElem = document.getElementById('footer')
const headerElem = document.getElementById('header')
window.onscroll = (e) => {
    console.log(document.body.getBoundingClientRect())
    if(/*headerElem.getBoundingClientRect().bottom < window.pageYOffset*/ window.pageYOffset !== 0){
        headerElem.classList.contains('page__header--fixed') ? null : headerElem.classList.add('page__header--fixed')
    }
    else{
        headerElem.classList.contains('page__header--fixed') ? headerElem.classList.remove('page__header--fixed') : null
        
    }
}