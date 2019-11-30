// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRoom = `mutation CreateRoom($input: CreateRoomInput!) {
  createRoom(input: $input) {
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
export const updateRoom = `mutation UpdateRoom($input: UpdateRoomInput!) {
  updateRoom(input: $input) {
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
export const deleteRoom = `mutation DeleteRoom($input: DeleteRoomInput!) {
  deleteRoom(input: $input) {
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
export const createRequests = `mutation CreateRequests($input: CreateRequestsInput!) {
  createRequests(input: $input) {
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
export const updateRequests = `mutation UpdateRequests($input: UpdateRequestsInput!) {
  updateRequests(input: $input) {
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
export const deleteRequests = `mutation DeleteRequests($input: DeleteRequestsInput!) {
  deleteRequests(input: $input) {
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
