const upToBack = document.querySelector('.back-to-up');
// measure scrooll from up
window.addEventListener('scroll' , function(){
    if(window.pageYOffset > 400){
        upToBack.classList.add("active");
    }else{
        upToBack.classList.remove("active");
    }
});