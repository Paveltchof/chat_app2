/* creation table user*/

CREATE TABLE IF NOT EXISTS `chatdb`.`User` (
  `User_Id` INT NOT NULL AUTO_INCREMENT,
  `Name_U` VARCHAR(50) NOT NULL,
  `E-mail` VARCHAR(50) NOT NULL,
  `PassWord` VARCHAR(45) COLLATE 'DEFAULT' NOT NULL,
  PRIMARY KEY (`User_Id`),
  UNIQUE INDEX `E-mail_UNIQUE` (`E-mail` ASC) VISIBLE);
  
  /* Table messagage*/

  CREATE TABLE IF NOT EXISTS `chatdb`.`Message` (
  `Message_Id` INT NOT NULL AUTO_INCREMENT,
  `Message_body` LONGTEXT NOT NULL,
  `Sent_at` DATETIME NOT NULL DEFAULT DATE.NOW,
  `Delivered` TINYINT NULL DEFAULT 0,
  `Id_user` INT NOT NULL,
  `Id_group` INT NOT NULL,
  PRIMARY KEY (`Message_Id`),
  INDEX `Id_user_idx` (`Id_user` ASC) VISIBLE,
  INDEX `Id_group_idx` (`Id_group` ASC) VISIBLE,
  CONSTRAINT `Id_user`
    FOREIGN KEY (`Id_user`)
    REFERENCES `chatdb`.`User` (`User_Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `Id_group`
    FOREIGN KEY (`Id_group`)
    REFERENCES `chatdb`.`Group` (`Group_Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

/* Table groupe*/

CREATE TABLE IF NOT EXISTS `chatdb`.`Group` (
  `Group_Id` INT NOT NULL AUTO_INCREMENT,
  `Name_G` VARCHAR(45) NOT NULL,
  `Created_at` DATETIME NULL DEFAULT DATE.NOW,
  PRIMARY KEY (`Group_Id`));
  
  /* Association participer*/

  CREATE TABLE IF NOT EXISTS `chatdb`.`Participer` (
  `Id_User` INT NOT NULL,
  `Id_Group` INT NOT NULL,
  INDEX `Id_Group_idx` (`Id_Group` ASC) VISIBLE,
  CONSTRAINT `Id_User`
    FOREIGN KEY (`Id_User`)
    REFERENCES `chatdb`.`User` (`User_Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `Id_Group`
    FOREIGN KEY (`Id_Group`)
    REFERENCES `chatdb`.`Group` (`Group_Id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);
ENGINE = InnoDB