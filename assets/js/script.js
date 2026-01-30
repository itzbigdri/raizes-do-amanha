// Importando dados
import initialData from "./data";

// Chave do localStorage
const DB_KEY = "appDB";

// Inicializando localStorage
function initDB(key, data) {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        console.log(`LocalStorage "${key}" já existe`);
    }
}

// Pegando dados do localStorage
function getDB(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Atualizando os dados do localStorage
function updDB(key, data) {
    if (!localStorage.getItem(key)){
      initDB(key, data)
    } else {
      localStorage.setItem(key, JSON.stringify(data))
    }
}

// Adicionando items
// User
function addUser(user) {
    const db = getDB(DB_KEY);
    if (!db) return;

    db.public_data.users.push(user);
    updDB(DB_KEY, db);
}

// Curso
function addCurso(curso) {
    const db = getDB(DB_KEY);
    if (!db) return;

    db.public_data.cursos.push(curso);
    updDB(DB_KEY, db);
}

// Produto
function addProduto(produto) {
    const db = getDB(DB_KEY);
    if (!db) return;

    db.public_data.produtos.push(produto);
    updDB(DB_KEY, db);
}

// itemCarrinho
function addCarrinho(item) {
    const db = getDB(DB_KEY);
    if (!db) return;

    db.public_data.carrinho.push(item);
    updDB(DB_KEY, db);
}

// Criança
function addCrianca(crianca) {
    const db = getDB(DB_KEY);
    if (!db) return;

    db.public_data.criancas.push(crianca);
    updDB(DB_KEY, db);
}


// Retornando as listas
// Users
function getUsers() {
    const db = getDB(DB_KEY);
    return db ? db.public_data.users : [];
}

// Cursos
function getCursos() {
    const db = getDB(DB_KEY);
    return db ? db.public_data.cursos : [];
}

// Escolas
function getEscolas() {
    const db = getDB(DB_KEY);
    return db ? db.public_data.escolas : [];
}

// Crianças
function getCriancas() {
    const db = getDB(DB_KEY);
    return db ? db.public_data.criancas : [];
}

// Produtos
function getProdutos() {
    const db = getDB(DB_KEY);
    return db ? db.public_data.produtos : [];
}

// Carrinho
function getCarrinho() {
    const db = getDB(DB_KEY);
    return db ? db.public_data.carrinho : [];
}

