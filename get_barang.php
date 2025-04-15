<?php
include "koneksi.php";
$data = $koneksi->query("SELECT * FROM barang");
$result = [];
while ($row = $data->fetch_assoc()) {
    $result[] = $row;
}
echo json_encode($result);
?>
