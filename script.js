// Seleciona o formulário
const form = document.querySelector("#form-habits")
// Inicia a biblioteca passando o formulário na função
const nlwSetup = new NLWSetup(form)
// Seleciona o botão do canto superior direito
const button = document.querySelector("header button")

// Executa uma função quando tiver ação de click no botão
button.addEventListener("click", add)
// Executa uma função para salvar quando o formulário sofrer alterações
form.addEventListener("change", save)

// Cria função de adicionar data
function add() {
  // Grava a data de hoje apenas o dia e o mês. Ex: 20/01
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // Verifica que o dia já existe
  const dayExists = nlwSetup.dayExists(today)

  // Se existir envia um alerta
  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  // Se não adiciona outro alerta e adiciona o dia
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

// Cria função para salvar a interação
function save() {
  // Adiciona no cache do navegador o objeto atual da página
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// Carrega o cache salvo do navegador, caso não exista carrega em branco
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()