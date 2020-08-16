function cadPessoa(nome, sobrenome, altura, email, sexo) {

    var tb = document.getElementById('tbPessoas');   
    var qtdLinhas = tb.rows.lenght;                  
    var linha = tb.insertRow(qtdLinhas);               

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellSobrenome = linha.insertCell(2);
    var cellAltura = linha.insertCell(3);
    var cellEmail = linha.insertCell(4);
    var celSexo = linha.insertCell(5);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML= sobrenome;
    cellAltura.innerHTML = altura;
    cellEmail.innerHTML = email;
    celSexo.innerHTML = sexo;
};