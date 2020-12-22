<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190826183325 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D992AD10F5');
        $this->addSql('CREATE TABLE formations (id INT AUTO_INCREMENT NOT NULL, idsecteur_id INT NOT NULL, intitule VARCHAR(50) NOT NULL, active TINYINT(1) NOT NULL, groupes VARCHAR(255) DEFAULT NULL, INDEX IDX_4090213752D7593F (idsecteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE formations ADD CONSTRAINT FK_4090213752D7593F FOREIGN KEY (idsecteur_id) REFERENCES secteurs (id)');
        $this->addSql('DROP TABLE specialites');
        $this->addSql('ALTER TABLE secteurs CHANGE specialites formations VARCHAR(255) DEFAULT NULL');
        $this->addSql('DROP INDEX IDX_576366D992AD10F5 ON groupes');
        $this->addSql('ALTER TABLE groupes CHANGE specialite_link_id formation_link_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D9E85B470A FOREIGN KEY (formation_link_id) REFERENCES formations (id)');
        $this->addSql('CREATE INDEX IDX_576366D9E85B470A ON groupes (formation_link_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D9E85B470A');
        $this->addSql('CREATE TABLE specialites (id INT AUTO_INCREMENT NOT NULL, idsecteur_id INT NOT NULL, intitule VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, active TINYINT(1) NOT NULL, groupes VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, INDEX IDX_F78AEBD152D7593F (idsecteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE specialites ADD CONSTRAINT FK_F78AEBD152D7593F FOREIGN KEY (idsecteur_id) REFERENCES secteurs (id)');
        $this->addSql('DROP TABLE formations');
        $this->addSql('DROP INDEX IDX_576366D9E85B470A ON groupes');
        $this->addSql('ALTER TABLE groupes CHANGE formation_link_id specialite_link_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D992AD10F5 FOREIGN KEY (specialite_link_id) REFERENCES specialites (id)');
        $this->addSql('CREATE INDEX IDX_576366D992AD10F5 ON groupes (specialite_link_id)');
        $this->addSql('ALTER TABLE secteurs CHANGE formations specialites VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
    }
}
