-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Des 2023 pada 11.04
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pertemuan11_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(2, 'Jane Smith', 'jane.smith@example.com', 'securepass', '2023-12-04 11:12:11'),
(3, 'Bob Johnson', 'bob.johnson@example.com', 'letmein', '2023-12-04 11:12:11'),
(4, 'johanes alexander', 'joh300@gmail.com', 'joh12345', '2023-12-04 11:34:55'),
(5, 'test', 'test@gmail', 'test1234', '2023-12-10 07:26:01'),
(6, 'test', 'test2@gmail.com', 'test123456A#', '2023-12-10 07:44:06'),
(7, 'test', 'test2@gmail.co.id', 'test#123A', '2023-12-10 07:57:26'),
(8, 'test', 'test3@gmail.co.id', 'test#123A', '2023-12-10 16:31:32'),
(9, 'test', 'test4@gmai', 'tes', '2023-12-10 16:38:51'),
(10, 'test', 'test4@gmail.com', 'tes', '2023-12-10 16:38:59'),
(11, 'test', 'test2@gmail.co.id', 'test#123A', '2023-12-10 16:39:09'),
(12, 'test', 'test6@gmail.com', 'test#123A1', '2023-12-10 16:59:45');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
