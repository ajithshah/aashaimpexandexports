import React from "react";
import useInView from "@/hooks/useInView";
import styles from "./AnimateOnScroll.module.css";

const AnimateOnScroll = ({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold,
  rootMargin,
}) => {
  const [ref, isInView] = useInView({ threshold, rootMargin });

  const animClass = styles[animation] || styles.fadeUp;

  return (
    <Tag
      ref={ref}
      className={`${styles.base} ${isInView ? animClass : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
