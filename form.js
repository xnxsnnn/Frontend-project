let f=document.getElementById("fname")
f.onblur = function() {
  if (f.value = (' ')) {
    f.classList.add('invalid');
  }
};

let l=document.getElementById("lname")
l.onblur = function() {
  if (l.value = (' ')) {
    l.classList.add('invalid');
  }
};

let e=document.getElementById("email")
e.onblur = function() {
  if (e.value = (' ')) {
    e.classList.add('invalid');
  }
};