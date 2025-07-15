const produtos = [
  // { id: 1, nome: "Notebook", estoque: 50 },
  // { id: 2, nome: "Smartphone", estoque: 30 },
  // { id: 3, nome: "Tablet", estoque: 20 },
  // Adicione mais produtos até ID 10...
]
const usuarios = [
  // { id: 1, nome: "Ana Silva", idade: 25 },
  // { id: 2, nome: "Carlos Souza", idade: 32 },
  // { id: 3, nome: "Maria Oliveira", idade: 28 },
  // Adicione mais usuários até ID 10...
]

async function fetchData(startId, endId) {
  try {
      const [produtosRes, usuariosRes] = await Promise.all([
          fetch(`/api/produtos?startId=${startId}&endId=${endId}`),
          fetch(`/api/usuarios?startId=${startId}&endId=${endId}`)
      ]);
      const produtosFiltrados = await produtosRes.json()
      const usuariosFiltrados = await usuariosRes.json()
      return { produtosFiltrados, usuariosFiltrados }
  } catch (error) {
      console.error("Erro ao buscar dados:", error)
      return { produtosFiltrados: [], usuariosFiltrados: [] }
  }
}

// Configuração dos gráficos
function criarGraficos() {
  const startId = parseInt(document.getElementById('startId').value) || 1
  const endId = parseInt(document.getElementById('endId').value) || 10
  const { produtosFiltrados, usuariosFiltrados } = fetchData(startId, endId)

  // Gráfico 1: Produto x Estoque (Barras Horizontais)
  const stockCtx = document.getElementById('stockChart').getContext('2d')
  new Chart(stockCtx, {
      type: 'bar',
      data: {
          labels: produtosFiltrados.map(p => p.nome),
          datasets: [{
              label: 'Quantidade em Estoque',
              data: produtosFiltrados.map(p => p.estoque),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          indexAxis: 'y', // Barras horizontais
          responsive: true,
          plugins: {
              title: { display: true, text: 'Produto x Estoque' }
          }
      }
  })

  // Gráfico 2: Usuário x Idade (Barras Verticais)
  const ageCtx = document.getElementById('ageChart').getContext('2d')
  new Chart(ageCtx, {
      type: 'bar',
      data: {
          labels: usuariosFiltrados.map(u => u.nome),
          datasets: [{
              label: 'Idade',
              data: usuariosFiltrados.map(u => u.idade),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              title: { display: true, text: 'Usuário x Idade' }
          }
      }
  });
}

// Atualizar gráficos com filtro
function updateCharts() {
  const startId = parseInt(document.getElementById('startId').value)
  const endId = parseInt(document.getElementById('endId').value)
  
  // Limpar gráficos existentes
  document.querySelectorAll('canvas').forEach(canvas => {
      canvas.parentNode.replaceChild(canvas.cloneNode(), canvas)
  });
  
  // Recriar com novos dados filtrados
  criarGraficos()
}

// Inicializar gráficos ao carregar a página
window.onload = criarGraficos
