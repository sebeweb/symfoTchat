/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    html();
    css();
});

$(document).resize(function () {
    html();
});

function html() {
    var wTchat = $('#wrapper').width();
    if (wTchat > 768) {
        $('#wrapper').append("<div id='left'</div>");
        $('#left').append("<div id='users'</div>");

    }
    $('#wrapper').append("<div id='right'</div>");
    $('#right').append("<div id='top'</div>");
    $('#right').append("<div id='bottom'</div>");
    $('#top').append("<div id='messages'</div>");
    $('#bottom').append("<div id='message'</div>");
    $('#message').append("<form> </form>");
    $('form').append("<input type='text' placeholder='Message' id='msg'/>");
    $('form').append("<input type='submit' value='envoyer' />");
}
function css() {
    var wTchat = $('#wrapper').width();
    if (wTchat > 768) {
        $('body').height(($(window).height() - 20) + "px");
        $('#wrapper').height($('body').height() + "px");
        $('#left').height($('body').height() + "px");
        $('#users').height(($('#left').height() - 40) + "px");
        $('#right').height($('body').height() + "px");
        $('#top').height(($('#right').height() - 120) + "px");
        $('#messages').height(($('#top').height() - 40) + "px");
        $('#bottom').height("100px");
        $('#message').height(($('#bottom').height() - 40) + "px");
    } else {
        $("#right").css({"width":"100%"});
    }
}
