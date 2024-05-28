#!/usr/bin/env python3
"""A Basic Flask app.
"""
from flask import Flask, render_template

app = Flask(__name__)
app.url_map.strict_slashes = False

@app.route('/')
def index() -> str:
    """
    The home Page
    """
    return render_template('0-index.html')


if __name__ == "__main__":
    app.run(port=500, host='0.0.0.0')
