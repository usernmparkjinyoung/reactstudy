import React, { useCallback } from 'react'
import CommentItem from './CommentItem'
import "./CommentItem.css"

export default function Comments({commentList}) {
    const handleChange = useCallback(() => {
        console.log("눌림");
    }, []);

    return (
        <div>
            {
                commentList.map(comment => <CommentItem
                        key={comment.title}
                        title={comment.title}
                        content={comment.content}
                        likes={comment.likes}
                        onClick={handleChange}
                    />
                )
            }
        </div>
    )
}
