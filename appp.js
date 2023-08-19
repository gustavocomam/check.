/*salvar o texto*/
function salvarTexto() {
  var texto = document.getElementById("comment").value; // Obtém o valor do texto digitado
  var textosEnviados = localStorage.getItem("textosEnviados"); // Obtém os textos já enviados

  if (textosEnviados) {
    textosEnviados = JSON.parse(textosEnviados); // Converte o JSON em um array
  } else {
    textosEnviados = []; // Cria um novo array se não houver textos enviados
  }

  textosEnviados.push(texto); // Adiciona o novo texto ao array
  localStorage.setItem("textosEnviados", JSON.stringify(textosEnviados)); // Salva o array atualizado no localStorage
  alert("Seu comentario foi enviado");
}
