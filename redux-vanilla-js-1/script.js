// ACTION
const BUY_PHONE = 'BUY_PHONE';

function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

// STATE
const initialState = {
    phones: 5
}

// REDUCER
// (prevState, action) => newState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,
                phones: state.phones - 1
            };
        default: 
            return state;
    }
}

// STORE
const store = Redux.createStore(reducer);

const availablePhones = document.getElementById('count');
/**
 * store.getState() nous donne accès au state que nous avons dans le store
 * Dans ce state, on peut accéder à la propriété "phones"
 */
availablePhones.innerHTML = store.getState().phones;

document.getElementById('buy-phone').addEventListener('click', function() {
    store.dispatch(buyPhone());
});

store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phones;
});

