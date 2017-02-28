/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    getUsers();
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
            getMessages();
        }
        
        
    });
});


function getUsers(){
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
            getMessages();
        },1000);
        }
        
    });
}

function getMessages(){
    $.ajax({
        async: true,
        type: 'GET',
        dataType: 'text',
        url: "./messages",
        success: function (data, textStatus, jqXHR) {
            $("#messages").empty();
            var liste = $.parseJSON(data);
            $(liste).each(function(e){
                $("#messages").append("<p>"+this.heure.date+"</p><p>@"+this.utilisateur.email+" : "+ this.message+"</p><br/>");
                
            });
            
                $("#messages").animate({ scrollTop: $('#messages').height()+10000}, 1000);
            setTimeout(function(){
            getUsers();
        },1000);
        }
    });
}