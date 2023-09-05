const reviews=[
    {
        pagenumber: 2,
        post: "vice captain",
        nam: "virat kohli",
        pp: "virat_kohli_review.webp",
        revtext : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nostrum fuga accusantium. Ipsum odio eveniet esse aut. Reiciendis animi tempora nesciunt dolor! "  

     },
    {
        pagenumber: 3,
        post: "Player",
        nam: "Rohit Sharma",
        pp: "Rohit-sharma-review.jpg",
        revtext : "Lorem, rohit ipsum dolor sit amet consectetur adipisicing elit. Est nostrum fuga accusantium. Ipsum odio eveniet esse aut. Reiciendis animi tempora nesciunt dolor! "  

     }
];

window.addEventListener("DOMContentLoaded", function ()
{
    console.log("shake and bake");
})

let ctype=0;

let pp=document.querySelector('.pp');
let post=document.querySelector('.post');
let nam=document.querySelector('.nam')
let revtext=document.querySelector('.revtext');
let pagenumber=document.querySelector('.pagenumber');

// console.log(pp,post,nam,revtext);

let pre= document.querySelector('.pre');
let next=document.querySelector('.next');

next.addEventListener('click',function ()
{
    pp.src=reviews[ctype].pp;
    post.innerHTML=reviews[ctype].post;
    nam.innerHTML=reviews[ctype].nam;
    revtext.innerHTML=reviews[ctype].revtext;
    pagenumber.innerHTML=reviews[ctype].pagenumber;
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