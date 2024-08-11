import { Box, Text, VStack } from "@chakra-ui/react";
import { format } from 'date-fns';

const NoteDetail = ({ title, content, created_at }) => {
  let formattedDate = 'Invalid Date';

  if (created_at) {
    const date = new Date(created_at);
    if (!isNaN(date.getTime())) {
      formattedDate = format(date, 'dd MMM yyyy');
    }
  }

  return (
    <VStack align="start" spacing={4}>
      <Text fontSize="sm" color="gray.500">{formattedDate}</Text>
      <Text>{content}</Text>
    </VStack>
  );
};

export default NoteDetail;