'use strict'
const cls = new Classmyalertjs();
const fnc = Funcmyalertjs;
// testing
// cls.messaggio("Call method messaggio");
// fnc.showMyAlert("titolo", "messaggio.", "var(--info)", "var(--white)", "var(--warning)", "var(--dark)");
// button customized JS
if (document.querySelector('.cubo-di-rubik-js')) {
    let btn_customized_js = document.querySelector('.cubo-di-rubik-js');
    btn_customized_js.addEventListener('click', function() {
        try {
            throw new Error("Nuovo messaggio alla riga 11");
            // or

            // throw new SyntaxError("Nuovo messaggio alla riga 14");
            // or
            // throw new ReferenceError("Nuovo messaggio alla riga 16");
            // or
            // a
        } catch (Exception) {
            console.table({
                "messaggio": Exception.message,
                "codice": 1
            });
        }
    });
}
// ./button customized JS
// button customized PhP
if (document.querySelector('.cubo-di-rubik-php')) {
    let btn_customized_php = document.querySelector('.cubo-di-rubik-php');
    btn_customized_php.addEventListener('click', (e) => {

        window.location.href = "docs/page/phptrycatch.html";
    });
}
// ./button customized PhP
// button back
if (document.querySelector('.btn-back')) {
    let btn_back = document.querySelector('.btn-back');
    btn_back.addEventListener('click', function() {
        window.history.back();
    });
}
// ./button back
// button cubo-di-rubik-php-2
if (document.querySelector('.cubo-di-rubik-php-2')) {
    let btn_post = document.querySelector('.cubo-di-rubik-php-2');
    btn_post.addEventListener('click', async function() {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'multipart/form-data',
            'Content-Type': 'text/plain'
        });
        /*
        // or
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Content-Type', 'text/plain');
        */
        // var path = "http://svilfi.utile.extranet.utilita.com/webserver/php/test/github/trycatch/docs/page/php.php";
        // funziona con l'indirizzo completo http o https
        // const url = new URL(path);
        const url = "php.php";
        const frmData = new FormData();
        frmData.append("id", 154);
        frmData.append("usr", "ivanpier");
        frmData.append("psw", "abc123");
        frmData.append("email", "ivanpier@gmail.com");
        frmData.append("age", "44");
        const request = new Request(url, {
            method: 'POST',
            // headers: headers, non necessario
            mode: 'cors', // no-cors
            body: frmData
        });
        await fetch(request)
            .then((rs) => {
                if (rs.ok) {
                    return Promise.resolve(rs.json());
                } else {
                    return Promise.reject({
                        status: rs.status,
                        statusText: rs.statusText
                    });
                }
            })
            .then((data) => {
                console.table(data);
            })
            .catch((error) => {
                console.table({
                    "Codice": error.status,
                    "Messaggio": error.statusText
                });
            })
    });
}
// ./button cubo-di-rubik-php-2
if (document.querySelector('.cubo-di-rubik-php-3')) {
    let btn_get = document.querySelector('.cubo-di-rubik-php-3');
    btn_get.addEventListener('click', async function() {
        const headers = new Headers({
            "Content-Type": "application/json"
        });
        // funziona con l'indirizzo completo http o https
        // const url = new URL("http://svilfi.utile.extranet.utilita.com/webserver/php/test/github/trycatch/docs/page/php.php");
        const url = "php.php";
        const params = "?id=154&usr=ivanapple&psw=abc123&email=ivanapple@gmail.com&age=45";
        const rq = new Request(url + params, {
            method: 'GET',
            headers: headers,
            mode: 'cors'
        });
        await fetch(rq)
            .then((rs) => {
                if (rs.ok) {
                    return Promise.resolve(rs.json());
                } else {
                    return Promise.reject({
                        status: rs.status,
                        statusText: rs.statusText
                    });
                }
            })
            .then((data) => {
                console.table(data);
            })
            .catch((error) => {
                console.table({
                    "messaggio": error.statusText,
                    "codice": error.status
                })
            })
    });
}