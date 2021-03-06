export default (state = {
        pricing: [],
        fetching: false,
        fetched: false,
        error: null
    }, action) => {

    switch(action.type){
        case "FETCH_PRICING": {
            return {
                ...state,
                fetching: true
            }
            break;
        }
        case "FETCH_PRICING_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        }
        case "FETCH_PRICING_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                pricing: action.payload.data
            }
            break;
        }
        case "ADD_PRICING": {
            return {
                ...state,
                pricing: action.payload
            }
            break;
        }
    }

    return state;
};
