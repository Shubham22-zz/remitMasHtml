<?php
	include("connection.php");
	$Email = $_POST['Email'];
	$Password = $_POST['Password'];
	$sql = "SELECT username FROM Users WHERE email='$Email' AND password='$Password'";

	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	if (mysqli_num_rows($retval) > 0) {
		$row = mysqli_fetch_assoc($retval);
		$arr = array ('username'=>$row["username"],'status'=>1);
	}else {
		$arr = array ('status'=>-1,'message'=> "The email or password you entered is incorrect");
	} 
	echo json_encode($arr);
	mysqli_close($conn);
?>