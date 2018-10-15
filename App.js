import React, { Component } from 'react';
import { View } from 'react-native';
import { Props } from './Props';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

