Insert INTO Countries(name,currency) VALUES ('Colombia', 'COP');
Insert INTO Countries(name,currency) VALUES ('Mexico', 'MXN');
Insert INTO Countries(name,currency) VALUES ('El Salvador', 'SVC');
Insert INTO Countries(name,currency) VALUES ('Guatemala', 'GTQ');
Insert INTO Countries(name,currency) VALUES ('Peru', 'PEN');
Insert INTO Countries(name,currency) VALUES ('Dominican Republic', 'DOP');
Insert INTO Countries(name,currency) VALUES ('Canada', 'CAD');
Insert INTO Countries(name,currency) VALUES ('United States', 'USD');

Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Felipe Pacheco','Felipe','felipe','SVC','felipepacheco@gmail.com',100.0,54);
Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Daniela Hernandez','Daniela','daniela','COP','danielahernandez@gmail.com',500.0,58);
Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Maria Puch','Maria','maria','MXN','mariapuch@yahoo.com',200.0,45);
Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Maelis Carraro','Maelis','maelis','GTQ','maeliscarraro@hotmail.com',555.0,67);
Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Natalie Gomez','Natalie','natalie','CAD','nataliegomez@remitmas.com',345.0,84);
Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Jose Hernandez','Jose','jose','PEN','josehernandez@microsoft.com',324.0,35);
Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Steven Pallickal','Steven','steven','DOP','stevenpallickal@yahoo.com',524.0,45);
Insert INTO Users(fullname,username,password,countryCode,email,remitmas_money,tut_point) VALUES ('Shubham Mehta','Shubham','shubham','USD','shubhammehta@yahoo.com',788.0,89);

Insert INTO Friendship(user_id,friend_id) VALUES ('2','1');
Insert INTO Friendship(user_id,friend_id) VALUES ('2','3');
Insert INTO Friendship(user_id,friend_id) VALUES ('4','2');
Insert INTO Friendship(user_id,friend_id) VALUES ('4','7');
Insert INTO Friendship(user_id,friend_id) VALUES ('8','7');
Insert INTO Friendship(user_id,friend_id) VALUES ('1','3');
Insert INTO Friendship(user_id,friend_id) VALUES ('3','4');
Insert INTO Friendship(user_id,friend_id) VALUES ('2','5');
Insert INTO Friendship(user_id,friend_id) VALUES ('4','5');
Insert INTO Friendship(user_id,friend_id) VALUES ('6','5');
Insert INTO Friendship(user_id,friend_id) VALUES ('2','7');
Insert INTO Friendship(user_id,friend_id) VALUES ('4','6');

Insert INTO Accounts(routing_no,accoutn_no,owner_id,bank_name,account_holder) VALUES ('122333333345','3434344452','2',"Bank of America",'Daniela Hernandez');
Insert INTO Accounts(routing_no,accoutn_no,owner_id,bank_name,account_holder) VALUES ('122333355663','3422343441','2',"Wells Fargo",'Daniela Hernandez');
Insert INTO Accounts(routing_no,accoutn_no,owner_id,bank_name,account_holder) VALUES ('125523453322','3434366443','2',"HSBC Holdings",'Daniela Hernandez');
Insert INTO Accounts(routing_no,accoutn_no,owner_id,bank_name,account_holder) VALUES ('125524434433','3434344564','4',"Bank of America",'Maelis Carraro');
Insert INTO Accounts(routing_no,accoutn_no,owner_id,bank_name,account_holder) VALUES ('451255236533','3434783441','4',"Wells Fargo",'Maelis Carraro');
Insert INTO Accounts(routing_no,accoutn_no,owner_id,bank_name,account_holder) VALUES ('674125523833','3434367445','7',"PNC Financial",'Steven Pallickal');
Insert INTO Accounts(routing_no,accoutn_no,owner_id,bank_name,account_holder) VALUES ('674125623833','3434322445','8',"PNC Financial",'Shubham Mehta');

Insert INTO DebitCards(card_no,cvv,expiry,owner_id,card_holder) VALUES ('1223334466667777','344','2021-02-01','2','Daniela Hernandez');
Insert INTO DebitCards(card_no,cvv,expiry,owner_id,card_holder) VALUES ('3323334465567345','354','2023-03-01','2','Daniela Hernandez');
Insert INTO DebitCards(card_no,cvv,expiry,owner_id,card_holder) VALUES ('3323114465567777','324','2021-03-01','4','Maelis Carraro');
Insert INTO DebitCards(card_no,cvv,expiry,owner_id,card_holder) VALUES ('3323554465564567','384','2022-03-01','2','Daniela Hernandez');
Insert INTO DebitCards(card_no,cvv,expiry,owner_id,card_holder) VALUES ('3323774465567777','394','2025-03-01','7','Steven Pallickal');
Insert INTO DebitCards(card_no,cvv,expiry,owner_id,card_holder) VALUES ('3323774465567777','397','2025-05-01','4','Maelis Carraro');
Insert INTO DebitCards(card_no,cvv,expiry,owner_id,card_holder) VALUES ('3323774465569999','317','2025-06-01','8','Shubham Mehta');
