mybutton = document.getElementById("myBtn");



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




/*******************************************************************************/


const li = document.querySelectorAll(".linksnav");
const sect= document.querySelectorAll("section");

console.log(li);
function activeMenu(){
    let len =sect.length;

    while(len-- && window.scrollY-20 < sect[len].offsetTop){
        li.forEach(Itx => Itx.classList.remove("active"));
        li[len].classList.add("active");
    }

}
activeMenu();
window.addEventListener("scroll", activeMenu);



/********************************************************************************/


text = document.querySelector(".dynamic").textContent="";

function dynamic(){
    let countCharacter=0, countText=0;
    data=["Islam Sayed Galal","Software Engineer"];
    str=data[countText++];
    setInterval(function()
    {
        document.querySelector(".dynamic").textContent += str[countCharacter++];
        if(countCharacter===str.length-1)
        {
            document.querySelector(".dynamic").textContent ="";
            str=data[countText++]
            countCharacter=0;
            if(countText==data.length){
                countText=0;
            }
        }
    },400);
}

dynamic();

