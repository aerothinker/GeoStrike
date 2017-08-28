import gql from 'graphql-tag';

export const schema = gql`
  type Player {
    id: String!
    username: String!
    character: String!
    state: PlayerState!
    isMe: Boolean!
    currentLocation: PlayerLocation!
    team: Team!
  }

  enum Team {
    BLUE,
    RED,
  }

  enum PlayerState {
    WAITING,
    READY,
    ALIVE,
    IN_BUILDING,
    DEAD,
  }

  type Location {
    x: Float!
    y: Float!
    z: Float!
  }

  type PlayerLocation {
    location: Location!
    heading: Float!
  }
`;
