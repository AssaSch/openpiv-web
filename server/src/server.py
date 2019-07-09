from flask import Flask, jsonify, json, Response, request
from flask_restful import Api, Resource
from flask_cors import CORS
import openpiv_handler


app = Flask(__name__)
CORS(app)
api = Api(app)

class Openpiv(Resource):
    
    def post(self):
        req_body = request.get_json()
        print(req_body)
        data = openpiv_handler.two_images(req_body['image_1']['data'],
                req_body['image_2']['data'])
        return data ,200

    
api.add_resource(Openpiv, "/api/openpiv")

app.run(port=4000, debug=True)