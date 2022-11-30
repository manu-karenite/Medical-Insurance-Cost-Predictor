from flask import Flask
from flask_cors import CORS
from flask import request
app=Flask(__name__)
CORS(app)

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

@app.route("/members",methods = ['POST'])
def members():
    print(request.data)
    decoded=eval(request.data.decode("utf-8"))
    print(decoded)
    df=pd.read_csv("insurance.csv")
    d={"female":1,"male":0}
    df["sex"]=df["sex"].apply(lambda x :d[x])
    d={"yes":1,"no":0}
    df["smoker"]=df["smoker"].apply(lambda x:d[x])
    def sumOfAscii(x):
        sum=0
        for l in x:
            sum+=ord(l)
        return sum
    df["region"]=df["region"].apply(lambda x:sumOfAscii(x))
    #print(df.head(3))
    d={'age':int(decoded["age"]),'sex':int(decoded["sex"]),'bmi':float(decoded["BMI"]),'children':int(decoded["children"]),'smoker':int(decoded["smoker"]),'region':decoded["region"]}
    custom_x=pd.DataFrame([d])
    custom_x["region"]=custom_x["region"].apply(lambda x:sumOfAscii(x))
    print(custom_x)
    x=df[['age', 'sex', 'bmi', 'children', 'smoker', 'region']]
    y=df[['charges']]
    x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.3,random_state=121)
    lm=LinearRegression()
    lm.fit(x_train,y_train)
    predictions=lm.predict(x_test)
    user_prediction=lm.predict(custom_x)

    score=lm.score(x_test,y_test)

    #print(predictions)
    return {"price":str(np.round(user_prediction[0][0],2)),"score":np.round(score,4)*100}

if __name__ == "__main__":
    app.run(debug=False)

