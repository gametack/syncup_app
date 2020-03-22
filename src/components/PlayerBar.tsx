import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  Surface,
  Subheading,
  Caption,
  IconButton,
  ActivityIndicator,
} from 'react-native-paper';
import { DefaultImage } from './DefaultImage';
import { useStores } from "../hooks/use-stores";

export const PlayerBar = () => {
  const { playerStore } = useStores();
  const cover = null
  if (playerStore.active) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{ height: 60, width: '100%' }}
      // onPress={navigateToPlayer}
      >
        <Surface style={styles.playBar}>
          {cover ? (
            <FastImage source={{ uri: cover }} style={styles.artwork} />
          ) : (
              <DefaultImage style={styles.artwork} />
            )}
          <View style={styles.textContainer}>
            <Subheading numberOfLines={1} style={{ margin: 0 }}>
              {"testtitle"}
            </Subheading>
            <Caption numberOfLines={1} style={{ margin: 0 }}>
              {"testartist" || "testalbum"}
            </Caption>
          </View>
          <View style={styles.iconContainer}>
            <IconButton
              icon={playerStore.playing ? 'pause' : 'play'}
              animated
              size={34}
              onPress={playerStore.togglePlayback}
              style={{ margin: 0, padding: 0 }}
            />
          </View>
        </Surface>
      </TouchableOpacity>
    );
  }
  return false;

};


const styles = StyleSheet.create({
  artwork: {
    backgroundColor: '#d7d1c9',
    borderRadius: 4,
    height: 50,
    width: 50,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 50,
  },
  playBar: {
    alignItems: 'center',
    elevation: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});
