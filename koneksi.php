<?php
$koneksi = new mysqli("localhost", "root", "", "gudang_penjualan");
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}
?>
