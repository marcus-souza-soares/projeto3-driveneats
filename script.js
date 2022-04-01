let preco_prato;
let preco_bebida;
let preco_sobremesa;
let total;


function mudarBordaprato(elemento){
    const verde = document.querySelector(".bordaverdeprato");
    const aparece = document.querySelector(".displaymostrarprato");
    const check = document.querySelector( "#" + elemento.id + " > ion-icon")
    if (verde !== null){
        verde.classList.remove("bordaverdeprato");
        aparece.classList.remove("displaymostrarprato");
    }
    elemento.classList.add("bordaverdeprato");
    check.classList.add("displaymostrarprato");
    let pedido = elemento.id;
    preco_prato = document.querySelector("#" + elemento.id + "  .precoprato").innerHTML
    preco_prato = parseFloat(preco_prato)
    alert(pedido);
    fecharpedidoVerde();
}

function mudarBordabebida(elemento){
    const verde = document.querySelector(".bordaverdebebida");
    const aparece = document.querySelector(".displaymostrarbebida");
    const check = document.querySelector( "#" + elemento.id + " > ion-icon")
    if (verde !== null){
        verde.classList.remove("bordaverdebebida");
        aparece.classList.remove("displaymostrarbebida");
    }
    elemento.classList.add("bordaverdebebida");
    check.classList.add("displaymostrarbebida");
    preco_bebida = document.querySelector("#" + elemento.id + " .precobebida").innerHTML
    preco_bebida = parseFloat(preco_bebida)
    let pedido = elemento.id;
    alert(pedido);
    fecharpedidoVerde();
}

function mudarBordasobremesa(elemento){
    const verde = document.querySelector(".bordaverdesobremesa");
    const aparece = document.querySelector(".displaymostrarsobremesa");
    const check = document.querySelector( "#" + elemento.id + " > ion-icon")
    if (verde !== null){
        verde.classList.remove("bordaverdesobremesa");
        aparece.classList.remove("displaymostrarsobremesa");
    }
    elemento.classList.add("bordaverdesobremesa");
    check.classList.add("displaymostrarsobremesa");
    preco_sobremesa = document.querySelector("#" + elemento.id + " .precosobremesa").innerHTML
    preco_sobremesa = parseFloat(preco_sobremesa)
    let pedido = elemento.id;
    alert(pedido);
    fecharpedidoVerde();
}


total = preco_bebida + preco_prato + preco_sobremesa;

function fecharpedidoVerde() {
    if ((typeof preco_prato === 'number') && (typeof preco_bebida === 'number') && (typeof preco_sobremesa === 'number')){
        document.querySelector(".fecha-pedido").style.background = "green";
    }    
}
// botao de pedido
function fecharpedido() {
    if ((typeof preco_prato === 'number') && (typeof preco_bebida === 'number') && (typeof preco_sobremesa === 'number')){
        alert("vamos seguir");
        document.querySelector(".fecha-pedido").style.background = "green";
    } else {
        alert("o pedido ainda nao esta pronto");
    }
}

