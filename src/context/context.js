import React, { useState } from "react";

export const SortingOrderContext = React.createContext({
    isNewFirst: true,
    setIsNewFirst: () => {}
});

const SortingOrderContextProvider = props => {
    const [isNewFirst, setIsNewFirst] = useState(true);

    const sortingHandler = () => {
        setIsNewFirst(prevState => !prevState);
    }
    return (
        <SortingOrderContext.Provider value={{isNewFirst: isNewFirst, setIsNewFirst: sortingHandler}}>
            {props.children}
        </SortingOrderContext.Provider>
    )
}

export default SortingOrderContextProvider
