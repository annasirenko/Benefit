function scrollTop(){
    const scrollTop = document.querySelector('.button-up');
    if (this.scrollY >= 560){
        scrollTop.classList.add('scroll-top');
    }else{
        scrollTop.classList.remove('scroll-top');
    }
}

window.addEventListener('scroll', scrollTop);