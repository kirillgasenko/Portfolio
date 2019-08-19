document.body.onload = function(){
    setTimeout(function(){
        document.getElementById('page-preloader').classList.add('done'); 
        document.querySelector('body').classList.remove('lock');
               },1000);
}