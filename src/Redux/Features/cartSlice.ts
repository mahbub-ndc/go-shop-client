import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a product type for better type safety
type Product = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

// Define the initial state using that type
interface CartState {
  products: Product[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number;
  grandTotal: number;
}

const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; type: string }>
    ) => {
      state.products = state.products.map((product) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity = product.quantity + 1;
            console.log(product.quantity);
          } else if (
            action.payload.type === "decrement" &&
            product.quantity > 1
          ) {
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

// Selectors for calculating derived state values
export const selectSelectedItems = (state: CartState) =>
  state.products.reduce((total, product) => total + product.quantity, 0);

export const selectTotalPrice = (state: CartState) =>
  state.products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

export const selectTax = (state: CartState) =>
  selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: CartState) =>
  selectTotalPrice(state) + selectTax(state);

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
