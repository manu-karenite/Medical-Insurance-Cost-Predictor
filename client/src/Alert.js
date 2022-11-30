import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const Alert = ({ onOpen, isOpen, cancelRef, onClose }) => {
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Generating Results
            </AlertDialogHeader>

            <AlertDialogBody>
              Machine Learning Algorithms take a little while to produce
              Results.
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: "20px 0px 0px 0px",
                }}
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="teal"
                  color="golden"
                  size="xl"
                />
              </div>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="teal" ml={3}>
                Please Wait!
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Alert;
