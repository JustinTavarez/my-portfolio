import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView]. `inView` flips to true once the element
 * enters the viewport, then stays true (fires only once).
 */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  // If IntersectionObserver isn't supported, show content immediately
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default useInView;
