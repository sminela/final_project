-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: zuteks
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `dimension` varchar(45) DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  `product_subcategory_id` int(11) NOT NULL,
  `soldInd` varchar(45) DEFAULT '0',
  `quantity` int(11) DEFAULT NULL,
  `image1` varchar(512) NOT NULL,
  `image2` varchar(512) NOT NULL,
  `description` varchar(512) NOT NULL,
  `image3` varchar(512) DEFAULT NULL,
  `image4` varchar(512) DEFAULT NULL,
  `product_category_id` int(11) NOT NULL,
  `isInBasket` varchar(45) DEFAULT '0',
  `isInWishlist` varchar(45) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_product_product_category_idx` (`product_subcategory_id`),
  KEY `fk_product_product_category_idx1` (`product_category_id`),
  CONSTRAINT `fk_product_product_category_id` FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_product_subcategory` FOREIGN KEY (`product_subcategory_id`) REFERENCES `product_subcategory` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'finnala',NULL,599.00,1,'0',6,'/assets/images/sofa1.webp','/assets/images/sofa1_1.webp','FINNALA sectional sofa can grow and change with a home and the family. Choose how many seats, the look and function to create a sofa that suits you. A clean design and long-lasting comfort are included.','/assets/images/sofa1_2.webp','/assets/images/sofa1_3.webp',1,'1','0'),(2,'vimle',NULL,799.00,1,'1',5,'/assets/images/sofa2.webp','/assets/images/sofa2_2.webp','Warm and welcoming, neat and stylish. The supporting seat cushions, the cover’s soft finish and the tight fit gives this sofa a perfect balance between its comfort, functions and look.','/assets/images/sofa2_3.webp','/assets/images/sofa2_4.webp',1,'1','0'),(3,'morabo',NULL,799.00,1,'0',2,'/assets/images/sofa3.webp','/assets/images/sofa3_1.webp','Warm and welcoming, neat and stylish. The supporting seat cushions, the cover’s soft finish and the tight fit gives this sofa a perfect balance between its comfort, functions and look.','/assets/images/sofa3_2.webp','/assets/images/sofa3_3.webp',1,'0','0'),(4,'harlanda',NULL,849.00,1,'0',1,'/assets/images/sofa4.jpg','/assets/images/sofa4_1.jpg','Cozy evenings, lazy days and nice socializing with family and friends – occasions when the super-comfy and deep HÄRLANDA sofa is perfect. You sink softly down and enjoy an embracing feeling in this sofa.','/assets/images/sofa4_2.webp','/assets/images/sofa4_3.jpg',1,'0','0'),(5,'ekero',NULL,159.00,1,'0',2,'/assets/images/chair2.webp','/assets/images/chair2_2.webp','Cozy evenings, lazy days and nice socializing with family and friends – occasions when the super-comfy and deep HÄRLANDA sofa is perfect. You sink softly down and enjoy an embracing feeling in this sofa.','','',1,'0','0'),(6,'gronlid',NULL,349.00,1,'0',3,'/assets/images/chair3.jpg','/assets/images/chair3_1.webp','Cozy evenings, lazy days and nice socializing with family and friends – occasions when the super-comfy and deep HÄRLANDA sofa is perfect. You sink softly down and enjoy an embracing feeling in this sofa.','','',1,'0','0'),(7,'malm',NULL,499.00,2,'0',10,'/assets/images/bad1.webp','/assets/images/bad1_1.jpg','Cozy evenings, lazy days and nice socializing with family and friends – occasions when the super-comfy and deep HÄRLANDA sofa is perfect. You sink softly down and enjoy an embracing feeling in this sofa.','','',1,'0','0'),(8,'leirvik',NULL,79.00,2,'0',7,'/assets/images/bad2.webp','/assets/images/bad2_1.webp','Cozy evenings, lazy days and nice socializing with family and friends – occasions when the super-comfy and deep HÄRLANDA sofa is perfect. You sink softly down and enjoy an embracing feeling in this sofa.','','',1,'0','0'),(9,'slattum',NULL,99.00,2,'0',8,'/assets/images/bad3.webp','/assets/images/bad3_1.webp','Cozy evenings, lazy days and nice socializing with family and friends – occasions when the super-comfy and deep HÄRLANDA sofa is perfect. You sink softly down and enjoy an embracing feeling in this sofa.','','',1,'0','0'),(11,'noraa',NULL,99.00,4,'0',1,'/assets/images/table1.webp','/assets/images/table1_1.jpg','Each table expresses straightforward Scandinavian design in birch with varying grain patterns and natural color shifts. Approved for public use – so you know it can handle eager children and wild friends.',NULL,NULL,1,'0','0'),(12,'ivar',NULL,29.00,5,'0',1,'/assets/images/chair1.webp','/assets/images/chair1_1.webp','Solid wood is a durable natural material which can be sanded and surface treated when required.',NULL,NULL,1,'0','0'),(13,'hilja',NULL,12.00,6,'0',1,'/assets/images/curtain1.webp','/assets/images/curtain1_1.webp','A perfect solution when you want privacy or want to block annoying glares on TV and computer screens. The outside light still comes through and creates a cozy atmosphere in the room.',NULL,NULL,2,'0','0');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-23 23:42:12
