import React from 'react';
import { connect } from 'react-redux';
import Comment from './CommentContainer';

const CommentsList = ({ comments }) =>
    <ul>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);