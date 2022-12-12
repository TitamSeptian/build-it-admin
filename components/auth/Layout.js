import Image from "next/image";
// import Logo200 from "../../public/logo/logo200.png";
import {Flex, useColorModeValue} from "@chakra-ui/react";

export default function Layout({children}) {
    const bgColor = useColorModeValue('mygray.500', 'gray.800');
    return (
        <div>
            <Flex direction="column" minH="100vh" bgColor={bgColor} rowGap={"10"} justifyContent={"center"} alignItems={"center"}>
                {children}
            </Flex>
        </div>
    )
}