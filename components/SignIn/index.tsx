import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  HStack,
  VStack,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Sign In</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex align="center" direction="column" justify="center">
              <Heading>Sign In</Heading>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input type="email" />
                <FormLabel htmlFor="email">Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button my={4} w="full" colorScheme={"linkedin"}>
                Sign In
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
