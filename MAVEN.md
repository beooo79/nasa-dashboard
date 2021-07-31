`mvn clean compile`
| System  | time |  |
| ------- | --- | ---- |
| MacBook | 101 | secs |
| i5 10600k Win10 | 62 | secs |
| i7 7700k Linux Mint | 32 | secs | 
| M1 mac mini 16 GB RAM | 30 | secs | 
| i7-8565U Ubuntu | 54 | secs |


`mvn -T 1C clean compile`
| System  | time |  |
| ------- | --- | ---- |
| MacBook | 70 | secs | 
| i5 10600k Win10 | 18 | secs | 
| i7 7700k Linux Mint | 14.4 | secs | 
| M1 mac mini 16 GB RAM | 13 | secs | 
| i7-8565U Ubuntu | 29 | secs |


`mvn -T 1C clean install -DskipTests`
| System  | time |  |
| ------- | --- | ---- |
| MacBook | ? | secs | 
| i5 10600k Win10 | 55 | secs | 
| i7 7700k Linux Mint | 48 | secs | 
| M1 mac mini 16 GB RAM | 47 | secs | 
| i7-8565U Ubuntu | 90 | secs |


`mvn -T 1C (prettier maven goal)`
| System  | time |  |
| ------- | --- | ---- |
| MacBook | ? | secs | 
| i5 10600k Win10 | ? | secs | 
| i7 7700k Linux Mint | 8 | secs | 
| M1 mac mini 16 GB RAM | 22.4 | secs | 
| i7-8565U Ubuntu | ? | secs |
