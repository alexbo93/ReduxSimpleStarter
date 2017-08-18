// State argument is not application state, only the state
// this reducer is responsible for.
// If state comes as undefines it will be set as NULL.
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            break;
        default:
            return state;
    }
}
