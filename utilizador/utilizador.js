const dados = localStorage.getItem("utilizadoresRegistados");
const tbody  = document.querySelector("#tabelaUtilizador tbody");
const xmlPre = document.getElementById("xmlUtilizador");

if (dados) {
    const utilizadores = JSON.parse(dados);

    tbody.innerHTML = "";

    utilizadores.forEach(function(utilizador) {
        tbody.innerHTML += `
            <tr>
                <td>${utilizador.username}</td>
                <td>${utilizador.email}</td>
                <td>${"●".repeat(utilizador.password.length)}</td>
            </tr>
        `;
    });

    let xml = "<utilizadores>\n";

    utilizadores.forEach(function(utilizador) {
        xml += `    <utilizador>
        <username>${utilizador.username}</username>
        <email>${utilizador.email}</email>
        <password>${utilizador.password}</password>
    </utilizador>\n`;
    });

    xml += "</utilizadores>";

    xmlPre.textContent = xml;
} else {
    tbody.innerHTML = `
        <tr>
            <td colspan="3">Ainda não existem utilizadores registados.</td>
        </tr>
    `;

    xmlPre.textContent = "Sem dados XML disponíveis.";
}


const btnMostrarXSD = document.getElementById("btnMostrarXSD");
const xsdUtilizador = document.getElementById("xsdUtilizador");

xsdUtilizador.style.display = "none";

btnMostrarXSD.addEventListener("click", function () {

    if (xsdUtilizador.style.display === "block") {
        xsdUtilizador.style.display = "none";
        btnMostrarXSD.textContent = "Mostrar XSD";
    } else {
        fetch("utilizadores.xsd")
            .then(resposta => resposta.text())
            .then(xsdTexto => {
                xsdUtilizador.textContent = xsdTexto;
                xsdUtilizador.style.display = "block";
                btnMostrarXSD.textContent = "Esconder XSD";
            })
            .catch(() => {
                xsdUtilizador.textContent =
                    "Não foi possível carregar o ficheiro utilizadores.xsd.";
                xsdUtilizador.style.display = "block";
            });
    }
});



// const btnMostrarXSD = document.getElementById("btnMostrarXSD");
// const xsdUtilizador = document.getElementById("xsdUtilizador");

// btnMostrarXSD.addEventListener("click", function () {
//     fetch("utilizadores.xsd")
//         .then(function (resposta) {
//             return resposta.text();
//         })
//         .then(function (xsdTexto) {
//             xsdUtilizador.textContent = xsdTexto;
//         })
//         .catch(function () {
//             xsdUtilizador.textContent =
//                 "Não foi possível carregar o ficheiro utilizadores.xsd.";
//         });
// });

// const utilizador = {
//     username: usernameValue,
//     email: emailValue,
//     password: passwordValue
// };

// let utilizadores = JSON.parse(localStorage.getItem("utilizadoresRegistados")) || [];


// const dados  = localStorage.getItem("utilizadoresRegistados");
// const tbody  = document.querySelector("#tabelaUtilizador tbody");
// const xmlPre = document.getElementById("xmlUtilizador");

// if (dados) {
//     const utilizadores = JSON.parse(dados);

//     tbody.innerHTML = "";

//     utilizadores.forEach(function(utilizador) {
//         tbody.innerHTML += `
//             <tr>
//                 <td>${utilizador.username}</td>
//                 <td>${utilizador.email}</td>
//                 <td>${utilizador.password}</td>
//             </tr>
//         `;
//     });

//     let xml = "<utilizadores>\n";

//     utilizadores.forEach(function(utilizador) {
//         xml += `    <utilizador>
//         <username>${utilizador.username}</username>
//         <email>${utilizador.email}</email>
//         <password>${utilizador.password}</password>
//     </utilizador>\n`;
//     });

//     xml += "</utilizadores>";

//     xmlPre.textContent = xml;
// } else {
//     tbody.innerHTML = `
//         <tr>
//             <td colspan="3">Ainda não existem utilizadores registados.</td>
//         </tr>
//     `;

//     xmlPre.textContent = "Sem dados XML disponíveis.";
// }


// utilizadores.push(utilizador);

// localStorage.setItem(
//     "utilizadoresRegistados",
//     JSON.stringify(utilizadores)
// );


// const dados = localStorage.getItem("utilizadoresRegistados");

// const xmlUtilizador = `
// <utilizador>
//     <username>${usernameValue}</username>
//     <email>${emailValue}</email>
//     <password>${passwordValue}</password>
// </utilizador>
// `;

// localStorage.setItem(
//     "utilizadorXML",
//     xmlUtilizador
// );

// if (dados) {
//     const utilizador = JSON.parse(dados);

//     const tbody = document.querySelector("#tabelaUtilizador tbody");

//     tbody.innerHTML = `
//         <tr>
//             <td>${utilizador.username}</td>
//             <td>${utilizador.email}</td>
//             <td>${utilizador.password}</td>
//         </tr>
//     `;
// }

// const dados = localStorage.getItem("utilizadoresRegistados");

// if (dados) {
//     const utilizador = JSON.parse(dados);

//     const xmlUtilizador = `
// <utilizador>
//     <username>${utilizador.username}</username>
//     <email>${utilizador.email}</email>
//     <password>${utilizador.password}</password>
// </utilizador>
// `;

//     document.getElementById("xmlUtilizador").textContent = xmlUtilizador;
// }
