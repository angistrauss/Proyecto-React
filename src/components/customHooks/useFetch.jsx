import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
