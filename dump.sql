--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: jobs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.jobs (
    id integer NOT NULL,
    "position" text NOT NULL,
    company text NOT NULL,
    salary integer NOT NULL,
    summoned boolean DEFAULT false NOT NULL
);


--
-- Name: jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.jobs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.jobs_id_seq OWNED BY public.jobs.id;


--
-- Name: jobs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.jobs ALTER COLUMN id SET DEFAULT nextval('public.jobs_id_seq'::regclass);


--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.jobs VALUES (6, 'Geophysicist', 'Nuvia Dynamics Inc.', 10000, false);
INSERT INTO public.jobs VALUES (8, 'Tester', 'IBM', 6000, false);
INSERT INTO public.jobs VALUES (12, 'Tester', 'Grupo Jacto', 5000, false);
INSERT INTO public.jobs VALUES (17, 'Electrical Engineer', 'Intel Corporation', 8000, false);
INSERT INTO public.jobs VALUES (9, 'Tester', 'Avenue', 5000, true);
INSERT INTO public.jobs VALUES (7, 'Geophysicist', 'Samsung Brasil', 10000, false);
INSERT INTO public.jobs VALUES (10, 'Tester', 'Samsung Brasil', 5000, false);
INSERT INTO public.jobs VALUES (11, 'Tester', 'Samsung Brasil', 5000, false);
INSERT INTO public.jobs VALUES (3, 'Geophysicist', 'Samsung Brasil', 10000, true);
INSERT INTO public.jobs VALUES (2, 'Tester', 'Samsung Brasil', 4000, true);
INSERT INTO public.jobs VALUES (13, 'Tester', 'Samsung Brasil', 7000, true);
INSERT INTO public.jobs VALUES (18, 'Front-end developer', 'Samsung Brasil', 8000, false);
INSERT INTO public.jobs VALUES (4, 'Geophysicist', 'Samsung Brasil', 10000, true);


--
-- Name: jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.jobs_id_seq', 18, true);


--
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

