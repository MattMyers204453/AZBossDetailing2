import ImageGallery from 'react-image-gallery';
import React, { Component } from 'react';
import './Gallery.scss';

const images = [
    {
        original: 'https://i.ibb.co/j5cxRsY/img-0159-1.jpg',
        thumbnail: 'https://i.ibb.co/j5cxRsY/img-0159-1.jpg',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
    },
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