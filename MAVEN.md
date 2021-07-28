`mvn clean compile`
| System  | time |  |
| ------- | --- | ---- |
| MacBook | 101 | secs |
| i5 10600k Win10 | 62 | secs |
| i7 7700k Linux Mint | ? | secs | 
| M1 mac mini 16 GB RAM | 30 | secs | 
| i7-8565U Ubuntu | 54 | secs |


`mvn -T 1C clean compile`
| System  | time |  |
| ------- | --- | ---- |
| MacBook | 70 | secs | 
| i5 10600k Win10 | 18 | secs | 
| i7 7700k Linux Mint | ? | secs | 
| M1 mac mini 16 GB RAM | 13 | secs | 
| i7-8565U Ubuntu | 29 | secs |


`mvn -T 1C clean install -DskipTests`
| System  | time |  |
| ------- | --- | ---- |
| MacBook | ? | secs | 
| i5 10600k Win10 | 55 | secs | 
| i7 7700k Linux Mint | ? | secs | 
| M1 mac mini 16 GB RAM | ? | secs | 
| i7-8565U Ubuntu | 90 | secs |
