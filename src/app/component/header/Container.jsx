"use client"
import React, { useEffect, useRef } from "react";
import { useContainerSize } from "@/app/zustand/UseContainerSiza";
function Container({ children }) {
  const containerRef = useRef(null)
  const {resizeHandler } = useContainerSize()
  useEffect(() => {
    const handleResize = () => {
      if(containerRef.current) {
        const width = containerRef.current.clientWidth
        resizeHandler(width)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [resizeHandler])
  return <div ref={containerRef} className="2xl:container 2xl:mx-auto h-full">{children}</div>;
}
export default Container;