import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import style from "./NavBar.module.css";
const Form = ({
  age,
  setAge,
  sex,
  setSex,
  children,
  setChildren,
  region,
  setRegion,
  height,
  setHeight,
  weight,
  setWeight,
  BMI,
  setBMI,
  smoker,
  setSmoker,
  submitHandler,
  data,
  setData,
}) => {
  useEffect(() => {
    height &&
      weight &&
      setBMI((weight / ((height / 100) * (height / 100))).toFixed(2));
    (!height || !weight) && setBMI("Calculating BMI..");
  }, [height, weight]);

  return (
    <div className={style.home_out}>
      <Card style={{ width: "60%" }}>
        <CardBody>
          <div className={style.home_vertical}>
            <Text fontSize="lg">Please Choose your Age</Text>
            <NumberInput
              min={0}
              onChange={(e) => setAge(e)}
              value={age ? age : ""}
            >
              <NumberInputField placeholder="Please Enter your Age" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className={style.home_vertical}>
            <Text fontSize="lg">Please Choose your Sex</Text>
            <Select
              placeholder="Please Choose your Sex"
              onChange={(e) => setSex(e.target.value)}
              value={sex ? sex : ""}
            >
              <option value={1}>Female</option>
              <option value={0}>Male</option>
            </Select>
          </div>
          <div className={style.home_vertical}>
            <Text fontSize="lg">Please Enter your number of Children</Text>
            <NumberInput
              min={0}
              max={10}
              onChange={(e) => setChildren(e)}
              value={children ? children : ""}
            >
              <NumberInputField placeholder="How many Children do you have?" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className={style.home_vertical}>
            <Text fontSize="lg">Please Choose your Residence Region</Text>
            <Select
              placeholder="Please Choose your Residence Region"
              onChange={(e) => setRegion(e.target.value)}
              value={region ? region : ""}
            >
              <option value="southeast">South East</option>
              <option value="southwest">South West</option>
              <option value="northeast">North East</option>
              <option value="northwest">North West</option>
            </Select>
          </div>
          <div className={style.home_horizontal}>
            <div style={{ width: "35%" }}>
              <Text fontSize="lg">Your Height (in cm)</Text>
              <NumberInput
                min={0}
                onChange={(e) => setHeight(e)}
                value={height ? height : ""}
              >
                <NumberInputField placeholder="Please Enter your Height (in cm)" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>
            <div style={{ width: "35%" }}>
              <Text fontSize="lg">Your Weight (in kg)</Text>
              <NumberInput
                min={0}
                onChange={(e) => setWeight(e)}
                value={weight ? weight : ""}
              >
                <NumberInputField placeholder="Please Enter your Weight (in kg)" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>
            <div style={{ width: "20%" }}>
              <Text fontSize="lg">Your Calculated BMI</Text>
              <NumberInput min={0} isReadOnly={true} value={BMI}>
                <NumberInputField placeholder="BMI Loading...." />
              </NumberInput>
            </div>
          </div>
          <div className={style.home_vertical}>
            <Checkbox
              onChange={(e) => {
                console.log(e.target.checked);
                setSmoker(e.target.checked);
              }}
              isChecked={smoker}
              // checked={smoker}
            >
              Please Check if you are Smoker
            </Checkbox>
          </div>
          <div className={style.home_horizontal}>
            {!data && (
              <Button
                colorScheme="teal"
                width="100%"
                size="md"
                onClick={submitHandler}
              >
                Predict Cost
              </Button>
            )}
            {data && (
              <Button
                colorScheme="yellow"
                width="100%"
                size="md"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reset Form
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Form;
