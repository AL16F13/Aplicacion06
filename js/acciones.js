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
}); 
});

