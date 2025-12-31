from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")


@app.route("/2025")
def year_2025():
    return render_template("2025.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
