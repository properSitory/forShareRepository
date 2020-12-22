<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190830094253 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D9822470CB');
        $this->addSql('DROP INDEX IDX_576366D9822470CB ON groupes');
        $this->addSql('ALTER TABLE groupes DROP annee_link_id');
        $this->addSql('ALTER TABLE annees DROP groupe_link');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE annees ADD groupe_link INT NOT NULL');
        $this->addSql('ALTER TABLE groupes ADD annee_link_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D9822470CB FOREIGN KEY (annee_link_id) REFERENCES annees (id)');
        $this->addSql('CREATE INDEX IDX_576366D9822470CB ON groupes (annee_link_id)');
    }
}
