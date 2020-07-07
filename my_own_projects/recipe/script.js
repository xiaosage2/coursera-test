// the only use of jQuery to collapse the toggle button

$(function () {
  $('#navbarToggle').blur(function (event) {
    var screenWidth = window.innerWidth;
    if(screenWidth < 992){
      let elem = $('#collapsable-nav');
      elem.collapse('hide');
    }
  })
})
