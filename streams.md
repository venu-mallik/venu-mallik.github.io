| Feature | Apache Spark Streaming | Apache Flink | Apache Kafka Streams | Apache Samza | Apache Storm |
|---------|-------------------------|--------------|----------------------|---------------|---------------|
| Processing Model | Micro-Batching | True Streaming | True Streaming | True Streaming | True Streaming |
| Programming Model | Batch-like (RDDs, DataFrames) | Streams and Tables | Streams | Streams | Streams, Topologies |
| Programming Languages | Scala, Java, Python, R | Java, Scala | Java, Scala | Java, Scala | Java, Clojure, Python |
| Event Time Semantics | Yes | Yes | Yes | Yes | Yes |
| Windowing | Time/Count Windows | Time/Count Windows | Time/Session Windows | Time/Count Windows | Time/Count Windows |
| State Management | RDDs, DataFrames | Keyed State, Operator State | Local State Stores | Local State Stores | Local or Remote State |
| Fault Tolerance | Checkpointing, Write-Ahead Logs | Checkpointing, Savepoints | Changelogs | Local State Stores | Acknowledgments |
| Scalability | Horizontal Scaling | Horizontal Scaling | Horizontal Scaling | Horizontal Scaling | Horizontal Scaling |
| Latency | High (seconds to minutes) | Low (milliseconds) | Low (milliseconds) | Low (milliseconds) | Low (milliseconds) |
| Delivery Semantics | At-Least-Once | Exactly-Once | Exactly-Once | At-Least-Once | At-Least-Once |
| Backpressure | No | Yes | Yes | Yes | Yes |
| Use Cases | Batch/Stream Processing, ML | Stream Processing, CEP | Stream Processing, ETL | Stream Processing, ETL | Stream Processing, Distributed RPC |
| Community | Large and Active | Growing | Growing | Growing | Large and Active |

