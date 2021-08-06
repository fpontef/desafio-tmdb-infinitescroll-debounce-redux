import { useState, useCallback, useRef } from 'react';

const useInfiniteScroll = ({ loading, page = 1, hasMorePages }) => {
  const [nextPageNumber, setNextPageNumber] = useState(page);

  const observer = useRef(null);

  // loadElementRef must be a ref from a DOM obj. Example: <li>
  // If have child or something, follow the fowardRef from react docs:
  // https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
  const loadElementRef = useCallback(
    (elementNode) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        // check if list of entries[0] - we just have one entry is intersecting
        // isIntersecting = is on the page somewhere.
        if (entries[0].isIntersecting) {
          hasMorePages && setNextPageNumber((prevState) => prevState + 1);
          // hasMorePages && setNextPageNumber(page + 1);
        }
      });

      if (elementNode) observer.current.observe(elementNode);
    },
    [hasMorePages, loading]
  );

  return [loadElementRef, nextPageNumber];
};

export default useInfiniteScroll;
