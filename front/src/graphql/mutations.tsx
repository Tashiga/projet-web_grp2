import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      id
      username
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($conversationId: Int!, $userFromId: Int!, $userToId: Int!, $message: String!) {
    sendMessage(conversationId: $conversationId, userFromId: $userFromId, userToId: $userToId, message: $message) {
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

export const SIGNUP_MUTATION = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  }
`;