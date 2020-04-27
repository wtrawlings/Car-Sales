//these are the two actions to make
//this is an example of action creator functions
//make a basic constant with a string inside it
//then have that return your TYPE and PAYLOAD
export const ADD_FEATURES  = "ADD_FEATURES";

export const addFeatures = item => {
    return {
        type: ADD_FEATURES,
        payload: item
    }
};

export const REMOVE_FEATURES = "REMOVE_FEATURES";

export const removeFeatures = item => {
    return {
        type: REMOVE_FEATURES,
        payload: item
    }
};