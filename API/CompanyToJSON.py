from flask import Flask, jsonify

# Helper class for converting company objects to JSON

class CompanyToJSON:
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