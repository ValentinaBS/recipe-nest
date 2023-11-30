-- MySQL Script generated by MySQL Workbench
-- Wed Oct 25 11:51:51 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema recipedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `recipedb` ;

-- -----------------------------------------------------
-- Schema recipedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `recipedb` DEFAULT CHARACTER SET utf8 ;
USE `recipedb` ;

-- -----------------------------------------------------
-- Table `recipedb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipedb`.`User` (
  `user_id` INT AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `user_image` VARCHAR(45) NULL,
  `user_description` VARCHAR(500) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `recipedb`.`recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipedb`.`recipe` (
  `recipe_id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `recipe_title` VARCHAR(45) NULL,
  `recipe_instructions` VARCHAR(1000) NULL,
  `recipe_likes` INT NULL,
  `recipe_cooktime` VARCHAR(45) NULL,
  `recipe_portions` INT NULL,
  `recipe_published_time` DATE NULL,
  `recipe_image` VARCHAR(255) NULL,
  `recipe_category_type` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `recipe_active` TINYINT NULL,
  `recipe_category_occasion` VARCHAR(45) NULL,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `recipedb`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `recipedb`.`UserRecipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipedb`.`UserRecipe` (
  `recipe_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `user_recipe_id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `recipedb`.`recipe` (`recipe_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id_userrecipe`
    FOREIGN KEY (`user_id`)
    REFERENCES `recipedb`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `recipedb`.`Ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipedb`.`Ingredient` (
  `ingredient_id` VARCHAR(45) NOT NULL,
  `ingredient_name` VARCHAR(45) NULL,
  `ingredient_quantity` DOUBLE NULL,
  `ingredient_unit` VARCHAR(45) NULL,
  PRIMARY KEY (`ingredient_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `recipedb`.`RecipeIngredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipedb`.`RecipeIngredient` (
  `ingredient_id` INT NOT NULL,
  `recipe_id` INT NOT NULL,
  `recipe_ingredient` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  INDEX `recipe_id_idx` (`recipe_id` ASC) VISIBLE,
  CONSTRAINT `recipe_id_recipeingredient`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `recipedb`.`recipe` (`recipe_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ingredient_id`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `recipedb`.`Ingredient` (`ingredient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `recipedb`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `recipedb`.`Comment` (
  `comment_id` INT AUTO_INCREMENT NOT NULL,
  `comment_text` VARCHAR(500) NULL,
  `comment_likes` INT NULL,
  `comment_published_time` DATETIME NULL,
  `recipe_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `comment_active` TINYINT NULL,
  PRIMARY KEY (`comment_id`, `user_id`, `recipe_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `comment_id_idx` (`recipe_id` ASC) VISIBLE,
  CONSTRAINT `comment_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `recipedb`.`recipe` (`recipe_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id_comment`
    FOREIGN KEY (`user_id`)
    REFERENCES `recipedb`.`User` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
