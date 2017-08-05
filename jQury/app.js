$(document).ready(function () {
    // alert("加载结束");
    $("p").click(function () {
         $(this).hide();
    })
    $(document.body).css("background","black");
    $("<div>", {
            "class":"box3",
            test:"jQury Creat div",
        click:function () {
            $(this).toggleClass("box3");
        }
        }
        ).appendTo("body");
    $("<input>",{
        type:"test",
        val:"testValue",
        focusin:function () {
            $(this).addClass("active");
        },
        focusout:function () {
            $(this).removeClass("active");
        }
        
    }).appendTo("form");
    $("img").each(function (i) {
        this.src = "test" +i+ ".jpg";
    });
})

