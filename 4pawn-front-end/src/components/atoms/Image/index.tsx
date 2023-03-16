import React from "react";
import PropsImage from './types/index';

const Image: React.FC<PropsImage> = (
  {src,width,height,alt,className}: PropsImage) => {
  return(
      <img 
        src={src}
        className={className}
        width={width}
        height={height}
        alt={alt}
      />
  );
}

export default Image;