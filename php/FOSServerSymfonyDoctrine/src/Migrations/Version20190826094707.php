<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190826094707 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes ADD specialite_link_id INT DEFAULT NULL, DROP idspecialite_id');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D992AD10F5 FOREIGN KEY (specialite_link_id) REFERENCES specialites (id)');
        $this->addSql('CREATE INDEX IDX_576366D992AD10F5 ON groupes (specialite_link_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D992AD10F5');
        $this->addSql('DROP INDEX IDX_576366D992AD10F5 ON groupes');
        $this->addSql('ALTER TABLE groupes ADD idspecialite_id INT NOT NULL, DROP specialite_link_id');
    }
}
