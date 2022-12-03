// Zadanie 1

const elementList = document.querySelector("#list");

function addToList() {
  let news = document.querySelector("#message").value;
  if (message.value == "" || author.value == "") {
    alert("Wypełnij wszystkie pola");
  } else elementList.innerHTML += "<li>" + news + "</li>";
}
