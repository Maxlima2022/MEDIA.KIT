// Selecionar um elemento pelo ID e alterar seu conteúdo
document.getElementById("myElement").innerHTML = "Novo conteúdo";

// Selecionar elementos por classe e alterar seu estilo
var elements = document.getElementsByClassName("myClass");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "red";
}

// Adicionar um ouvinte de evento a um elemento
document.getElementById("myButton").addEventListener("click", function() {
  alert("Botão clicado!");
});
