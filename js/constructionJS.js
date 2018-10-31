// window.sr = ScrollReveal();

// sr.reveal('.showcase-bottom', {
//   duration: 2000,
//   origin:'bottom',
//   distance:'100px'
// });
// sr.reveal('.showcase-right', {
//   duration: 2000,
//   origin:'right',
//   distance:'100px'
// });
// sr.reveal('.showcase-left', {
//   duration: 2000,
//   distance: '100px',
//   origin:'left'
// });



$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top 
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});


