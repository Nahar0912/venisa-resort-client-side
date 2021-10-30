import React from 'react';

const Video = () => {
    return (
        <div className='my-5'>
            <h2 className='my-5 text-secondary'>Our Video</h2>
            <span className='mx-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0VIhza1IyE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            <span>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4yLvHcjWaMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
        </div>
    );
};

export default Video;