import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
	state = {
		albums: [],
	}
	async componentDidMount() {
		const { data } = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
			console.log('cWM in AlbumList', data);
			this.setState({ albums: data });
	}
	renderAlbums() {
		const { albums } = this.state; 
		return albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}

	render() {
		const { albums } = this.state;
		console.log('albums from state', albums);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
