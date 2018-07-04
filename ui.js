(function(){
    $('.callouts').hide();
    $('.callout p').hide();
    $('.menu').hide();

    $('.toggle').on('click',function(){
      $('.callouts').slideToggle();
    });
    $('.menu-toggle').on('click',function(){
        $('div.menu').slideToggle();
        // $('.menu-toggle label').html('Hide Menu');
    });
    $('.callout-title').on('click',function(){
      // $(this+' p').slideToggle();
      $(this).siblings("p.callout-content").slideToggle();

    })
})();
