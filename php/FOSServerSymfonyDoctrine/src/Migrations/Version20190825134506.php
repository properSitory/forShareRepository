<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190825134506 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE situations ADD idapprenant_id INT NOT NULL');
        $this->addSql('ALTER TABLE situations ADD CONSTRAINT FK_6053C93F83C60264 FOREIGN KEY (idapprenant_id) REFERENCES apprenants (id)');
        $this->addSql('CREATE INDEX IDX_6053C93F83C60264 ON situations (idapprenant_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE situations DROP FOREIGN KEY FK_6053C93F83C60264');
        $this->addSql('DROP INDEX IDX_6053C93F83C60264 ON situations');
        $this->addSql('ALTER TABLE situations DROP idapprenant_id');
    }
}
