<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190726145132 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE specialites (id INT AUTO_INCREMENT NOT NULL, idsecteur_id INT NOT NULL, intitule VARCHAR(50) NOT NULL, active TINYINT(1) NOT NULL, INDEX IDX_F78AEBD152D7593F (idsecteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE secteurs (id INT AUTO_INCREMENT NOT NULL, idannee_id INT NOT NULL, intitule VARCHAR(50) NOT NULL, active TINYINT(1) NOT NULL, INDEX IDX_968687DBFEEB8DFD (idannee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE admin (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(50) NOT NULL, prenom VARCHAR(50) NOT NULL, login VARCHAR(50) NOT NULL, password VARCHAR(20) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE situations (id INT AUTO_INCREMENT NOT NULL, idapprenant_id INT NOT NULL, type_contrat INT NOT NULL, date_debut DATE NOT NULL, date_fin DATE NOT NULL, employeur VARCHAR(50) NOT NULL, intitule_poste VARCHAR(50) NOT NULL, liste_formation_suivies VARCHAR(255) NOT NULL, commentaire LONGTEXT NOT NULL, INDEX IDX_6053C93F83C60264 (idapprenant_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE apprenants (id INT AUTO_INCREMENT NOT NULL, idgroupe_id INT NOT NULL, nom VARCHAR(50) NOT NULL, prenom VARCHAR(50) NOT NULL, genre INT NOT NULL, date_de_naissance DATE NOT NULL, adresse VARCHAR(255) NOT NULL, code_postale INT NOT NULL, email VARCHAR(50) NOT NULL, telephone VARCHAR(20) NOT NULL, INDEX IDX_C71C298245E9C79 (idgroupe_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE groupes (id INT AUTO_INCREMENT NOT NULL, idspecialite_id INT NOT NULL, intitule VARCHAR(50) NOT NULL, active TINYINT(1) NOT NULL, INDEX IDX_576366D9580FF72B (idspecialite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE annees (id INT AUTO_INCREMENT NOT NULL, date_debut DATE NOT NULL, date_fin DATE NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE specialites ADD CONSTRAINT FK_F78AEBD152D7593F FOREIGN KEY (idsecteur_id) REFERENCES secteurs (id)');
        $this->addSql('ALTER TABLE secteurs ADD CONSTRAINT FK_968687DBFEEB8DFD FOREIGN KEY (idannee_id) REFERENCES annees (id)');
        $this->addSql('ALTER TABLE situations ADD CONSTRAINT FK_6053C93F83C60264 FOREIGN KEY (idapprenant_id) REFERENCES apprenants (id)');
        $this->addSql('ALTER TABLE apprenants ADD CONSTRAINT FK_C71C298245E9C79 FOREIGN KEY (idgroupe_id) REFERENCES groupes (id)');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D9580FF72B FOREIGN KEY (idspecialite_id) REFERENCES specialites (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D9580FF72B');
        $this->addSql('ALTER TABLE specialites DROP FOREIGN KEY FK_F78AEBD152D7593F');
        $this->addSql('ALTER TABLE situations DROP FOREIGN KEY FK_6053C93F83C60264');
        $this->addSql('ALTER TABLE apprenants DROP FOREIGN KEY FK_C71C298245E9C79');
        $this->addSql('ALTER TABLE secteurs DROP FOREIGN KEY FK_968687DBFEEB8DFD');
        $this->addSql('DROP TABLE specialites');
        $this->addSql('DROP TABLE secteurs');
        $this->addSql('DROP TABLE admin');
        $this->addSql('DROP TABLE situations');
        $this->addSql('DROP TABLE apprenants');
        $this->addSql('DROP TABLE groupes');
        $this->addSql('DROP TABLE annees');
    }
}
