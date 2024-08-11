import { Box, Text, VStack } from "@chakra-ui/react";
import { format } from 'date-fns';

const NoteDetail = ({ title, body, createdAt }) => {
  let formattedDate = '';

  if (createdAt) {
    const date = new Date(createdAt);
    if (!isNaN(date.getTime())) {
      formattedDate = format(date, 'dd MMM yyyy');
    } else {
      formattedDate = 'Invalid Date';
    }
  }

  return (
    <VStack align="start" spacing={4}>
      {formattedDate && (
        <Text fontSize="sm" color="gray.500">{formattedDate}</Text>
      )}
      <Text>{body}</Text>
    </VStack>
  );
};

export default NoteDetail;
