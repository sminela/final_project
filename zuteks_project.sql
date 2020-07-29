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
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(120) NOT NULL,
  `city` varchar(45) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `short_description` varchar(1024) NOT NULL,
  `description` varchar(1024) NOT NULL,
  `first_image` varchar(512) NOT NULL,
  `second_image` varchar(512) NOT NULL,
  `third_image` varchar(512) DEFAULT NULL,
  `fourth_image` varchar(512) DEFAULT NULL,
  `fifth_image` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'One Palm Apartment','Dubai','2020-07-05 20:26:18','Zuteks designed the interiors concept for the apartments within the prestigious One Palm development at The Palm Jumeirah, Dubai. Exquisite patterns and metalwork screens make a contemporary reference to mashrabiya screens and form a theme across the apartment.','Zuteks designed the interiors concept for the apartments within the prestigious One Palm development at The Palm Jumeirah, Dubai. Exquisite patterns and metalwork screens make a contemporary reference to mashrabiya screens and form a theme across the apartment, while tone on tone interiors to suit the panoramic beach views create a seamless flow between indoor and outdoor living that takes your breath away.','/assets/project-images/project6.jpg','/assets/project-images/onePalmProjectFirst.jpg','/assets/project-images/onePalmProjectSec.jpg','/assets/project-images/onePalmProjectThird.jpg','/assets/project-images/onePalmProjectFifth.jpg'),(2,'One Hyde Park Apartment','London','2020-07-05 20:40:46','Zuteks completed this incredible 3-bedroom apartment in Londons prestigious One Hyde Park development. The exquisite space is designed in a Hollywood Deco inspired scheme of soft neutrals, enriched by strong accents of burnt orange, petrol blue and dusky plum.','Zuteks was commissioned to design and project manage the complete refurbishment of this stunning 4-bedroom home in London’s One Hyde Park development. The apartment was completely remodelled to suit the client’s every desire and finished in an industrial luxe style. Almost every item in the property was designed bespoke by the Zuteks team to create the ultimate in luxury living. The project completed successfully in Q4 of 2017.','/assets/project-images/project5.jpg','/assets/project-images/hydeParkProjectFirst.jpg','/assets/project-images/hydeParkProjectSec.jpg','/assets/project-images/hydeParkProjectThird.jpg','/assets/project-images/hydeParkProjectFifth.jpg'),(3,'Concept Design for Sri Lanka Hotel','Sri Lanka','2020-07-05 21:15:26','2019 saw Zuteks step into the hotel design space, with the art direction of a luxury boutique hotel set in Sri Lanka’s magnificent tea country. The design concepts grew largely from the rich heritage and history of industries present in and around this particularly special part of Sri Lanka.','2019 saw Zuteks step into the hotel design space, with the art direction of a luxury boutique hotel set in Sri Lanka’s magnificent tea country. The design concepts grew largely from the rich heritage and history of industries present in and around this particularly special part of Sri Lanka. Majestic in scale, the design is modelled on a fusion of the British old colonial style with references to a traditional English manor house. The layout comprises of a series of luxurious yet charming spacious country bungalows and planters cottages, arranged around the central space of the elegant and sleek Manor House. High vaulted ceilings, dark paneling details and polished tiled and timber flooring all add to the colonial charm, whilst beautiful four poster beds, bespoke chandeliers and bold fabrics keep the space feeling contemporary with a nostalgic glamour of a time gone by. Still currently at concept design stage, this project has been hugely exciting to envisage.','/assets/project-images/project4.jpg','/assets/project-images/shrilankaProjectSecond.jpg','/assets/project-images/shrilankaProjectThird.jpg','/assets/project-images/shrilankaProjectFourth.jpg','/assets/project-images/shrilankaProjectFifth.jpg'),(4,'Duplex Apartment','Dubai','2020-07-05 21:22:40','This is the second of two show apartments designed by Zuteks at this landmark development, One Palm at The Palm Jumeirah, Dubai. An opulent scheme of antique brass tones is complimented by peach, warm neutrals and accents of soft green.','This is the second of two show apartments designed by Zuteks at this landmark development, One Palm at The Palm Jumeirah, Dubai. An opulent scheme of antique brass tones is complimented by peach, warm neutrals and accents of soft green. Featuring a dramatic staircase and exquisite book-matched marble, the apartment is designed in perfect harmony with its impressive location. The compelling space is the ultimate in luxury living in the Middle-East.','/assets/project-images/project3.jpg','/assets/project-images/dubaiProjectSec.jpg','/assets/project-images/dubaiProjectThird.jpg','/assets/project-images/dubaiProjectFourth.jpg','/assets/project-images/dubaiProjectFifth.jpg'),(5,'Mayfair Apartment','London','2020-07-05 22:10:45','Located in London’s prime location of Mayfair, this impressive lateral apartment was designed by Zuteks in a luxurious and contemporary style. A rich palette of navy blue and cream, with accents of delicate gold detailing that flow through the space.','Located in London’s prime location of Mayfair, this impressive lateral apartment was designed by Zuteks in a luxurious and contemporary style. A rich palette of navy blue and cream, with accents of delicate gold detailing that flow through the space. The crystal chandelier spirals beautifully across the bar in the reception room, while striking screens with brass detailing and a marble floor inlaid with a deep blue pattern, add an Art Deco feel to the scheme.','/assets/project-images/project2.jpg','/assets/project-images/londoProjectFirst.jpg','/assets/project-images/londoProjectFourth.jpg','/assets/project-images/londoProjectFifth.jpg','/assets/project-images/londoProjectThird.jpg'),(6,'Concept Design for Warsaw PURO Hotel','Warsaw','2020-07-09 14:54:17','Zuteks imagined this concept design for Warsaw PURO Hotel. Zuteks’s concept details the magnificent potential of the space, hoping to ignite the imagination and demonstrate how remarkably it can be used.','Elicyon produced these concept designs for Chelsea Barracks. Our vision explores the magnificent potential of the proposed brief, hoping to evoke and demonstrate how remarkably the space can be utilized.','/assets/project-images/project1.jpg','/assets/project-images/warsawProjectSecPic.jpg','/assets/project-images/warsawProjectFourthPic.jpg','/assets/project-images/warsawProjectThPic.jpg','/assets/project-images/warsawProjectFirst.jpg');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-23 23:42:14
