var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
	window.requestAnimationFrame(function() {
	  scrolling(e);
	  isScrolling = false;
	});
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll("#mainContent ol li");
var firstBox = document.querySelector("#firstBox");
var secondBox = document.querySelector("#secondBox");

function scrolling(e) {

  if (isPartiallyVisible(firstBox)) {
	firstBox.classList.add("active");

	document.body.classList.add("colorOne");
	document.body.classList.remove("colorTwo");
  } else {
	document.body.classList.remove("colorOne");
	document.body.classList.remove("colorTwo");
  }

  if (isFullyVisible(secondBox)) {
	secondBox.classList.add("active");

	document.body.classList.add("colorTwo");
	document.body.classList.remove("colorOne");
  }

  for (var i = 0; i < listItems.length; i++) {
	var listItem = listItems[i];

	if (isPartiallyVisible(listItem)) {
	  listItem.classList.add("active");
	} else {
	  listItem.classList.remove("active");
	}
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}
var arr = document.getElementsByClassName("image");
var isHidden = false;

function selectimage(item) {  
for (var i = 0; i < arr.length; i++) {    
  arr[i].style.display = isHidden ? 'block' : 'none';          
}

isHidden = !isHidden;      
item.style.display = "block";
}
//slider
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
//zagolovki
$(function() {
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	$('#tabs .tabs-nav a').click(function(){
	tab.hide(); 
	tab.filter(this.hash).show(); 
	$('#tabs .tabs-nav a').removeClass('active');
	$(this).addClass('active');
	return false;
	}).filter(':first').click();
	
	$('.tabs-target').click(function(){
	$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
	});
	});
	
	$(function() {
	var el;
	$("#rng").change(function() {
	el = $(this);
	el
	.next("#ong")
	.text(el.val());
	})
	.trigger('change');
	});
	