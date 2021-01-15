export function increment(i) {
    console.log(`ACTION: Action creator function \'increment\' called, calling reducer \'INCREMENT_LIKES\'. Passing on photo index: ${i}`)
    return {
        type: 'INCREMENT_LIKES',
        i
    }
}

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}