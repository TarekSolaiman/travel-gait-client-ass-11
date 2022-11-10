import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Travel Gait - ${title}`;
  }, [title]);
};

export default useTitle;
