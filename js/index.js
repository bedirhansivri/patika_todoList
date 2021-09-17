var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
var list = document.getElementById("list");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  var toast = document.getElementById("liveToast");
  toastButton = document.getElementById("liveToast").firstElementChild;
  toastText = document.getElementById("liveToast").lastElementChild;
  console.log(toastText);
  li.appendChild(t);
  if (inputValue === "") {
    toast.className = "toast error show";
    toast.append(toastText);
    toast.innerHTML = "Listeye boş ekleme yapamazsınız !";
    toast.appendChild(toastButton);
  } else {
    document.getElementById("list").appendChild(li);
    toast.className = "toast error show";
    toast.innerHTML = toastText.innerText;
  }
  document.getElementById("task").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
