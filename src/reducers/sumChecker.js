const sumCheckReducer = (state = 0, action) => { 
    switch(action.type) { 
        case "RIGHT_ANSWER": return state + 1
        case "WRONG_ANSWER": return state - 1
        default: return state
    }
}

export default sumCheckReducer; 