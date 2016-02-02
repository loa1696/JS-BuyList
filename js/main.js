/**
 * Created by Student on 20.01.2016.
 */
/**
 * Created by Student on 20.01.2016.
 */

var id = 0;
$(function() {

    $("body").append(wrapEllement("Морозиво"));
    $("body").append(wrapEllement("Яблука"));
    $("body").append(wrapEllement("Печиво"));


    $(".button-not-buy").hide();

    $('.button-plus').click(function () {
        var num = $(this).parent().find(".counter").text();
        num = parseInt(num);
        $(this).parent().find(".counter").text(++num);
        $(".counter").text(num);
    });
    $('.button-minus').click(function () {
        var num = $(this).parent().find(".counter").text();
        num = parseInt(num);
        $(this).parent().find(".counter").text(--num);
        $(".counter").text(num);
    });


    $(".addButton").click(function () {
        //Р·Р°Р±СЂР°С‚Рё РЅР°Р·РІСѓ С– РґРѕРґР°С‚Рё РІ СЃРїРёСЃРѕРє
        var name_prod = $("#area").val();
        $('#area').val("");
        var wrapped_product = wrapEllement(name_prod);
        $("body").append(wrapped_product);
        addEvListener($(wrapped_product).find(".text"));

        var product = $(wrapped_product).find(".text");
        $(product).text(name_prod);

    });


    function wrapEllement(name_prod) {
        var prod_div = '<div   class="style1">' +
            '<input  class="text-input" type="text"  value="' + name_prod + '">' +

            '<button  class="button-plus" type="button">+</button>' +
            '<span  class="counter" >1</span>' +
            '<button   class="button-minus button-minus-block" type="button">-</button>' +

            '<button  class="button-buy" type="button">Куплено</button>' +
            '<button  style="display:none" class="button-not-buy" type="button">Не куплено</button>' +

            '<button class="button-delete"  type="button">x</button>' +
            '</div>'
        return prod_div;
    }

    function addEvListener(object) {
        $(object).click(function () {
            $(this).hide();
        });
    }
    $('.button-buy').click(function (){
                $('.button-buy').hide();
                $('.button-plus').hide();
                $('.button-minus').hide();
                $('.button-delete').hide();
                $('.button-not-buy').show();
                $('.counter').hide();
        $(product).text(name_prod.css('text-decoration',' line-through'));
            });
    $('.button-not-buy').click(function (){
        $('.button-buy').show();
        $('.button-plus').show();
        $('.button-minus').show();
        $('.button-delete').show();
        $('.button-not-buy').hide();
        $('.counter').show();
        $(product).text(name_prod.css('text-decoration',' line-through'));
    });
});

