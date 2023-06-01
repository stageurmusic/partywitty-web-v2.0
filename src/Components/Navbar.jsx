import React from "react";
import styles from "../CSS/navbar.module.css";
import { NavLink } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  FormControl,
  Input,
  Flex,
  Box,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [isdCode, setISDCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleISDCodeChange = (e) => {
    setISDCode(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <Flex className={styles.navbar}>
      <div className={styles.img_locationDiv}>
        <img className={styles.logo} src="Images/PW Logo.png" alt="Logo" />
        <select className={styles.locationSelect}>
          <option value="">Choose Your Location</option>
        </select>
      </div>
      <div className={styles.navlist}>
        <NavLink
          style={({ isActive, isPending }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to="/ourartist"
        >
          OUR ARTIST
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to="/deals_and_offers"
        >
          DEALS
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to="/events"
        >
          EVENTS
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to="/partner_with_us"
        >
          PARTNER WITH US
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return { color: isActive ? "red" : "white" };
          }}
          to="/userLogin"
        >
          LOGIN
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return { color: isActive ? "red" : "white" };
          }}
          onClick={onOpen}
          className={styles.signup}
        >
          SIGN UP
        </NavLink>
      </div>
      {/* Sign UP Modal */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        blockScrollOnMount="false"
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack direction={{ base: "column", md: "row", lg: "row" }}>
              <Flex flex={1}>
                <Image src="https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
              </Flex>
              <Flex flex={2} flexDirection={"column"} alignItems={"center"}>
                <FormControl>
                  <FormLabel>Hey! What's your number?</FormLabel>
                  <Flex>
                      <select
                        id="isdCode"
                        value={isdCode}
                        onChange={handleISDCodeChange}
                      >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        {/* Add more ISD codes as per your requirements */}
                      </select>
                      <Input
                        ref={initialRef}
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                  </Flex>
                  
                </FormControl>
              </Flex>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Navbar;
