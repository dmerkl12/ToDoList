// Check off specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
});

//click on x to delete todo
$("span").on("click",function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    event.stopPropagation();
})

//
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        let todoText = $(this).val();
        //create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
})