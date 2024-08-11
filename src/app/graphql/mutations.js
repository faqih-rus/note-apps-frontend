import { gql } from '@apollo/client';

export const ADD_NOTE = gql`
  mutation AddNote($title: String!, $content: String!) {
    addNote(title: $title, content: $content) {
      id
      title
      content
      created_at
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($id: ID!, $title: String!, $content: String!) {
    updateNote(id: $id, title: $title, content: $content) {
      id
      title
      content
      created_at
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
      title
      content
      created_at
    }
  }
`;