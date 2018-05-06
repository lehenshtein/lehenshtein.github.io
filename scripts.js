window.addEventListener("load",
						function (){
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
    var circle1 = document.querySelector("#circle1");
	var circle2 = document.querySelector("#circle2");
	var circle3 = document.querySelector("#circle3");
	var numb = document.querySelector("#numb");
	
	
	
// 		function counter (){
//	var count = 0;
//	numb.innerHTML = (count);
//
//   var timer = window.setInterval(function () {
//                 if (++count < 30) {
//					 numb.innerHTML = (count);
//					
//				 }
//               }, 100);	
//	}
    function scrolling(e) {
		
		if (isFullyVisible(circle1)) {
        circle1.classList.add("active");
      }
		else
			circle1.classList.remove("active");
 
		if (isFullyVisible(circle2)) {
        circle2.classList.add("active");
      }
		else
			circle2.classList.remove("active");
		
      if (isFullyVisible(circle3)) {
        circle3.classList.add("active");
      }
		else
			circle3.classList.remove("active");
//		if (isFullyVisible(numb)) {
//        counter();
//      }

    }
	

    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }

		var colRed = document.getElementById("col-btn1");
		var colBlue = document.getElementById("col-btn2");
		var colGreen = document.getElementById("col-btn3");
		var colYellow = document.getElementById("col-btn4");
		var c1 = "#c92b2b", c2 = "#2a7acb", c3 = "#4ec75c", c4 = "#e3c628";
		
		function toCol (col) {
			document.querySelector("html").style.setProperty("--contrast", col);
		}
		
		colRed.onclick = function () {
			toCol(c1)
		};
		colBlue.onclick = function () {
			toCol(c2)
		};
		colGreen.onclick = function () {
			toCol(c3)
		};
		colYellow.onclick = function () {
			toCol(c4)
		};
}
, false);