/* Topic: Designing Data-Intensive Applications
   Plain-English tour of the ideas in Martin Kleppmann's book. */
WP.addTopic({
  id: "ddia",
  name: "Data Systems (DDIA)",
  code: "DDIA",
  blurb: "The big ideas from 'Designing Data-Intensive Applications': how apps store, copy, split and process data reliably at scale.",
  lessons: [
    {
      id: "ddia-01",
      title: "Reliable, Scalable, Maintainable",
      level: "Foundation",
      hook: "When your banking app loads instantly at 9am on payday with millions of others logging in, a lot of quiet engineering is paying off. Martin Kleppmann's book starts by asking what 'good' even means for a data system.",
      bluf: "A good data system does three things: it keeps working when things go wrong (reliable), it copes as usage grows (scalable), and it stays easy for people to run and change (maintainable). Most design choices are trade-offs between these.",
      story: [
        "## Most apps are data problems, not computing problems",
        "Kleppmann calls an application 'data-intensive' when the hard part isn't heavy calculation but the data itself: how much of it there is, how complex it is and how fast it changes. Your bank, Instagram, Uber and an airline booking system all fit. They're built from standard pieces — databases, caches, search indexes, message queues — stitched together. The engineer's job is choosing and combining those pieces well.",
        "## Reliable: works even when things break",
        "Things will go wrong: hard drives die (in a big data centre, several a day), software has bugs, and humans make mistakes — studies of large services have found operator configuration errors are a leading cause of outages. A reliable system expects faults and stops them turning into failures that users notice. That means redundancy, testing, gradual roll-outs, quick rollback, and good monitoring.",
        "## Scalable: copes as load grows",
        "Scalability isn't a yes/no label. The useful question is: if load grows in a particular way, what are our options? First describe the load (requests per second, reads versus writes, number of users online). Then measure performance with percentiles, not averages. If the 99th percentile response time is 2 seconds, 1 in 100 requests is that slow — and those are often your most valuable customers with the most data. Amazon famously focused on the 99.9th percentile for this reason.",
        "## Maintainable: kind to the people who run it",
        "Most of the cost of software comes after launch: fixing, running and adapting it. Maintainable systems are operable (easy to monitor and run), simple (no needless complexity) and evolvable (easy to change as needs change). Good abstractions hide complexity behind clean interfaces."
      ],
      points: [
        { h: "Data-intensive", t: "The challenge is the amount, complexity or speed of change of data, not raw calculation." },
        { h: "Faults vs failures", t: "A fault is one part going wrong; a failure is the whole system letting users down. Good design stops faults becoming failures." },
        { h: "Describe load first", t: "Scalability means having a plan for a specific kind of growth, described with numbers." },
        { h: "Use percentiles", t: "Averages hide pain. Track p95 and p99 response times to see what your slowest users experience." },
        { h: "Maintainability is most of the cost", t: "Operable, simple and evolvable systems save far more over time than clever ones." }
      ],
      example: "Twitter's early home timeline had to choose: build each person's feed when they open the app (cheap writes, expensive reads) or push each new tweet into followers' feeds when posted (expensive writes, fast reads). It moved to the push approach, but kept pull for celebrities with tens of millions of followers. The best design depended on the shape of the load.",
      pitfall: "Judging performance by the average response time. A 200 ms average can hide a 5-second experience for 1% of users, which at scale is thousands of unhappy people every minute.",
      terms: [
        ["Data-intensive application", "An app whose main challenge is the volume, complexity or speed of change of its data."],
        ["Fault", "One component deviating from its spec, such as a disk failing or a bug triggering."],
        ["Failure", "The system as a whole stops providing the required service to users."],
        ["Percentile (p99)", "The response time that 99% of requests are faster than; shows the slowest experiences."],
        ["Maintainability", "How easily people can operate, understand and change a system over time."]
      ],
      mcq: [
        { q: "Why are percentiles better than averages for response time?", a: ["They show what the slowest users experience", "They are easier to calculate", "They are always lower", "They ignore outliers completely"], c: 0, why: "Averages hide the slow tail that real users feel." },
        { q: "A disk failing in one server, with no user impact, is a…", a: ["Fault", "Failure", "Scalability limit", "Maintainability issue"], c: 0, why: "A fault became contained; it didn't become a user-facing failure." },
        { q: "What should you do before saying a system 'scales'?", a: ["Describe the expected load in numbers", "Buy bigger servers", "Rewrite it in a new language", "Remove monitoring"], c: 0, why: "Scalability only means something for a specific kind of growth." },
        { q: "Where does most of the lifetime cost of software usually go?", a: ["Maintenance after launch", "Writing the first version", "Buying licences", "Initial hardware"], c: 0, why: "Running, fixing and changing software dominates cost." }
      ],
      tf: [
        { s: "Human configuration mistakes are a significant cause of outages.", v: true, why: "Studies of large services have found operator errors are a leading cause." },
        { s: "If the average response time is fast, all users have a fast experience.", v: false, why: "The average can hide a slow tail." },
        { s: "Simplicity is part of maintainability.", v: true, why: "Removing needless complexity makes systems easier to change." },
        { s: "Scalability is a simple yes/no property of a system.", v: false, why: "It's about options for handling particular kinds of growth." }
      ],
      think: [
        "What app do you use that feels fast? Which one feels slow on its worst days?",
        "In your organisation, what's the most common cause of system outages — hardware, software or people?",
        "Which of the three goals would you sacrifice first for a quick prototype? For a bank?"
      ],
      talk: "Amazon tracks the 99.9th-percentile page load time, not the average, because the slowest requests often belong to its best customers, the ones with the most purchase history. 'The average is fine' can hide thousands of frustrated users."
    },
    {
      id: "ddia-02",
      title: "Data Models: Tables, Documents, Graphs",
      level: "Foundation",
      hook: "How you shape your data decides what's easy and what's painful for years. Choosing between tables, documents and graphs is like choosing between a spreadsheet, a folder of files and a mind map.",
      bluf: "Relational databases store data in tables joined by keys and are great for related, structured data. Document databases store self-contained records and suit data you usually load whole. Graph databases store things and relationships and shine when connections are the point.",
      story: [
        "## The relational model: tables and joins",
        "Proposed by Edgar Codd at IBM in 1970, the relational model stores data in tables of rows and columns, like spreadsheets. Instead of copying information around, you store each fact once and link tables using IDs (keys). Your customer table has one row per customer; your orders table refers to the customer's ID. A query language, SQL, lets you 'join' them back together. Fifty years later, relational databases like PostgreSQL, MySQL and Oracle still run most of the world's business data.",
        "## The document model: one record, one bundle",
        "Document databases such as MongoDB store each record as a self-contained bundle (often JSON) — a résumé with all its jobs and schools nested inside. If you usually load the whole thing at once, this is natural and fast, and you don't need many joins. Documents are also flexible: different records can have different fields ('schema-on-read'), which helps when data varies a lot.",
        "The weakness shows with many-to-many relationships. If lots of résumés refer to the same company, and the company changes its name, you either update thousands of copies or go back to IDs and joins.",
        "## The graph model: everything is connected",
        "Some data is mostly relationships: social networks (who knows whom), fraud rings (which accounts share devices), road maps, recommendation engines. Graph databases store 'nodes' (people, places) and 'edges' (relationships), and make questions like 'friends of friends who live in Toronto and like squash' easy to ask.",
        "## Use the shape that fits",
        "Many modern databases blur the lines: PostgreSQL handles JSON documents well; some document databases support joins. The skill is noticing the shape of your data and how you'll query it."
      ],
      points: [
        { h: "Relational = tables + keys", t: "Store each fact once, link with IDs, and join with SQL. Strong for structured, interconnected business data." },
        { h: "Document = self-contained records", t: "Good when you load whole records at once and fields vary. Weaker for many-to-many links." },
        { h: "Graph = nodes + edges", t: "Best when relationships are the main thing you query, like networks or fraud rings." },
        { h: "Schema-on-write vs schema-on-read", t: "Relational databases enforce structure when you save; document stores often interpret it when you read." },
        { h: "Normalisation", t: "Storing each fact in one place avoids inconsistent copies, at the cost of joins." }
      ],
      example: "LinkedIn profiles fit documents nicely: one profile with nested positions and education. But 'people who worked at the same company as you' is a graph question, and company names and logos work best as shared records referenced by ID — which pulls back toward the relational model.",
      pitfall: "Picking a database because it's fashionable. The right model depends on how your data relates and how you'll query it, not on what a popular start-up used.",
      terms: [
        ["Relational model", "Data stored in tables of rows and columns, linked by keys and queried with SQL."],
        ["Document model", "Data stored as self-contained records (often JSON) with nested fields."],
        ["Graph model", "Data stored as nodes and the edges (relationships) between them."],
        ["Join", "Combining rows from different tables using a shared key."],
        ["Normalisation", "Organising data so each fact is stored only once."]
      ],
      mcq: [
        { q: "Which model best suits detecting fraud rings of linked accounts?", a: ["Graph", "Document", "Flat file", "Spreadsheet"], c: 0, why: "The question is about connections between entities." },
        { q: "Who proposed the relational model in 1970?", a: ["Edgar Codd", "Alan Turing", "Tim Berners-Lee", "Grace Hopper"], c: 0, why: "Codd, at IBM." },
        { q: "A major weakness of the document model is…", a: ["Many-to-many relationships", "Storing nested data", "Flexible fields", "Loading whole records"], c: 0, why: "Shared entities referenced by many documents push you back to joins." },
        { q: "'Schema-on-read' means…", a: ["Structure is interpreted when data is read", "Structure is enforced when data is saved", "There is never any structure", "Only SQL can read it"], c: 0, why: "Flexible structure, applied at read time." }
      ],
      tf: [
        { s: "Relational databases still run much of the world's business data.", v: true, why: "PostgreSQL, MySQL, Oracle and SQL Server are everywhere." },
        { s: "Normalisation means storing the same fact in many places.", v: false, why: "It means storing each fact once." },
        { s: "Document databases suit data usually loaded as one whole record.", v: true, why: "That's their sweet spot." }
      ],
      think: [
        "Think of the data you handle at work. Is it more like a spreadsheet, a folder of files or a web of relationships?",
        "What would break if a company name were copied into ten thousand records and then changed?",
        "Why do you think a 1970 idea (relational tables) still dominates today?"
      ],
      talk: "The relational database model was proposed in 1970, before the personal computer existed, and it still runs most of the world's business data. Plenty of 'new' database ideas turn out to be old trade-offs coming back around."
    },
    {
      id: "ddia-03",
      title: "Storage Engines and Indexes",
      level: "Intermediate",
      hook: "The simplest database in the world is two lines of code: append each new record to the end of a file, and to read, scan the file for the latest match. Writes are blazing fast. Reads get slower every day. Everything in storage engines is about fixing that read problem.",
      bluf: "An index is extra data that makes finding things fast, at the cost of slower writes and more space. The two main designs are B-trees (update data in place, great for reads) and LSM-trees (write sequentially, merge in the background, great for writes).",
      story: [
        "## Why indexes exist",
        "Imagine a 1,000-page book with no index. Finding every mention of 'Toronto' means reading every page. An index at the back lets you jump straight there. Databases work the same way: without an index, finding a row means scanning everything. With one, it's a quick lookup. But every index must be updated whenever data changes, so each extra index slows writes. Choosing indexes is a trade-off you make based on your queries.",
        "## B-trees: the classic",
        "Used by almost every relational database since the 1970s, a B-tree keeps keys in sorted order inside fixed-size pages (often a few kilobytes) arranged like a tree. To find a key, you start at the root and follow pointers down — even a huge table needs only three or four page reads. Updates change pages in place. To survive crashes, the database first writes changes to a write-ahead log, so it can repair itself after a power cut.",
        "## LSM-trees: write first, tidy later",
        "Log-Structured Merge trees take a different approach. New writes go into a sorted structure in memory. When it gets big, it's written to disk as a sorted file (an SSTable) in one fast sequential write. In the background, files are merged and old values discarded (compaction). Reads may check several files, so engines use tricks like Bloom filters to skip files that can't contain the key. LSM-trees power Cassandra, RocksDB and many write-heavy systems.",
        "## Rule of thumb",
        "B-trees: predictable, read-friendly, mature. LSM-trees: excellent write throughput and compression, with background compaction that needs watching. Both are good; the workload decides.",
        "## Keeping it all in memory",
        "As RAM got cheaper, in-memory databases like Redis became popular. They're fast not mainly because they avoid disk reads, but because they avoid the work of encoding data into disk-friendly formats."
      ],
      points: [
        { h: "Indexes trade write speed for read speed", t: "Every index speeds up some reads but must be updated on every write." },
        { h: "B-tree", t: "Sorted pages in a tree, updated in place. The default index in most relational databases." },
        { h: "Write-ahead log", t: "Changes are logged before being applied so the database can recover after a crash." },
        { h: "LSM-tree", t: "Buffer writes in memory, flush sorted files to disk, merge them in the background. Great for heavy writes." },
        { h: "Compaction", t: "Background merging that removes overwritten or deleted values in LSM-based systems." }
      ],
      example: "A messaging app logging billions of events per day might use an LSM-based store like Cassandra for its fast writes. A bank's account system, with lots of point reads and strict transactions, typically uses a B-tree-based relational database like PostgreSQL or Oracle.",
      pitfall: "Adding an index for every query 'just in case'. Each index slows every insert and update, and takes disk and memory. Index for the queries you actually run.",
      terms: [
        ["Index", "An extra data structure that speeds up lookups at the cost of slower writes."],
        ["B-tree", "A balanced tree of sorted fixed-size pages; the most common database index."],
        ["LSM-tree", "A storage design that buffers writes and merges sorted files in the background."],
        ["Write-ahead log (WAL)", "A log of changes written before applying them, used for crash recovery."],
        ["Compaction", "Merging storage files and discarding outdated values."]
      ],
      mcq: [
        { q: "What is the main cost of adding an index?", a: ["Slower writes and more storage", "Slower reads", "Less data stored", "No SQL support"], c: 0, why: "Every write must update the index too." },
        { q: "Which design is best known for very high write throughput?", a: ["LSM-tree", "B-tree", "Flat array", "Linked list"], c: 0, why: "It turns writes into fast sequential disk writes." },
        { q: "Why do databases use a write-ahead log?", a: ["To recover after a crash", "To speed up joins", "To compress text", "To encrypt data"], c: 0, why: "The log lets the database redo or undo changes safely." },
        { q: "How many page reads does a B-tree lookup typically need, even on a large table?", a: ["A handful (3–4)", "Thousands", "One per row", "Exactly one always"], c: 0, why: "The tree is shallow because each page branches many ways." }
      ],
      tf: [
        { s: "Without an index, a lookup may need to scan the whole table.", v: true, why: "There's no shortcut to the right rows." },
        { s: "LSM-trees update data in place on disk.", v: false, why: "They write new sorted files and merge later." },
        { s: "In-memory databases are fast partly because they skip disk-friendly encoding.", v: true, why: "Avoiding that overhead is a big part of the speed." }
      ],
      think: [
        "What's the paper-world equivalent of an index in your life (a contacts list, a filing system)?",
        "Would you rather have fast writes or fast reads for a fitness tracker? A library catalogue?",
        "Why might a crash-recovery log matter more than raw speed for a bank?"
      ],
      talk: "The simplest possible database just adds each new record to the end of a file. Writes are as fast as they can be, but reads get slower every day. Much of database engineering since then has been about getting fast reads back without giving up too much of that write speed."
    },
    {
      id: "ddia-04",
      title: "Transactions vs Analytics (OLTP vs OLAP)",
      level: "Foundation",
      hook: "The database that handles your coffee purchase in a millisecond would choke if your finance team asked it, \"What were average sales by store, by hour, for the last five years?\" Different questions need differently built systems.",
      bluf: "OLTP systems handle lots of small, fast reads and writes for day-to-day operations. OLAP systems (data warehouses) answer big analytical questions across millions of rows. Warehouses often store data by column, which makes those scans far faster.",
      story: [
        "## Two very different jobs",
        "Online Transaction Processing (OLTP) is the operational side: place an order, update a balance, book a seat. Each request touches a few rows, must be fast, and the latest data matters. Online Analytical Processing (OLAP) is the reporting side: total revenue by region last quarter, churn by customer segment. Each query reads millions of rows but only a few columns, and is usually run by analysts rather than customers.",
        "## Why separate them",
        "Running heavy analysis on the operational database can slow it for customers. So companies copy data into a separate data warehouse through ETL (Extract, Transform, Load): pull data from many systems, clean and reshape it, load it for analysis. Snowflake, BigQuery, Redshift and Databricks are modern examples.",
        "## Star schemas",
        "Warehouses often use a star schema: a big central 'fact' table of events (each sale), surrounded by 'dimension' tables that describe them (product, store, date, customer). Analysts slice facts by dimensions: sales by product category by month.",
        "## Column storage: the big trick",
        "Most operational databases store data row by row — all of one order together. That's great for fetching one order. But an analytics query like 'sum of sales amount' only needs one column. If data is stored column by column, the database reads just that column and skips the rest. Columns also compress brilliantly, because values in one column are similar (lots of repeated store IDs or dates). The result can be orders of magnitude faster for analysis.",
        "The trade-off: column stores are slower for writing individual rows, which is fine for warehouses that load data in big batches."
      ],
      points: [
        { h: "OLTP", t: "Many small, fast reads and writes for running the business, usually looked up by key." },
        { h: "OLAP", t: "Big queries that scan many rows but few columns, for reporting and decisions." },
        { h: "ETL", t: "Extract from source systems, transform and clean, load into the warehouse." },
        { h: "Star schema", t: "A central fact table of events linked to dimension tables that describe them." },
        { h: "Column-oriented storage", t: "Storing each column together makes scans and compression much more efficient." }
      ],
      example: "A grocery chain records each checkout in an OLTP database at the till. Every night, ETL jobs load the day's sales into a cloud warehouse. Next morning, the category manager runs a query across three years of sales to see how a price change affected yoghurt demand — without slowing the tills.",
      pitfall: "Running heavy reports directly on the live operational database. It can slow or lock the system customers depend on. Use a replica or a warehouse.",
      terms: [
        ["OLTP", "Online Transaction Processing: fast, small operational reads and writes."],
        ["OLAP", "Online Analytical Processing: large analytical queries across many rows."],
        ["Data warehouse", "A separate database optimised for analytics, loaded from operational systems."],
        ["ETL", "Extract, Transform, Load: moving and reshaping data into a warehouse."],
        ["Column store", "A database that stores each column's values together for fast scans."]
      ],
      mcq: [
        { q: "\"Update this customer's address\" is a typical…", a: ["OLTP operation", "OLAP query", "ETL job", "Star schema"], c: 0, why: "A small operational write." },
        { q: "Why do column stores speed up analytics?", a: ["They read only the needed columns and compress well", "They store fewer rows", "They skip SQL", "They use bigger servers"], c: 0, why: "Scans touch less data, and similar values compress." },
        { q: "In a star schema, the central table holds…", a: ["Facts, such as individual sales events", "Only dates", "Only customer names", "Indexes"], c: 0, why: "Dimensions surround the fact table." },
        { q: "Why copy data into a separate warehouse?", a: ["So analysis doesn't slow operational systems", "To delete old data", "Because SQL can't run on OLTP", "To avoid backups"], c: 0, why: "Separating workloads protects customer-facing performance." }
      ],
      tf: [
        { s: "OLAP queries typically scan many rows but few columns.", v: true, why: "Think 'sum of sales across years'." },
        { s: "Column stores are best for writing one row at a time.", v: false, why: "They favour batch loads and scans." },
        { s: "ETL stands for Extract, Transform, Load.", v: true, why: "The classic warehouse pipeline." }
      ],
      think: [
        "Which reports at your work take too long? Are they running on the right kind of system?",
        "If your company has one 'source of truth' dashboard, where does its data actually come from?",
        "What decisions would you make differently with fast access to five years of history?"
      ],
      talk: "Storing data column by column instead of row by row can make analytics queries dramatically faster. A query reads only the columns it needs, and similar values compress very well. It's one of the main ideas behind Snowflake and BigQuery."
    },
    {
      id: "ddia-05",
      title: "Encoding and Evolving Data",
      level: "Intermediate",
      hook: "Your phone app and the server it talks to are almost never updated at the same moment. Millions of people run last month's version. Somehow, old and new code must keep understanding each other's data.",
      bluf: "Data must be encoded (turned into bytes) to be stored or sent. Good formats and habits let schemas change over time while staying backward compatible (new code reads old data) and forward compatible (old code tolerates new data).",
      story: [
        "## From objects to bytes",
        "Inside a program, data lives as objects, lists and maps in memory. To save it to disk or send it over a network, it must be encoded into a sequence of bytes, then decoded on the other side. Formats range from human-readable text (JSON, XML, CSV) to compact binary (Protocol Buffers from Google, Avro, Thrift).",
        "## Text formats: easy, but loose",
        "JSON is everywhere because it's readable and simple. But it's vague in places: it doesn't distinguish integers from decimals well, and very large numbers can lose precision in some languages. Twitter once had to send tweet IDs as both numbers and strings because JavaScript couldn't represent large 64-bit IDs exactly.",
        "## Binary formats with schemas",
        "Protocol Buffers and Avro use a schema — a formal description of the fields — and encode data compactly. Field tags or names let new fields be added safely. They're smaller and faster than JSON, and the schema doubles as documentation.",
        "## The compatibility rules",
        "Backward compatibility: newer code can read data written by older code. Forward compatibility: older code can read data written by newer code, ignoring fields it doesn't recognise. To keep both, add new fields as optional (with defaults), never reuse an old field's tag for a different meaning, and avoid changing types. This lets you roll out servers gradually and keep supporting old app versions.",
        "## How data flows",
        "Data moves between processes through databases (written now, read years later — 'data outlives code'), through service calls (REST APIs, RPC), and through message queues. In each case, writer and reader may be running different versions, so compatibility is a daily concern, not a theoretical one."
      ],
      points: [
        { h: "Encoding", t: "Turning in-memory data into bytes for storage or transmission (and decoding back)." },
        { h: "JSON is convenient but loose", t: "Readable and universal, but weak on number types and has no built-in schema." },
        { h: "Schema-based binary formats", t: "Protocol Buffers and Avro are compact, fast and support safe evolution." },
        { h: "Backward and forward compatibility", t: "New code reads old data; old code tolerates new data." },
        { h: "Data outlives code", t: "Records in a database may be read by software written years later." }
      ],
      example: "A ride-hailing app adds a 'tip' field to its trip record. Servers are updated over a few hours, and many riders keep an old app version for months. Because 'tip' is optional with a default of zero, old apps simply ignore it and new servers handle old trips without errors.",
      pitfall: "Renaming or removing a field, or changing its type, without a migration plan. Old clients and old stored data will break in ways that only show up later.",
      terms: [
        ["Encoding (serialisation)", "Converting in-memory data into bytes for storage or sending."],
        ["Schema", "A formal description of the fields and types in a data format."],
        ["Backward compatibility", "Newer code can read data written by older code."],
        ["Forward compatibility", "Older code can read data written by newer code."],
        ["Protocol Buffers", "Google's compact, schema-based binary encoding format."]
      ],
      mcq: [
        { q: "Old app versions can still read data from upgraded servers. That's…", a: ["Forward compatibility", "Backward compatibility", "Normalisation", "Replication"], c: 0, why: "Older code tolerating newer data." },
        { q: "The safest way to add a field is to make it…", a: ["Optional with a default", "Required immediately", "Reuse an old field's tag", "Change an existing field's type"], c: 0, why: "Old writers and readers won't break." },
        { q: "A known weakness of JSON is…", a: ["Ambiguous number types and no built-in schema", "It can't be read by humans", "It only works in Java", "It requires a compiler"], c: 0, why: "Large integers and decimals can be mishandled." },
        { q: "Why does 'data outlive code' matter?", a: ["Stored data may be read by much newer software", "Code is deleted daily", "Databases expire data", "It doesn't matter"], c: 0, why: "Compatibility must hold for years." }
      ],
      tf: [
        { s: "Binary formats like Protocol Buffers are usually more compact than JSON.", v: true, why: "They avoid repeating field names as text." },
        { s: "It's safe to reuse a deleted field's tag number for a new meaning.", v: false, why: "Old data would be misread." },
        { s: "Different versions of code often run at the same time.", v: true, why: "Rolling upgrades and old mobile apps guarantee it." }
      ],
      think: [
        "What's the oldest data your organisation still relies on? What reads it today?",
        "How would you change a field like 'name' into 'first name' and 'last name' without breaking anything?",
        "Where else in life do 'old versions' and 'new versions' have to coexist (laws, contracts, standards)?"
      ],
      talk: "Twitter once had to send every tweet ID twice, as a number and as text, because JavaScript couldn't hold such large numbers exactly. Small encoding details can cause problems at very large scale."
    },
    {
      id: "ddia-06",
      title: "Replication: Copies Everywhere",
      level: "Intermediate",
      hook: "You post a comment, refresh the page, and it's gone. Refresh again and it's back. You've just met replication lag — the side effect of keeping copies of data on many machines.",
      bluf: "Replication keeps copies of the same data on several machines for safety, speed and closeness to users. The most common setup has one leader that accepts writes and followers that copy it. Copies can lag behind, and handling that lag is the hard part.",
      story: [
        "## Why copy data",
        "Three reasons: survive machine failures (if one dies, another has the data), handle more reads (spread queries across copies), and serve users faster (keep a copy near them geographically).",
        "## Leader and followers",
        "The most common design: one node is the leader and handles all writes. It sends a stream of changes to followers, which apply them in the same order. Reads can go to any copy. If the leader dies, a follower is promoted — 'failover'. Failover is tricky: the old leader might come back thinking it's still in charge (split brain), or recent writes might be lost.",
        "## Synchronous or asynchronous",
        "If the leader waits for followers to confirm each write (synchronous), copies are always up to date but one slow follower can stall everything. If it doesn't wait (asynchronous), writes are fast but followers can fall behind by seconds or more. Most systems are asynchronous, or wait for just one follower.",
        "## Living with lag",
        "Lag causes strange effects, and there are named guarantees to prevent them. Read-your-own-writes: after you post something, you should see it — route your reads to the leader for a short while. Monotonic reads: you shouldn't see newer data and then older data on refresh — stick each user to one replica. Consistent prefix reads: you shouldn't see an answer before the question.",
        "## Other designs",
        "Multi-leader setups accept writes in several data centres, which helps global apps but creates write conflicts to resolve. Leaderless systems like Amazon's original Dynamo (and Cassandra) write to several nodes and read from several, using quorums: if you write to W nodes and read from R nodes out of N, and W + R > N, at least one read will see the latest write."
      ],
      points: [
        { h: "Why replicate", t: "Fault tolerance, more read capacity, and lower latency for users far away." },
        { h: "Leader–follower", t: "One leader takes writes and streams changes to followers that serve reads." },
        { h: "Failover risks", t: "Promoting a new leader can lose recent writes or create two leaders (split brain)." },
        { h: "Replication lag", t: "Asynchronous followers can be behind, causing stale or jumping reads." },
        { h: "Quorums", t: "In leaderless systems, if W + R > N, reads overlap with the latest writes." }
      ],
      example: "A global retailer keeps a database leader in Toronto with followers in London and Singapore. Customers in Singapore browse products from the nearby follower in milliseconds, while checkout writes go to the leader. After placing an order, the app shows 'your orders' from the leader for a minute, so customers always see their new purchase.",
      pitfall: "Assuming every read sees the latest write. With asynchronous replication, a user can update their profile and immediately see the old version — design for read-your-own-writes.",
      terms: [
        ["Replication", "Keeping copies of the same data on multiple machines."],
        ["Leader (primary)", "The node that accepts writes and sends changes to followers."],
        ["Failover", "Promoting a follower to leader when the leader fails."],
        ["Replication lag", "The delay before a follower reflects the leader's latest writes."],
        ["Quorum", "A minimum number of nodes that must agree for a read or write to count."]
      ],
      mcq: [
        { q: "You update your profile and see the old version. The likely cause is…", a: ["Replication lag", "A missing index", "A schema error", "Compaction"], c: 0, why: "Your read hit a follower that hadn't caught up." },
        { q: "With N = 3, W = 2, R = 2, are reads guaranteed to overlap the latest write?", a: ["Yes, because W + R > N", "No, because W < N", "Only if R = 3", "Only with a leader"], c: 0, why: "2 + 2 = 4 > 3." },
        { q: "'Split brain' means…", a: ["Two nodes both believe they are the leader", "Data is split across shards", "A query is split in two", "Followers stop working"], c: 0, why: "A classic failover hazard." },
        { q: "A major benefit of asynchronous replication is…", a: ["Writes don't wait for slow followers", "Followers are always current", "No failover is needed", "No conflicts can occur"], c: 0, why: "Speed, at the cost of possible lag." }
      ],
      tf: [
        { s: "Replication can reduce latency for users far from the main data centre.", v: true, why: "Reads can be served by a nearby copy." },
        { s: "Multi-leader replication never has write conflicts.", v: false, why: "Concurrent writes in different places can conflict." },
        { s: "Read-your-own-writes guarantees you see your own updates.", v: true, why: "That's exactly the promise." }
      ],
      think: [
        "Have you seen an app 'forget' something you just did, then remember it? What do you think happened?",
        "Would you accept slightly stale data for a news feed? For a bank balance?",
        "Who decides which machine becomes leader in an emergency, and what if two disagree?"
      ],
      talk: "When a comment you just posted disappears and then reappears after a refresh, you've probably hit replication lag. Your refresh reached a copy of the database that hadn't caught up yet. It's one of the most common quirks of large web apps."
    },
    {
      id: "ddia-07",
      title: "Partitioning (Sharding)",
      level: "Intermediate",
      hook: "When a dataset grows too big or busy for one machine, you split it into pieces and spread them across many machines. Done well, capacity grows almost linearly. Done badly, one machine melts while the others sit idle.",
      bluf: "Partitioning (sharding) splits data across machines so each holds a slice. You can split by key ranges or by a hash of the key. The goal is spreading load evenly and avoiding 'hot spots', while still answering queries efficiently.",
      story: [
        "## Why split data",
        "Replication copies the same data; partitioning divides it. Each piece (a partition or shard) lives on a different node, so storage and query load spread across many machines. Usually you combine both: each partition is also replicated for safety.",
        "## Splitting by key range",
        "Like volumes of an encyclopedia: A–C on one machine, D–F on the next. Range queries are efficient (all customers whose names start with 'Mc' live together). But if keys are timestamps, all of today's writes land on the same partition — a hot spot — while older partitions sit idle.",
        "## Splitting by hash",
        "Run each key through a hash function, which scrambles it into a seemingly random number, and assign ranges of hash values to partitions. Load spreads evenly, but range queries become expensive because neighbouring keys are scattered.",
        "## Celebrities break everything",
        "Even with hashing, a single very popular key — a celebrity's account, a viral product — can overload one partition. Apps sometimes split such keys further (adding a random suffix) and combine results when reading.",
        "## Secondary indexes and rebalancing",
        "Searching by something other than the key (all red cars) is harder: either each partition keeps its own index and you ask them all ('scatter/gather'), or you build a global index that is itself partitioned. As data grows or machines are added, partitions must be moved — rebalanced — without downtime. A common trick is creating many more partitions than machines at the start, then moving whole partitions around.",
        "Finally, something must route each request to the right node — a routing tier or coordination service such as ZooKeeper keeps track of which partition lives where."
      ],
      points: [
        { h: "Partitioning divides, replication copies", t: "Use partitioning to scale beyond one machine; replicate each partition for safety." },
        { h: "Key-range partitioning", t: "Good for range queries, but can create hot spots with sequential keys like timestamps." },
        { h: "Hash partitioning", t: "Spreads load evenly but scatters neighbouring keys." },
        { h: "Hot spots", t: "A popular key can overload one partition; special handling may be needed." },
        { h: "Rebalancing", t: "Moving partitions as the cluster changes, ideally without downtime." }
      ],
      example: "A ride-sharing company partitions trip data by a hash of city plus trip ID. Load spreads evenly across hundreds of nodes. But on New Year's Eve, a single city creates a surge; engineers add capacity for that city's partitions ahead of time.",
      pitfall: "Partitioning by date for data that's mostly written 'now'. Every write hits the newest partition, creating a hot spot while the rest of the cluster idles.",
      terms: [
        ["Partition (shard)", "A subset of the data stored on a particular node."],
        ["Hash partitioning", "Assigning data to partitions based on a hash of its key."],
        ["Range partitioning", "Assigning contiguous ranges of keys to each partition."],
        ["Hot spot", "A partition receiving far more load than others."],
        ["Rebalancing", "Moving partitions between nodes to even out load or add capacity."]
      ],
      mcq: [
        { q: "Which partitioning makes 'all orders from March' easiest to scan?", a: ["Range by date", "Hash of order ID", "Random", "None"], c: 0, why: "Neighbouring dates live together." },
        { q: "Main benefit of hash partitioning?", a: ["Even distribution of load", "Fast range queries", "No replication needed", "Smaller data"], c: 0, why: "Hashing scatters keys evenly." },
        { q: "A celebrity account overloading one shard is an example of…", a: ["A hot spot", "Replication lag", "Split brain", "Compaction"], c: 0, why: "Skewed load on one key." },
        { q: "Partitioning and replication are usually…", a: ["Used together", "Mutually exclusive", "The same thing", "Only for small data"], c: 0, why: "Each shard is replicated for fault tolerance." }
      ],
      tf: [
        { s: "Partitioning by timestamp can create a hot spot on the newest partition.", v: true, why: "Most writes target 'now'." },
        { s: "Hash partitioning makes range queries cheap.", v: false, why: "Neighbouring keys are scattered." },
        { s: "Creating more partitions than nodes up front can make rebalancing easier.", v: true, why: "You move whole partitions instead of splitting data." }
      ],
      think: [
        "How would you split a library of 10 million books across 10 buildings? By author, genre or something else?",
        "What's the 'celebrity problem' in your own work, one item that gets far more traffic than others?",
        "Why might a company over-provision for one predictable day each year?"
      ],
      talk: "Splitting a database across many machines usually works well, until one key, like a celebrity's account, gets far more traffic than the rest. Then one machine is overloaded while the others sit idle. Engineers call it a 'hot spot'."
    },
    {
      id: "ddia-08",
      title: "Transactions and Isolation",
      level: "Intermediate",
      hook: "Two people book the last seat on a flight at exactly the same moment. Both see 'available'. Both click 'buy'. Who gets the seat? Transactions exist to make sure the answer isn't 'both'.",
      bluf: "A transaction groups several operations so they either all happen or none do. ACID describes the guarantees. Isolation levels decide how much concurrent transactions can see of each other — stronger isolation prevents more bugs but costs performance.",
      story: [
        "## All or nothing",
        "Transferring $100 means subtracting from one account and adding to another. If the system crashes halfway, you don't want money to vanish. A transaction wraps both steps so they succeed together or not at all.",
        "## ACID",
        "Atomicity: all or nothing — on failure, everything is rolled back. Consistency: the data stays valid according to your rules (really the application's job). Isolation: concurrent transactions don't trip over each other. Durability: once committed, data survives crashes. Kleppmann notes these words are used loosely by vendors, so it pays to ask exactly what's guaranteed.",
        "## Isolation levels: how much you can see",
        "Perfect isolation — 'serializable' — means the result is as if transactions ran one at a time. It's the safest but can be slower. So most databases default to weaker levels.",
        "Read committed: you never see another transaction's half-finished changes. Snapshot isolation: each transaction sees a consistent snapshot of the database as of when it started — great for long reports. Many popular databases use this by default or as an option.",
        "## The bugs weaker isolation allows",
        "Lost updates: two people read a counter (10), both add one, both write 11 — one increment vanishes. Fix with atomic operations or locks. Write skew: two on-call doctors each check that someone else is on call, then both go off call; each decision was valid alone, but together they break the rule. Only serializable isolation (or careful explicit locking) reliably prevents it.",
        "## Getting serializable",
        "Three approaches: actually run transactions one at a time on a single thread (feasible if they're short and data fits in memory), two-phase locking (the classic; safe but can be slow), and serializable snapshot isolation (optimistic: let transactions run, then abort any that conflicted). The last is used by PostgreSQL's serializable mode."
      ],
      points: [
        { h: "Transaction", t: "A group of operations that succeed together or fail together." },
        { h: "ACID", t: "Atomicity, Consistency, Isolation, Durability — check what each vendor really means." },
        { h: "Snapshot isolation", t: "Each transaction reads a consistent snapshot from when it started." },
        { h: "Lost updates and write skew", t: "Concurrency bugs that weaker isolation levels allow." },
        { h: "Serializable", t: "The strongest level: results as if transactions ran one at a time." }
      ],
      example: "A concert ticketing site uses serializable transactions (or a row lock) on each seat. When two fans click the same seat at once, one transaction commits and the other is told 'sorry, just taken' — rather than both paying for one seat.",
      pitfall: "Assuming your database's default isolation level prevents every race condition. Many defaults (like read committed) still allow lost updates and write skew.",
      terms: [
        ["Transaction", "A group of reads and writes treated as one all-or-nothing unit."],
        ["Atomicity", "If any part fails, the whole transaction is rolled back."],
        ["Isolation level", "How strictly concurrent transactions are separated from each other."],
        ["Snapshot isolation", "Each transaction sees a consistent snapshot of the data from its start."],
        ["Write skew", "A concurrency anomaly where two valid decisions together break a rule."]
      ],
      mcq: [
        { q: "Two users increment a counter from 10 and both write 11. This is…", a: ["A lost update", "Durability", "Replication lag", "A hot spot"], c: 0, why: "One increment was overwritten." },
        { q: "Which isolation level is strongest?", a: ["Serializable", "Read committed", "Read uncommitted", "Snapshot"], c: 0, why: "It behaves as if transactions ran one at a time." },
        { q: "The 'A' in ACID stands for…", a: ["Atomicity", "Availability", "Accuracy", "Authentication"], c: 0, why: "All or nothing." },
        { q: "Two doctors both go off call because each saw the other on call. This anomaly is…", a: ["Write skew", "Dirty read", "Lost update", "Phantom index"], c: 0, why: "Each decision was valid alone; together they broke the rule." }
      ],
      tf: [
        { s: "Durability means committed data survives a crash.", v: true, why: "Typically via disk writes or replication." },
        { s: "Default isolation levels always prevent all concurrency bugs.", v: false, why: "Many defaults are weaker than serializable." },
        { s: "Snapshot isolation is useful for long-running read-only reports.", v: true, why: "They see a consistent view without blocking writers." }
      ],
      think: [
        "What 'last seat' problems exist in your business (inventory, appointments, budgets)?",
        "Have you seen a spreadsheet where two people's edits overwrote each other? That's a lost update.",
        "When is 'occasionally wrong but fast' acceptable, and when is it never acceptable?"
      ],
      talk: "Many databases, by default, don't fully stop two people from booking the same last seat at the same moment. The safest setting, 'serializable', is often switched off for speed, so the application has to handle it, and sometimes doesn't."
    },
    {
      id: "ddia-09",
      title: "Distributed Systems: What Goes Wrong",
      level: "Advanced",
      hook: "On a single computer, things mostly work or crash. Across many computers connected by a network, things can half-work: a message might arrive late, twice, or never — and you often can't tell which.",
      bluf: "Distributed systems face partial failures: networks drop or delay messages, clocks disagree, and processes pause unexpectedly. You can't rely on timing or a single machine's view, so designs use timeouts, careful use of clocks, and agreement among nodes.",
      story: [
        "## Partial failure is the defining problem",
        "With one computer, a hardware fault usually stops everything. With many, some parts fail while others carry on. A request you sent might have been lost, might be stuck in a queue, might have been processed with the reply lost, or the other machine might be paused. From your side, all of these look the same: silence.",
        "## Unreliable networks",
        "Networks drop, delay, duplicate and reorder messages. The usual response is a timeout: if no reply arrives in time, assume something's wrong. Too short, and you declare healthy-but-slow nodes dead, causing needless failovers. Too long, and users wait. There's no perfect value, only trade-offs informed by measurement.",
        "## Unreliable clocks",
        "Every machine's clock drifts and is periodically corrected, sometimes jumping backwards. So timestamps from different machines can't be trusted to order events precisely. 'Last write wins' using wall-clock time can silently discard newer data if one node's clock runs fast. Google's Spanner tackles this with GPS and atomic clocks in data centres and by explicitly tracking clock uncertainty.",
        "## Process pauses",
        "A program can freeze for seconds — garbage collection, a virtual machine being moved, a laptop lid closed — then resume, unaware time has passed. A node that thought it held a lock might wake up and act on an expired lock. Fencing tokens solve this: each lock grant comes with an increasing number, and storage rejects writes with older numbers.",
        "## Truth is decided by the majority",
        "Because a node can't trust its own view, many systems rely on a quorum: decisions count only when a majority of nodes agree. A node declared dead by the majority must step down, even if it feels fine."
      ],
      points: [
        { h: "Partial failure", t: "Some components fail while others work; you often can't tell what happened." },
        { h: "Timeouts are guesses", t: "Too short causes false alarms; too long makes users wait." },
        { h: "Clocks can't be fully trusted", t: "Clocks drift and jump, so ordering events by timestamp across machines is risky." },
        { h: "Processes can pause", t: "A node may freeze and wake up acting on stale assumptions, like an expired lock." },
        { h: "Majority decides", t: "Quorums and fencing tokens keep one confused node from corrupting data." }
      ],
      example: "In 2012, a leap second caused clock-related bugs that crashed or hung servers at several well-known sites, including Reddit. Code that assumed time always moves forward smoothly met a minute that briefly didn't behave.",
      pitfall: "Using 'last write wins' based on each server's clock to resolve conflicts. A server with a clock running a few seconds fast can silently overwrite newer data.",
      terms: [
        ["Partial failure", "Some parts of a distributed system fail while others keep working."],
        ["Timeout", "Giving up waiting for a response after a set time and assuming failure."],
        ["Clock drift", "A computer's clock gradually running faster or slower than true time."],
        ["Fencing token", "An increasing number attached to a lock, used to reject stale writers."],
        ["Quorum", "A majority of nodes whose agreement is required for a decision."]
      ],
      mcq: [
        { q: "A request gets no reply. What can you conclude?", a: ["Very little — many causes look identical", "The other node crashed", "The request was lost", "The reply is on its way"], c: 0, why: "Silence is ambiguous in distributed systems." },
        { q: "Why is 'last write wins' by wall-clock time risky?", a: ["Clocks on different machines disagree", "It's too slow", "It needs SQL", "It requires replication"], c: 0, why: "A fast clock can overwrite newer data." },
        { q: "A fencing token protects against…", a: ["A paused node acting on an expired lock", "Disk failures", "Slow queries", "Large JSON files"], c: 0, why: "Storage rejects writes with old tokens." },
        { q: "Setting timeouts very short leads to…", a: ["Healthy but slow nodes being declared dead", "Faster recovery always", "No failovers", "Perfect accuracy"], c: 0, why: "False alarms trigger unnecessary failovers." }
      ],
      tf: [
        { s: "Computer clocks can jump backwards when corrected.", v: true, why: "Time sync can step the clock." },
        { s: "In a distributed system, a node can always trust its own judgement about its status.", v: false, why: "The majority decides, not the individual." },
        { s: "Garbage collection pauses can freeze a process for noticeable time.", v: true, why: "Long pauses are a known hazard." }
      ],
      think: [
        "When you send a text and see no reply, how many explanations can you list? How is that like a network?",
        "How would you design a meeting room booking system if each office's clock was a few minutes off?",
        "In your team, what's the equivalent of a quorum, who has to agree before a decision counts?"
      ],
      talk: "A single 'leap second' in 2012 crashed or froze servers at several big websites, including Reddit, because some code assumed time always moves smoothly forward. In a distributed system, even the clock can't be fully trusted."
    },
    {
      id: "ddia-10",
      title: "Consistency, Consensus and CAP",
      level: "Advanced",
      hook: "Getting a group of computers to agree on something as simple as 'who is the leader?' — while some may crash and messages may vanish — turned out to be one of the deepest problems in computer science.",
      bluf: "Linearizability makes a replicated system behave like a single up-to-date copy. Consensus algorithms like Raft and Paxos let nodes agree despite failures. The CAP theorem says that during a network partition you must choose between consistency and availability.",
      story: [
        "## Acting like one copy",
        "Linearizability is the strongest common consistency promise: once a write completes, every later read, from anywhere, sees it. The system behaves as if there's one copy of the data. It's what you want for things like leader election, unique usernames or bank balances. The cost is speed and availability, because nodes must coordinate.",
        "## CAP, properly understood",
        "The CAP theorem is often quoted as 'pick two of consistency, availability and partition tolerance'. Kleppmann argues that's misleading: network partitions aren't optional, they happen. The real statement is narrower: when the network splits, a system must either refuse some requests (stay consistent) or answer them with possibly stale data (stay available). When the network is healthy, you can have both.",
        "## Consensus",
        "Consensus means getting several nodes to agree on a value — who is leader, whether a transaction commits — even if some nodes crash. Algorithms like Paxos (by Leslie Lamport, famously hard to understand) and Raft (designed in 2014 specifically to be easier to understand) solve this using majorities. As long as most nodes are up and can talk, they make progress; a minority can't make decisions on its own.",
        "Tools like ZooKeeper and etcd package consensus so other systems can use it for leader election, locks and configuration. Kubernetes stores its cluster state in etcd.",
        "## Ordering and causality",
        "Much of this is really about order. If one event caused another, every node must see them in that order. Weaker 'causal consistency' keeps cause-and-effect order without the full cost of linearizability — enough for many apps, like making sure a reply never appears before the comment it answers.",
        "The big lesson: strong guarantees cost coordination; weaker ones are faster but push complexity onto the application. Choose deliberately."
      ],
      points: [
        { h: "Linearizability", t: "After a write completes, all reads everywhere see it — like a single copy." },
        { h: "CAP, accurately", t: "During a network partition, choose between consistency and availability." },
        { h: "Consensus", t: "Nodes agreeing on a value despite failures, using majorities." },
        { h: "Raft and Paxos", t: "The best-known consensus algorithms; Raft was designed to be understandable." },
        { h: "Coordination services", t: "ZooKeeper and etcd provide consensus-backed leader election, locks and config." }
      ],
      example: "Kubernetes, which runs containers at many companies, keeps its 'source of truth' in etcd, which uses Raft. With five etcd nodes, the cluster keeps working if any two fail, because the remaining three are still a majority.",
      pitfall: "Quoting CAP as 'pick any two'. Partitions are a fact of life; the real choice is what to do when one happens — and how much consistency you need when one isn't happening.",
      terms: [
        ["Linearizability", "A guarantee that a replicated system behaves like a single, up-to-date copy."],
        ["CAP theorem", "During a network partition, a system must choose consistency or availability."],
        ["Consensus", "Several nodes reliably agreeing on a single value despite failures."],
        ["Raft", "A consensus algorithm designed to be easier to understand than Paxos."],
        ["Causal consistency", "Guarantee that cause-and-effect order is preserved for all observers."]
      ],
      mcq: [
        { q: "A 5-node consensus cluster can tolerate how many failures?", a: ["2", "1", "4", "0"], c: 0, why: "3 of 5 is still a majority." },
        { q: "What does CAP really force you to choose during a partition?", a: ["Consistency or availability", "Speed or cost", "SQL or NoSQL", "Disk or memory"], c: 0, why: "Partitions happen; the choice is how to respond." },
        { q: "Raft was designed mainly to be…", a: ["Easier to understand than Paxos", "Faster than all databases", "Free of majorities", "Only for GPUs"], c: 0, why: "Understandability was its explicit goal." },
        { q: "Which needs linearizability most?", a: ["Ensuring usernames are unique", "Showing 'likes' counts", "Recommending videos", "Caching images"], c: 0, why: "Two people must not claim the same name." }
      ],
      tf: [
        { s: "Network partitions are optional in real systems.", v: false, why: "They happen whether you plan for them or not." },
        { s: "Kubernetes stores its cluster state in etcd.", v: true, why: "etcd uses Raft for consensus." },
        { s: "A minority of nodes can make consensus decisions on its own.", v: false, why: "A majority is required." }
      ],
      think: [
        "When your team can't reach everyone, do you pause decisions (consistency) or let people decide locally (availability)?",
        "Which features of an app you use could tolerate slightly stale data, and which never could?",
        "Why might 'easy to understand' be one of the most important features of a safety-critical algorithm?"
      ],
      talk: "The Raft consensus algorithm was designed in 2014 with an unusual main goal: to be easy for humans to understand. Its authors reasoned that an algorithm engineers can't understand is one they'll get wrong, and it now underpins tools like Kubernetes."
    },
    {
      id: "ddia-11",
      title: "Batch and Stream Processing",
      level: "Intermediate",
      hook: "Some data jobs run overnight on a mountain of records. Others react to each event within milliseconds — a card swipe flagged as fraud before you leave the till. Both are pipelines of the same basic idea.",
      bluf: "Batch processing runs jobs over large, fixed datasets (like last night's logs). Stream processing handles events continuously as they arrive. Both treat data as an immutable log of events and derive other views from it.",
      story: [
        "## The Unix philosophy",
        "Kleppmann starts with Unix command-line tools: small programs that each do one thing, connected by pipes so one program's output feeds the next. Batch frameworks scale that idea to many machines.",
        "## Batch: MapReduce and beyond",
        "MapReduce, popularised by Google in 2004 and the open-source Hadoop, splits a big job into a 'map' step (process each record independently, in parallel across many machines) and a 'reduce' step (group and combine results). It made processing petabytes possible on cheap hardware. Newer engines like Spark keep more in memory and are much faster, but the core idea remains: input is read-only, output is new data, and a failed job can simply be rerun.",
        "## Streams: data that never ends",
        "Real life doesn't arrive in nightly batches. Stream processing handles events — clicks, payments, sensor readings — as they happen. Events go into a log-based message broker like Apache Kafka, which stores them in order and lets many consumers read at their own pace. Consumers can be fraud detectors, dashboards, search indexers or databases.",
        "## Change data capture and event sourcing",
        "Change data capture streams every change in a database to other systems, keeping a search index or cache in sync. Event sourcing goes further: the log of events ('deposited $50', 'withdrew $20') is the source of truth, and current state (the balance) is derived from it. You can always rebuild views or create new ones by replaying the log.",
        "## Time is tricky in streams",
        "Events can arrive late or out of order (a phone loses signal, then sends a batch). Stream processors distinguish event time (when it happened) from processing time (when it arrived), and use windows — e.g. count clicks per minute — with rules for late arrivals."
      ],
      points: [
        { h: "Batch processing", t: "Process a large, fixed dataset in one job; easy to rerun if it fails." },
        { h: "MapReduce", t: "Map each record in parallel, then group and reduce. Spark is a faster successor." },
        { h: "Stream processing", t: "Handle events continuously as they arrive, with low delay." },
        { h: "Log-based brokers", t: "Kafka stores events in order so many consumers can read independently and replay." },
        { h: "Event sourcing", t: "Store every event as the source of truth and derive current state from it." }
      ],
      example: "When you tap your card, the payment event flows into a stream. A fraud model scores it in milliseconds and may block it. The same event later lands in a nightly batch job that recalculates spending insights and retrains the fraud model on the latest patterns.",
      pitfall: "Assuming events arrive in order and on time. Mobile devices and networks deliver late, duplicated and out-of-order events, so pipelines must handle event time and duplicates.",
      terms: [
        ["Batch processing", "Running a job over a large, bounded dataset all at once."],
        ["Stream processing", "Processing an unbounded flow of events continuously."],
        ["MapReduce", "A batch model: map records in parallel, then group and reduce results."],
        ["Apache Kafka", "A distributed, log-based platform for storing and streaming events."],
        ["Event sourcing", "Storing all changes as an event log and deriving state from it."]
      ],
      mcq: [
        { q: "Flagging a suspicious card payment before the customer leaves is a job for…", a: ["Stream processing", "A nightly batch job", "A data warehouse report", "A backup"], c: 0, why: "It must react within milliseconds." },
        { q: "In event sourcing, the source of truth is…", a: ["The log of events", "The latest balance only", "A cache", "A daily report"], c: 0, why: "State is derived from the events." },
        { q: "Why are batch jobs easy to recover from failure?", a: ["Input is read-only, so you can rerun them", "They never fail", "They don't use disks", "They run on one machine"], c: 0, why: "Rerunning produces the same output." },
        { q: "'Event time' means…", a: ["When the event actually happened", "When it reached the server", "When the job started", "The time zone"], c: 0, why: "It differs from processing time when events arrive late." }
      ],
      tf: [
        { s: "Kafka lets multiple consumers read the same events independently.", v: true, why: "Each consumer tracks its own position in the log." },
        { s: "Events in a stream always arrive in the order they happened.", v: false, why: "Late and out-of-order events are common." },
        { s: "Spark is a newer batch engine that keeps more data in memory than classic MapReduce.", v: true, why: "That's a big reason it's faster." }
      ],
      think: [
        "Which of your work reports would be more useful in real time? Which are fine overnight?",
        "Your bank statement is an event log. What views could you derive from it?",
        "Why might keeping every event forever be valuable, and what are the privacy risks?"
      ],
      talk: "Your bank balance is really just a summary of a long list of events: deposits, withdrawals and fees. Many modern systems keep the event list as the source of truth and calculate everything else from it, so they can always rebuild or audit the summary."
    }
  ]
});
