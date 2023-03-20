# Import flask and datetime module for showing date and time
from flask import Flask
from flask_cors import CORS
import numpy as np


  

 
# Initializing flask app
app = Flask(__name__)
CORS(app) 

def test():
   return np.multiply(5, 9) 

t = test()
  
# Route for seeing a data
@app.route('/data')
def get_time():
  
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":str(t), 
        "programming":"python"
        }
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)