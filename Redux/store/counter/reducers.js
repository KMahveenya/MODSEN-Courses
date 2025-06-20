const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ONE':
            return { 
                counter: state.counter + 1
            }
        case 'SUBSTRACT_ONE':
            return {
                counter: state.counter - 1
            }
        case 'CLEAR':
            return {
                counter: 0
            }
        default:
            return state;
    }
};

export default counterReducer