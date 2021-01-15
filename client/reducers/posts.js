function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const { i, type } = action;
            console.log(`REDUCER: In reducer '${type}', received index: ${i}, current likes ${state[i].likes}, incrementing to ${state[i].likes + 1}, return state`)
            return [
                ...state.slice(0, i),
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1)
            ]
        default:
            return state;
    }
}

export default posts;
