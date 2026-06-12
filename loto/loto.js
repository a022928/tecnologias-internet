const botaosortear = document.querySelector("#botaosortear");
const botaoReset   = document.querySelector("#botaoreset");
const somSorteio   = document.getElementById("somSorteio");
const arrayNumerosSorteados = [];
let elemento;


botaosortear.addEventListener("click", function () {

    sortearNumerosParaLoto();

    if (somSorteio) {
        somSorteio.currentTime = 0;
        somSorteio.play().catch(function () {
            console.log("Som bloqueado pelo navegador.");
        });
    }
});


botaoReset.addEventListener("click", resetarLoto);


// // ************************************************************************
// //  FUNÇÃO PARA SORTEAR NÚMEROS para o Loto
// //  conforme saiem acresecenta-os ao array: arrayNumerosSorteados
// // ........................................................................
function sortearNumerosParaLoto () { 
    
    var numeronaosaiu = true;
    while (numeronaosaiu) {
        var numeroSorteado = Math.floor(Math.random() * 91)
        if (arrayNumerosSorteados.indexOf(numeroSorteado) == -1) {
            if (numeroSorteado != 0) {
                arrayNumerosSorteados.push(numeroSorteado);
            
                mostraNumeroSorteado(numeroSorteado);
                numeronaosaiu = false;
            }
        } else {
            if (arrayNumerosSorteados.indexOf(numeroSorteado) == -1) {                
                if (numeroSorteado != 0) {
                    arrayNumerosSorteados.push(numeroSorteado);
                    mostraNumeroSorteado(numeroSorteado);
                }
             }
        }
    }
   
}

// =====================================================================================
//  
//  Esta função a partir do numero sorteado cria variável com o nome do elemento do HTML
//  e estiliza-o com o Javascript
// .....................................................................................

