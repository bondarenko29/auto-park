$(function(){

//    var ulLink = [].slice.call(document.querySelectorAll('.hero-menu__list  a'));
//    ulLink.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         ulLink.forEach((a) => {
//             if (a !== this) {
//                 a.classList.remove('active');
//             }
//         });
//         this.classList.add('active');
//     }, false);
// });

      var i;
       var tags=document.getElementsByTagName("li");
       for(i in tags){
         if(tags[i].className==".hero-menu__list"){
             if(document.location.href==tags[i].firstChild.href){
                 tags[i].className +=" .active";
             }
         }
       }

      $('a.hero-menu-item').click(function(){
       $('a.hero-menu-item').removeClass("active");
        $(this).addClass("active");
     });

    
});