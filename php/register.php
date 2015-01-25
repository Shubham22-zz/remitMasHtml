<?php
include("connection.php");
$FullName = $_POST['FullName'];
$Username = $_POST['Username'];
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$Country = $_POST['Country'];
$sql =  "INSERT INTO Users ".
       "(fullname,username,password, email, country) ".
       "VALUES ".
       "('$FullName','$Username','$Password','$Email','$Country')";

$retval = mysqli_query( $conn, $sql  );
if(! $retval )
{
	die('Could not create table: ' . mysqli_error($conn));
}
echo "New record created successfully\n";
mysqli_close($conn);
?>