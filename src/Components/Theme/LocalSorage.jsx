/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react"

export default function LocalSroage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;
    
        try {
          currentValue = JSON.parse(
            localStorage.getItem(key) || String(defaultValue)
          );
        } catch (error) {
          console.log(error);
          currentValue = defaultValue;
        }
    
        return currentValue;
      });
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
    
      return [value, setValue];
}


