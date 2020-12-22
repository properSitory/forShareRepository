<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190802112102 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE secteurs DROP FOREIGN KEY FK_968687DBFEEB8DFD');
        $this->addSql('DROP INDEX IDX_968687DBFEEB8DFD ON secteurs');
        $this->addSql('ALTER TABLE secteurs ADD idannee VARCHAR(255) DEFAULT NULL, DROP idannee_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE secteurs ADD idannee_id INT DEFAULT NULL, DROP idannee');
        $this->addSql('ALTER TABLE secteurs ADD CONSTRAINT FK_968687DBFEEB8DFD FOREIGN KEY (idannee_id) REFERENCES annees (id)');
        $this->addSql('CREATE INDEX IDX_968687DBFEEB8DFD ON secteurs (idannee_id)');
    }
}
