import Image from "next/image";

import { getWindowSize } from "@/utils/getWindowSize";

const img = (props: any) => {
  const { height, width } = getWindowSize();

  const imgWidth = width >= 1000 ? 1000 : width;
  const imgHeight = width >= 1000 ? 666 : width / 1.5;

  // console.log(imgWidth, imgHeight);

  return (
    // <img
    //   {...props}
    //   loading="lazy"
    //   className="animate-fade-in object-contain"
    //   placeholder="empty"
    // />
    <Image
      {...props}
      alt="hogehoge"
      className="object-contain animate-fade-in"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjuHXr1n8ACK4DjtGRIJ0AAAAASUVORK5CYII="
      unoptimized
    />
  );
};

const components = { img };
export default components;
