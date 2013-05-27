$(document).ready(function(){
    $(".tiles_container").masonry({
        itemSelector : ".tile",
        columnWidth : 310,
        isFitWidth : true
    });

    if(Modernizr.touch) {
        $(".tile").click(function(event){
            event.preventDefault();
            $(this).toggleClass("tapped");
        });

        $(".tiles_container").removeClass("can_hover");
    }
});
