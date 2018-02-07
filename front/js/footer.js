//联系我们的图标事件
$('#wx_gray').mouseenter(function () {
    $(this).attr({ 'src': '../img/wx_ico_over.png' });
    $('#wx_over').css({ 'display': 'block' });
})
$('#wx_gray').mouseleave(function () {
    $(this).attr({ 'src': '../img/wx_ico.png' });
    $('#wx_over').css({ 'display': 'none' });
})
$('#wb_gray').mouseenter(function () {
    $(this).attr({ 'src': '../img/sina_ico_over.png' });
    $('#wb_over').css({ 'display': 'block' });
})
$('#wb_gray').mouseleave(function () {
    $(this).attr({ 'src': '../img/sina_ico.png' });
    $('#wb_over').css({ 'display': 'none' });
})

// 底部导航的点击事件
let footer = $('.footer_left').eq(0);
let dl = footer.find('dl');
$(window).resize(function(){
    if($(this).width()>767){
        dl.find('dd').css({'display':'block'});
    } else {
        dl.find('dd').css({ 'display': 'none' });        
    }
})
dl.click(function () {
    $(this).find('dd').slideToggle(() => {
        if ($(this).find('dt span').html() == '+') {
            $(this).find('dt span').html('-');
            $(this).find('dt').css({ 'border-bottom': '1px dashed #ccc' });
        } else {
            $(this).find('dt span').html('+');
            $(this).find('dt').css({ 'border-bottom': '0' });
        }
    });
})