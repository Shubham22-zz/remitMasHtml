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

	$sql = "SELECT * FROM Countries";

	$countriesList = mysqli_query( $conn, $sql  );
	if(! $countriesList )
	{
		die('Could not access table: ' . mysqli_error($conn));
	}
 	$CountryList = "";
	if (mysqli_num_rows($countriesList) > 0) {
    	while($row = mysqli_fetch_assoc($countriesList)) {
			$CountryList .= "<option data-cur=".$row["currency"]." value=".$row["id"]." >".$row["name"]."</option>\n";
			// echo "<option value=".$row["currency"]." >".$row["name"]."</option>";
		}
	}
	mysqli_close($conn);
?>