-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 06, 2024 at 02:46 PM
-- Server version: 8.0.31
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `factchecking_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `medias_confiance`
--

CREATE TABLE `medias_confiance` (
  `id` int NOT NULL,
  `nom_media` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `url_media` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medias_confiance`
--

INSERT INTO `medias_confiance` (`id`, `nom_media`, `url_media`) VALUES
(1, 'Le Devoir', 'https://ledevoir.com'),
(2, 'Radio-Canada', 'https://radio-canada.ca'),
(3, 'La Presse', 'https://lapresse.ca'),
(4, 'FPJQ', 'https://www.fpjq.org'),
(5, 'The Globe and Mail', 'https://www.theglobeandmail.com'),
(6, 'CBC News', 'https://www.cbc.ca/news');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `medias_confiance`
--
ALTER TABLE `medias_confiance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `url_media` (`url_media`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medias_confiance`
--
ALTER TABLE `medias_confiance`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
