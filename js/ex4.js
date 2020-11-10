document.querySelector("#btn").addEventListener("click", ()=>{
    let qtd = parseInt(document.getElementById("qtd").value);
    let preco = parseFloat(document.getElementById("qtd").value);
    let total = qtd*preco;
    let desconto, totalpagar;
    total = total.toLocaleString("pt-br", {style: "currency", currency:"BRL"});
    document.getElementById("total").value = total;

    if (qtd<=5) {
        desconto= 2/100;
        document.getElementById("desc").value = "2%";
    }
    if (qtd>5 && qtd<=10) {
        desconto= 3/100;
        document.getElementById("desc").value = "3%";
    }
    if (qtd>10) {
        desconto= 5/100;
        document.getElementById("desc").value = "5%";
    }
    totalpagar = total - desconto;
    document.getElementById("totalpagar").value= totalpagar;
})