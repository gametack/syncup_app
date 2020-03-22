import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { useNavigation } from '@react-navigation/core';

import {
  playTrack,
  pauseTrack,
  loadTrack,
  destroyTrackPlayer,
  setUpTrackPlayer,
} from '../actions/playerState';
import { PlayerBar } from '../components/PlayerBar';
import { inject, observer } from 'mobx-react';
import { useStores } from "../hooks/use-stores";

export const PlayerBarContainer = () => {
  const navigation = useNavigation();
  const {playerStore } = useStores();
  const active = useSelector((state: any) => state.playerState.active);
  const status = useSelector((state: any) => state.playerState.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUpTrackPlayer());
    if (!isEmpty(active)) {
      dispatch(loadTrack(active, false));
    }
    return () => {
      dispatch(destroyTrackPlayer());
    };
  }, []);

  const togglePlayback = () => {
    if (status === 'playing') {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  const navigateToPlayer = React.useMemo(
    () => () => navigation.navigate('Player'),
    [navigation],
  );

  if (!isEmpty(active)) {
    return (
      <PlayerBar
        active={active}
        status={status}
        togglePlayback={togglePlayback}
        navigateToPlayer={navigateToPlayer}
      />
    );
  }
  return false;
};
