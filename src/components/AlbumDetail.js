import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	return (
    <Card>
      <CardItem>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: album.thumbnail_image }} 
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image
          style={styles.albumImage}
          source={{ uri: album.image }}
        />
      </CardItem>
      <CardItem>
        <Button
          onButtonPress={()=>Linking.openURL(album.url)}>
          Buy now
        </Button>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContent: {
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  image: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumImage: {
    height: 300,
    flex: 1,
  }
};

export default AlbumDetail;
