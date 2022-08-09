// Alterando Texto
let tagP = document.getElementById("paragrafo"); 

//alterando o texto
// tagP.innerText = "Olá mundo"; 

//alterando o html
tagP.innerHTML = "<strong>Olá mundo</strong>";


//Alterando o CSS

let listaTagsLi = document.querySelectorAll("li");

listaTagsLi[0].style.color = "blue";
listaTagsLi[1].style.backgroundColor = "red";
listaTagsLi[2].style.fontSize = "20px";
listaTagsLi[2].style.color = "green";