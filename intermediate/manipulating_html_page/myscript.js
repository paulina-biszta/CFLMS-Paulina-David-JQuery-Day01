//remove the form//

$(document).ready(function() {
    $("form").submit(function(e) {
        //$("form").css("display", "none");//
        $("form").remove();
        e.preventDefault();
    });
});

//create 5 <div>//

for (i = 0; i < 5; i++) {
    $(document).ready(function() {
        var newItem = $('<div></div>');
        $('article').prepend(newItem);
    });
};

//search for...//

$(document).ready(function() {
    $("input").val("Search for...");
});

//add class to all divs//

$(document).ready(function() {
    $("div").addClass("box");

});

//change the link//
$(document).ready(function() {
    $("a").attr("href", "www.codefactory.wien");

});