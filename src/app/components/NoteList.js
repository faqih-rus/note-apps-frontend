'use client';

import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { VStack } from "@chakra-ui/react";
import NoteItem from "./NoteItem";
import { useMutation } from '@apollo/client';
import { GET_NOTES } from '../graphql/queries';
import { DELETE_NOTE } from '../graphql/mutations';

const NoteList = ({ notes }) => {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }],
  });

  const handleDelete = async (id) => {
    try {
      await deleteNote({ variables: { id } });
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      {notes.map((note) => {
        const date = new Date(note.createdAt);
        let formattedDate = 'Invalid Date';

        if (!isNaN(date.getTime())) {
          formattedDate = format(date, 'dd MMM yyyy', { locale: id });
        }

        return (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            createdAt={formattedDate}
            onDelete={() => handleDelete(note.id)}
          />
        );
      })}
    </VStack>
  );
};

export default NoteList;
