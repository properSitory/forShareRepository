<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190726135435 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE specialites (id INT AUTO_INCREMENT NOT NULL, intitule VARCHAR(50) NOT NULL, active TINYINT(1) NOT NULL, idspecialite INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE secteurs (id INT AUTO_INCREMENT NOT NULL, intitule VARCHAR(50) NOT NULL, active TINYINT(1) NOT NULL, idannee INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE admin (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(50) NOT NULL, prenom VARCHAR(50) NOT NULL, login VARCHAR(50) NOT NULL, password VARCHAR(20) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE situations (id INT AUTO_INCREMENT NOT NULL, type_contrat INT NOT NULL, date_debut DATE NOT NULL, date_fin DATE NOT NULL, employeur VARCHAR(50) NOT NULL, intitule_poste VARCHAR(50) NOT NULL, liste_formation_suivies VARCHAR(255) NOT NULL, commentaire LONGTEXT NOT NULL, idapprenant INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE apprenants (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(50) NOT NULL, prenom VARCHAR(50) NOT NULL, genre INT NOT NULL, date_de_naissance DATE NOT NULL, adresse VARCHAR(255) NOT NULL, code_postale INT NOT NULL, email VARCHAR(50) NOT NULL, telephone INT NOT NULL, idgroupe INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE groupes (id INT AUTO_INCREMENT NOT NULL, intitule VARCHAR(50) NOT NULL, active INT NOT NULL, idspecialite INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE annees (id INT AUTO_INCREMENT NOT NULL, date_debut DATE NOT NULL, date_fin DATE NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE specialites');
        $this->addSql('DROP TABLE secteurs');
        $this->addSql('DROP TABLE admin');
        $this->addSql('DROP TABLE situations');
        $this->addSql('DROP TABLE apprenants');
        $this->addSql('DROP TABLE groupes');
        $this->addSql('DROP TABLE annees');
    }
}
