import React from "react";


export default function useLocalStorage(itemName, initialValue) {
  const [loading, setLoadign] = React.useState(true);
  const [item, setItem] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setLoadign(false);
      setItem(parsedItem);
    }, 2000);
  });

  const saveItem = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newTodos);
  };

  return {
    item,
    saveItem,
    loading
  };
}
