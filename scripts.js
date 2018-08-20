/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


var Suggestions = document.getElementById("Suggestions")
var Lists = document.getElementById("Lists")

function showHideInlineBlock(elem){
if(elem.style.display == "inline-block"){
  elem.style.display = "none";
}else{
}
elem.style.display="inline-block";
}
Suggestions.addEventListener("click",function(){
showHideInlineBlock(Lists);


});

var Suggestions = document.getElementById("Suggestions")
var Lists = document.getElementById("Lists")
var Volunteering = document.getElementById("Volunteering")
var Opportunities = document.getElementById("Opportunities")
// var i = 0;
// var speed = 50;
//
function showHideInlineBlock(elem){
if(elem.style.display == "inline-block"){
  elem.style.display = "none";
}else{
}
elem.style.display="inline-block";
}
Suggestions.addEventListener("click",function(){
showHideInlineBlock(Lists);


});

Volunteering.addEventListener("click",function(){
showHideInlineBlock(Opportunities);


});


var Suggestions = document.getElementById("Suggestions")
var Lists = document.getElementById("Lists")

function showHideInlineBlock(elem){
if(elem.style.display == "inline-block"){
  elem.style.display = "none";
}else{
}
elem.style.display="inline-block";
}
Suggestions.addEventListener("click",function(){
showHideInlineBlock(Lists);


});
