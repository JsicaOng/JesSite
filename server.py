import time

from flask import Flask, render_template

app = Flask(__name__)


def app_decorator(function):
    def wrapper():
        time.sleep(2)
        return function()
    return wrapper


@app.route('/')
@app_decorator
def greet(name=None):
    return render_template('Personal_Site _files/Jessica.html')


@app.route('/website')
def visit():
    return render_template('Personal_Site _files/Personal.html')


if __name__ == "__main__":
    app.run(debug=True)
