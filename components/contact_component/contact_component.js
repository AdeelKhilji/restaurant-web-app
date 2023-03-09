import {
  Button, 
  Container, 
  FormControl, 
  FormErrorMessage, 
  FormLabel, 
  Heading, 
  Input, 
  Textarea,
  Text
} from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";

import { useState } from "react";

import { sendContactForm } from "../../lib/api";

const initValues = {name: "", email: "", message: ""}

const initState = {values: initValues}

export default function ContactComponent({data}) {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const {values, isLoading, error} = state;

  const onBlur = ({target}) => 
  setTouched((previousState) => ({...previousState,[target.name]: true }));

  const handleChange = ({target}) => setState((previousState) => ({
    ...previousState,
    values:{
      ...previousState.values,
      [target.name]: target.value
    }
  }));

  const onSubmit = async () => {
    setState((previousState) =>({
      ...previousState,
      isLoading: true
    }));

    try{
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top"
      });
    }catch(error){
        setState((previousState) =>({
        ...previousState,
        isLoading: false,
        error: error.message
      }));
    }
  };

  return (
    <>
    <div>
      {data ? (<div>{data.map((item,index) =>(
        <div className="table-cell">
          <div className="p-10">
            <div className="p-5 max-w-sm rounded overflow-hidden shadow-lg w-screen">
              <div key={index} eventKey={index}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.address}</div>
                    <p className="text-gray-700 text-base">
                      <span>{item.city}</span> <span> {item.province}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ))}</div>) : (<div>There is no data</div>)} 
        <Container maxW="450px" mt={12}>
          <Heading>CONTACT US</Heading>
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}
          <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
            <FormLabel>Name</FormLabel>
            <Input 
                  type="text" 
                  name="name" 
                  errorBorderColor="red.300"
                  value={values.name}
                  onBlur={onBlur}
                  onChange={handleChange}/>
                  <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <FormLabel>Email</FormLabel>
            <Input 
                  type="email" 
                  name="email" 
                  value={values.email} 
                  errorBorderColor="red.300"
                  onBlur={onBlur}
                  onChange={handleChange}/>
                  <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
            <FormLabel>Message</FormLabel>
            <Textarea 
                  type="text" 
                  name="message" 
                  rows={5}
                  value={values.message} 
                  errorBorderColor="red.300"
                  onBlur={onBlur}
                  onChange={handleChange}/>
                  <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <Button
                  variant ="outline"
                  colorScheme='blue'
                  isLoading={isLoading}
                  disabled={!values.name || !values.email || !values.message}
                  onClick={onSubmit}
          >SUBMIT</Button>
        </Container>
      </div>
    </>
  )
}