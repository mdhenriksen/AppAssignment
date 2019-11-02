from flask import Flask, jsonify, request
import json
import jsonpickle
from CompanyRepository import CompanyRepository
from CompanyToJSON import CompanyToJSON
from Company import Company

app = Flask(__name__)

companyConverter = CompanyToJSON()
companies = []

@app.route("/get", methods=['GET'])
def listOfCompanies():
      return str(companies)

@app.route("/get/<string:id>", methods=['GET'])
def getCompany(id):
   for company in companies:
      if company.id == id:
         return companyConverter.toJSON(company)
      else:
         return "Company not found", 404

@app.route("/create", methods=['POST'])
def addCompany():
      json = request.get_json()
      print(json['id'])
      comp = Company(id=json['id'], name=json['name'], address=json['address'], city=json['city'], country=json['country'], mail=json['mail'], phone=json['phone'])
      companies.append(comp)
      return "Created: " + str(comp), 200

if __name__ == '__main__':
    app.run()