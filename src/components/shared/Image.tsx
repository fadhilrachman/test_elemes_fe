import { useState } from "react";
import clsx from "clsx";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  rounded?: string;
};

const Image = ({ src, alt, className, rounded, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  const imgLink = import.meta.env.VITE_IMG_LINK;
  return (
    <div
      className={clsx("overflow-hidden", isLoading && "animate-pulse", rounded)}
    >
      <img
        src={imgLink + (src || "/rOTXYy5ScOHdaC2YMQowVwQex5s.jpg")}
        alt={alt}
        className={clsx(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className
        )}
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default Image;
