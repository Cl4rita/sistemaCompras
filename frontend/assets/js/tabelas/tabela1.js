async function listarUsuarios() {
    const response = await fetch('http://localhost:3000/usuario');
    return response.json();
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const tabela = document.querySelector('#tabelaUsuarios');
    const usuarios = await listarUsuarios();
    tabela.innerHTML = '';
    usuarios.forEach(usuario => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${usuario.idUsuario || usuario.id}</td>
        <td>${usuario.primeiroNome}</td>
        <td>${usuario.sobrenome}</td>
        <td>${usuario.idade}</td>
        <td>${usuario.email}</td>
        <td>${usuario.telefone}</td>
        <td>${usuario.endereco}</td>
        <td>${usuario.cidade}</td>
        <td>${usuario.estado}</td>
        <td>${usuario.dataNasci}</td>`;
      tabela.appendChild(tr);
    });
  });