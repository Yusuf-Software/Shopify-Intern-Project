//It works
import { useEffect, useState } from "react";

const useFetch = (url = "", options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        if (isMounted) {
          setData(data);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, [url, options]);

  return { loading, error, data };
};

export default useFetch;