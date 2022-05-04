// Acessar as o display, inicialmente com um valor vazio e o parâmetro val
function c(val) {
  document.getElementById("display").value = val;
}
function v(val) {
  document.getElementById("display").value += val;
}
function e() {
  try {
    c(eval(document.getElementById("display").value));
  } catch (e) {
    c("Erro!"); // passa o objeto de exceção para o manipulador de erro
  }
}
