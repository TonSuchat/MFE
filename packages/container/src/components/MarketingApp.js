import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log("..");
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
