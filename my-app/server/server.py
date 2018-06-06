from flask import Flask, render_template
#from presidents import get_pres
import random
import csv

# CSV Reader




app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    pres = get_pres()
    return render_template("index.html")

@app.route("/hello")
def hello():
    return get_pres()

def get_pres():
    with open('PresidentsList.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            print(row['President'])
            data.append(row)
        return data


if __name__ == "__main__":
    app.run()
