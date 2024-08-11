'use client';

import { Box, Heading } from "@chakra-ui/react";
import NoteForm from "../../../../components/NoteForm";
import { useQuery, useMutation } from '@apollo/client';
import { GET_NOTE_BY_ID } from '../../../graphql/queries';
import { UPDATE_NOTE } from '../../../graphql/mutations';
import { useRouter } from 'next/router';

const EditNotePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_NOTE_BY_ID, {
    variables: { id },
  });

  const [updateNote] = useMutation(UPDATE_NOTE, {
    onCompleted: () => router.push(`/notes/${id}`),
  });

  const handleSubmit = (note) => {
    updateNote({
      variables: {
        id,
        title: note.title,
        content: note.content,
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box p={4}>
      <Heading mb={4}>Ubah Catatan</Heading>
      <NoteForm onSubmit={handleSubmit} initialData={data.getNote} />
    </Box>
  );
};

export default EditNotePage;
