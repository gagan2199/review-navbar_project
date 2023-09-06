let togglebutton= document.querySelector('.togglebutton');

let after=document.querySelector('.after');



togglebutton.addEventListener('click',function ()
{

    let ans=after.style.visibility;
    // after.style.visibility='hidden'
   if (ans=='visible')
   {
    after.style.visibility='hidden';
   }
   else
   {
    after.style.visibility='visible'
   }
})