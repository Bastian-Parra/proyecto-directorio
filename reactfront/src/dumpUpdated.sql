-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_proyecto
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id` int NOT NULL,
  `id_ubicacion` int NOT NULL,
  `direccion_evento` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre_evento` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_hora` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ubicacion` (`id_ubicacion`),
  CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (1,1,'456 Calle del Evento','Concierto de Rock','2023-10-15'),(2,2,'789 Calle del Evento','Exposición de Arte','2023-11-05'),(3,3,'123 Calle del Evento','Feria de Comida','2023-09-20'),(4,4,'984 Calle del Evento','Feria de Electronica','2023-09-01');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_eventos`
--

DROP TABLE IF EXISTS `imagenes_eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagenes_evento` blob NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `imagenes_eventos_ibfk_1` FOREIGN KEY (`id`) REFERENCES `eventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_eventos`
--

LOCK TABLES `imagenes_eventos` WRITE;
/*!40000 ALTER TABLE `imagenes_eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes_eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes_lugares`
--

DROP TABLE IF EXISTS `imagenes_lugares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes_lugares` (
  `id` int NOT NULL,
  `imagenes_lugar` blob NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `imagenes_lugares_ibfk_1` FOREIGN KEY (`id`) REFERENCES `lugar_interes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes_lugares`
--

LOCK TABLES `imagenes_lugares` WRITE;
/*!40000 ALTER TABLE `imagenes_lugares` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes_lugares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lugar_interes`
--

DROP TABLE IF EXISTS `lugar_interes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lugar_interes` (
  `id` int NOT NULL,
  `id_reseña` int NOT NULL,
  `id_ubicacion` int NOT NULL,
  `nombre_lugar` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `direccion_lugar` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_reseña` (`id_reseña`),
  KEY `id_ubicacion` (`id_ubicacion`),
  CONSTRAINT `lugar_interes_ibfk_1` FOREIGN KEY (`id_reseña`) REFERENCES `reseñas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lugar_interes_ibfk_2` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugar_interes`
--

LOCK TABLES `lugar_interes` WRITE;
/*!40000 ALTER TABLE `lugar_interes` DISABLE KEYS */;
INSERT INTO `lugar_interes` VALUES (1,2,3,'Museo de Arte','123 Calle del Museo'),(2,3,2,'Parque de Diversiones','456 Calle del Parque'),(3,1,1,'Monumento Histórico','789 Calle del Monumento');
/*!40000 ALTER TABLE `lugar_interes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `negocios`
--

DROP TABLE IF EXISTS `negocios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `negocios` (
  `id` int NOT NULL,
  `tipo_negocio` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `H_operacion` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `direccion` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `correo` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `id_ubicacion` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ubicacion` (`id_ubicacion`),
  CONSTRAINT `negocios_ibfk_1` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `negocios`
--

LOCK TABLES `negocios` WRITE;
/*!40000 ALTER TABLE `negocios` DISABLE KEYS */;
INSERT INTO `negocios` VALUES (1,'Minimarket','2023-09-12','asiodjasklmdasdna','Negocio La esquina','Villa las rosas 2','123456789','correo@gmail.com',1),(2,'Restaurante','9:00 AM - 10:00 PM','Un restaurante acogedor','Mi Restaurante','123 Calle Principal','555-123-4567','mi@email.com',1),(3,'Tienda de Ropa','10:00 AM - 8:00 PM','Moda para todas las edades','Mi Tienda de Ropa','456 Calle Secundaria','555-987-6543','ropa@email.com',2),(4,'Cafetería','8:00 AM - 6:00 PM','Café fresco y pasteles','Mi Cafetería','789 Calle Otra','555-567-8901','cafe@email.com',3);
/*!40000 ALTER TABLE `negocios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `negocios_usuarios`
--

DROP TABLE IF EXISTS `negocios_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `negocios_usuarios` (
  `id_usuario` int NOT NULL,
  `id_negocio` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_negocio`),
  KEY `id_negocio` (`id_negocio`),
  CONSTRAINT `negocios_usuarios_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `negocios_usuarios_ibfk_2` FOREIGN KEY (`id_negocio`) REFERENCES `negocios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `negocios_usuarios_ibfk_3` FOREIGN KEY (`id_negocio`) REFERENCES `negocios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `negocios_usuarios`
--

LOCK TABLES `negocios_usuarios` WRITE;
/*!40000 ALTER TABLE `negocios_usuarios` DISABLE KEYS */;
INSERT INTO `negocios_usuarios` VALUES (1,1),(3,1),(2,2),(2,3);
/*!40000 ALTER TABLE `negocios_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reseñas`
--

DROP TABLE IF EXISTS `reseñas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reseñas` (
  `id` int NOT NULL,
  `id_negocio` int NOT NULL,
  `id_usuario` int NOT NULL,
  `fecha_reseña` date NOT NULL,
  `comentario` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `calificacion` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_negocio` (`id_negocio`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `reseñas_ibfk_1` FOREIGN KEY (`id_negocio`) REFERENCES `negocios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reseñas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseñas`
--

LOCK TABLES `reseñas` WRITE;
/*!40000 ALTER TABLE `reseñas` DISABLE KEYS */;
INSERT INTO `reseñas` VALUES (1,1,1,'2023-09-25','Gran comida y servicio',5),(2,2,2,'2023-09-26','Me encantó la exposición',4),(3,1,3,'2023-09-27','El restaurante es genial',5),(4,3,2,'2023-09-28','Buen café',4);
/*!40000 ALTER TABLE `reseñas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ubicaciones`
--

DROP TABLE IF EXISTS `ubicaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ubicaciones` (
  `id` int NOT NULL,
  `coordenadas` varchar(80) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre_ubicacion` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubicaciones`
--

LOCK TABLES `ubicaciones` WRITE;
/*!40000 ALTER TABLE `ubicaciones` DISABLE KEYS */;
INSERT INTO `ubicaciones` VALUES (1,'123.123','Sector Villa las Rosas'),(2,'40.7128,-74.0060','Nueva York, NY'),(3,'34.0522,-118.2437','Los Ángeles, CA'),(4,'41.8781,-87.6298','Chicago, IL');
/*!40000 ALTER TABLE `ubicaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `contraseña` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre_usuario` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  `correo_usuario` varchar(70) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'contraseña1','usuario1','usuario1@example.com'),(2,'contraseña2','usuario2','usuario2@example.com'),(3,'contraseña3','usuario3','usuario3@example.com'),(4,'contraseña4','usuario4','usuario4@example.com'),(5,'contraseña5','usuario5','usuario5@example.com');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_eventos`
--

DROP TABLE IF EXISTS `usuarios_eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_eventos` (
  `id_usuario` int NOT NULL,
  `id_evento` int NOT NULL,
  PRIMARY KEY (`id_usuario`,`id_evento`),
  KEY `id_evento` (`id_evento`),
  CONSTRAINT `usuarios_eventos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuarios_eventos_ibfk_2` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_eventos`
--

LOCK TABLES `usuarios_eventos` WRITE;
/*!40000 ALTER TABLE `usuarios_eventos` DISABLE KEYS */;
INSERT INTO `usuarios_eventos` VALUES (1,1),(1,2),(2,2),(3,3);
/*!40000 ALTER TABLE `usuarios_eventos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-25 22:05:55
