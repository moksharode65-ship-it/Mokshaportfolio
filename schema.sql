-- schema.sql — Single source of truth for database shape
-- If adding a contact form or CMS later, use this to keep field names consistent.

-- --- Contact form table (optional) ---
-- Uncomment and run if you add a contact form to the portfolio

-- CREATE TABLE contacts (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(100) NOT NULL,
--   email VARCHAR(100) NOT NULL,
--   message TEXT NOT NULL,
--   created_at TIMESTAMPTZ DEFAULT now(),
--   CONSTRAints UQ_contacts_email UNIQUE (email)
-- );

-- --- Index for faster lookups ---
-- CREATE INDEX idx_contacts_created_at ON contacts (created_at DESC);