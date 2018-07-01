(function(){
    // $('.callouts').hide();
    $('.callout p').hide();
    $('div.menu').hide();
    $('.toggle').on('click',function(){
      $('.callouts').slideToggle();
    });
    $('.menu-toggle').on('click',function(){
        $('div.menu').slideToggle();
    });
    $('.callout-title').on('click',function(){
      // $(this+' p').slideToggle();
      $(this).siblings("p.callout-content").slideToggle();

    })
})();
