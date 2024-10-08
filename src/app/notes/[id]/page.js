'use client';

import { Box, Heading, Button, Flex, useColorModeValue, Container, Text } from "@chakra-ui/react";
import NoteDetail from "../../components/NoteDetail";
import { useQuery } from '@apollo/client';
import { GET_NOTE_BY_ID } from '../../graphql/queries';
import { useParams, useRouter } from 'next/navigation';

const NoteDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const noteId = params.id;

  const bgGradient = useColorModeValue(
    "linear(to-r, teal.300, blue.400)",
    "linear(to-r, teal.700, blue.800)"
  );
  const boxBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.500", "teal.200");

  const { loading, error, data } = useQuery(GET_NOTE_BY_ID, {
    variables: { id: noteId },
  });

  if (loading) return <Text textAlign="center" mt={4}>Loading...</Text>;
  if (error) return <Text textAlign="center" mt={4}>Error: {error.message}</Text>;

  const note = data?.getNote;

  if (!note) {
    return <Text textAlign="center" mt={4}>Note not found</Text>;
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
      <Container maxW="lg">
        <Box
          bg={boxBg}
          borderRadius="xl"
          boxShadow="2xl"
          p={8}
          w="full"
        >
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Heading color={headingColor}>{note.title}</Heading>
            <Button
              colorScheme="blue"
              onClick={() => router.push('/notes')}
              size="sm"
            >
              Kembali
            </Button>
          </Flex>
          <NoteDetail
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NoteDetailPage;
