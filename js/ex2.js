document.querySelector("#botao").addEventListener("click", ()=>{
    document.getElementsByTagName("h1")[0].style.color="blue";
    let resultado,resposta=" ";
    let num=parseInt(document.getElementById("num").value);
    //laço de repetição
    for (let i=1; i<=10; i++){
        resultado = num*i;
        resposta = resposta + num + " x " +i+" = "+resultado+"<br>";
    }
        document.getElementById("resultado").innerHTML=resposta;
})