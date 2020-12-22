<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190825143459 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes ADD idapprenant_id INT NOT NULL');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D983C60264 FOREIGN KEY (idapprenant_id) REFERENCES groupes (id)');
        $this->addSql('CREATE INDEX IDX_576366D983C60264 ON groupes (idapprenant_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D983C60264');
        $this->addSql('DROP INDEX IDX_576366D983C60264 ON groupes');
        $this->addSql('ALTER TABLE groupes DROP idapprenant_id');
    }
}
