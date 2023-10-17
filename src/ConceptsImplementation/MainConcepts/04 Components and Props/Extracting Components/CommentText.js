import React from 'react'

function CommentText(props) {
  return (
    <div>
      <div className='comment-text'>
{props.text}
      </div>
    </div>
  )
}

export default CommentText
