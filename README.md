# Medical Insurance Cost Predictor

Medical Insurance Cost Generator is a **Linear Regression** based Predictor which is used to estimate and predict the Cost a person has to pay while Buying a Medical Insurance.

## The Inputs to the Regression Model are as follows : ⬇️ 

- **Age** of the Person (from 1 to 100, **best between 18-60**)
- **Sex** of the Person : (**Male/Female**)
- **Number of Children** : Indicates the people dependent on the insuree.
- **Residence Region** : Based on 4 Zones in the Country, one can choose either of : 
    - South East
    - South West
    - North East
    - North West
- **Body Mass Index** : Will be used to analyse the health of the Person before listing out the Insurance Cost. The **BMI** will automatically be calculated based on the inputs : 
    - **Height** : Should be Entered in **cm** 
    - > Example: 5 feet 4 inches = 5*30.48 + 2.54 cms
    
    - **Weight** : Should be in **kgs**
- **Smoker** : Checkbox need to be ticked as **Yes** to declare smoker.

## Outputs from the Model : ⬆️
- **Predicted Insurance Cost** : on the basis of inputs
- **Accuracy of Prediction** : In Percentage

## Technology Used : 🧑‍💻 
> **Client Side** : React.js as frontend-library.  
> **Server Side** : **Python3** as Programming Language, **scikit-learn** as Machine Learning Library

## Running the Application on your System ⚙️

Ensure git is already installed on your system.
To clone and run the Application on your system, follow the given steps : 

> **1.** go to your folder where you want to clone (**example : /Desktop**), open powershell/ terminal etc.,  
> **2.** clone the repository : ``` git clone https://github.com/manu-karenite/Medical-Insurance-Cost-Predictor.git```  
> **3.** Open the Folder created : ```cd  Medical-Insurance-Cost-Predictor```  
> **4.** Go to client folder, and install node_modules : ```cd client``` then ```npm install```  
> **5** Go back to server folder : ```cd ../server```  
> **6.** Install Python & ML Packages : ```pip install -r requirements.txt```  
> **7.** In the same terminal, run the file as ```python3 server.py```  
> **8.** In the Different Terminal, go to client folder as ```cd client```  
> **9.** Run the Frontend as ```npm start```  
> **10.** Open **http://localhost:3000/** to see the application running! 💥  



## Gallery 📸
- Input Form Image

![Inurance Predictor Form](https://res.cloudinary.com/techbuy/image/upload/v1669879632/pic1_tgf5ah.png "Inurance Predictor Form")

- Form Validation Image

![Form Validation Image](https://res.cloudinary.com/techbuy/image/upload/v1669879632/pic2_anwubh.png "Form Validation Image")

- Prediction Result Summary

![Prediction Result Summary](https://res.cloudinary.com/techbuy/image/upload/v1669879632/pic3_d0bauf.png "Prediction Result Summary")