function mostraNumeroSorteado(numerosorteado) {
    
    const ultNrSorteado = document.querySelector("#ultimonumerosorteado")
    
    switch(numerosorteado) {      
        case 1:
            bola1.innerHTML = numerosorteado;              
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola1")
            break;
        case 2:
            bola2.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola2")
            break;
        case 3:
            bola3.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola3")
            break;
        case 4:
            bola4.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola4")
            break;
        case 5:
            bola5.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola5")
            break;
        case 6:
            bola6.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola6")
            break;
        case 7:
            bola7.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola7")
            break;
        case 8:
            bola8.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola8")
            break;
        case 9:
            bola9.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola9")
            break;
        case 10:
            bola10.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola10")
            break;
        case 11:
            bola11.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola11")
            break;
        case 12:
            bola12.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola12")
            break;
        case 13:
            bola13.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola13")
            break;
        case 14:
            bola14.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola14")
            break;
        case 15:
            bola15.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola15")
            break;
        case 16:
            bola16.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola16")
            break;
        case 17:
            bola17.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola17")
            break;
        case 18:
            bola18.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola18")
            break;
        case 19:
            bola19.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola19")
            break;
        case 20:
            bola20.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola20")
            break;
        case 21:
            bola21.innerHTML = numerosorteado; 
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola21")
            break;
        case 22:
            bola22.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola22")
            break;
        case 23:
            bola23.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola23")
            break;
        case 24:
            bola24.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola24")
            break;
        case 25:
            bola25.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola25")
            break;
        case 26:
            bola26.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola26")
            break;
        case 27:
            bola27.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola27")
            break;
        case 28:
            bola28.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola28")
            break;
        case 29:
            bola29.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola29")
            break;
        case 30:
            bola30.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola30")
            break;
        case 31:
            bola31.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola31")
            break;
        case 32:
            bola32.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola32")
            break;
        case 33:
            bola33.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola33")
            break;
        case 34:
            bola34.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola34")
            break;
        case 35:
            bola35.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola35")
            break;
        case 36:
            bola36.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola36")
            break;
        case 37:
            bola37.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola37")
            break;
        case 38:
            bola38.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola38")
            break;
        case 39:
            bola39.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola39")
            break;
        case 40:
            bola40.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola40")
            break;
        case 41:
            bola41.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola41")
            break;
        case 42:
            bola42.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola42")
            break;
        case 43:
            bola43.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola43")
            break;
        case 44:
            bola44.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola44")
            break;
        case 45:
            bola45.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola45")
            break;
        case 46:
            bola46.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola46")
            break;
        case 47:
            bola47.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola47")
            break;
        case 48:
            bola48.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola48")
            break;
        case 49:
            bola49.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola49")
            break;
        case 50:
            bola50.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola50")
            break;
        case 51:
            bola51.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola51")
            break;
        case 52:
            bola52.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola52")
            break;
        case 53:
            bola53.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola53")
            break;
        case 54:
            bola54.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola54")
            break;
        case 55:
            bola55.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola55")
            break;
        case 56:
            bola56.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola56")
            break;
        case 57:
            bola57.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola57")
            break;
        case 58:
            bola58.innerHTML = numerosorteado; 
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola58") 
            break;
        case 59:
            bola59.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola59")
            break;
        case 60:
            bola60.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola60")
            break;
        case 61:
            bola61.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola61")
            break;
        case 62:
            bola62.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola62")
            break;
        case 63:
            bola63.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola63")
            break;
        case 64:
            bola64.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola64")
            break;
        case 65:
            bola65.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola65")
            break;
        case 66:
            bola66.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola66")
            break;
        case 67:
            bola67.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola67")
            break;
        case 68:
            bola68.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola68")
            break;
        case 69:
            bola69.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola69")
            break;
        case 70:
            bola70.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola70")
            break;
        case 71:
            bola71.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola71")
            break;
        case 72:
            bola72.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola72")
            break;
        case 73:
            bola73.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola73")
            break;
        case 74:
            bola74.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola74")
            break;
        case 75:
            bola75.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola75")
            break;
        case 76:
            bola76.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola76")
            break;
        case 77:
            bola77.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola77")
            break;
        case 78:
            bola78.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola78")
            break;
        case 79:
            bola79.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola79")
            break;
        case 80:
            bola80.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola80")
            break;
        case 81:
            bola81.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola81")
            break;
        case 82:
            bola82.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola82")
            break;
        case 83:
            bola83.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola83")
            break;
        case 84:
            bola84.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola84")
            break;
        case 85:
            bola85.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola85")
            break;
        case 86:
            bola86.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola86")
            break;
        case 87:
            bola87.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola87")
            break;
        case 88:
            bola88.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola88")
            break;
        case 89:
            bola89.innerHTML = numerosorteado;    
            ultimonumerosorteado.innerHTML = numerosorteado;    
            elemento = document.getElementById("bola89")
            break;
        case 90:
            bola90.innerHTML = numerosorteado;  
            ultimonumerosorteado.innerHTML = numerosorteado;    
              
            elemento = document.getElementById("bola90")
            break;
    }
    pintaNumeroAtual();
    
}


function resetarLoto() {

    document.querySelectorAll(".bolas").forEach(function (bola) {
        bola.removeAttribute("style");
        bola.classList.remove("sorteada");
    });

    document.getElementById("ultimonumerosorteado").textContent = "";

    arrayNumerosSorteados.length = 0;
}


// =================================================================
//   PINTA NUMERO SORTEADO
// .................................................................
function pintaNumeroAtual() {
    elemento.style.cssText =
        'background-image: linear-gradient(to left, yellow, #FFB6C1, yellow);'+
        'color: red;'+        
        'border: 5px solid #2E8B57;'+
        'border-radius: 50px;'
        
}

function pintaElementoTemp() {
    elemTemp.style.cssText =
        'background-image: linear-gradient(to left, pink, pink, pink);'+
        'color: black;'+        
        'border: 5px solid #2E8B57;'+
        'border-radius: 50px;'
}
