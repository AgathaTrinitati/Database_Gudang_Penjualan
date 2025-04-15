<?php
include "koneksi.php";
$id_barang = $_POST['id_barang'];
$jumlah = $_POST['jumlah'];

$barang = $koneksi->query("SELECT * FROM barang WHERE id=$id_barang")->fetch_assoc();
$total = $jumlah * $barang['harga'];
$sisa_stok = $barang['stok'] - $jumlah;

if ($sisa_stok < 0) {
    echo json_encode(["status" => "error", "message" => "Stok tidak cukup"]);
    exit;
}

$koneksi->query("INSERT INTO penjualan (id_barang, jumlah, total) VALUES ($id_barang, $jumlah, $total)");
$koneksi->query("UPDATE barang SET stok = $sisa_stok WHERE id = $id_barang");
echo json_encode(["status" => "success"]);
?>
