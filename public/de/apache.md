| Feature | Hadoop | Spark | Kafka | Hive | Impala | Flink | Cassandra | HBase | Zookeeper | Solr | NiFi | Beam |
|---------|--------|-------|-------|------|--------|-------|-----------|-------|-----------|------|------|------|
| Language | Java | Scala/Java/Python/R | Scala/Java | SQL-like | SQL | Java/Scala | Java | Java | Java | Java | Java | Java/Python/Go |
| Processing Model | Batch | Batch/Streaming | Streaming | Batch | Batch | Batch/Streaming | Database | Database | Coordination | Search | Data Flow | Batch/Streaming |
| Data Format | HDFS | Various | Binary | HDFS | Parquet/ORC | Various | SSTable | HFile | - | JSON/XML | Various | Various |
| Distributed | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| In-Memory | No | Yes | No | No | No | Yes | No | No | No | No | No | No |
| SQL Support | No | Limited | No | Yes | Yes | Limited | No | No | No | No | No | No |
| Fault Tolerance | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Scalability | High | High | High | High | High | High | High | High | High | High | High | High |
| Ecosystem | Large | Large | Large | Large | Large | Growing | Large | Large | Large | Large | Large | Large |
| Latency | High | Low | Low | High | Low | Low | Low | Low | Low | Low | Low | Low |
| Resource Manager | YARN | YARN/Standalone | - | YARN | YARN | YARN/Standalone | - | YARN | - | YARN/Standalone | - | - |
| Security | Kerberos | Kerberos | SSL/SASL | Kerberos | Kerberos | Kerberos | SSL | Kerberos | Kerberos | Kerberos | Kerberos | Kerberos |
| Machine Learning | No | MLlib | No | No | No | Limited | No | No | No | No | No | No |
| Streaming Support | No | Yes | Yes | No | No | Yes | No | No | No | No | Yes | Yes |
| Batch Support | Yes | Yes | No | Yes | Yes | Yes | No | No | No | No | Yes | Yes |
| Data Ingestion | HDFS | Various | Producers | HDFS | HDFS | Various | Clients | Clients | - | Indexing | Various | Various |
| Query Language | - | SQL-like | - | HiveQL | SQL | SQL-like | CQL | - | - | Solr Query | - | - |
| Data Storage | HDFS | Memory/Disk | Disk | HDFS | HDFS | Memory/Disk | Disk | HDFS | Znode | Lucene Index | - | - |
| Cloud Support | Limited | Good | Good | Limited | Limited | Good | Limited | Limited | Limited | Limited | Good | Good |
| Open Source | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Use Case | Big Data Processing | Batch/Streaming Analytics | Messaging | Data Warehousing | Interactive SQL | Streaming Analytics | Distributed Database | Wide-Column Store | Coordination Service | Enterprise Search | Data Integration | Batch/Streaming Pipelines |

