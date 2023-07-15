import Image from "next/image";

const img = (props: any) => {
  return <Image {...props} fill className="object-contain !relative w-auto" />;
};

const components = { img };
export default components;
