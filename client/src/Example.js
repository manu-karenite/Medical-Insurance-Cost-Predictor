import React from "react";
import { Stack, Button } from "@chakra-ui/react";
const arr = [
  {
    age: 22,
    sex: 1,
    children: 3,
    region: "southeast",
    height: 182,
    weight: 85,
    smoker: true,
  },
  {
    age: 41,
    sex: 1,
    children: 1,
    region: "southwest",
    height: 160,
    weight: 71,
    smoker: false,
  },
  {
    age: 60,
    sex: 1,
    children: 2,
    region: "northeast",
    height: 175,
    weight: 85,
    smoker: true,
  },
  {
    age: null,
    sex: null,
    children: null,
    region: null,
    height: null,
    weight: null,
    smoker: null,
  },
];

const Example = ({
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
  const fillData = (obj) => {
    console.log(obj);
    setAge(obj?.age);
    setSex(obj?.sex);
    setChildren(obj?.children);
    setRegion(obj?.region);
    setHeight(obj?.height);
    setWeight(obj?.weight);
    setSmoker(obj?.smoker);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "10px 0px",
      }}
    >
      <Stack direction="row" spacing={4} align="center">
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => fillData(arr[0])}
        >
          Example 1
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => fillData(arr[1])}
        >
          Example 2
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => fillData(arr[2])}
        >
          Example 3
        </Button>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={(e) => fillData(arr[3])}
        >
          Clear
        </Button>
      </Stack>
    </div>
  );
};

export default Example;
