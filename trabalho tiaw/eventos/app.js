// Função para buscar eventos por cidade e tipo
function buscarEventos() {
  // Obter o termo de pesquisa da cidade
  var termoCidade = document
    .getElementById("barra-pesquisa")
    .value.toLowerCase();

  // Obter os tipos de eventos selecionados
  var tiposSelecionados = [];
  var checkboxes = document.getElementsByName("tipo-evento");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      tiposSelecionados.push(checkbox.value);
    }
  });

  // Verificar se já existem eventos cadastrados
  var eventosCadastrados = localStorage.getItem("eventos");
  if (eventosCadastrados) {
    // Se já existem eventos cadastrados, obter a lista atual
    var listaEventos = JSON.parse(eventosCadastrados);

    // Filtrar eventos com base no termo de pesquisa da cidade
    var eventosFiltrados = listaEventos.filter(function (evento) {
      return evento.cidade.toLowerCase().includes(termoCidade);
    });

    // Filtrar eventos com base nos tipos selecionados
    if (tiposSelecionados.length > 0) {
      eventosFiltrados = eventosFiltrados.filter(function (evento) {
        return tiposSelecionados.includes(evento.tipo);
      });
    }

    // Exibir os eventos encontrados na página
    exibirEventosEncontrados(eventosFiltrados);
  } else {
    // Se não existem eventos cadastrados, exibir uma mensagem de aviso
    alert("Não existem eventos cadastrados.");
  }
}

// Função para exibir os eventos encontrados na página
function exibirEventosEncontrados(eventos) {
  var resultadoDiv = document.getElementById("resultado");

  // Limpar o conteúdo anterior
  resultadoDiv.innerHTML = "";

  // Exibir cada evento encontrado
  eventos.forEach(function (evento) {
    var eventoDiv = document.createElement("div");
    eventoDiv.setAttribute("id", "card");
    eventoDiv.setAttribute("class", "col-3");
    eventoDiv.innerHTML =
      "<h3>" +
      evento.nome +
      "</h3>" +
      "<p>Data: " +
      evento.data +
      "</p>" +
      "<p>Horário: " +
      evento.horario +
      "</p>" +
      "<p>Cidade: " +
      evento.cidade +
      "</p>" +
      "<p>Tipo: " +
      evento.tipo +
      "</p>";
      

    resultadoDiv.appendChild(eventoDiv);
  });
}
