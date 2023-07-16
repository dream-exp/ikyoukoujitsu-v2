import Image from "next/image";
import { useState } from "react";

type OnLoadingCompleteResult = { naturalHeight: number; naturalWidth: number };

const img = (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [aspectRatio, setAspectRatio] = useState(0);
  const onLoadingComplete = (e: OnLoadingCompleteResult) => {
    setAspectRatio(e.naturalWidth / e.naturalHeight);
  };

  return (
    <span
      style={{
        aspectRatio: `${aspectRatio || 1.5}`,
        position: "relative",
      }}
    >
      <Image
        {...props}
        fill
        placeholder="blur"
        className="object-cover !relative w-auto"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkkAQAAB8AG7jymN8AAAAASUVORK5CYII="
        onLoadingComplete={(e) => onLoadingComplete(e)}
      />
    </span>
  );
};

const components = { img };
export default components;
