'use client';

import { Box, Text, Button, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_NOTE, GET_NOTES } from '../graphql/mutations';

const NoteItem = ({ id, title, createdAt, content, onDelete }) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const [updateNote] = useMutation(UPDATE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });

  const handleEdit = async () => {
    try {
      await updateNote({
        variables: { id, title: updatedTitle, content: updatedContent },
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleClick = () => {
    if (id && !isEditing) {
      router.push(`/notes/${id}`);
    }
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={2}
      _hover={{ bg: "gray.100", cursor: "pointer" }}
      onClick={handleClick}
    >
      {isEditing ? (
        <>
          <Input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            mb={2}
          />
          <Textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            mb={2}
          />
          <Button colorScheme="blue" mr={2} onClick={handleEdit}>
            Save
          </Button>
          <Button onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Text fontWeight="bold">{title}</Text>
          <Text fontSize="sm" color="gray.500">{createdAt}</Text>
          <Text mt={2}>{content}</Text>
          <Button
            colorScheme="red"
            mt={2}
            onClick={(e) => {
              e.stopPropagation();
              if (id && onDelete) {
                onDelete(id);
              }
            }}
          >
            Delete
          </Button>
          <Button
            colorScheme="teal"
            mt={2}
            ml={2}
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            Edit
          </Button>
        </>
      )}
    </Box>
  );
};

export default NoteItem;
