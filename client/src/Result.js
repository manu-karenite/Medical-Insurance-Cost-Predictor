import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import style from "./NavBar.module.css";
const Result = ({ data }) => {
  return (
    <div className={style.home_out}>
      <Card style={{ width: "60%" }}>
        <CardBody>
          <Heading align="center">Prediction Result</Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th align="center">Accuracy of Prediction</Th>
                  <Th align="center">Predicted Insurance Cost</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td align="center">{data?.score} %</Td>
                  <Td align="center">₹ {data?.price}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default Result;
