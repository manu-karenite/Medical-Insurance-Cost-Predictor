import axios from "axios";
import { useEffect, useState, useRef } from "react";
import NavBar from "./NavBar";
import Form from "./Form.js";
import Alert from "./Alert.js";
import Result from "./Result.js";
import Example from "./Example";
import { useToast, useDisclosure } from "@chakra-ui/react";
import { Stack, Button } from "@chakra-ui/react";

function App() {
  const toast = useToast();
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [children, setChildren] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [BMI, setBMI] = useState("Calculating BMI..");
  const [region, setRegion] = useState(null);
  const [smoker, setSmoker] = useState(false);

  const [data, setData] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const getAnswer = async () => {
    const result = await axios({
      method: "POST",
      url: `http://127.0.0.1:5000/members`,
      data: {
        age: age,
        sex,
        children,
        BMI,
        smoker: smoker ? "1" : "0",
        region,
      },
    });
    return result;
  };
  const submitHandler = () => {
    if (!age) {
      toast({
        title: "Please Enter your Age",
        description: "Age is Required to Predict your Insurance Cost",
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    if (!sex) {
      toast({
        title: "Please Choose your Sex",
        description: "Insurance Cost varies with the sex of Insured Person",
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    if (!children) {
      toast({
        title: "Please enter your number of Children",
        description:
          "Insurance Cost heavily depends on the number of Dependents left Behind",
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    if (!region) {
      toast({
        title: "Please enter your Residence Region",
        description:
          "Insurance Cost varies on Companies Connectivity with Hospitals etc. in a Region",
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    if (!height || height <= 0) {
      toast({
        title: "Please enter your height in cm.",
        description: "Will be used to Calculate your BMI",
        status: "info",
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    if (!weight || weight <= 0) {
      toast({
        title: "Please enter your weight in kg.",
        description: "Will be used to Calculate your BMI",
        status: "info",
        duration: 2500,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "All Fields Validated Successfully",
      description: "Please Wait while we Generate Results",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
    onOpen();
    getAnswer()
      .then((res) => {
        setData(res.data);
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />
      <Alert
        onOpen={onOpen}
        isOpen={isOpen}
        cancelRef={cancelRef}
        onClose={onClose}
      />

      <Form
        age={age}
        setAge={setAge}
        sex={sex}
        setSex={setSex}
        children={children}
        setChildren={setChildren}
        region={region}
        setRegion={setRegion}
        height={height}
        setHeight={setHeight}
        setWeight={setWeight}
        weight={weight}
        BMI={BMI}
        setBMI={setBMI}
        smoker={smoker}
        setSmoker={setSmoker}
        submitHandler={submitHandler}
        data={data}
        setData={setData}
      />
      {data && <Result data={data} />}

      {!data && (
        <Example
          age={age}
          setAge={setAge}
          sex={sex}
          setSex={setSex}
          children={children}
          setChildren={setChildren}
          region={region}
          setRegion={setRegion}
          height={height}
          setHeight={setHeight}
          setWeight={setWeight}
          weight={weight}
          BMI={BMI}
          setBMI={setBMI}
          smoker={smoker}
          setSmoker={setSmoker}
          submitHandler={submitHandler}
          data={data}
          setData={setData}
        />
      )}
    </>
  );
}

export default App;
