import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { thumbUpComment, thumbDownComment, removeComment } from './actions'

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment }) =>

    <li className="comments">
        {text} <p><span className="votes">number of votes: {votes}</span></p>
        <p className="buttons"><button className="up" onClick={() => thumbUpComment(id)}>Thumb up</button>
            <button className="down" onClick={() => thumbDownComment(id)}>Thumb down</button>
            <button className="remove" onClick={() => removeComment(id)}>Remove</button></p>
    </li>;

const mapDispatchToProps = dispatch => ({
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id)),
    removeComment: (id) => dispatch(removeComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);