(function(){
    $('.callouts').hide();
    $('div.menu').show();
    $('.toggle').on('click',function(){
      $('.callouts').slideToggle();
    });
    $('.menu-toggle').on('click',function(){
        $('div.menu').slideToggle();
    })
})();
