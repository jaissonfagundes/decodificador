//----Variáveis
let entradaTexto;
let saidaTexto;

//--------Função para criptografar a mensagem e mostrar na área de saída------
//-------- Para fins de estudo foi realizada com looping e switch-------

function criptografar(){
    entradaTexto = document.getElementById('entrada').value;
    let textoEntrada = entradaTexto.split('');
    for(let i = 0; i <= textoEntrada.length; i++){
        switch(textoEntrada[i]){
            case 'a':
                textoEntrada[i] = 'ai';
                break;
            case 'e':
                textoEntrada[i] = 'enter';
                break;
            case 'i':
                textoEntrada[i] = 'imes';
                break;
            case 'o':
                textoEntrada[i] = 'ober';
                break;
            case 'u':
                textoEntrada[i] = 'ufat';
                break;
        }
    }
    console.log(textoEntrada.join(''));
    document.getElementById('saida').innerHTML = textoEntrada.join('');
}

//--------Função para descriptografar a mensagem e mostrar na área de saída------

function descriptografar(){
    entradaTexto = document.getElementById('entrada').value;
        console.log(`${saidaTexto} + 1`);
        console.log(`${entradaTexto} + 2`);

        saidaTexto = entradaTexto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
            console.log(`${saidaTexto} + 3`);
            document.getElementById('saida').innerHTML = saidaTexto;
        }

//-------- Função para copiar o texto de saída para área de transferência

function copiar(){
    let textoCopiado = document.getElementById('saida');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}