/**
 * Created by Student on 20.01.2016.
 */
$(function() {
    $('#text2').hide();
    $('#text4').hide();
    $('#text6').hide();
    $('#noBuy1').hide();
    $('#noBuy2').hide();
    $('#noBuy3').hide();
    $('#text1').click(function () {
        $('#text1').hide();
        $('#text2').show()
    });
     $('#text2').click(function () {
        $('#text1').show();
        $('#text2').hide()
    });
    $('#text3').click(function () {
        $('#text3').hide();
        $('#text4').show()
    });
    $('#text4').click(function () {
        $('#text3').show();
        $('#text4').hide()
    });
    $('#text5').click(function () {
        $('#text5').hide();
        $('#text6').show()
    });
    $('#text6').click(function () {
        $('#text5').show();
        $('#text6').hide()
    });
    $('#buy1').click(function (){
        $('#buy1').hide();
        $('#buttonPlus1').hide();
        $('#buttonMinus1').hide();
        $('#del1').hide();
        $('#noBuy1').show();
        $('#coun1').hide();
        $('#text1').css('text-decoration',' line-through');
    });
    $('#noBuy1').click(function (){
        $('#buy1').show();
        $('#buttonPlus1').show();
        $('#buttonMinus1').show();
        $('#del1').show();
        $('#noBuy1').hide();
        $('#coun1').show();
        $('#text1').css('text-decoration',' none');
    });
    $('#buy2').click(function (){
        $('#buy2').hide();
        $('#buttonPlus2').hide();
        $('#buttonMinus2').hide();
        $('#del2').hide();
        $('#noBuy2').show();
        $('#coun2').hide();
        $('#text3').css('text-decoration',' line-through');
    });
    $('#noBuy2').click(function (){
        $('#buy2').show();
        $('#buttonPlus2').show();
        $('#buttonMinus2').show();
        $('#del2').show();
        $('#noBuy2').hide();
        $('#coun2').show();
        $('#text3').css('text-decoration',' none');
    });
    $('#buy3').click(function (){
        $('#buy3').hide();
        $('#buttonPlus3').hide();
        $('#buttonMinus3').hide();
        $('#del3').hide();
        $('#noBuy3').show();
        $('#coun3').hide();
        $('#text5').css('text-decoration',' line-through');
    });
    $('#noBuy3').click(function (){
        $('#buy3').show();
        $('#buttonPlus3').show();
        $('#buttonMinus3').show();
        $('#del3').show();
        $('#noBuy3').hide();
        $('#coun3').show();
        $('#text5').css('text-decoration',' none');
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

});


