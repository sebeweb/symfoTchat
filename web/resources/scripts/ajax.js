/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    updateUsers();
});



$("form").submit(function(e){
    e.preventDefault();
    $.ajax({
        async: true,
        type: 'POST',
        dataType: 'text',
        data:{
            "msg":$("#msg").val()
        },
        url: "./message/add",
        success: function (data, textStatus, jqXHR) {
            $("#msg").val("");
            updateMessages();
        }
        
    });
});


function updateUsers(){
    $.ajax({
        async: true,
        type: 'GET',
        dataType: 'text',
        url: "./users",
        success: function (data, textStatus, jqXHR) {
            $("#users").empty();
            var liste = $.parseJSON(data);
            $(liste).each(function(e){
                $("#users").append("<p>@"+this.email+"</p>");
            });
            setTimeout(function(){
            updateMessages();
        },1000);
        }
        
    });
}

function updateMessages(){
    $.ajax({
        async: true,
        type: 'GET',
        dataType: 'text',
        url: "./messages",
        success: function (data, textStatus, jqXHR) {
            $("#messages").empty();
            var liste = $.parseJSON(data);
            $(liste).each(function(e){
                $("#messages").append("<p>"+this.heure.date+"</p><p>@"+this.utilisateur+" : "+ this.message+"</p><br/>");
                
            });
            
                $("#messages").animate({ scrollTop: $('#messages').height()+10000}, 1000);
            setTimeout(function(){
            updateUsers();
        },1000);
        }
    });
}