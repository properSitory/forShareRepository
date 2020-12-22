<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190826163042 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE groupes_apprenants (groupes_id INT NOT NULL, apprenants_id INT NOT NULL, INDEX IDX_36B13C4D305371B (groupes_id), INDEX IDX_36B13C4DD4B7C9BD (apprenants_id), PRIMARY KEY(groupes_id, apprenants_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE groupes_apprenants ADD CONSTRAINT FK_36B13C4D305371B FOREIGN KEY (groupes_id) REFERENCES groupes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE groupes_apprenants ADD CONSTRAINT FK_36B13C4DD4B7C9BD FOREIGN KEY (apprenants_id) REFERENCES apprenants (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE groupes ADD specialite_link_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D992AD10F5 FOREIGN KEY (specialite_link_id) REFERENCES specialites (id)');
        $this->addSql('CREATE INDEX IDX_576366D992AD10F5 ON groupes (specialite_link_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE groupes_apprenants');
        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D992AD10F5');
        $this->addSql('DROP INDEX IDX_576366D992AD10F5 ON groupes');
        $this->addSql('ALTER TABLE groupes DROP specialite_link_id');
    }
}
