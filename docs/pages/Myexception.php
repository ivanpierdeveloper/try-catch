<?php 
    class Myexception extends Exception {
        public function message404(string $msg, int $code) {
            $error = "message " . $this->getMessage() . " passed $msg " . " code " . $this->getCode() . " code passed " . $code . " file " . $this->getFile() . " line " . $this->getLine();
            return $error;
        }
    }