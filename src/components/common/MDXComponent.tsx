import Image from "next/image";

const img = (props: any) => {
  return (
    // <img
    //   {...props}
    //   loading="lazy"
    //   className="animate-fade-in object-contain"
    //   placeholder="empty"
    // />
    <Image
      {...props}
      className="object-contain !relative w-auto h-auto animate-fade-in"
      fill
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjuHXr1n8ACK4DjtGRIJ0AAAAASUVORK5CYII="
      unoptimized
    />
  );
};

const components = { img };
export default components;
