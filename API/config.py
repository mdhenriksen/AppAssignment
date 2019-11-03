import os
import psycopg2
import urllib.parse as up

up.uses_netloc.append("postgres")
url = up.urlparse(os.environ[" 	postgres://fyztexzf:178OiBHUrHp3S-2nE39sfeeXdkq9Dqsn@balarama.db.elephantsql.com:5432/fyztexzf"])
conn = psycopg2.connect(database=url.path[1:],
user=url.username,
password=url.password,
host=url.hostname,
port=url.port
)