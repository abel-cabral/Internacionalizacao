var dicionario;

function i(chave) {
  if (dicionario[chave]) return dicionario[chave];
  return dicionario;
}

function initInternacionalizacao(idioma) {
    for (let i = 0; i < idiomas.length; i++) {
        if (idiomas[i].hasOwnProperty(idioma)) {
            dicionario = idiomas[i][idioma];
            return;
        }
    }
}

function atualizarTraducao() {
    try {
        for (let chave in dicionario) {
            // Verifique se a chave é uma propriedade própria do objeto (evita herança indesejada)
            if (dicionario.hasOwnProperty(chave)) {
                // Atualize o texto do elemento no DOM com o texto traduzido
                document.getElementById(chave).textContent = i(chave);
            }
        }
    } catch (error) {
        return;
    }
    
}

// Atribuindo as funções diretamente ao objeto window
window.i = i;
window.initInternacionalizacao = initInternacionalizacao;
