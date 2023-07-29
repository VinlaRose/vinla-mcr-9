export const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        const storedData = [...state.data, action.payload];
        localStorage.setItem("storedData", JSON.stringify(storedData));
        return {
          ...state,
          data: action.payload,
          filteredData: storedData

        };
      case "ADD_TO_WISHLIST":
        if (!state.wishList.find(item => item._id === action.payload._id)) {
          // Only add if the item is not already in the wishlist
          const updatedWishlist = [...state.wishList, action.payload];
          localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
          return {
            ...state,
            wishList: updatedWishlist
          };
        }
        return state; // If the item is already in the wishlist, do not make changes
      case "REMOVE_FROM_WISHLIST":
        const updatedWishlist = state.wishList.filter(item => item._id !== action.payload._id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return {
          ...state,
          wishList: updatedWishlist
        };
    case "ADD_TO_PLAYLIST":
        const updatePlaylist = [...state.playList, action.payload];
        return {
            ...state,
            playList: updatePlaylist
          };
        
      default:
        return state;
    }
  };
  