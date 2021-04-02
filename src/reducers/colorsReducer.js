const colors = (state = '', action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}

export default colors;