import gql from 'graphql-tag';

export const gameFragment = gql`
  fragment GameFields on Game {
    id
    gameCode
    state
    players {
      username
      character
      state
      isMe
      id
      currentLocation {
        ...LocationFields
      }
    }
    me {
      currentLocation {
        ...LocationFields
      }
    }
  }

  fragment LocationFields on PlayerLocation {
    location {
      x
      y
      z
    }
    heading
  }
`;
