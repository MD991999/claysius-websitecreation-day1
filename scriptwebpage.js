const hamburgerDiv=document.querySelector(".hamburgar-icon")
const ul=document.querySelector("ul")
// const slider=document.querySelector(".slider")
hamburgerDiv.addEventListener('click',function(){
    ul.classList.toggle('additionalClass')
    // slider.classList.toggle('sectionPart')
})