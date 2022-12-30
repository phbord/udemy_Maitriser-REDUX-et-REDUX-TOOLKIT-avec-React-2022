const BUY_PHONE = 'BUY_PHONE';
const BUY_TABLET = 'BUY_TABLET';

function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

function buyTablet() {
    return {
        type: BUY_TABLET
    }
}

const initialState = {
    phones: 5,
    tablet: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,
                phones: state.phones - 1
            }

        case BUY_TABLET:
            return {
                ...state,
                tablet: state.tablet - 1
            }    
    
        default: return state
    }
}

const store = Redux.createStore(reducer);

const availablePhones = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');
availablePhones.innerHTML = store.getState().phones;
availableTablet.innerHTML = store.getState().tablet;

document.getElementById('buy-phone').addEventListener('click', function() {
    store.dispatch(buyPhone());
})

document.getElementById('buy-tablet').addEventListener('click', function() {
    store.dispatch(buyTablet());
})

store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phones;
    availableTablet.innerHTML = store.getState().tablet;
})

