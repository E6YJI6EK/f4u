import { MutableRefObject } from "react";

export function scrollTo(ref:MutableRefObject<any>) {
    if (ref.current != null) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }