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
            throw new Error("nuovo messaggio alla riga 12");
            // or

            // throw new SyntaxError("Nuovo messaggio alla riga 14");
            // or
            // throw new ReferenceError("Nuovo messaggio alla riga 16");
            // or
            // a
            // debugger;
        } catch (Exception) {
            console.table({
                "messaggio": Exception.message,
                "codice": 1
            });
            fnc.showMyAlert("avviso", `${Exception.message}`, 'var(--danger)', 'var(--white)', 'var(--dark)', 'var(--warning)')
        }
    });
}
// ./button customized JS
// button customized PhP
if (document.querySelector('.cubo-di-rubik-php')) {
    let btn_customized_php = document.querySelector('.cubo-di-rubik-php');
    btn_customized_php.addEventListener('click', (e) => {
        window.location.href = "docs/pages/phptrycatch.html";
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
            headers: {
                'Accept': 'application/json, text/plain, */*'
                    //'Content-Type': 'application/json'
                    //"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" // otherwise $_POST is empty
            },
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
                var obj = Object();
                var arr = Array();
                var str = String();
                data.forEach(function(val, indice) {
                    obj = {
                        "id": val.id,
                        "email": val.email,
                        "usr": val.usr,
                        "psw": val.psw,
                        "age": val.age,
                        "divisor": " #### "
                    }
                    arr.push(obj);
                })
                for (var i = 0; i < arr.length; i++) {
                    str += `ID: ${arr[i].id} EMAIL: ${arr[i].email} USR: ${arr[i].usr} PSW: ${arr[i].psw} AGE: ${arr[i].age}${arr[i].divisor}`;
                }
                fnc.showMyAlert("avviso", `il risultato è visibile nella console del browser`,
                    'var(--success)', 'var(--darkblue)', 'var(--yellow)', 'var(--danger)');
            })
            .catch((error) => {
                console.table({
                    "Codice": error.status,
                    "Messaggio": error.statusText
                });
                fnc.showMyAlert("avviso", `codice: ${error.status} messaggio: ${error.statusText}`,
                    'var(--warning)', 'var(--darkred)', 'var(--secondary)', 'var(--secondary)');
            })
    });
}
// ./button cubo-di-rubik-php-2
// button cubo-di-rubik-3
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
                fnc.showMyAlert("avviso", `il risultato è visibile nella console del browser`,
                    'var(--success)', 'var(--darkblue)', 'var(--yellow)', 'var(--danger)');
            })
            .catch((error) => {
                console.table({
                    "messaggio": error.statusText,
                    "codice": error.status
                })
                fnc.showMyAlert("avviso", `codice: ${error.status} messaggio: ${error.statusText}`,
                    'var(--warning)', 'var(--darkred)', 'var(--secondary)', 'var(--secondary)');
            })
    });
} // ./button cubo-di-rubik-3
// button cubo-di-rubik-json
if (document.querySelector('.cubo-di-rubik-json')) {
    let button_json = document.querySelector('.cubo-di-rubik-json');
    button_json.addEventListener('click', async function() {
        /*
        console.table({
            "messaggio": "OK",
            "codice": 200
        });
        */
        var val_rd = String();
        var method = String();
        var body = String();
        let input_rd = document.querySelectorAll('.rd');
        input_rd.forEach(function(val) {
            if (val.checked == true) {
                val_rd = val.value;
                // console.log("Radio checked: " + val_rd);
            }

        })
        let fd = new FormData();
        fd.append("id", 11);
        let url = "docs/pages/json.json";
        const hd = new Headers({
            'Accept': 'application/json, text/plain, */*',
            "Content-Type": "application/json; charset=UTF-8"
        });
        if (val_rd == "get") {
            method = val_rd;
            body = null;
        } else {
            method = "post";
            body = fd;
        }
        const rq = new Request(url, {
            method: method,
            headers: hd,
            mode: 'cors',
            body: body
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
                console.table(data[0].content.content2.mail);
                console.table(data[1].content.content2.mail);
                data.forEach(function(val) {
                    console.group('begin');
                    console.log(val.email);
                    console.log(val.content.firstname);
                    console.log(val.content.content2.mail);
                    console.groupEnd('begin');
                    console.table({
                        "email": val.email,
                        "firstname": val.content.firstname,
                        "mail": val.content.content2.mail,
                        "method": method
                    })
                }); // ./forEach
                fnc.showMyAlert("avviso", "visualizza il risultato nella console del browser", 'var(--darkcyan)', 'var(--white)', 'var(--dark)', 'var(--white)');
            })
            .catch((error) => {
                fnc.showMyAlert("avviso", `codice error: ${error.status}, messaggio di error: ${error.statusText}`, 'var(--darkcyan)', 'var(--darkred)', 'var(--dark)', 'var(--white)');
            })
    });
}
// ./button cubo-di-rubik-json