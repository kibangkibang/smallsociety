(function(){	
	var current = 0;
	var max = 0;
	var cnt = 0;
	var container;
	var interval;

	function init(){
		container = jQuery(".index_slide ul")
		max = container.children().length;
		events();
		//setInterval(next,3000);
	}
	function events(){
		jQuery("button.prev").on("click",prev);
		jQuery("button.next").on("click",next);

		jQuery(window).on('keydown',keydown);
	}
	function prev(e){
		current--;
		cnt--;
		if(current < 0){
			current =0;
		}
		if(cnt == -3){
			cnt = 0;
		}
		container.children('.photo' + (cnt+3)).remove();
		container.prepend('<li class="photo'+ (cnt+3) +'"></li>');
	}
	function next(e){
		current++;
		cnt++;
		if(current > 2){
			current = max-1;
		}
		if(cnt == 2){
			cnt = -1;
		}
		container.children('.photo' + (cnt+2)).remove();
		container.append('<li class="photo'+ (cnt+2) +'"></li>');

	}
	function animate(){
		/*clearInterval(interval);
		setInterval(next,3000);*/

	}

	function keydown(e){
		if(e.keyCode == 39){
			next();
		}else if(e.keyCode == 37){
			prev();
		}
	}
	jQuery(document).ready(init);
})();