-- Table: public.product

-- DROP TABLE public.product;

CREATE TABLE public.product
(
    id integer,
    style_id integer,
    name text COLLATE pg_catalog."default",
    slogan text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    original_price text COLLATE pg_catalog."default",
    photos text[] COLLATE pg_catalog."default",
    sale_price text COLLATE pg_catalog."default",
    skus text[] COLLATE pg_catalog."default",
    reviews text[] COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.product
    OWNER to postgres;
-- Index: brin_id

-- DROP INDEX public.brin_id;

CREATE INDEX brin_id
    ON public.product USING brin
    (id)
    TABLESPACE pg_default;
-- Index: id_index

-- DROP INDEX public.id_index;

CREATE INDEX id_index
    ON public.product USING hash
    (id)
    TABLESPACE pg_default;