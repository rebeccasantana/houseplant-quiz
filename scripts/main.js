let quizimage=document.querySelectorAll('.quiz');
quizimage.forEach(function(el){
el.addEventListener("mouseover", function() {
	this.style.opacity = 0.5;
});
	el.addEventListener("mouseleave", function() {
		this.style.opacity = 1;
});
});

let q1=document.querySelectorAll('.climate');
q1.forEach(function(el){
el.addEventListener("click", function() {
	this.style.border = "5px solid black";
});
el.addEventListener("click", function() {
	this.style.border = "none";
});
});

let q2=document.querySelectorAll('.activity');
q2.forEach(function(el){
el.addEventListener("click", function() {
	this.style.border = "5px solid black";
});
el.addEventListener("click", function() {
	this.style.border = "none";
});
});

let q3=document.querySelectorAll('.space');
q3.forEach(function(el){
el.addEventListener("click", function() {
	this.style.border = "5px solid black";
});
el.addEventListener("click", function() {
	this.style.border = "none";
});
});
let q4=document.querySelectorAll('.brand');
q4.forEach(function(el){
el.addEventListener("click", function() {
	this.style.border = "5px solid black";
});
el.addEventListener("click", function() {
	this.style.border = "none";
});
});
let q5=document.querySelectorAll('.aesthetic');
q5.forEach(function(el){
el.addEventListener("click", function() {
	this.style.border = "5px solid black";
});
el.addEventListener("click", function() {
	this.style.border = "none";
});
});


		 document.getElementById("form1").onsubmit=function(e) {

	/*		 e.preventDefault(); */


			 let result = document.querySelectorAll('.result');
			 let result1 = document.querySelector('#airplant');
			 let result2 = document.querySelector('#philodendron');
			 let result3 = document.querySelector('#indoorpalm');
			 let result4 = document.querySelector('#artificial');

			 function hideAll() {
			   result.forEach(function(el) {
			     el.style.display = 'none';
			   });
			 }

	hideAll();

	   climate = parseInt(document.querySelector('input[name = "climate"]:checked').value);

	  activity = parseInt(document.querySelector('input[name = "activity"]:checked').value);

	  space = parseInt(document.querySelector('input[name = "space"]:checked').value);

		brand = parseInt(document.querySelector('input[name = "brand"]:checked').value);

		aesthetic = parseInt(document.querySelector('input[name = "aesthetic"]:checked').value);

	   total= climate + activity + space + brand + aesthetic;


	   if(total < 8) {
result1.style.display= 'block';
}

   else if(total < 11) {
result2.style.display= 'block';
}

	else if(total < 14) {
result3.style.display= 'block';
}

	else if(total <=20) {
result4.style.display= 'block';
}

total=0;



	   return false; // required to not refresh the page; just leave this here
	   }// end the submit function
//
