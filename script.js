let listaclasses;
let listacheck;
let opcao_1;
let opcao_2;
let opcao_3;
// pratos
function mudarBordapratos(id) {
    listaclasses = document.getElementsByClassName('comida');
    listacheck = document.getElementsByClassName('check');
    for (let i = 0; i < listaclasses.length; i++) {
        listaclasses[i].style.border = "unset";
    }
    document.getElementById(id).style.border = "5px solid green";
    
    opcao_1 = id;
    alert(id)
}
// bebidas
function mudarBordabebidas(id) {
    listaclasses = document.getElementsByClassName('bebida');
    for (let i = 0; i < listaclasses.length; i++) {
        listaclasses[i].style.border = "unset";
        //document.getElementById("check").style.display = "none";
      }
    document.getElementById(id).style.border = "5px solid green";
    //document.getElementById("check").style.display = "block";
    opcao_2 = id;
    alert(id)
}
// sobremesas
function mudarBordasobremesas(id) {
    listaclasses = document.getElementsByClassName('sobremesa');
    for (let i = 0; i < listaclasses.length; i++) {
        listaclasses[i].style.border = "unset";
        //document.getElementById("check").style.display = "none";
      }
    document.getElementById(id).style.border = "5px solid green";
    //document.getElementById("check").style.display = "block";
    opcao_3 = id;
    alert(id)
}



// botao de pedido
function fecharpedido() {
    alert("ainda vai funcionar")
}