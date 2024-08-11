'use client';

import { Box, Heading, Button, Text, useColorModeValue, Container, VStack } from "@chakra-ui/react";
import NoteList from "../components/NoteList";
import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../graphql/queries';
import { useRouter } from 'next/navigation';

const NotesPage = () => {
  const { loading, error, data } = useQuery(GET_NOTES);
  const router = useRouter();

  const bgGradient = useColorModeValue(
    "linear(to-r, teal.300, blue.400)",
    "linear(to-r, teal.700, blue.800)"
  );
  const boxBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.500", "teal.200");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.getNotes || data.getNotes.length === 0) {
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
              Tidak Ada Catatan
            </Heading>
            <Text fontSize="lg" mb={8} color={headingColor}>
              Belum ada catatan yang tersedia. Silakan tambahkan catatan baru.
            </Text>
            <VStack spacing={6}>
              <Button
                colorScheme="teal"
                size="lg"
                borderRadius="full"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                onClick={() => router.push('/')}
              >
                Kembali ke Homepage
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={boxBg}
        borderRadius="xl"
        boxShadow="2xl"
        p={8}
        maxW="lg"
        w="full"
      >
        <Button mb={4} colorScheme="teal" onClick={() => router.push('/')}>
          Kembali ke Homepage
        </Button>
        <Heading mb={6} color={headingColor}>My Notes</Heading>
        <NoteList notes={data.getNotes.map(note => ({
          id: note.id,
          title: note.title,
          content: note.content,
          createdAt: note.created_at
        }))} />
      </Box>
    </Box>
  );
};

export default NotesPage;
