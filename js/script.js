document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    let body =  document.body;
    if(e.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('body-overflow');
    } else if (menu.closest('.active') && !e.target.closest('.menu') && menuBtn.closest('.active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('body-overflow');
    }

})


window.onscroll = function(){
    var html = document.documentElement, body = document.body;
    var BlkStyle = document.querySelector('.header-fix');
    if (BlkStyle) {
        if(html.scrollTop>50||body.scrollTop>50) {
            BlkStyle.classList.add('header-fix-active');
        } else BlkStyle.classList.remove('header-fix-active');
    } 
}