function addExtra() {
  inputValue = document.getElementById("extactinput").value;
  console.log ("inputValue" + inputValue)
  if (inputValue === '') {
    alert("You must write something!");
  }
  else {
    list = document.getElementById("extact-extact");
    console.log ("list:" + list);
    list.appendChild(li);
  }
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newform(list_type) {
    var inputValue;
    var list;
    var li = document.createElement("li");
    console.log("after inputValue");
    if (list_type == "classes") {
        inputValue = document.getElementById("classinput").value;
        console.log ("classinputValue" + inputValue)
        if (inputValue === '') {
            alert("You must write something!");
        }
        else {
            list = document.getElementById("classlist");
            console.log ("list:" + list);
            list.appendChild(li);
        }
    }
    // else if (list_type == "details") {
    //     inputValue = document.getElementById("detailinput").value;
    //     console.log ("inputValue" + inputValue)
    //     if (inputValue === '') {
    //         alert("You must write something!");
    //     }
    //     else {
    //         list = document.getElementById("extact-detail");
    //         console.log ("list:" + list);
    //         list.appendChild(li);
    //     }
    // }

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    inputValue = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
