import sqlalchemy as db
import json

class CompanyRepository:

    # The connection string would usually be put inside a config file
    engine = db.create_engine('postgres://fyztexzf:178OiBHUrHp3S-2nE39sfeeXdkq9Dqsn@balarama.db.elephantsql.com:5432/fyztexzf')
    
    def __init__(self):
        pass
    
    def getCompanies(self):
        try:
            connection = self.engine.connect()
            metadata = db.MetaData()
            table = db.Table('companies', metadata, autoload=True, autoload_with=self.engine)
            query = db.select([table])
            ResultProxy = connection.execute(query)
            #ResultSet = ResultProxy.fetchall()
            #dataFrame = pandas.DataFrame(ResultSet)
            #dataFrame.columns = ResultSet[0].keys()
            return json.dumps([dict(r) for r in ResultProxy])
            #return dataFrame
        except:
            print("Exception in 'getCompanies'.")
            return False

    def getCompany(self, id):
        try:
            connection = self.engine.connect()
            metadata = db.MetaData()
            table = db.Table('companies', metadata, autoload=True, autoload_with=self.engine)
            query = db.select([table]).where(table.columns.id == id)
            ResultProxy = connection.execute(query)
            # Could be DataFrame in pandas
            return json.dumps([dict(r) for r in ResultProxy])
        except:
            print("Exception in 'getCompany'.")
            return False
    
    def createCompany(self, company):
        try:
            connection = self.engine.connect()
            metadata = db.MetaData()
            table = db.Table('companies', metadata, autoload=True, autoload_with=self.engine)
            query = db.insert(table).values(id=company.id, name=company.name, address=company.address, 
            city=company.city, country=company.country, mail=company.mail, phone=company.phone)
            connection.execute(query)
            return True
        except:
            print("Exception in 'createCompany'.")
            return False

    def updateCompany(self, id, company):
        try:
            connection = self.engine.connect()
            metadata = db.MetaData()
            table = db.Table('companies', metadata, autoload=True, autoload_with=self.engine)
            query = db.update(table).returning(table.c.id).where(table.columns.id == id).values(name=company.name,
            address=company.address, city=company.city, country=company.country, 
            mail=company.mail, phone=company.phone)
            ResultProxy = connection.execute(query)
            ResultSet = ResultProxy.fetchall()
            if ResultSet == []:
                return 'error'
            return company
        except:
            print("Exception in 'updateCompany'.")
            return 'error'