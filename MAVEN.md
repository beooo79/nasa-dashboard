`mvn clean compile`
MacBook | 100 | secs
i5 10600k Win10 | 62 | secs
i7 7700k Linux Mint | ? | secs
M1 mac mini 16 GB RAM | ? | secs


`mvn -T 1C clean compile`
MacBook | ? | secs
i5 10600k Win10 | ? | secs
i7 7700k Linux Mint | ? | secs
M1 mac mini 16 GB RAM | ? | secs


`mvn -T 1C clean install -Dmaven.test.skip -DskipTests`
MacBook | ? | secs
i5 10600k Win10 | ? | secs
i7 7700k Linux Mint | ? | secs
M1 mac mini 16 GB RAM | ? | secs
