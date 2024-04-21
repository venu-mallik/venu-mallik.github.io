| Feature | AWS | Google Cloud | Azure |
|---------|-----|--------------|-------|
| **Batch Processing** |
| Managed Service | AWS EMR, AWS Batch | Google Dataproc | Azure HDInsight, Azure Batch |
| Engine Support | Spark, Hadoop, Presto | Spark, Hadoop | Spark, Hadoop, Hive, Pig |
| **Stream Processing** |
| Managed Service | Amazon Kinesis Data Streams/Analytics/Firehose | Google Cloud Dataflow | Azure Stream Analytics, Azure Event Hubs |
| Engine Support | Apache Flink, Apache Spark, AWS Lambda | Apache Beam, Apache Spark | Apache Spark, Azure Stream Analytics Query Language |
| **Data Warehousing** |
| Managed Service | Amazon Redshift, Amazon Athena | Google BigQuery | Azure Synapse Analytics |
| Data Format | Columnar, ParquetClouded | Columnar | Columnar, Parquet |
| Query Engine | PostgreSQL-based, Presto | SQL-like | SQL-based, Spark |
| **Data Lakes** |
| Managed Service | Amazon S3, AWS Lake Formation | Google Cloud Storage, Dataproc Metastore | Azure Data Lake Storage Gen2, Azure Databricks |
| Storage Format | Parquet, ORC, Avro | Parquet, ORC, Avro | Parquet, ORC, Avro |
| Catalog/Governance | AWS Glue Data Catalog, Lake Formation | Dataproc Metastore, Data Catalog | Azure Purview, Databricks Unity Catalog |
| **Data Pipelines** |
| Managed Service | AWS Glue, AWS Data Pipeline | Google Cloud Dataflow | Azure Data Factory |
| Workflow Management | Apache Airflow (self-managed) | Apache Airflow (self-managed) | Azure Data Factory |
| **Message Queuing** |
| Managed Service | Amazon SQS, Amazon MQ | Google Cloud Pub/Sub | Azure Service Bus, Azure Event Hubs |
| Delivery Semantics | At-Least-Once (SQS), Exactly-Once (MQ) | At-Least-Once | At-Least-Once |
| **Machine Learning** |
| Managed Service | Amazon SageMaker | Google Cloud AI Platform | Azure Machine Learning |
| Engine Support | TensorFlow, PyTorch, scikit-learn | TensorFlow, PyTorch, scikit-learn | TensorFlow, PyTorch, scikit-learn |

