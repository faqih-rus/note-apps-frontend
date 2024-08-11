import { useState } from "react";
import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";

const NoteForm = ({ onSubmit, initialData = { title: '', content: '' } }) => {
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
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
      </VStack>
    </Box>
  );
};

export default NoteForm;