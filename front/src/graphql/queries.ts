import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      username
    }
  }
`;

export const GET_CONVERSATION_MESSAGES = gql`
  query GetConversationMessages($conversationId: Int!) {
    getConversationMessages(conversationId: $conversationId) {
      id
      userFrom {
        id
        username
      }
      content: message
      timestamp: time
    }
  }
`;
