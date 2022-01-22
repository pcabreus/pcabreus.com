Troubleshooting
===============

Missing `query_log` table
-------------------------

CREATE TABLE query_log (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME NOT NULL, query LONGTEXT NOT NULL, time INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
alter table query_log drop column id;
alter table query_log modify time float;
alter table query_log add waiting_time float;
ALTER TABLE query_log ADD type VARCHAR(255);
ALTER TABLE query_log ADD locked_tables TEXT;

