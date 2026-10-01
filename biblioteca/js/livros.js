const livros = []

/**
 * Função para adicionar novos livros na coleção
 * @param {*} livros - array de livros
 * @param {*} livro - um novo livro
 * @returns colecao com o novo livro adicionado
 */
const adicionarLivro = (livros, livro) => {
    livros.push(livro)
    return livros
}

/**
 * 
 * @param {*} id 
 */
const listar = id => {

}

/**
 * Função que pesquisa livros em uma coleção
 * @param {*} livros - a coleção
 * @param {*} termo - fragmento de título para a pesquisa
 */
const pesquisarLivros = (livros, termo) => {
    return livros.find(livro => livro.titulo.toLowerCase() == termo.toLowerCase())
}

const filtrar = genero =>{

}

const marcarComoLido = id => {

}

const remover = id => {

}

const estatisticas = () => {

}

// dá visibilidade a algumas funções do arquivo js.
module.exports= {adicionarLivro, pesquisarLivros};