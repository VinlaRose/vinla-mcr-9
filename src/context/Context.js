import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";




const initialValue = {
    data:  [],
    filteredData: JSON.parse(localStorage.getItem("wishlist")) || [],
    wishList: JSON.parse(localStorage.getItem("wishlist")) || [],
    playList: [],
    
}

export const DataContext = createContext(initialValue);

export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialValue);
    useEffect(() => {
        localStorage.setItem("storedData", JSON.stringify(state.data));
      }, [state.data]);

      

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )   
}