
$('.ui.selection.dropdown')
  .dropdown({
    useLabels: false
  })
;
$('.language-drop').click(function() {
    $(this).toggleClass('open'); 
});
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};
$('.btn-menu').click(function() {
  $('body').toggleClass('menu-open');
})