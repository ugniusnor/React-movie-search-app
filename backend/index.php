<?php
//getting data from react front
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Content-type:application/json");
$data = json_decode(file_get_contents("php://input"));

//coonecting to db
if(isset($data)) {
    require "../backend/database.php";
  
    $email=$data->email;
    $password=$data->password;
    $repeatPassword=$data->repeatPassword;
    if(empty($email) || empty($password) || empty($repeatPassword)) {
        echo "Fields cannot be empty";
             die();
    }else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        die();
      } elseif ($password!==$repeatPassword) {
          echo "Ooops, looks like password don't match...";
        die();
       } 

    else {
        $sql="SELECT email FROM users WHERE email = ?";
        $stmt=mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt,$sql)) {
            echo "SQL ERROR";
            die();
        } else {
            mysqli_stmt_bind_param($stmt, 's', $email);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $rowCount=mysqli_stmt_num_rows($stmt);
            if ($rowCount > 0) {
                echo "email taken";
                die();
            }
            else {
                $sql="INSERT INTO users (email, password) VALUES (?,?)";
                $stmt=mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt,$sql)) {
                    echo "sql error";
                    die();
                } else {
                    $hashPassword=password_hash($password, PASSWORD_DEFAULT);
                    mysqli_stmt_bind_param($stmt, "ss", $email, $hashPassword);
                    mysqli_stmt_execute($stmt);
                    echo true;
                }

            }

        }

    }
}