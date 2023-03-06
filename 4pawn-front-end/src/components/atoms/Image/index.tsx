import React from "react";
import PropsImage from './types/index';

const Image: React.FC<PropsImage> = ({src,width,height,alt}: PropsImage) => {
  return(
    <div>
      <img 
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
}

export default Image;