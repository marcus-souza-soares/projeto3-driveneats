let lista;
let opcao_1;
let opcao_2;
let opcao_3;
// pratos
function mudarBordapratos(id) {
    lista = document.getElementsByClassName('comida');
    for (let i = 0; i < lista.length; i++) {
        lista[i].style.border = "unset";
      }
    document.getElementById(id).style.border = "5px solid green";
    opcao_1 = id;
    alert(id)
}
// bebidas
function mudarBordabebidas(id) {
    lista = document.getElementsByClassName('bebida');
    for (let i = 0; i < lista.length; i++) {
        lista[i].style.border = "unset";
      }
    document.getElementById(id).style.border = "5px solid green";
    opcao_2 = id;
    alert(id)
}
// sobremesas
function mudarBordasobremesas(id) {
    lista = document.getElementsByClassName('sobremesa');
    for (let i = 0; i < lista.length; i++) {
        lista[i].style.border = "unset";
      }
    document.getElementById(id).style.border = "5px solid green";
    opcao_3 = id;
    alert(id)
}



// botao de pedido
function fecharpedido() {
    alert("ainda vai funcionar")
}