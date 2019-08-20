
function makeResume() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var address_state = document.getElementById("address-state").value;
    var zipcode = document.getElementById("zipcode").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var hs = document.getElementById("highschool").value;
    var hsstart = document.getElementById("hsstart").value;
    var hsgrad = document.getElementById("grad-year").value;
    var hscity = document.getElementById("hscity").value;
    var hsstate = document.getElementById("hs-state").value;
    var gpa = document.getElementById("gpa").value;
    var gpascale = document.getElementById("gpascale").value;
    var relatedcoursework = document.getElementById("classlist").value;
    console.log(relatedcoursework);
    var e = document.getElementById("schoolstartmonth");
    var stmonth = e.options[e.selectedIndex].value;
    var d = document.getElementById("schoolgradmonth");
    var gradmonth = d.options[d.selectedIndex].value;
    var extact = document.getElementsByClassName("extact");
    var extactlist;
    var prog = document.getElementsByClassName("prog");
    var proglist;
    var honor = document.getElementsByClassName("honor");
    var honorlist;
    console.log (extact);
    var resume = "<center><b>" + name + "</b><br>" + address + "<br>" + city + ", " + address_state + ", " + zipcode + "<br>" + phone + " / " + '<a href = "mailto:' + email + '" target="_blank">'+ email + '</a></center> <table class = "education" width = "100%"><tr class="education"><td class = "education"><b>EDUCATION</b></td></tr><tr class = "education"><td>' + hs + "<br>GPA: " + gpa + " / " + gpascale + "</td><td>" + stmonth + " " + hsstart + " - " + gradmonth + " " + hsgrad + "<br>" + hscity + ", " + hsstate + '</td></tr><tr><td>RELATED COURSEWORK</td></tr><tr><td colspan = "2">' + relatedcoursework + '</td></tr>';
    if (extact.length == 0) {
        var lol;
    }
    else {
        for (i = 0; i < extact.length; i++) {
            var extacti =  extact[i].innerHTML;
            var extac = extacti.split ("<br>");
            var woutspan = (extac[0].split("<span"))[0];
            console.log (woutspan);
            var spliti = extac[2].split("•");
            console.log (spliti);
            var splitlist = "<ul>";
            for (i = 0; i < spliti.length; i++) {
                if (i == 0) {
                    continue;
                }
                else {
                    splitlist = splitlist + "<li>" + spliti[i] + "</li>";   
                }
            }
            splitlist = splitlist + "</ul>";
            extactlist = extactlist + "<tr><td>" + woutspan + '</td><td>' + extac[1] + "</td></tr><tr><td>" + splitlist + "</td></tr>";
        }
        var extactlst = extactlist.split ("undefined")[1];
        resume = resume + '<tr><td colspan = "2"><b>EXTRACURRICULAR ACTIVITIES</b></td></tr>' + extactlst;
    }
    
    if (prog.length == 0) {
        var lolol;
    }
    else {
        for (i = 0; i < prog.length; i++) {
            var progr =  prog[i].innerHTML;
            var progra = progr.split ("<br>");
            var woutspani = (progra[0].split("<span"))[0];
            console.log (woutspani);
            var splitir = progra[2].split("•");
            console.log (splitir);
            var splitlists = "<ul>";
            for (i = 0; i < splitir.length; i++) {
                if (i == 0) {
                    continue;
                }
                else {
                    splitlists = splitlists + "<li>" + splitir[i] + "</li>";   
                }
            }
            splitlists = splitlists + "</ul>";
            proglist = proglist + "<tr><td>" + woutspani + "</td><td>" + progra[1] + "</td></tr><tr><td>" + splitlists + "</td></tr>";
        }
        var proglst = proglist.split ("undefined")[1];
        resume = resume + '<tr><td colspan = "2"><b>SPECIAL PROGRAMS</b></td></tr>' + proglst;
    }

    if (honor.length == 0) {
        var lololol;
    }
    else {
        for (i = 0; i < honor.length; i++) {
            var honorr =  honor[i].innerHTML;
            var hono = honorr.split ("<br>");
            var woutspanir = (hono[0].split("<span"))[0];
            console.log (woutspanir);
            honorlist = honorlist + "<tr><td>" + woutspanir + "</td><td>" + hono[1] + "</td></tr>";
            
        }
        var honorlst = honorlist.split ("undefined")[1];
        resume = resume + '<tr><td colspan = "2"><b>HONORS AND AWARDS</b></td></tr>' + honorlst;
    }
    var doc = document.getElementById('theResume').contentWindow.document;
    doc.open();
    doc.write(resume);
    doc.close();
}

function printResume () {
    var frm = document.getElementById("theResume").contentWindow;
    frm.focus();// focus on contentWindow is needed on some ie versions
    frm.print();
    return false;
}
