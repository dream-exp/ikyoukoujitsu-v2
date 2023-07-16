import Image from "next/image";

const img = (props: any) => {
  return (
    <Image
      {...props}
      fill
      placeholder="blur"
      quality={100}
      className="object-cover !relative w-auto animate-fade-in"
      blurDataURL={props.src}
    />
  );
};

const components = { img };
export default components;
