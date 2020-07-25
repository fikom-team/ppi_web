setInterval(() => {
    $(".header").css("background-color", "pink");
}, 200);

setInterval(() => {
    $(".header").css("background-color", "teal");
}, 300);

$(document).ready(()=> { 
    $("#btn").on("click", () => { 
        $("p").toggle();
    });
});

$("#kirim").on("click" , () => { 
    let input = $("#input").val();
    alert(input);
})