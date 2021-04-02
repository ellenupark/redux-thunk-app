export const changeColor = () => {
    return(dispatch) => {
        return fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(color => dispatch({ type: "CHANGE_COLOR", payload: color.message }))
    }
}