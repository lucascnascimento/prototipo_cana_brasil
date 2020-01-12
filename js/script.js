
// Lógica da navbar lateral
var dropdown = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function (e) {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
    e.stopPropagation();
  });
}

// Lógica do collapsible do rodapé sm
var footerCollapsibleBtn = document.getElementsByClassName("footer__item");

for (var i = 0; i < footerCollapsibleBtn.length; i++){
  footerCollapsibleBtn[i].addEventListener("click", function(e) {
    let collapsibleContent = this.nextElementSibling;
    let iconElement = e.target.querySelectorAll("i"); // Pega o elemento que guard o ícone do font-awesome
    console.log(iconElement);
    if (collapsibleContent.style.display === "block"){
      collapsibleContent.style.display = "none";
      iconElement[0].classList.remove("fa-minus")
      iconElement[0].classList.add("fa-plus")
    }
    else{
      collapsibleContent.style.display = "block";
      iconElement[0].classList.remove("fa-plus")
      iconElement[0].classList.add("fa-minus")
    }
  })
}



/* Muda a largura da barra lateral para 250px */
function openNav() {
  document.getElementById("mySideNav").style.width = "15.625rem";
  document.body.style.background = "rgba(0,0,0,0.4)";
}

/* Muda a largura da barra lateral para 250px 0 */
function closeNav() {
  document.getElementById("mySideNav").style.width = "0rem";
  document.body.style.background = "white";
}

// Fecha a barra lateral quando o usuário clica no corpo
function bodyCloseNav(){
  let navSize = document.getElementById("mySideNav").offsetWidth;
  console.log(navSize)
  if( parseInt(navSize) > 0){
    closeNav();
  }
}
 