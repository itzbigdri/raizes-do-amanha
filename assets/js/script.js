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


