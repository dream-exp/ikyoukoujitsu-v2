const img = (props: any) => {
  return (
    <img {...props} loading="lazy" className="animate-fade-in" />
    // <Image
    //   {...props}
    //   fill
    //   placeholder="blur"
    //   quality={100}
    //   className="object-cover !relative w-auto animate-fade-in"
    //   blurDataURL={props.src}
    // />
  );
};

const components = { img };
export default components;
