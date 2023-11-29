function validarEnviar() {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var emailComercial = document.getElementById('emailComercial').value;
    var telefoneComercial = document.getElementById('telefoneComercial').value;
    var nomeEmpresa = document.getElementById('nomeEmpresa').value;
    var areaAtuacao = document.getElementById('areaAtuacao').value;
    var cargo = document.getElementById('cargo').value;

    // Validar campos
    if (!nomeCompleto || !emailComercial || !telefoneComercial || !nomeEmpresa || !areaAtuacao || !cargo) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    return;
    }

    // Validar o formato do e-mail
    var emailCorreto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCorreto.test(emailComercial)) {
        alert('Por favor, insira um endereço de e-mail comercial válido.');
    return;
    }

    // Validar o formato do telefone (formato brasileiro)
    var telefoneCorreto = /^\([1-9]{2}\)[0-9]{5}\-[0-9]{4}$/;

    if (!telefoneCorreto.test(telefoneComercial)) {
        alert('Por favor, insira um número de telefone comercial válido (Ex.: (xx)xxxxx-xxxx).');
        return;
    }

    // Exibir resumo dos dados
    var sumario = 'Resumo dos seus dados:\n\nNome Completo: ' + nomeCompleto +
                '\nEmail Comercial: ' + emailComercial +
                '\nTelefone Comercial: ' + telefoneComercial +
                    '\nNome da Empresa: ' + nomeEmpresa +
                '\nÁrea de Atuação: ' + areaAtuacao +
                    '\nCargo: ' + cargo;

    alert(sumario);

    // Você pode enviar os dados para o servidor ou realizar outras ações aqui
}