import $ from "jquery";

class scrollspy{
    constructor(){
      this.body = $("body");
      this.scroll();
      this.smoothscroll();
    }
    scroll(){
      $('body').scrollspy({target: '#main-nav'});
    }
    smoothscroll(){
      $("#main-nav a").on('click', function(event){
        if (this.hash !== ""){
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          })
        }
     })
    }
}


export default scrollspy;
