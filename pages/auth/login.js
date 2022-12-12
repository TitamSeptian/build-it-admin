import Layout from "../../components/auth/Layout";
import {
    Box,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    useColorModeValue
} from "@chakra-ui/react";
import logo from '../../public/logo/logo200.png';
import Image from "next/image";
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";

export default function Login() {
    const bgColor = useColorModeValue('white', 'gray.700');

    return (
        <div className={"flex justify-center items-center h-screen"}>
            <Box boxShadow={{base: 'none', md: "2xl"}} w={{
                base: "100%",
                md: "600px",
            }} borderRadius={"2xl"} bgColor={bgColor}>
                <VStack align={"start"} px={"50px"} py={"38"} spacing={"7"}>
                    <Link href={'/'}>
                        <Image src={logo} alt={"logo"} height={"50"} width={"50"}/>
                    </Link>
                    <Text color={"mygray.700"}>Welcome </Text>
                    <Heading fontWeight={"bold"} size={"2xl"}>Sign In</Heading>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' colorScheme={"myorange"} placeholder={"Emaill Address"}
                               isRequired variant={"filled"}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' colorScheme={"myorange"} placeholder={"Password"} isRequired
                               variant={"filled"}/>
                    </FormControl>
                    <Button colorScheme={"myorange"}>Sign In </Button>
                </VStack>
            </Box>
        </div>
    )
}