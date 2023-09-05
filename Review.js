const reviews=[
    {
        pagenumber: 1,
        post: "Captain",
        nam: "MS Dhoni",
        pp: "ms-dhoni-review.avif",
        revtext : "Dhoni - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nostrum fuga accusantium. Ipsum odio eveniet esse aut. Reiciendis animi tempora nesciunt dolor! "  

     },
    {
        pagenumber: 2,
        post: "Vice Captain",
        nam: "Virat Kohli",
        pp: "virat_kohli_review.webp",
        revtext : "Virat -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nostrum fuga accusantium. Ipsum odio eveniet esse aut. Reiciendis animi tempora nesciunt dolor! "  

     },
    {
        pagenumber: 3,
        post: "Player",
        nam: "Rohit Sharma",
        pp: "Rohit-sharma-review.jpg",
        revtext : "Rohit - Lorem, rohit ipsum dolor sit amet consectetur adipisicing elit. Est nostrum fuga accusantium. Ipsum odio eveniet esse aut. Reiciendis animi tempora nesciunt dolor! "  

     }
];
console.log(reviews.length)
let ctype=0;

let pp=document.querySelector('.pp');
let post=document.querySelector('.post');
let nam=document.querySelector('.nam')
let revtext=document.querySelector('.revtext');
let pagenumber=document.querySelector('.pagenumber');

// console.log(pp,post,nam,revtext);

let pre= document.querySelector('.pre');
let next=document.querySelector('.next');

window.addEventListener("DOMContentLoaded", function()
{
    pp.src=reviews[ctype].pp;
    post.innerHTML=reviews[ctype].post;
    nam.innerHTML=reviews[ctype].nam;
    revtext.innerHTML=reviews[ctype].revtext;
    pagenumber.innerHTML=reviews[ctype].pagenumber;
})

function showit(ctype)
{
    pp.src=reviews[ctype].pp;
    post.innerHTML=reviews[ctype].post;
    nam.innerHTML=reviews[ctype].nam;
    revtext.innerHTML=reviews[ctype].revtext;
    pagenumber.innerHTML=reviews[ctype].pagenumber;
}



next.addEventListener('click',function ()
{
    if(ctype>reviews.length-1)
    {
        ctype=0;
    }

    ctype++;
    showit(ctype);

})

pre.addEventListener('click',function ()
{
    if(ctype<0)
    {
        ctype=reviews.length-1;
    }
    ctype--;
    showit(ctype);
})












































// let pre = document.querySelector('.pre');
// // let pre = document.querySelector('.pre;last-child');
// let pagenumber=document.getElementById('pagenumber');

// console.log(pagenumber);
// console.log(pre);

// pre.addEventListener('click',()=>
// {
//     pagenumber.innerHTML="<span>0</span>"
// })