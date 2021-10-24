import React from 'react';
import { PostModel } from '../models/PostModel';
import PropTypes from 'prop-types';

const Post = (prop: Prop) => {
    return (
        <div className="Post">
            <button className="Post__delete" onClick={() => prop.callBack(prop.id)}>x</button>
            <div className="Post__title">{prop.title}</div>
            <img className="Post__image" src={`https://source.unsplash.com/random?sig=${prop.id}`} alt='' />
        </div>
    )
    
}

type Prop = {
    id: number;
    title: string;
    callBack: (id: number) => void;
};

export default Post;