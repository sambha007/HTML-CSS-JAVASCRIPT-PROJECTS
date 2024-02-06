const buttons=document.querySelectorAll('.button');
//console.log(buttons);
const body=document.querySelector("body")

buttons.forEach((button)=>{
    //console.log(button);
    button.addEventListener('click',function(e){
        //console.log(e);
        //console.log(e.target);
        if(e.target.id==='gray')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='white')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yell')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='green')
        {
            body.style.backgroundColor=e.target.id
        }
        
        if(e.target.id==='orange')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='red')
        {
            body.style.backgroundColor=e.target.id
        }
    })

})
