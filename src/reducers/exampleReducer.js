const initialstate = {
    number: 0,
    name:''
}
const exampleReducer = (state = initialstate, action) => {
    
    switch (action.type) {
        case 'INCREMENT': {
            state.number += 1;
            return { ...state }
            break;
        }
        case 'INCREMENT_ASYNC': {
            state.number += 1;
            state.name = action.name
            return { ...state }
            break;
        }

        default: return state;
    }
}

export default exampleReducer;