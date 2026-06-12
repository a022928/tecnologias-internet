
// let edtDescricao    = document.getElementById('inputTarefa');
// let edtQuantidade   = document.getElementById('inputquant');   
// let edtPrcUnit      = document.getElementById('inputprcunit');   
// let btnAdd          = document.getElementById('btn-add');
// let main            = document.getElementById('areaLinha');
// let contadorTarefas = 0;


// ==========================================
function fInserir() {
    // Pegar valor digitado no input
    let valorInput = input.value;
    
    alert("Atenção ! Exemplo de mensagem em javascript...");
    
    // Se não for vazio, nulo ou indefinido
    if ((valorInput != "") && (valorInput != null) && (valorInput !== "undefinid")) {
        
        ++contadorTarefas;
        
        // [ `` ] -> Fazer com Shift + 2x sinal grave - Chama-se crase
        let novoItem = ` <input list="lstdesigner">
        <datalist id="lstdesigner">
            <option >HP Desktop</option>
            <option >Portátil Asus VivoBook</option>
            <option >Impressora Epson ET-2751</option>
        </datalist>
        <input type="number" name="inputquant" id="inputquant" class="inputquant" step="1" min=1 max="5000" value="1" required>
        <input type="text" name="inputprcunit" id="inputprcunit">
        <input type="text" id="edttotallinha"disabled>
        <button onclick="addLinha()" id="btn-add" class="add">Adicionar</button>`;
    
        // Adicionar novo item na lista
        // Irá acrescentar ao que o main já tem + um novoItem
        main.innerHTML += novoItem 
        // Zerar INPUT
        input.value = "";
        input.focus();
    }
}   
    
    
function fCalcular() {
    let vQtdLinha = document.getElementById('inputQuant').value;
    let vPcULinha = document.getElementById('inputPrcUnit').value;
    
    document.getElementById('edtTotalLinha').innerHTML = vQtdLinha * vPcULinha;
    
    alert(document.getElementById('edtTotalLinha').innerHTML);
    
    // return calcLinha;
};
    