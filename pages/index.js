import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import App from "./app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
         <title>Data Landscape</title>
        <meta name="description" content="Data Engineering Cheat Sheets Hadoop SQL Pandas Big data powerbi"></meta>

        <meta name="article:author" content="AI + Venu Mallik" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Data Landscape" />
        <meta name='viewport' content='width=1024'></meta>
        <meta charset='UTF-8' />
        <meta name='keywords' content={`Data engineering, Hadoop, SQL, NOSQL, Python, Pandas, PowerBI,
         Data visualization, Pyspark, Data Steward, ETL, ELT, extract, transfrom , load, Big Data,
         cassandra, apache, ETL (Extract, Transform, Load)
         Data Pipelines
         Data Warehousing
         Data Lakes
         Data Integration
         Data Modeling
         Data Quality
         Data Governance
         Data Ingestion
         Data Processing
         Batch Processing
         Stream Processing
         Data Transformation
         Data Cleaning
         Data Validation
         Data Enrichment
         Data Normalization
         Schema Design
         Data Partitioning
         Data Archiving
         Metadata Management
         Data Lineage
         Data Cataloging
         Data Versioning
         Data Encryption
         Data Security
         Data Backup
         Data Replication
         Distributed Systems
         Big Data Technologies (Hadoop, Spark, Kafka, etc.)
         Cloud Data Engineering
         Data Engineering Tools (Airflow, Luigi, Nifi, etc.)
         SQL (Structured Query Language)
         NoSQL (Non-relational Databases)
         Data Formats (CSV, JSON, Parquet, Avro, etc.)
         Coding Languages (Python, Scala, Java, etc.)
         Data Monitoring
         Data Testing
         DevOps for Data Engineering
         Data Engineering Best Practices         
           `} />
        <meta name='subject' content='Data Engineering Landscape comparision'/>
        <meta name='og:description' content='TODO'/>

        <meta name='author' content='Venu Mallik, venu.mallik@gmail.com'/>
        <meta name='designer' content='Venu Mallik, venu.mallik@gmail.com'/>
        <meta name='reply-to' content='venu.mallik@gmail.com'/>
        <meta name='owner' content='Venu Mallik'/>
        <meta name='category' content=''/>
        <meta name='coverage' content='Worldwide'/>
        <meta name='distribution' content='Global'/>
        <meta name='rating' content='General'/>
        <meta name='HandheldFriendly' content='True'/>
        <meta name='MobileOptimized' content='320'/>
        <meta name='medium' content='blog'/>
        <meta name='og:title' content='Data Landscape'/>
        <meta name='og:type' content='article'/>
        
        <meta name='og:email' content='venu.mallik@gmail.com'/>
        <meta name='og:phone_number' content='+91 9885920369'/>
        

        <meta name='og:latitude' content='16.5462317'/>
        <meta name='og:longitude' content='80.5752222'/>
        <meta name='og:street-address' content='Gollapudi'/>
        <meta name='og:locality' content='Vijayawada'/>
        <meta name='og:region' content='Andhra Pradesh'/>
        <meta name='og:postal-code' content='521225'/>
        <meta name='og:country-name' content='India'/>


      </Head>
      <main >
        <App></App>
      </main>
    </>
  );
}
