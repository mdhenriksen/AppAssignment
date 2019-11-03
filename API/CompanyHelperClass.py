from flask import Flask, jsonify
from Company import Company

# Helper class for converting company objects to JSON

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

    def mapJSON(self, object):
        json = object
        return Company(id=json['id'], name=json['name'], address=json['address'], city=json['city'], country=json['country'], mail=json['mail'], phone=json['phone'])
         