function changeHoverFb(element){
    element.setAttribute('src', 'facebookIconDark.svg');
}
function changeHoverIg(element){
    element.setAttribute('src', 'instagramIconDark.svg');
    element.style.width="120px";
}
function changeHoverMail(element){
    element.setAttribute('src', 'emailIconDark.svg');
}
function backHoverFb(element){
    element.setAttribute('src', 'facebookIcon.svg');
}
function backHoverIg(element){
    element.setAttribute('src', 'instagramIcon.svg');
    element.style.width="150px";
}
function backHoverMail(element){
    element.setAttribute('src', 'emailIcon.svg');
}
document.addEventListener("DOMContentLoaded", function(event){

// .sectionTwo = trigger
// #animate = changer
gsap.registerPlugin(ScrollTrigger);

var AnimationText = gsap.from("#aboutText", {
    duration:1, x:"-20px",opacity:0,ease:"ease-out", scrollTrigger:".sectionTwo"
});
var col1 = gsap.from("#columnOne", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".animate", delay:0.5,
});
var col2 = gsap.from("#columnTwo", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".animate", delay:1,
});
var col3 = gsap.from("#columnThree", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".animate", delay:1.5,
});
var col4 = gsap.from("#columnFour", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".animate", delay:2,
});
var col5 = gsap.from("#columnFive", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".animate", delay:2.5,
});
var ref1 = gsap.from("#ref1", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".referenceText",
});
var icon1 = gsap.from("#icon1", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".projectText", delay:1,
});
var icon2 = gsap.from("#icon2", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".projectText", delay:1.5,
});
var icon3 = gsap.from("#icon3", {
    duration:2, y:"-50px",opacity:0,ease:"ease-out", scrollTrigger:".projectText", delay:2,
});
});