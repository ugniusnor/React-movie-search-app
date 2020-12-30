<?php
//getting data from react front
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Content-type:application/json");
$data = json_decode(file_get_contents("php://input"));

if($data) {
    require "../database.php";
    $email=$data->email;
    $password=$data->password;
    if (empty($email) || empty($password)) {
        echo "Wrong details,please try again";
        die();
    } else {
        $sql = "SELECT * FROM users WHERE email=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt,$sql)) {
            echo "Error ocured while loging you in :(";
            die();
        } else {
            mysqli_stmt_bind_param($stmt, "s",$email);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);

            if( $row=mysqli_fetch_assoc($result)   ) {
                $passCheck = password_verify($password, $row['password']);
                if($passCheck==false) {
                    echo "Wrong details, try again";
                    die();
                }else if ($passCheck==true) {
                    session_start();
                    $_SESSION['sessionId']=$row['id'];
                    $_SESSION['sessionUser']=$row['email'];
                    $_SESSION['isLoged']=true;
                    echo true;
                    die();
                }
                else {
                    echo "Error occuried, please try again";
                    die();
                }
            }else {
                echo "Wrong details, please try again";
            }
            
        }
    }

} else {
    echo "Wrong details, try again";
    die();
}

