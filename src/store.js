import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

/**
 * Task 5: Configuring the Redux Store
 * This store manages the global state of the application.
 * The 'cart' slice of the state is managed by the cartReducer from CartSlice.jsx.
 */
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Export the store to be used by the <Provider> in main.jsx or App.jsx
export default store;

/* import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store */