function validoi() {
    
    let teksti = "";

    //käyttäjätunnus
    let käyttäjätunnus = document.forms['lomake']['käyttäjätunnus'].value;
    if (IdleDeadline.length > 5) {
        teksti += "Käyttäjätunnus ok" + "<br>"
    } else {
        teksti += "Käyttäjän täytyy olla väh 6 merkkiä" + "<br>";
    }

    //salasana
    let salasana = document.forms['lomake']['salasana'].value;
    if (salasana.lenght > 5 && salasana.match(/[a-z]/) && salasana.match(/\d/) && salasana.match(/[^a-zA-Z\d]/)) {
        teksti += "salasana ok" + "<br>";
    } else {
        teksti += "Salasanassa väh 6 kirjainta, 1 nro ja 1 erikoismerkki" +"<br>";
    }

    //nimi
    let nimi = document.forms['lomake']['nimi'].value;
    if (nimi.length > 0) {
        teksti += "Nimi ok" + "<br>"
    } else {
        teksti += "nimi puuttuu" + "<br>"
    }

    //osoite
    let osoite = document.forms['lomake']['osoite'].value;
    if (osoite.length > 0) {
        teksti += "osoite ok" + "<br>";
    } else {
        teksti += "Osoite puuttuu" +"<br>";
    }

    // Maa
    let maa = document.forms['lomake']['maa'].value;
    if (maa !== "tyhja") {
    teksti += "ok" + "<br>"
    } else {
    teksti += "Valinta pakollinen." +"<br>"
    }

    //postinro
    let postinumero = document.forms['lomake']['postinumero'].value;
    if (postinumero.length === 5 && postinumero.match(/\d/)) {
        teksti += "postinumero ok"
    } else {
        teksti += "postinumerossa 5 nroa" + "<br>";
    }
    
    // Määritellään validin sähköpostin ehdot
    let sähköposti = document.forms['lomake']['sähköposti'].value;
    atpos = sähköposti.indexOf("@");
    dotpos = sähköposti.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
    teksti += "Tarkista säpon muoto" +"<br>"
    } else {
    teksti += "Sähköposti ok" + "<br>";
    }

    // Määritellään validin sukupuolen ehdot (sukupuoli tulee olla valittuna)
    let sukupuoli = "";
    if(document.getElementById('mies').checked == true) {
    teksti += "Sukupuoli ok"+"<br>"
    } else if(document.getElementById('nainen').checked == true) {
    teksti += 'Sukupuoli ok' +"<br>"
    } else {
    teksti += "Valitse sukupuoli" +"<br>";
    }

    // kieli
    let kieli = "";
    if(document.getElementById('suomi').checked == true) {
    teksti += "Kieli: OK" +"<br>"
    } else if(document.getElementById('muu').checked == true) {
    teksti += 'Kieli ok' +"<br>"
    } else {
    teksti += "Valitse kieli" +"<br>";
    }

    // Testi
    document.getElementById('print').innerHTML = teksti;
}
    
