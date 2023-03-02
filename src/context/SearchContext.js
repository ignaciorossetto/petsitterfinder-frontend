  import {createContext, useEffect, useReducer} from 'react'

  const INITIAL_STATE = {
    pet: undefined,
    size: undefined,
    sex: undefined,
    age: undefined
  }

  export const SearchContext = createContext(INITIAL_STATE);

  const SearchReducer = (state, action) =>{
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload
            
        case "RESET_SEARCH":
            return INITIAL_STATE
        default:
            return state
    }
  }

  export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)


    return (
        <SearchContext.Provider
        value={{
          pet: state.pet,
          size: state.size,
          sex: state.sex,
          age: state.age,
          dispatch
        }}
        >
            {children}
        </SearchContext.Provider>
    )
  }