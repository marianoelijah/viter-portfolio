-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2025 at 04:35 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_advertisement`
--

CREATE TABLE `portfolio_advertisement` (
  `ads_aid` int(11) NOT NULL,
  `ads_is_active` tinyint(1) NOT NULL,
  `ads_image` varchar(20) NOT NULL,
  `ads_title` varchar(50) NOT NULL,
  `ads_datetime` varchar(20) NOT NULL,
  `ads_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_banner`
--

CREATE TABLE `portfolio_banner` (
  `banner_aid` int(11) NOT NULL,
  `banner_is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_category`
--

CREATE TABLE `portfolio_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_image` varchar(30) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `portfolio_advertisement`
--
ALTER TABLE `portfolio_advertisement`
  ADD PRIMARY KEY (`ads_aid`);

--
-- Indexes for table `portfolio_banner`
--
ALTER TABLE `portfolio_banner`
  ADD PRIMARY KEY (`banner_aid`);

--
-- Indexes for table `portfolio_category`
--
ALTER TABLE `portfolio_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `portfolio_advertisement`
--
ALTER TABLE `portfolio_advertisement`
  MODIFY `ads_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portfolio_banner`
--
ALTER TABLE `portfolio_banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portfolio_category`
--
ALTER TABLE `portfolio_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
