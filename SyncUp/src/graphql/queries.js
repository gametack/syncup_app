// eslint-disable
// this is an auto generated file. This will be overwritten

export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    name
    description
    user {
      cognitoId
      id
      username
    }
  }
}
`;
export const listRooms = `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      user {
        cognitoId
        id
        username
      }
    }
    nextToken
  }
}
`;
export const getRequests = `query GetRequests($id: ID!) {
  getRequests(id: $id) {
    id
    room {
      id
      name
      description
      user {
        cognitoId
        id
        username
      }
    }
    user {
      cognitoId
      id
      username
    }
    songname
    songartist
    provider
    providerid
    likes
  }
}
`;
export const listRequestss = `query ListRequestss(
  $filter: ModelRequestsFilterInput
  $limit: Int
  $nextToken: String
) {
  listRequestss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      room {
        id
        name
        description
      }
      user {
        cognitoId
        id
        username
      }
      songname
      songartist
      provider
      providerid
      likes
    }
    nextToken
  }
}
`;
