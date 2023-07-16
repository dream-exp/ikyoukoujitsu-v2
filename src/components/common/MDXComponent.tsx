import Image from "next/image";

const img = (props: any) => {
  return (
    <Image
      {...props}
      fill
      placeholder="blur"
      className="object-cover !relative w-auto"
      blurDataURL={props.src}
    />
  );
};

const components = { img };
export default components;
