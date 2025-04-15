<?php
include "koneksi.php";
$nama = $_POST['nama'];
$stok = $_POST['stok'];
$harga = $_POST['harga'];

$koneksi->query("INSERT INTO barang (nama, stok, harga) VALUES ('$nama', '$stok', '$harga')");
echo json_encode(["status" => "success"]);
?>
