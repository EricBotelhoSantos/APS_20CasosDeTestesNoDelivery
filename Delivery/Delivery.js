function autenticar (usuarios, email, senha) {
    if (!Array.isArray(usuarios)) 
        return false;
    const usuario = usuarios.find(u => u.email === email);
    if (!usuario) 
        return false;
    return usuario.senha === senha && usuario.ativo === true;
}

function forcaSenha(senha) {

}

function podeLogar(usuario) {

}

function calcularFrete(distanciaKm) {

}

function aplicarCupom(valor, cupom) {

}

module.exports = {autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom};