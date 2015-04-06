<?php
// header("Content-type: application/json");
include("connection.php");
$Id = $_POST['id'];
$Fullname = $_POST['fullname'];
$sql =  "select * from DebitCards where owner_id='$Id'";

$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
	die('Could not access debit card table: ' . mysqli_error($conn));
}
$debitCardList = "";
$array = array();
if (mysqli_num_rows($retval) > 0) {
	$index = 0;
	while($row = mysqli_fetch_assoc($retval)) {
		// $debitCardList .= "<tr> <td>".$Fullname."</td> <td>".$row['card_no']."</td> <td>".$row['expiry']."</td> </tr>";
		$array[$index] = $row;
		$index++;
	}
}

mysqli_close($conn);
echo json_encode($array);
// echo $debitCardList;
?>