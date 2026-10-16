function autenticar (usuarios, email, senha) {
    const usuario = usuarios.find(u => u.email === email);
    if (!usuario) 
        return false;
    return usuario.senha === senha && usuario.ativo === true;
}

function forcaSenha(senha) {
    if (!senha || senha.length < 8)
        return 'fraca';

    let tipos = 0;
    if (/[a-z]/.test(senha))
        tipos++;
    if (/[A-Z]/.test(senha))
        tipos++;
    if (/[0-9]/.test(senha))
        tipos++;
    if (/[^a-zA-Z0-9]/.test(senha))
        tipos++;

    if (tipos <= 2)
        return 'media';

    return 'forte';
}

function podeLogar(usuario) {
    return usuario.status === 'ativo' && usuario.falhas < 3;
}

function calcularFrete(distanciaKm) {
    if (distanciaKm <= 0) 
        throw new Error('Distancia inválida');
    if (distanciaKm <= 3)
        return 5;

    const kmExcedente = distanciaKm - 3;
    return 5 + (kmExcedente * 1.50);
}

function aplicarCupom(valor, cupom) {
    let valorFinal = valor;

    if (cupom === 'PRIMEIRA10') {
        valorFinal = valor * 0.90;
    }
    else if (cupom === 'VIP20') {
        valorFinal = valor * 0.80;
    }
    else if (cupom !== null && cupom !== undefined && cupom !== '') {
        throw new Error('Cupom inválido');
    }

    return Number(valorFinal.toFixed(2));
}

module.exports = {autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom};