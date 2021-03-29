CREATE TABLE provider (
	id uuid NOT NULL PRIMARY KEY,
	client_id uuid NOT NULL,
	short_name VARCHAR(255) NOT NULL,
	first_name VARCHAR(255) NOT NULL,
	middle_name VARCHAR(255),
	last_name VARCHAR(255) NOT NULL,
    speciality VARCHAR(255) NOT NULL,
    tax_id VARCHAR(255),
    individual_npi VARCHAR(255),
    group_npi VARCHAR(255),
	taxonomy_code VARCHAR(100),
    ssn VARCHAR(255),
	clia_number VARCHAR(100),
	dea_number VARCHAR(100),
	nadean VARCHAR(255),
    direct_secure_email VARCHAR(100),
    direct_secure_password VARCHAR(255),
    qualification VARCHAR(255),
	email VARCHAR(100),
	cell_number VARCHAR(255),
	work_phone VARCHAR(255),
	fax VARCHAR(255),
	address_line_1 TEXT,
	address_line_2 TEXT,
	city varchar(255),
	state VARCHAR(255),
	zip_code INT,
    license_number VARCHAR(100),
    notes VARCHAR(255),
    active VARCHAR(100),
    signature VARCHAR(100),
    is_pay_to_address BOOLEAN,
	
	created_at TIMESTAMP NOT null default NOW(),
    updated_at TIMESTAMP not null default NOW(),
    deleted_at TIMESTAMP,
    foreign key (client_id) references clients(id)
);


CREATE TABLE practice_statement_messages (
	id SERIAL NOT NULL PRIMARY KEY,
	provider_id uuid NOT NULL,
	address_line_1 TEXT,
	address_line_2 TEXT,
	city varchar(255),
	state VARCHAR(255),
	zip_code INT,
   foreign key (provider_id) references providers(id)
);

CREATE TABLE provider_insurance_billing_options (
	id SERIAL NOT NULL PRIMARY KEY,
	provider_id uuid,
	insurance_id uuid,
    practice_location_id uuid,
    report_tax_id boolean,
    tax_id_type VARCHAR(20),
    pay_to_address VARCHAR(20),

   foreign key (provider_id) references providers(id),
    foreign key (practice_location_id) references practice_locations(id)
);
