import { gql } from '@apollo/client';

// Query untuk mendapatkan semua catatan
export const GET_NOTES = gql`
  query GetNotes {
    getNotes {
      id
      title
      body
      createdAt 
    }
  }
`;

export const GET_NOTE_BY_ID = gql`
  query GetNoteById($id: ID!) {
    getNote(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`;
