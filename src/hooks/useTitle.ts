import { useEffect } from "react";

export const useTitle = (title: string): null => {
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);

  return null;
};
