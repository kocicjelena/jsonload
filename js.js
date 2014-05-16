$(document).ready(function(){
$.getJSON("json_data.json", function(data){
$.each(data.person, function(){

$("#ul").append("<li>name:"+this['name']+"</li><li>age:"+this['name']+"</li>");
});
});
});