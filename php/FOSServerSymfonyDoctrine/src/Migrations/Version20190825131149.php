<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190825131149 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE apprenants ADD situations_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE apprenants ADD CONSTRAINT FK_C71C2982A12C0BB4 FOREIGN KEY (situations_id) REFERENCES situations (id)');
        $this->addSql('CREATE INDEX IDX_C71C2982A12C0BB4 ON apprenants (situations_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE apprenants DROP FOREIGN KEY FK_C71C2982A12C0BB4');
        $this->addSql('DROP INDEX IDX_C71C2982A12C0BB4 ON apprenants');
        $this->addSql('ALTER TABLE apprenants DROP situations_id');
    }
}
