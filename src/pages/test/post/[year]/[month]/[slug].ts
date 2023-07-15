import NextImage from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeImageSize from "~/lib/imgSize";

const components = {
  img: (props) => <NextImage {...props} />,
};

export default function ContentPage({ mdxSource }) {
  return <MDXRemote {...mdxSource} components={components} />;
}

export async function getStaticProps() {
  const content = getContent();
  const mdxSource = serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeImageSize],
    },
  });
  return { props: { mdxSource } };
}
