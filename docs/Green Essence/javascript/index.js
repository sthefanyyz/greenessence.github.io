function openPage(pageName, elmnt) {
  //esconde todos os elementos com a classe tabcontent por default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //mostra o conteudo especifico da tab
  document.getElementById(pageName).style.display = "block";


}

//pega o elementi cim id defaultopen e manda abrir
document.getElementById("defaultOpen").click();