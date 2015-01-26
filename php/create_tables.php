<?php
include("connection.php");

$val = mysqli_query($conn,'select 1 from Users');
if(! $val)
{
	$sql = "CREATE TABLE Users (
	        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	        fullname VARCHAR(30) NOT NULL,
	        username VARCHAR(20) NOT NULL,
			password VARCHAR(100) NOT NULL,
			country_id INT(6) FOREIGN KEY REFERENCES Countries(id),
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
	echo "Users table created successfully<br>";
} else {
	echo "Users table already exits<br>";
}

$val = mysqli_query($conn,'select 1 from Accounts');
if(! $val)
{
	$sql = "CREATE TABLE Accounts (
	        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	        routing_no INT(20) NOT NULL,
	        accoutn_no INT(20) NOT NULL,
	        owner_id INT(6) UNSIGNED,
			reg_date TIMESTAMP,
			FOREIGN KEY(owner_id) REFERENCES Users(id)
			)";
	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	echo "Accounts table created successfully<br>";
} else {
	echo "Accounts table already exits<br>";
}

$val = mysqli_query($conn,'select 1 from DebitCards');
if(! $val)
{
	$sql = "CREATE TABLE DebitCards (
	        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	        card_no INT(20) NOT NULL,
	        cvv INT(3) NOT NULL,
	        expiry DATE NOT NULL,
	        owner_id INT(6) UNSIGNED,
			reg_date TIMESTAMP,
			FOREIGN KEY(owner_id) REFERENCES Users(id)
			)";
	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	echo "DebitCards table created successfully<br>";
} else {
	echo "DebitCards table already exits<br>";
}

$val = mysqli_query($conn,'select 1 from Countries');
if(! $val)
{
	$sql = "CREATE TABLE Countries (
	        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	        name VARCHAR(30) NOT NULL,
	        currency VARCHAR(10) NOT NULL
			)";
	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	echo "Countries table created successfully<br>";
} else {
	echo "Countries table already exits<br>";
}

$val = mysqli_query($conn,'select 1 from Friendship');
if(! $val)
{
	$sql = "CREATE TABLE Friendship (
	        user_id INT(6) UNSIGNED NOT NULL, 
	        friend_id INT(6) UNSIGNED NOT NULL,
	        PRIMARY KEY (user_id,friend_id),
    		UNIQUE KEY friend_id (friend_id,user_id)
			)";
	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	echo "Friendship table created successfully<br>";
} else {
	echo "Friendship table already exits<br>";
}

$val = mysqli_query($conn,'select 1 from Distribution');
if(! $val)
{
	$sql = "CREATE TABLE Distribution (
	        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	        amt FLOAT DEFAULT 0,
	        health FLOAT DEFAULT 0,
	        housing FLOAT DEFAULT 0,
	        cash FLOAT DEFAULT 0,
	        edu FLOAT DEFAULT 0
			)";
	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	echo "Distribution table created successfully<br>";
} else {
	echo "Distribution table already exits<br>";
}

$val = mysqli_query($conn,'select 1 from Transactions');
if(! $val)
{
	$sql = "CREATE TABLE Transactions (
	        trans_date DATE NOT NULL ,
	        user_id INT(6) UNSIGNED ,
	        role ENUM('received','sent'),
	        method ENUM('account','debit','remitMas'),
	        card_id INT(20) NOT NULL,
	        dist_id INT(6) UNSIGNED ,
	        PRIMARY KEY(user_id,dist_id),
	        FOREIGN KEY(user_id) REFERENCES Users(id),
	        FOREIGN KEY(dist_id) REFERENCES Distribution(id)
			)";
	$retval = mysqli_query( $conn, $sql  );
	if(! $retval )
	{
		die('Could not create table: ' . mysqli_error($conn));
	}
	echo "Transactions table created successfully<br>";
} else {
	echo "Transactions table already exits<br>";
}


mysqli_close($conn);
?>
