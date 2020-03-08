import { ADD_FEATURES, REMOVE_FEATURES } from "../actions";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const carReducer = (state = initialState, actions) => {
    //and then magic happens
    switch (actions.type) {
        case ADD_FEATURES: 
            return {
                //bring in all the state with a spread operator
                ...state,
                //then detail the changes to the state you want to make
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features, 
                        actions.payload
                    ],
                    price: state.car.price + actions.payload.price
                }
            };
       case REMOVE_FEATURES: 
            return {
                //bring in all the state with a spread operator
                ...state,
                //then detail the changes to the state you want to make
                car: {
                    ...state.car,
                    features: [
                        state.car.features.filter(item => item.id !== actions.payload.id) , 
                    ],
                    price: state.car.price - actions.payload.price
                }
            }
                //this is what happens when nothing is in the case
            default: 
                return state;
    }
     
}