import React from "react";
import useInView from "@/hooks/useInView";
import styles from "./AnimateOnScroll.module.css";

const baseClassMap = {
  fadeUp: styles.baseFadeUp,
  fadeDown: styles.baseFadeDown,
  fadeLeft: styles.baseFadeLeft,
  fadeRight: styles.baseFadeRight,
  scaleUp: styles.baseScaleUp,
  zoomIn: styles.baseZoomIn,
  flipIn: styles.baseFlipIn,
  riseIn: styles.baseRiseIn,
};

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

  const baseClass = baseClassMap[animation] || styles.baseFadeUp;
  const animClass = styles[animation] || styles.fadeUp;

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${isInView ? animClass : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default AnimateOnScroll;
