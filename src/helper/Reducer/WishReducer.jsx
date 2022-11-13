
export const WishReducer = (state, action) => {

    switch (action.type) {
        case 'save_wish':
          return [
            ...state,
            action.payload
          ];
          
          case 'delete_wish':
            return state.filter((product) => {
              return product.id !== action.payload
            })

        default:
            return state;
    }

}

