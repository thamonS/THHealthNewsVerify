from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # ส่งไฟล์ index.html จากโฟลเดอร์ templates
    return render_template('index.html')

if __name__ == '__main__':
    # รัน Flask ที่ Port 5000
    app.run(debug=True, port=5000)