from flask import Flask, jsonify, request
from CompanyRepository import CompanyRepository
from Company import Company

app = Flask(__name__)

companies = []

@app.route("/get", methods=['GET'])
def companies_list():
      return str(companies)

@app.route("/create", methods=['POST'])
def add_company():
      json = request.get_json()
      print(json['id'])
      comp = Company(id=json['id'], name=json['name'], address=json['address'], city=json['city'], country=json['country'], mail=json['mail'], phone=json['phone'])
      companies.append(comp)
      return str(comp)

if __name__ == '__main__':
    app.run()