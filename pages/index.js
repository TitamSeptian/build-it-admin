import Link from 'next/link'
import {Button, Heading, HStack, useColorModeValue, VStack} from "@chakra-ui/react";

export default function Home() {
    const bgColor = useColorModeValue('white', 'gray.700');

    return (
        <HStack bgColor={bgColor} p={"10"} borderRadius={"10"} boxShadow={"xl"} gap={"10"}>
            <VStack>
                <Heading size={"md"}>Build It Admin Pane</Heading>
                <Link href={"/auth/login"}>
                    <Button colorScheme={"myorange"} size={"sm"}>Go to Admin</Button>
                </Link>
            </VStack>
        </HStack>
    )
}
