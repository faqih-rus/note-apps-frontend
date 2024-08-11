'use client';

import { Box, Heading, Flex, useColorModeValue, Container } from "@chakra-ui/react";
import NoteForm from "../../components/NoteForm";
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../../graphql/mutations';
import { GET_NOTES } from '../../graphql/queries';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewNotePage = () => {
  const router = useRouter();
  const [addNote, { loading, error }] = useMutation(ADD_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
    onCompleted: (data) => {
      router.push(`/notes/${data.addNote.id}`); 
    },
  });

  const bgGradient = useColorModeValue(
    "linear(to-r, teal.300, blue.400)",
    "linear(to-r, teal.700, blue.800)"
  );
  const boxBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.500", "teal.200");

  const handleAddNote = async (note) => {
    try {
      await addNote({
        variables: { title: note.title, body: note.body },
      });
    } catch (err) {
      console.error("Error adding note:", err.message);
    }
  };

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ToastContainer /> 
      <Container maxW="lg">
        <Box
          bg={boxBg}
          borderRadius="xl"
          boxShadow="2xl"
          p={8}
          w="full"
        >
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Heading color={headingColor}>Tambahkan Catatan Baru</Heading>
          </Flex>
          <NoteForm onSubmit={handleAddNote} />
        </Box>
      </Container>
    </Box>
  );
};

export default NewNotePage;
