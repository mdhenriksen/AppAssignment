from flask import Flask, jsonify
from Company import Company
from Owner import Owner

class CompanyHelperClass:
    def toJSON(self, object):
        return jsonify(
            id=object.id,
            name=object.name,
            address=object.address,
            city=object.city,
            country=object.country,
            mail=object.mail,
            phone=object.phone
         )
    
    def ownerToJSON(self, object):
        return jsonify(id =object.id, name=object.name)

    def mapCompany(self, object):
        json = object
        return Company(id=json['id'], name=json['name'], address=json['address'], city=json['city'], country=json['country'], mail=json['mail'], phone=json['phone'])

    def mapOwner(self, object):
        json = object
        return Owner(id=json['id'], name=json['name'])