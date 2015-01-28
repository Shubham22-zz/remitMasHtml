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
		$User_id = $row['id'];
		$Remitmas_Points = $row['tut_point'];
	}
	// $FriendsArray = array(); // 
	// $Friend_no = 0;
	
	$sql = "select B.id  FROM (select user_id from Friendship WHERE friend_id='$User_id' UNION select friend_id from Friendship WHERE user_id='$User_id' ) A INNER JOIN Users B On A.user_id=B.id";
	
	$friendsCount = mysqli_query( $conn, $sql);
	if(! $friendsCount )
	{
		die('Could not access friends table: ' . mysqli_error($conn));
	}
	$Friends_no = mysqli_num_rows($friendsCount);
	
	// while($row = mysql_fetch_assoc($friendsList)) // 
	// {
	//      $FriendsArray[] = $row;
	//      $Friend_no++;
	// }


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