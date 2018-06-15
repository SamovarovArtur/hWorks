// var translate = document.getElementsByClassName('.card-img');
// translate.style.backgroundPosition = 'bottom left'
	// function changePosition () {
	// 	// body... 
	// }
// function changePosition () {
// 	var find = document.querySelector('.card-img');
// 	find.classList.toggle("card-transform")
// }
// fn.addEventListener("click", changePosition)



// function changePosition2 () {
// 	var find = document.querySelector('.card-img2');
// 	find.classList.toggle("card-transform")
// }
// fn2.addEventListener("click", changePosition2)



//test
//////////////////////////////////////////////////////////////////////////////////////////////


function changePosition3 () {
	var find = document.getElementById('id3');
	find.classList.toggle("card-transform")
	var find2 = document.getElementById('id4');
	find2.classList.toggle("card-transform")
}
fn3.addEventListener("click", changePosition3)
id10.addEventListener("mouseleave", function () {
	var find = document.getElementById('id3');
	var find2 = document.getElementById('id4');
	if (find.classList.contains("card-transform") ) {
	find.classList.remove("card-transform")
	find2.classList.remove("card-transform")
	}
})

id11.addEventListener("mouseleave", function () {
	var find = document.getElementById('id1');
	var find2 = document.getElementById('id2');
	if (find.classList.contains("card-transform")) {
	find.classList.remove("card-transform")
	find2.classList.remove("card-transform")
	}
})
id12.addEventListener("mouseleave", function () {
	var find = document.getElementById('id5');
	var find2 = document.getElementById('id6');
	if (find.classList.contains("card-transform") ) {
	find.classList.remove("card-transform")
	find2.classList.remove("card-transform")
	}
})

function changePosition2 () {
	var find = document.getElementById('id1');
	find.classList.toggle("card-transform")
	var find2 = document.getElementById('id2');
	find2.classList.toggle("card-transform")
}
fn2.addEventListener("click", changePosition2)

function changePosition () {
	var find = document.getElementById('id5');
	find.classList.toggle("card-transform")
	var find2 = document.getElementById('id6');
	find2.classList.toggle("card-transform")
}
fn5.addEventListener("click", changePosition)



///////////////////////////////////////////////////////////////////////////////


function changePosition4 () {
	var find = document.getElementById('menu1');
	var find2 = document.getElementById('menu2');
	var find3 = document.getElementById('menu3');
	find.classList.toggle("card-transform2")
	find2.classList.toggle("card-transform2")
	find3.classList.toggle("card-transform2")
}
btnListener.addEventListener("click", changePosition4)


function changePosition5 () {
	var find = document.getElementById('menu4');
	var find2 = document.getElementById('menu5');
	var find3 = document.getElementById('menu6');
	find.classList.toggle("card-transform2")
	find2.classList.toggle("card-transform2")
	find3.classList.toggle("card-transform2")
}
btnListener2.addEventListener("click", changePosition5)

function changePosition6 () {
	var find = document.getElementById('menu7');
	var find2 = document.getElementById('menu8');
	var find3 = document.getElementById('menu9');
	find.classList.toggle("card-transform2")
	find2.classList.toggle("card-transform2")
	find3.classList.toggle("card-transform2")
}
btnListener3.addEventListener("click", changePosition6)

function changePosition7 () {
	var find = document.getElementById('menu10');
	var find2 = document.getElementById('menu11');
	var find3 = document.getElementById('menu12');
	find.classList.toggle("card-transform2")
	find2.classList.toggle("card-transform2")
	find3.classList.toggle("card-transform2")
}
btnListener4.addEventListener("click", changePosition7)