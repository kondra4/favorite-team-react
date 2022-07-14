import React from 'react';

const PostItem = () => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>Manchester United</strong>
                <div>
                    Manchester United is team from England
                </div>
            </div>
            <div className="post__btns">
                <button>подробнее</button>
            </div>
        </div>
    );
};

export default PostItem;
