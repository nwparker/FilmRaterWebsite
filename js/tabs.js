function tab_func(){
    var hash = window.location.hash;
    if (hash == "")
        hash = "#home";
    //Highlight the correct menu item
    $("#navbar li").removeClass('active');
    $(hash+"_tab").addClass('active');
    //Show the correct content
    $(".page").hide();
    $(hash+"_page").show();
}

$(document ).ready(function() {
    tab_func();
    $(window).on('hashchange',function(){
        tab_func();
    });
});