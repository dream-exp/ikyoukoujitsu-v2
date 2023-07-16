const img = (props: any) => {
  return (
    <img {...props} loading="lazy" />
    // <Image
    //   {...props}
    //   fill
    //   placeholder="blur"
    //   className="object-cover !relative w-auto"
    //   blurDataURL={props.src}
    // />
  );
};

const components = { img };
export default components;
