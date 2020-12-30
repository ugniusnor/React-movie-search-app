<?php
$dbHost='localhost';
$dbUser = 'root';
$dbPass = '';
$dbName = 'movieApp';
//making conection
  
$conn = mysqli_connect($dbHost,$dbUser,$dbPass,$dbName);

// Check connection
if (!$conn) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
} 

?>