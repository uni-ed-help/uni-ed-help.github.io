
//function accordionClick(){
//    var acc = document.getElementsByClassName("accordion");
//    var i;
//
//    for (i = 0; i < acc.length; i++) {
//        acc[i].addEventListener("click", function() {
//            /* Toggle between adding and removing the "active" class,
//            to highlight the button that controls the panel */
//            this.classList.toggle("active");
//
//            /* Toggle between hiding and showing the active panel */
//            var panel = this.nextElementSibling;
//            if (panel.style.display === "block") {
//                panel.style.display = "none";
//            } else {
//                panel.style.display = "block";
//            }
//        });
//    }
//}
//

function addExtra() {
//    document.getElementById("extra").style.display = "none"
    var name = document.getElementById("extactname").value;
    document.getElementById("extactname").value = "";
    var role = document.getElementById("roleinput").value;
    document.getElementById("roleinput").value = "";
    var details = document.getElementById("extact-detailinput").value
    document.getElementById("extact-detailinput").value = ""
    var list;
    var p = document.createElement("p");
    var ul = document.createElement("ul");
    var e = document.getElementById("extact-startmonth");
    var stmonth = e.options[e.selectedIndex].value;
    var d = document.getElementById("extact-endmonth");
    var endmonth = d.options[d.selectedIndex].value;
    var dates = stmonth + " " + document.getElementById("extact-startyear").value + " - ";
    if (document.getElementById("extact-present").checked) {
            dates = dates + "Present";
            }
    else {
            dates = dates + endmonth + " " + document.getElementById("extact-endyear").value;
            }
    document.getElementById("extact-present").checked = false;
    if (role === '' || details === '' || name === '') {
        alert("You must write something!");
    }
    else {
        list = document.getElementById("extactlist");
        list.appendChild(p);
    }
    var span = document.createElement("span");
    var br = document.createElement("BR");
    var bre = document.createElement("BR");
    var it = document.createElement("i");
    var strong = document.createElement("STRONG");
    strong.innerHTML = name;
    it.innerHTML = "&nbsp;" + role;
    span.classList.add("close");
    span.appendChild(document.createTextNode("\u00D7"));
    p.appendChild(strong);
    p.appendChild(it);
    p.appendChild(span);
    p.appendChild(br);
    p.appendChild(document.createTextNode(dates));
    p.appendChild(bre);
    p.appendChild(document.createTextNode(details));
    p.setAttribute("class", "extact tab");

    name = "";
    role = "";
    details = "";
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function addProg() {
//    document.getElementById("extra").style.display = "none"
    var name = document.getElementById("progname").value;
    document.getElementById("progname").value = "";
    var role = document.getElementById("progroleinput").value;
    document.getElementById("progroleinput").value = "";
    var details = document.getElementById("detailinput").value
    document.getElementById("detailinput").value = ""
    var list;
    var p = document.createElement("p");
    var ul = document.createElement("ul");
    var e = document.getElementById("progstartmonth");
    var stmonth = e.options[e.selectedIndex].value;
    var d = document.getElementById("progendmonth");
    var endmonth = d.options[d.selectedIndex].value;
    var dates = stmonth + " " + document.getElementById("progstartyear").value + " - ";
    if (document.getElementById("progpresent").checked) {
            dates = dates + "Present";
            }
    else {
            dates = dates + endmonth + " " + document.getElementById("progendyear").value;
            }
    document.getElementById("progpresent").checked = false;
    if (role === '' || details === '' || name === '') {
        alert("You must write something!");
    }
    else {
        list = document.getElementById("proglist");
        list.appendChild(p);
    }
    var span = document.createElement("span");
    var br = document.createElement("BR");
    var bre = document.createElement("BR");
    var it = document.createElement("i");
    var strong = document.createElement("STRONG");
    strong.innerHTML = name;
    it.innerHTML = "&nbsp;" + role;
    span.classList.add("close");
    span.appendChild(document.createTextNode("\u00D7"));
    p.appendChild(strong);
    p.appendChild(it);
    p.appendChild(span);
    p.appendChild(br);
    p.appendChild(document.createTextNode(dates));
    p.appendChild(bre);
    p.appendChild(document.createTextNode(details));
    p.setAttribute("class", "prog tab");

    name = "";
    role = "";
    details = "";
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function addHonor () {
    var p = document.createElement("p");
    var name = document.getElementById("honorname").value;
    document.getElementById("honorname").value = "";
    var e = document.getElementById("honormonth");
    var month = e.options[e.selectedIndex].value;
    var dates = month + " " + document.getElementById("honoryear").value;
    if (name === '') {
        alert("You must write something!");
    }
    else {
        list = document.getElementById("honorlist");
        list.appendChild(p);
    }
    var span = document.createElement("span");
    var br = document.createElement("BR");
    span.classList.add("close");
    span.appendChild(document.createTextNode("\u00D7"));
    p.appendChild(document.createTextNode(name));
    p.appendChild(span);
    p.appendChild(br);
    p.appendChild(document.createTextNode(dates));
    p.setAttribute("class", "honor tab");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
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
                console.log (this.parentElement)
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
        else if (list_type == "roles") {
                inputValue = document.getElementById("roleinput").value;
                console.log ("roleinputValue" + inputValue)

                if (inputValue === '') {
                        alert("You must write something!");
                }
                else {
                        list = document.getElementById("extact-role");
                        console.log ("list:" + list);
                        list.appendChild(li);
                }
        }
        else if (list_type == "details") {
                inputValue = document.getElementById("detailinput").value;
                console.log ("inputValue" + inputValue)
                if (inputValue === '') {
                        alert("You must write something!");
                }
                else {
                        list = document.getElementById("extact-detail");
                        console.log ("list:" + list);
                        list.appendChild(li);
                }
        }
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
