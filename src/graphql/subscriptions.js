// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateRoom = `subscription OnCreateRoom {
  onCreateRoom {
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
export const onUpdateRoom = `subscription OnUpdateRoom {
  onUpdateRoom {
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
export const onDeleteRoom = `subscription OnDeleteRoom {
  onDeleteRoom {
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
export const onCreateRequests = `subscription OnCreateRequests {
  onCreateRequests {
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
export const onUpdateRequests = `subscription OnUpdateRequests {
  onUpdateRequests {
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
export const onDeleteRequests = `subscription OnDeleteRequests {
  onDeleteRequests {
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
