import React from "react";


function useLocalStorage(itemName, initialValue) {

    //Estado inicial
    const [item, setItem] = React.useState(initialValue);

    //Estado de carga
    const [loading, setLoading] = React.useState(true);
    //Estdo de error
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;

                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);

            } catch(error) {
                setLoading(false);
                setError(true);
            }

        }, 2000);


    }, [itemName, initialValue]); // Agregar itemName e initialValue como dependencias);






    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage }