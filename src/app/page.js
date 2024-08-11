"use client";

import { Box, Button, Heading, Text, VStack, Icon, Container, useColorModeValue } from "@chakra-ui/react";
import { FaClipboardList, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, teal.300, blue.400)",
    "linear(to-r, teal.700, blue.800)"
  );
  const boxBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.500", "teal.200");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Container maxW="lg">
        <Box
          bg={boxBg}
          borderRadius="xl"
          boxShadow="2xl"
          p={8}
          textAlign="center"
          transition="all 0.3s"
          _hover={{ transform: "translateY(-5px)" }}
        >
          <Heading as="h1" size="2xl" mb={6} color={headingColor}>
            Aplikasi Catatan
          </Heading>
          <Text fontSize="lg" mb={8} color={textColor}>
            Apa yang ingin anda lakukan hari ini?
          </Text>
          
          <VStack spacing={6}>
            <Link href="/notes" passHref legacyBehavior>
              <Button
                as="a"
                leftIcon={<Icon as={FaClipboardList} />}
                colorScheme="teal"
                size="lg"
                w="full"
                borderRadius="full"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                Lihat Catatan
              </Button>
            </Link>
            <Link href="/notes/new" passHref legacyBehavior>
              <Button
                as="a"
                leftIcon={<Icon as={FaPlusCircle} />}
                colorScheme="blue"
                size="lg"
                w="full"
                borderRadius="full"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
              >
                Tambahkan Catatan Baru
              </Button>
            </Link>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
