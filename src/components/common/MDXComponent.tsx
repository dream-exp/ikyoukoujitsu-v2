import Image from "next/image";

const img = (props: any) => {
  return (
    // <img
    //   {...props}
    //   loading="lazy"
    //   className="animate-fade-in aspect-auto h-auto"
    // />
    <Image
      {...props}
      width={2000}
      height={1333}
      className="object-cover !relative w-auto animate-fade-in"
    />
  );
};

const components = { img };
export default components;
