<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190826085509 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE apprenants CHANGE nom nom VARCHAR(50) DEFAULT NULL, CHANGE prenom prenom VARCHAR(50) DEFAULT NULL, CHANGE genre genre INT DEFAULT NULL, CHANGE date_de_naissance date_de_naissance DATE DEFAULT NULL, CHANGE adresse adresse VARCHAR(255) DEFAULT NULL, CHANGE code_postale code_postale INT DEFAULT NULL, CHANGE email email VARCHAR(50) DEFAULT NULL, CHANGE telephone telephone VARCHAR(20) DEFAULT NULL');
        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D9580FF72B');
        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D95A9871FC');
        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D9D4B7C9BD');
        $this->addSql('DROP INDEX IDX_576366D9D4B7C9BD ON groupes');
        $this->addSql('DROP INDEX IDX_576366D9580FF72B ON groupes');
        $this->addSql('DROP INDEX IDX_576366D95A9871FC ON groupes');
        $this->addSql('ALTER TABLE groupes ADD annees_link_id INT DEFAULT NULL, DROP idspecialite_id, DROP apprenants_id, DROP annees_id, CHANGE intitule intitule VARCHAR(50) DEFAULT NULL, CHANGE active active TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D996B2485B FOREIGN KEY (annees_link_id) REFERENCES annees (id)');
        $this->addSql('CREATE INDEX IDX_576366D996B2485B ON groupes (annees_link_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE apprenants CHANGE nom nom VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE prenom prenom VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE genre genre INT NOT NULL, CHANGE date_de_naissance date_de_naissance DATE NOT NULL, CHANGE adresse adresse VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE code_postale code_postale INT NOT NULL, CHANGE email email VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE telephone telephone VARCHAR(20) NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE groupes DROP FOREIGN KEY FK_576366D996B2485B');
        $this->addSql('DROP INDEX IDX_576366D996B2485B ON groupes');
        $this->addSql('ALTER TABLE groupes ADD idspecialite_id INT NOT NULL, ADD annees_id INT DEFAULT NULL, CHANGE intitule intitule VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, CHANGE active active TINYINT(1) NOT NULL, CHANGE annees_link_id apprenants_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D9580FF72B FOREIGN KEY (idspecialite_id) REFERENCES specialites (id)');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D95A9871FC FOREIGN KEY (annees_id) REFERENCES annees (id)');
        $this->addSql('ALTER TABLE groupes ADD CONSTRAINT FK_576366D9D4B7C9BD FOREIGN KEY (apprenants_id) REFERENCES apprenants (id)');
        $this->addSql('CREATE INDEX IDX_576366D9D4B7C9BD ON groupes (apprenants_id)');
        $this->addSql('CREATE INDEX IDX_576366D9580FF72B ON groupes (idspecialite_id)');
        $this->addSql('CREATE INDEX IDX_576366D95A9871FC ON groupes (annees_id)');
    }
}
