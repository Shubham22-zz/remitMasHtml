<?php 
include("connection.php");
$sql = "SELECT * FROM Countries";

$retval = mysqli_query( $conn, $sql  );
if(! $retval )
{
	die('Could not access table: ' . mysqli_error($conn));
}

mysqli_close($conn);
?>