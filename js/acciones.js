// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnvibrar').on('tap',
	function(){
		navigator.vibrate(1000);
	});//tap a btnvibrar
	$('#btnbeep').on('tap',
	function(){
		navigator.notification.beep (1);
	});//tap a btnbeep
	$('#izquierda').on('swipeleft',
	function(){
		alert("Barrio a la izquierda"); 
	});
	$('#derecha').on('swiperight',
	function(){
		alert("Barrio a la izquierda"); 
	});
	document.addEventListener("pause",function(){
		$('#listado').append( "<p> la aplicacion se pausó </p>");
	});
	document.addEventListener("resume",function(){
		$('#listado').append( "<p> se reinicio la aplicacion </p>");
	});
	$(window).on('orientationchange',function(e){
	 $('#listado').append("<p> Orientacion: " + e.orientation + " </p>")
	});
}); 
});

