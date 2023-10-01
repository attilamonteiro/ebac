function addContact() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  // Verifica se o nome contém apenas letras e espaços
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Por favor, insira um nome válido (apenas letras e espaços).");
    return;
  }

  // Verifica se o nome contém apenas numeros
    if (!/^[0-9]+$/.test(phone)) {
        alert("Por favor, insira um telefone válido (apenas números).");
        return;
    }

  // Adiciona uma nova linha à tabela
  var table = document.getElementById("contactTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name;
  cell2.innerHTML = phone;

  // Limpa os campos do formulário
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}
