const slides =document.querySelectorAll('.slide')
for(const slide of slides){
    
    slide.addEventListener('click',()=>
	{
        clearActiveFunctions()
        
        slide.classList.add('active')
    })
}

function clearActiveFunctions(){
    slides.forEach((slide) => 
	{
        slide.classList.remove('active')
    })
}