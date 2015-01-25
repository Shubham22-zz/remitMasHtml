<?php
	$Username = $_GET['username'];
	include("connection.php");
	$sql = "SELECT * FROM Users WHERE username='$Username'";

	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	if (mysqli_num_rows($retval) > 0) {
		$row = mysqli_fetch_assoc($retval);
		$Remitmas_money = $row['remitmas_money'];
	}

	mysqli_close($conn);
?>