import {
  VStack,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const config = {
  username: {
    required: "o nome precisa ter entre 5 e 15 caracteres",
    minLength: {
      value: 5,
      message: "o nome precisa ter entre 5 e 15 caracteres",
    },
    maxLength: {
      value: 15,
      message: "o nome precisa ter entre 5 e 15 caracteres",
    },
  },
  password: {
    required: "a senha tem que ter entre 5 e 15 caracteres",
    minLength: {
      value: 5,
      message: "a senha tem que ter entre 5 e 15 caracteres",
    },
    maxLength: {
      value: 15,
      message: "a senha tem que ter entre 5 e 15 caracteres",
    },
  },
};

function Register() {
  const auth = useAuth();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const sendForm = async (data) => {
    setLoading(true);
    const response = await auth.register(data);
    console.log(response);
    setMessage(response.message);
    setLoading(false);
  };

  return (
    <Center w="100%">
      <VStack
        onSubmit={handleSubmit(sendForm)}
        spacing={5}
        w={{sm: "90%", md: "40%"}}
        my="10vh"
        maxW="1500px"
        as="form"
        bg="#f4f4f4"
        p={10}
      >
        <Heading>Register</Heading>
        {message && <Center>
          <Text>{message}</Text>
        </Center>}
        <FormControl isInvalid={errors.username}>
          <FormLabel>Username</FormLabel>
          <Input
            focusBorderColor="green.500"
            type="text"
            {...register("username", config.username)}
          />
          {errors.username && (
            <FormErrorMessage>{errors.username.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            focusBorderColor="green.500"
            type="password"
            {...register("password", config.password)}
          />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button isLoading={loading} type="submit" colorScheme="green" w="100%">
          Entrar
        </Button>
        <Center>
          <Text>
            J?? tem uma conta?{" "}
            <Link to="/login" style={{ fontWeight: "bold" }}>
              Entrar
            </Link>
          </Text>
        </Center>
      </VStack>
    </Center>
  );
}

export default Register;