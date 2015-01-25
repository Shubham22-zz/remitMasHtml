<?php
include("connection.php");
$sql = "CREATE TABLE Users (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        fullname VARCHAR(30) NOT NULL,
        username VARCHAR(20) NOT NULL,
		password VARCHAR(100) NOT NULL,
		country VARCHAR(30) NOT NULL,
		email VARCHAR(50) NOT NULL,
        remitmas_money FLOAT DEFAULT 0.0,
        tut_point INT DEFAULT 0,
		reg_date TIMESTAMP
		)";
$retval = mysqli_query( $conn, $sql  );
if(! $retval )
{
	die('Could not create table: ' . mysqli_error($conn));
}
echo "Table created successfully\n";
mysqli_close($conn);
?>
