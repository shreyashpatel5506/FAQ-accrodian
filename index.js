var i;
var acc=document.getElementsByClassName("head")

for(i=0 ;i< acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var img=this.querySelector(".image")
        var second= this.nextElementSibling;
        if(second.style.display==="block"){
            second.style.display="none"
            img.src="icon-plus.svg";
        }
        else{
            second.style.display="block"
            img.src="icon-minus.svg";
        }
    });
}