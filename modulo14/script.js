document.addEventListener("DOMContentLoaded", function () {
    // Função para alternar abas de notícias
    function openTab(tabId) {
      // Esconder todos os conteúdos de abas
      var tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(function (content) {
        content.style.display = 'none';
      });
  
      // Mostrar o conteúdo da aba selecionada
      var selectedTabContent = document.getElementById(tabId);
      if (selectedTabContent) {
        selectedTabContent.style.display = 'block';
      }
    }
  
    // Adiciona um ouvinte de evento para o envio do formulário
    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault(); // Impede o envio padrão do formulário
  
      // Exibe o toast
      var toast = new bootstrap.Toast(document.getElementById('success-toast'));
      toast.show();
    });
  
    // Adicione event listeners aos botões de abas
    var tabButtons = document.querySelectorAll('.news-tab button');
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var tabId = this.getAttribute('data-tab'); // Use data-tab para armazenar o ID da aba
        openTab(tabId);
      });
    });
  });
  