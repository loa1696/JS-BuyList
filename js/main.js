/**
 * Created by Student on 20.01.2016.
 */
/**
 * Created by Student on 20.01.2016.
 */
$(function() {

    $('.text-input').hide();
    $('.button-not-buy').hide();
    var ITEM_TEMPLATE=$(".style1");
    var ITEM_STATS_TEMPLATE=$(".style2");


$('.addButton').click(function(){
    var title=$('.area').val();
    $('.area').val("");
    if (title == "")
    return;
    create(title);
});
    function create(title){
        var node = $(ITEM_TEMPLATE);
        var node2 = $(ITEM_STATS_TEMPLATE);
        node.find()
    }

    $('.button-plus').click(function () {
        var num = $(this).parent().find(".counter").text();
        num = parseInt(num);
        $(this).parent().find(".counter").text(++num);
        $("counter").text(num);
    });
    $('.button-minus').click(function () {
        var num = $(this).parent().find(".counter").text();
        num = parseInt(num);
        $(this).parent().find(".counter").text(++num);
        $("counter").text(num);
    });

    $('.text').click(function () {
        $('#text1').hide();
        $('#text2').show()
    });

    $('#noBuy1').click(function () {
        $('#buy1').show();
        $('#buttonPlus1').show();
        $('#buttonMinus1').show();
        $('#del1').show();
        $('#noBuy1').hide();
        $('#coun1').show();
        $('#text1').css('text-decoration', ' none');
    });
    $('#del1').click(function() {
        $('#div1').hide();
    });
    $('#del2').click(function() {
        $('#div2').hide();
    });
    $('#del3').click(function() {
        $('#div3').hide();
    });


    /*function addItem(title){-->
     var node = $(ITEM_TEMPLATE);
     var parent = $('<div id="segment state-ready"  style="display:none;"></div>');
     var cont = true;
     $('#add').click(function(){
     $('.textarea').val();
     var n_v =$('.textarea').val();
     var node =$(n_v);
     var ITEM_TEMPLATE = $('.div1').html();
     function addItem(title){
     var node=$(ITEM_TEMPLATE);
     node.find(".textarea").text();
     } */

});

