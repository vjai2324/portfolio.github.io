
/*------------------------ [Pre-Loader] ------------------------*/

jQuery(window).on("load", function() {
	jQuery(".overlay").css({'display':'none'});
});

jQuery(document).ready(function() {

	"use strict";



	/*------------------------ [Portfolio Tab] ------------------------*/

	var links = document.querySelectorAll('.port-tab-filters ul li a');
	var content = document.querySelectorAll('div.content');
	var lis = document.querySelectorAll('.port-tab-filters ul li');

	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(e){
			e.preventDefault();
			var activLinks = document.querySelector('.port-tab-filters ul li a.activ');
			var activContent = document.querySelector('.port-tab-content-box>div.activ');

			activLinks.classList.remove('activ');
			activContent.classList.remove('activ');

			this.classList.add('activ');
			var attr = this.getAttribute('href');

			var activ = document.querySelector(attr);

			activ.classList.add('activ');

			var lisLength = lis.length;
			var lisWidth = 100 / lisLength;
			var position = i*lisWidth;

		});
	}


	/*------------------------ [Tab on click] ------------------------*/

	jQuery(".all-content-wrap.detail-page").click(function() {
		jQuery('.porta-project-detail').toggleClass("showpage");
		jQuery('.porta-portfolio-content').toggleClass("hidepage");
	});
	jQuery(".close").click(function() {
		jQuery('.porta-portfolio-content').removeClass("hidepage");
		jQuery('.porta-project-detail').removeClass("showpage");
	});

	jQuery(".all-content-wrap.image-page").click(function() {
		jQuery('.porta-image-page').toggleClass("showpage");
		jQuery('.porta-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.porta-portfolio-content').removeClass("hidepage");
		jQuery('.porta-image-page').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.slider-page").click(function() {
		jQuery('.porta-slider-page').toggleClass("showpage");
		jQuery('.porta-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.porta-portfolio-content').removeClass("hidepage");
		jQuery('.porta-slider-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.soundcloud-page").click(function() {
		jQuery('.porta-soundcloud-page').toggleClass("showpage");
		jQuery('.porta-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.porta-portfolio-content').removeClass("hidepage");
		jQuery('.porta-soundcloud-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.vimeo-video-page").click(function() {
		jQuery('.porta-vimeo-content').toggleClass("showpage");
		jQuery('.porta-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.porta-portfolio-content').removeClass("hidepage");
		jQuery('.porta-vimeo-content').removeClass("showpage");
	});

	jQuery(".all-content-wrap.youtube-video-page").click(function() {
		jQuery('.porta-youtube-video-page').toggleClass("showpage");
		jQuery('.porta-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.porta-portfolio-content').removeClass("hidepage");
		jQuery('.porta-youtube-video-page').removeClass("showpage");
	});

	jQuery(".port-blog-wrap").click(function() {
		jQuery('.porta-single-projects-content').toggleClass("showpage");
		jQuery('.porta-projects-content').toggleClass("hidepage");
	});
	jQuery(".blog-back-btn").click(function() {
		jQuery('.porta-projects-content').removeClass("hidepage");
		jQuery('.porta-single-projects-content').removeClass("showpage");
	});


	/*------------------------ [Read More] ------------------------*/

	var limit = 3;
	$(".p-blog-list .port-blog-card").slice(0, limit).show();
	$(document).on('click','#load_more',function(e){
		limit += 3;
		e.preventDefault();
		$(".p-blog-list .port-blog-card").slice(0, limit).show();
	});	
	
});


/*------------------------ [Cursor Script] ------------------------*/

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

	// Listeners
	document.body.addEventListener('mousemove', onMouseMove);
	for (let i = 0; i < $hoverables.length; i++) {
		$hoverables[i].addEventListener('mouseenter', onMouseHover);
		$hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
	}

	// Move the cursor
	function onMouseMove(e) {
		TweenMax.to($bigBall, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15
		})
		TweenMax.to($smallBall, .1, {
			x: e.pageX - 5,
			y: e.pageY - 7
		})
	}

	// Hover an element
	function onMouseHover() {
		TweenMax.to($bigBall, .3, {
			scale: 4
		})
	}
	function onMouseHoverOut() {
		TweenMax.to($bigBall, .3, {
			scale: 1
		})
	}

/*------------------------ [Menu hide during weekend mode] ------------------------*/
$(".porta-switch-btn input").click(function(){
  $("body").toggleClass("menu-hide-wrap");
});