import { useEffect } from "react";

export const useKey = (callback) => {
  useEffect(() => {
    document.addEventListener("keypress", callback);

    return () => {
      document.removeEventListener("keypress", callback);
    };
  }, [callback]);
};
