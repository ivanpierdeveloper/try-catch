<?php
    require_once('Myexception.php');

    header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
    header('Content-Type: application/json; charset=UTF-8');
    try {
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);
            echo '[{
                "id": 101,
                "email" : "mariorossi@gmail.com",
                "usr": "Mario Rossi",
                "psw": "'.sha1("oxnde7n39").'",
                "age": 22
            },
            {
                "id": 102,
                "email" : "mariobianchi@gmail.com",
                "usr": "Mario Bianchi",
                "psw": "'.sha1("123abc").'",
                "age": 25
            },
            {
                "id" : "'.$POST['id'].'",
                "email" : "'.$POST['email'].'",
                "usr": "'.$POST['usr'].'",
                "psw": "'.sha1($POST['psw']).'",
                "age": "'.$POST['age'].'"
            },
            {
                "id" : 103,
                "email" : "batman@gmail.com",
                "usr"  : "batman cavaliere oscuro",
                "psw" : "'.sha1("batmobile").'",
                "age" : "101"
            },
            {
                "id" : 104,
                "email" : "spidereman@gmail.com",
                "usr"  : "spiderman",
                "psw" : "'.sha1("uomoragno").'",
                "age" : "98"
            }
        ]';
    } else {
        if($_SERVER['REQUEST_METHOD'] === 'GET') {
            $GET = filter_var_array($_GET, FILTER_SANITIZE_STRING);
            // ## Myexcepion customized
            // throw new Myexception("tutto ok", 200);
            // $cls = new Myexception();
            // $message = $cls->message404(" passed value ", 154);
            // ## Exception default
            // throw new Exception("Error Processing Request", 1);
            
            echo '[
                {
                    "id" : "'. $GET['id'] .'",
                    "email" : "'.$GET['email'].'",
                    "usr" : "'.$GET['usr'].'",
                    "psw" : "'.$GET['psw'].'",
                    "age" : "'.$GET['age'].'"
                }
                ]';
        }
    }
}
// ## Myexception customized
// catch(Myexception $error) {
    // ## Exception default
    catch(Exception $error) {
    echo '[
        {
            "messaggio" : "'.$error->getMessage().'",
            "codice" : "'.$error->getCode().'",
            "line" : "'.$error->getLine().'",
            "file" : "'.$error->getFile().'"
        }
    ]';
}
