# This class is a part of the pattern I used for the API. 
# Usually this class would map objects to DTO's to make sure
# that the API don't return full objects (in case that the object have sensitive data)
from CompanyRepository import CompanyRepository

class CompanyService:
    def __init__(self):
        pass