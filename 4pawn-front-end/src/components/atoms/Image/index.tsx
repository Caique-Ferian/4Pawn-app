import React from "react";
import IPropsImage from './types/index';

const Image: React.FC<IPropsImage> = ({src,width,height,alt}: IPropsImage) => {
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