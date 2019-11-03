from flask import Flask, jsonify, request, Response
import json
from CompanyRepository import CompanyRepository
from CompanyHelperClass import CompanyHelperClass
from Company import Company

app = Flask(__name__)

companyHelper = CompanyHelperClass()
companyRepository = CompanyRepository()

@app.route("/create", methods=['POST'])
def addCompany():
      json = request.get_json()
      company = companyHelper.mapCompany(json)
      if companyRepository.createCompany(company):
         return Response("Added company", 200)
      else:
         return Response("Error adding company", 404)
      
@app.route("/get", methods=['GET'])
def getCompanies():
      companies = companyRepository.getCompanies()
      return Response(companies, mimetype='application/json')

@app.route("/get/<string:id>", methods=['GET'])
def getCompany(id):
   company = companyRepository.getCompany(id)
   return Response(company, mimetype='application/json')
   
@app.route("/update/<string:id>", methods=['PUT'])
def updateCompany(id):
      json = request.get_json()
      companyJSON = companyHelper.mapCompany(json)
      company = companyRepository.updateCompany(id, companyJSON)
      if company != 'error':
         return companyHelper.toJSON(company)
      else:
         return Response("Company ID not found", 404)

@app.route("/owner", methods=['POST'])
def addOwner():
      json = request.get_json()
      owner = companyHelper.mapOwner(json)
      if companyRepository.addOwner(owner):
         return Response("Added owner", 200)
      else:
         return Response("Error adding owner", 404)

if __name__ == '__main__':
    app.run()