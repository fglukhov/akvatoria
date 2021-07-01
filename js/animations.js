if ($("#mobile-indicator").css("display") == "none") {

	var is_mobile = false;

} else {

	var is_mobile = true;

}



function animateAll() {

	if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

		$("body").addClass("animated");

		var controller = new ScrollMagic.Controller();

		$(".page-header-home .page-header-obj").each(function (index, element) {

			let elTween = TweenMax.to($(element), 1.5, {
				x: 0,
				opacity: 1,
				ease: Sine.easeOut,
				delay: $(element).data("index") * .7 + .5
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: $(".over-wrapper"),
				offset: 0
			})
				.setTween(elTween)
				.addTo(controller);

		});

	} else if ($("#mobile-indicator").css("display") == "block") {

		$("body").removeClass("animated");

		//controller = controller.enabled(false);
		//controller = controller.destroy(true);

	}


}

$(window).on("resize", function () {

	animateAll();

});

$(document).ready(function () {

	animateAll();

});


$(window).on("resize scroll load", function () {

	$(".section-bg-inner").each(function () {

		$(this).prlx($(this).closest(".section"), 0, 100, false);

	});

	$(".section-about-obj-1 img").prlx($(".section-about"), -70, 70, false);

	$(".section-about-obj-2 img").prlx($(".section-about"), -70, 30, false);

	$(".section-about-obj-3 img").prlx($(".section-about"), -50, 50, false);

	$(".section-news-obj img").prlx($(".section-news"), -50, 50, false);

	$(".section-format-obj img").prlx($(".section-format"), -20, 80, false);

	$(".format-video-obj img").prlx($(".section-format"), -70, 30, false);

	$(".section-map-main-obj img").prlx($(".section-map-main"), 40, -60, false);

	$(".section-top-obj").prlx($(".section-top"), -40, 60, false);

	$(".dir-item-obj img").each(function () {

		$(this).prlx($(this).closest(".dir-item"), 50, -50, false);

	});

	$(".page-section-faq .page-section-obj img").each(function () {

		$(this).prlx($(this).closest(".page-section-faq"), 20, -80, false);

	});

	$(".section-spec-form .section-obj img").each(function () {

		$(this).prlx($(this).closest(".section-spec-form"), 20, -80, false);

	});

	$(".page-section-faq .section-faq-obj img").each(function () {

		$(this).prlx($(".section-contacts"), 20, -80, false);

	});

	$(".section-contacts-obj img").each(function () {

		$(this).prlx($(".section-contacts"), 20, -80, false);

	});


});

(function( $ ) {
	$.fn.prlx = function(pTrigger, yStart, yFinish, fromTop) {

		if (!is_mobile && $(this).length) {

			var obj = $(this);

			var yPos;

			if (fromTop == false && $(window).scrollTop() < pTrigger.offset().top - $(window).height()) {

				yPos = yStart;

			} else if (fromTop == false && $(window).scrollTop() > pTrigger.offset().top + $(window).height()) {

				yPos = yFinish;


			} else {

				if (fromTop) {

					if (pTrigger.offset().top <= $(window).scrollTop()) {

						var percentOffset = (pTrigger.offset().top - $(window).scrollTop()) / ($(window).height() * 2);

					} else {

						percentOffset = 0;

					}

				} else {

					var percentOffset = (pTrigger.offset().top + $(window).height() - $(window).scrollTop()) / ($(window).height() * 2);

				}

				var yRange = yStart - yFinish,
					posInRange = yRange * percentOffset,
					yPos = posInRange + yFinish;

				obj.attr("percentOffset", percentOffset);

			}

			TweenMax.to(obj, .5, {y: yPos, ease:Linear.ease});

		}

	};
})( jQuery );

(function( $ ) {
	$.fn.splitLines = function() {

		var element = $(this);

		if (element.find("br").length) {

			var arr = element.html().split('<br>');

		} else {

			var arr = element.html().split('\n');

		}

		element.empty();

		console.log(arr)

		$.each(arr, function( index, value ) {
			element.append("<div class='text-line'><div class='text-line-inner'>"+arr[index]+"</div></div>");
		});

	};
})( jQuery );
