import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import './Gallery.scss';

const images = [
    {
        original: 'https://i.ibb.co/hDbw4Hr/merge1.jpg',
        thumbnail: 'https://i.ibb.co/hDbw4Hr/merge1.jpg',
    },
    {
        original: 'https://i.ibb.co/ZK8sBRh/merge2.jpg',
        thumbnail: 'https://i.ibb.co/ZK8sBRh/merge2.jpg',
    },
    {
        original: 'https://i.ibb.co/WsGpZxD/IMG-0161-1.jpg',
        thumbnail: 'https://i.ibb.co/WsGpZxD/IMG-0161-1.jpg',
    },
    {
        original: 'https://i.ibb.co/DYKhD5B/merge3.jpg',
        thumbnail: 'https://i.ibb.co/DYKhD5B/merge3.jpg',
    },
    {
        original: 'https://i.ibb.co/ScZhxD1/merge4.jpg',
        thumbnail: 'https://i.ibb.co/ScZhxD1/merge4.jpg',
    },
    {
        original: 'https://i.ibb.co/F0tLvNP/merge5.jpg',
        thumbnail: 'https://i.ibb.co/F0tLvNP/merge5.jpg',
    }
];

class Gallery extends Component {
    render() {
        return <ImageGallery items={images}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false} />;
    }
}

export default Gallery;