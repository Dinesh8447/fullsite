const slidenew=document.getElementById('slidenew');
const menubtn=document.getElementById('menubtn');

menubtn.addEventListener('click',()=>{
    if(slidenew.style.right=="-250px"){
        slidenew.style.right="0px";
    }else{
        slidenew.style.right="-250px";
    }
})