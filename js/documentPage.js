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
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  $(".single-acco h4").click(function(){
    if($(this).next(".accodion-body").hasClass("active")){
      $(this).next(".accodion-body").removeClass("active").slideUp();
  
      $(this).parent().removeClass("active");

    }
    else{
      $(".accodion-body").removeClass("active").slideUp();
      $(this).parent().addClass("active");
      $(this).next(".accodion-body").addClass("active").slideDown();

    }
  })