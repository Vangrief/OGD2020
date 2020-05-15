<?php
/*
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";
*/
$handle = fopen("TG_Lernende_Mittelschulen.csv", "r") or die("Unable to open file!");
$twoarray = array();
while ($data = fgetcsv($handle, 1000, ";")) {
    $data = array_map("utf8_encode", $data); //added    
    $twoarray[] = $data;

}
fclose($handle);
$myJson = json_encode($twoarray);

echo $myJson;
?>

