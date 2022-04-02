let preco_prato;
let preco_bebida;
let preco_sobremesa;

let pedidoprato
let pedidobebida
let pedidosobremesa

let total;
let texto;

function mudarBordaprato(elemento, prato){
    const verde = document.querySelector(".bordaverdeprato");
    const aparece = document.querySelector(".displaymostrarprato");
    const check = document.querySelector( "#" + elemento.id + " > img.check")
    if (verde !== null){
        verde.classList.remove("bordaverdeprato");
        aparece.classList.remove("displaymostrarprato");
    }
    elemento.classList.add("bordaverdeprato");
    check.classList.add("displaymostrarprato");
    pedidoprato = prato;
    preco_prato = document.querySelector("#" + elemento.id + "  .precoprato").innerHTML
    preco_prato = parseFloat(preco_prato)
    alert(pedidoprato);
    fecharpedidoVerde();
}

function mudarBordabebida(elemento, prato){
    const verde = document.querySelector(".bordaverdebebida");
    const aparece = document.querySelector(".displaymostrarbebida");
    const check = document.querySelector( "#" + elemento.id + " > img.check")
    if (verde !== null){
        verde.classList.remove("bordaverdebebida");
        aparece.classList.remove("displaymostrarbebida");
    }
    elemento.classList.add("bordaverdebebida");
    check.classList.add("displaymostrarbebida");
    preco_bebida = document.querySelector("#" + elemento.id + " .precobebida").innerHTML
    preco_bebida = parseFloat(preco_bebida)
    pedidobebida = prato;
    alert(pedidobebida);
    fecharpedidoVerde();
}

function mudarBordasobremesa(elemento){
    const verde = document.querySelector(".bordaverdesobremesa");
    const aparece = document.querySelector(".displaymostrarsobremesa");
    const check = document.querySelector( "#" + elemento.id + " > img.check")
    if (verde !== null){
        verde.classList.remove("bordaverdesobremesa");
        aparece.classList.remove("displaymostrarsobremesa");
    }
    elemento.classList.add("bordaverdesobremesa");
    check.classList.add("displaymostrarsobremesa");
    preco_sobremesa = document.querySelector("#" + elemento.id + " .precosobremesa").innerHTML
    preco_sobremesa = parseFloat(preco_sobremesa)
    pedidosobremesa = elemento.id;
    alert(pedidosobremesa);
    fecharpedidoVerde();
}


function fecharpedidoVerde() {
    if ((typeof preco_prato === 'number') && (typeof preco_bebida === 'number') && (typeof preco_sobremesa === 'number')){
        document.querySelector(".fecha-pedido").style.background = "green";
    }    
}
// botao de pedido
function fecharpedido() {
    if ((typeof preco_prato === 'number') && (typeof preco_bebida === 'number') && (typeof preco_sobremesa === 'number')){
        total = preco_bebida + preco_prato + preco_sobremesa;
        total = total.toFixed(2);
        preco_prato = preco_prato.toFixed(2);
        preco_bebida = preco_bebida.toFixed(2);
        preco_sobremesa = preco_sobremesa.toFixed(2);
        texto = "Olá, gostaria de fazer um pedido: " + "\n" +
        " - Prato: "+ pedidoprato + "\n" +
        "- Bebida: " + pedidobebida + "\n" +
        " - Sobremesa: " + pedidosobremesa + "\n" +
        "Total: R$ " + total;
        texto = encodeURIComponent(texto)
        window.open("https://wa.me/+5573999340124?text=" + texto);
    } else {
        alert("Por favor, selecione as 3 opções!");
    }
}

