import { useState } from "react";
import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

const NoteForm = ({ onSubmit, initialData = { title: '', body: '' } }) => {
  const [title, setTitle] = useState(initialData.title);
  const [body, setBody] = useState(initialData.body);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, body });
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          isRequired
          focusBorderColor="teal.500"
        />
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Deskripsi"
          isRequired
          focusBorderColor="teal.500"
          minH="200px"
        />
        <Button 
          type="submit" 
          colorScheme="blue" 
          size="lg" 
          w="full" 
          borderRadius="full" 
          boxShadow="md"
        >
          Save
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => router.push('/')}
          size="lg"
          w="full"
          borderRadius="full"
          boxShadow="md"
          mt={2}
        >
          Kembali
        </Button>
      </VStack>
    </Box>
  );
};

export default NoteForm;
