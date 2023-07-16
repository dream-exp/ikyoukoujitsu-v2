import Image from "next/image";

const img = (props: any) => {
  return (
    <Image
      {...props}
      fill
      placeholder="blur"
      className="object-contain !relative w-auto"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkkAQAAB8AG7jymN8AAAAASUVORK5CYII="
    />
  );
};

const components = { img };
export default components;
