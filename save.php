<?php
  $myFile = "data.json";
  $fh = fopen($myFile, 'w') or die("can't open file");
  $data = $_GET['data'];
  //$encoded = json_encode($data,JSON_UNESCAPED_SLASHES);
  //fwrite($fh,$encoded);
  $encoded = str_replace('\\', '', $data);
  fwrite($fh,$encoded);
  fclose($fh)
?>
