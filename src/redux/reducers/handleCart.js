const cart = [];


const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
      case "ADDITEM":
        //CHECK IF PRODUCT IS ALREADY EXIST
        const exist = state.find((x) => x.id === product.id);
        if (exist) {
          //Increase the Quantity
          return state.map((x) =>
            x.id === product.id ? { ...exist, qty: x.qty + 1 } : x
          );
        } else {
          const product = action.payload;
          return [
            ...state,
            {
              ...product,
              qty: 1,
            },
          ];
        }

      case "DELITEM":
        const exist1 = state.find((x) => x.id === product.id);
        if (exist1.qty === 1) {
          return state.filter((x) => x.id !== exist1.id);
        } else {
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
      case "DELCartProduct":
        const exist2 = state.find((x) => x.id === product.id);
        if (exist2) {
          return state.filter((x) => x.id !== exist2.id);
        } else {
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
      case "ClearCart":
        return {
            ...state,
            handleCart: cart
        }

      default:
        return state;
    }
}

export default handleCart;