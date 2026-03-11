import { useEffect } from "react";

export const useTitle = (title: string): null => {
  // Side effect: update browser tab title whenever page name changes.
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);

  return null;
};
