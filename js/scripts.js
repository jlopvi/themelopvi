$(function(){
  $('[data-toogle-menu]').on('click', function(event) {
    event.preventDefault()
    event.stopPropagation()
    let _this = this
    let $menu = $($(this).data('toogle-menu'))

    $(document).off('click')

    $(document).on('click', function(event) {
      if(!$(event.target).closest($(_this).data('toogle-menu')).length  ) {
        $($(_this).data('toogle-menu')).removeClass('active');
        $('body').removeClass('show-menu')
        $(document).off('click')
      }
    });

    $menu.toggleClass('active')
    $('body').toggleClass('show-menu')


  })


});
