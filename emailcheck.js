let email=document.getElementById("email")
email.onblur = function() {
  if (email.value = (' ')) {
    email.classList.add('empty');
  }
};