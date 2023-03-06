const bt_send = document.querySelector(".send");
const bt_sendContact = document.querySelector(".send-contact");
const div_contact = document.querySelector(".contact");
const div_social = document.querySelector(".social");
const div_listSocial = document.querySelector(".list-social");

function modal2() {
  div_contact.classList.toggle("none");
  div_listSocial.classList.toggle("none");
  div_social.style.background = "hsl(217, 19%, 35%)";
}
function modal() {
  div_contact.classList.toggle("none");
  div_listSocial.classList.toggle("none");
  div_social.style.background = "white";
}
bt_send.addEventListener("click", modal);
bt_sendContact.addEventListener("click", modal2);
