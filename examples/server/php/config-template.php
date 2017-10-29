<?php

    //
    // NOTE: Rename this file to config.php and update the values below as needed
    //
    
    class Config
    {
        /**
         * These are used when connecting to the database like this:
         * 
         *   new PDO('mysql:host={$host};dbname={$dbname}', {$username}, {$password});
         * 
         * To create the test database structure see ../setup.sql
         */
        public $host     = 'localhost';
        public $dbname   = 'iCalendar';
        public $username = 'root';
        public $password = '';
    }
    
?>