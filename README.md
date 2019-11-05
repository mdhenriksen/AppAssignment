# AppAssignment
This project includes a Python REST API using the Flask framework and a React frontend. The project is a database of companies and supports the functionality to list, create, update, see details and add benificial owners to the companies. The data is kept in a PostgreSQL database hosted at <a href="https://www.elephantsql.com/">ElephantSQL</a>. 

## Usage
The frontend and backend is hosted in two seperate docker containers on Heroku at the following URLs. Both ``Dockerfiles`` can be found on the GitHub in ``Frontend`` and ``API``. The frontend supports all the functionality, but the API can also be accessed via cURL
* Frontend: https://appassign.herokuapp.com/
* Backend: https://bindapi.herokuapp.com/

## cURL
The backend supports curl at the following endpoints:
* https://bindapi.herokuapp.com/get (GET: List of companies)
* https://bindapi.herokuapp.com/create (POST: Company)
* https://bindapi.herokuapp.com/details/[ID] (GET: details about specific company)
* https://appassign.herokuapp.com/owner/[ID] (POST: Owner to specific company)
* https://appassign.herokuapp.com/edit/[ID] (PUT: Company with the company id)

### cURL format
The curl takes JSON formatted data.

**Company**

```
{
"id": "",
"name": "",
"address": "",
"city": "",
"country": "",
"mail": "",
"phone": ""
}
```

**Owner**

```
{
"id": "",
"name": ""
}
```

## SQL Tables
**Companies**
```
CREATE TABLE companies(
   id serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   address VARCHAR (100) NOT NULL,
   city VARCHAR (50) NOT NULL,
   country VARCHAR(50) NOT NULL,
   mail VARCHAR(50),
   phone int
);
```
**Owners**
```
CREATE TABLE owners (
   company_id INT references companies(id),
   owner VARCHAR(50));
```
## Considerations
### Authentication
The application does currently not have any authentication. If authentication should be added I would use JWT JSON Web Tokens. It's relatively small in size and secure (even though a JWT is encoded not encrypted). Most programming languages have JSON parsers which make working with it easier and it scales well.
### Making the application redundant
The software could be made redundant by making micro-services of each functionality in the system and running each service in multiple containers e.g. in a Docker Swarm. This way load balancing can be implemented and in case of faults/errors another instance of the service will take over. This increases the availability and fault tolerance.
### Data versioning
The database currently does not have data versioning. One way it can be achieved is by creating a revision table in the database and adding triggers to main table. Changes to the main table will be added to the revision table along with a foreign key and a timestamp.

