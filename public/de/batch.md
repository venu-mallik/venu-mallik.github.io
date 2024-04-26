| Feature | Apache Spark | Apache Hadoop MapReduce | Apache Tez | Apache Hive | Apache Pig |
|---------|--------------|--------------------------|-------------|-------------|-------------|
| Processing Model | In-Memory/Disk | Disk-based | Disk-based | Disk-based | Disk-based |
| Programming Model | RDDs, DataFrames, SQL | MapReduce | DAG of Tasks | SQL-like (HiveQL) | Data Flow Scripts |
| Programming Languages | Scala, Java, Python, R | Java | Java | HiveQL | Pig Latin |
| Data Abstraction | RDDs, DataFrames, Datasets | Key-Value Pairs | Data Model Objects | Tables | Relations |
| Execution Engine | Spark Engine | MapReduce Engine | YARN | MapReduce/Tez/Spark | MapReduce/Tez |
| SQL Support | Spark SQL | Hive, Pig | Hive | HiveQL | HCatalog |
| Machine Learning | MLlib | Mahout | - | - | - |
| Fault Tolerance | RDD Lineage, Checkpointing | Task Restarting | Task Restarting | Through Execution Engine | Through Execution Engine |
| Latency | Low | High | High | High | High |
| Resource Management | Standalone, YARN, Mesos | YARN | YARN | YARN | YARN |
| Community | Large and Active | Large and Active | Active | Large and Active | Active |

