import { useEffect, useState } from "react";

export function Preloader(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Hide preloader after 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  );
};


