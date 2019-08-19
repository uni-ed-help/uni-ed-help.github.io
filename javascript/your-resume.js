<<<<<<< HEAD

function makeResume() {
//    var name = document.getElementById("name").value;
//    var address = document.getElementById("address").value;
//    var city = document.getElementById("city").value;
//    var address_state = document.getElementById("address-state").value;
//    var zipcode = document.getElementById("zipcode").value;
//    var phone = document.getElementById("phone").value;
//    var email = document.getElementById("email").value;
//    var hs = document.getElementById("highschool").value;
//    var hsstart = document.getElementById("hsstart").value;
//    var hsgrad = document.getElementById("grad-year").value;
//    var hscity = document.getElementById("hscity").value;
//    var hsstate = document.getElementById("hs-state").value;
//    var gpa = document.getElementById("gpa").value;
//    var gpascale = document.getElementById("gpascale").value;
//    
//    
    var resume = `<center>
                <b><!--fullname--></b>
                <br>
                <!--address-->
                <br>
                <!--city-->, <!--state-->, <!--zipcode-->
                <br>
                <!--phonenumber--> /
                <a href = "mailto:<!--emailaddress-->" target="_blank"><!--email--></a>
            </center>
            <table class = "education" width = "100%">
                <tr class="education">
                    <td class = "education">
                        EDUCATION
                    </td>
                </tr>
                <tr class = "education">
                    <td> 
                         <!--highschool-->
                        <br>
                        GPA: <!--gpa-->/ <!--gpascale-->
                    </td>
                    <td>
                        <!--hsstart-->
                        - 
                        <!--grad-year-->
                        <br>
                        <!--hs-city-->, <!--hs-state-->
                    </td>
                </tr>
                <tr>
                    <td>
                        RELATED COURSEWORK
                        <br>
                        Related Coursework
                        <!--relcourse-->
                    </td>
                </tr>
            </table>`
//    resume = resume.replace ("<!--fullname-->", name)
//    resume = resume.replace ("<!--address-->", address)
//    resume = resume.replace ("<!--city-->", city)
//    resume = resume.replace ("<!--state-->", address_state)
//    resume = resume.replace ("<!--zipcode-->", zipcode)
//    resume = resume.replace ("<!--phonenumber-->", phone)
//    resume = resume.replace ("<!--emailaddress-->", email)
//    resume = resume.replace ("<!--email-->", email)
//    resume = resume.replace ("<!--highschool-->", hs)
//    resume = resume.replace ("<!--highschool-->", hs)
//    resume = resume.replace ("<!--gpa-->", gpa)
//    resume = resume.replace ("<!--gpascale-->", gpascale)
//    resume = resume.replace ("<!--hs-state-->", hscity)
//    resume = resume.replace ("<!--hs-city-->", hsstate)
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
=======
function makeResume() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById ("city").value;
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
    
    
    var resume = `<center>
                <b><!--fullname--></b>
                <br>
                <!--address-->
                <br>
                <!--city-->, <!--state-->, <!--zipcode-->
                <br>
                <!--phonenumber--> /
                <a href = "mailto:<!--emailaddress-->" target="_blank"><!--email--></a>
            </center>
            <table class = "education" width = "100%">
                <tr class="education">
                    <td class = "education">
                        EDUCATION
                    </td>
                </tr>
                <tr class = "education">
                    <td> 
                         <!--highschool-->
                        <br>
                        GPA: <!--gpa-->/ <!--gpascale-->
                    </td>
                    <td>
                        <!--hsstart-->
                        - 
                        <!--grad-year-->
                        <br>
                        City<!--hs-city-->, State<!--hs-state-->
                    </td>
                </tr>
                <tr>
                    <td>
                        RELATED COURSEWORK
                        <br>
                        Related Coursework
                        <!--relcourse-->
                    </td>
                </tr>
            </table>`
    resume = resume.replace ("<!--fullname-->", name)
    resume = resume.replace ("<!--address-->", address)
    resume = resume.replace ("<!--city-->", city)
    resume = resume.replace ("<!--state-->", address_state)
    resume = resume.replace ("<!--zipcode-->", zipcode)
    resume = resume.replace ("<!--phonenumber-->", phone)
    resume = resume.replace ("<!--emailaddress-->", email)
    resume = resume.replace ("<!--email-->", email)
    resume = resume.replace ("<!--highschool-->", hs)
    resume = resume.replace ("<!--gpa-->", gpa)
    resume = resume.replace ("<!--gpascale-->", gpascale)
    
    var doc = document.getElementById('theResume').contentWindow.document;
    doc.open();
    doc.write(resume);
    doc.close();
}
>>>>>>> 8644c7b0297f8e3019824ec09b1f9aa6b23eaebe
