<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190726143540 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE apprenants');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE groupes');
        $this->addSql('DROP TABLE situations');
        $this->addSql('DROP TABLE specialites');
        $this->addSql('ALTER TABLE secteurs CHANGE idannee idannee_id INT NOT NULL');
        $this->addSql('ALTER TABLE secteurs ADD CONSTRAINT FK_968687DBFEEB8DFD FOREIGN KEY (idannee_id) REFERENCES annees (id)');
        $this->addSql('CREATE INDEX IDX_968687DBFEEB8DFD ON secteurs (idannee_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE apprenants (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, prenom VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, genre INT NOT NULL, date_de_naissance DATE NOT NULL, adresse VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, code_postale INT NOT NULL, email VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, telephone INT NOT NULL, idgroupe INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, name LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, description LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE groupes (id INT AUTO_INCREMENT NOT NULL, intitule VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, active INT NOT NULL, idspecialite INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE situations (id INT AUTO_INCREMENT NOT NULL, type_contrat INT NOT NULL, date_debut DATE NOT NULL, date_fin DATE NOT NULL, employeur VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, intitule_poste VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, liste_formation_suivies VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, commentaire LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci, idapprenant INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE specialites (id INT AUTO_INCREMENT NOT NULL, intitule VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, active TINYINT(1) NOT NULL, idspecialite INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE secteurs DROP FOREIGN KEY FK_968687DBFEEB8DFD');
        $this->addSql('DROP INDEX IDX_968687DBFEEB8DFD ON secteurs');
        $this->addSql('ALTER TABLE secteurs CHANGE idannee_id idannee INT NOT NULL');
    }
}
