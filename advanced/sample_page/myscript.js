$(document).ready(function() {
    //change links//

    $("a").attr("href", "www.codefactory.wien");


    //Change the text color to red for the <code> tags//


    $("code").css("color", "red");


    //Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element//


    $("ol>li").css("background-color", "#2a7b90");


    //Within the form, change the placeholder text to "Express your opinion"//


    $(":input").attr("placeholder", "Express your opinion");


    //Replace all images on the page with this one "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"//


    $("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");


    //Change the background color to orange for all blockquote elements and the font-style to italic//
    $("blockquote").css({
        "background-color": "orange",
        "font-style": "italic"
    });
    //At the top of the page, change the logo color "Simple" to black and "Blog" to white//
    $("#logo").css("color", "black");
    $(".gray").css("color", "white");

    //Remove the "Oct 01, 2006" Date from the page//
    $(".date").remove();

    //Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"//
    $("ul.sidemenu").append("<li>New Templates</li><li>Order Template</li><li>Contact Us</li>");

    // Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."
    $("p:contains('Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.')").html("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
});