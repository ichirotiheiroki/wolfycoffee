$('.mouse-parallax').on('mousemove', (e) => {
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	$('.mouse-parallax__background').css(
		'transform', 
		'translate(-' + x * 30 + 'px, -' + y * 30 +'px)'
		);
	$('.cup').css(
		'transform', 
		'translate(' + x * 65 + 'px, ' + y * 65 +'px)'
		);
	$('.cookies').css(
		'transform', 
		'translate(' + x * 50 + 'px, ' + y * 50 +'px)'
		);
	$('.text').css(
		'transform', 
		'translate(' + x * 35 + 'px, ' + y * 35 +'px)'
		);
	$('.beens').css(
		'transform', 
		'translate(' + x * 50 + 'px, ' + y * 50 +'px)'
		);
});

  var cursor=document.querySelector(".cursor");
  var cursor2=document.querySelector(".cursor2");
  document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";});
