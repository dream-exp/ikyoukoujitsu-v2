import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

import getFormattedDate from "@/utils/getFormattedDate";

import Footer from "./Footer";
import components from "./MDXComponent";

type Props = {
  children: React.ReactNode;
  meta: { date: string; Title: string; share_img: string; slug: string };
};

const PostLayout: React.FC<Props> = (props) => {
  const { children, meta } = props;
  const [isVisible, setIsVisible] = useState(false);

  const date = new Date(meta.date);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // 表示までの遅延時間（ミリ秒）

    return () => clearTimeout(timer); // コンポーネントがアンマウントされるときにタイマーをクリアする
  }, []);

  return (
    <MDXProvider components={components}>
      <div className="w-screen flex flex-col items-center">
        <div className="w-[100%] max-w-[1200px] flex flex-col items-center gap-20 my-[100px]">
          <Link href="/">
            <h1 className="text-3xl font-thin tracking-[0.7em] pl-6 transition-all hover:opacity-70">
              異郷好実
            </h1>
          </Link>
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-3">
              <span className="text-sm tracking-[0.1em] text-neutral-400">
                {getFormattedDate(new Date(meta.date))}
              </span>
              <h2 className="w-full ext-xl font-bold">{meta.Title}</h2>
            </div>
            <div className="article-content flex flex-col items-center">
              <Suspense fallback={<>読み込み中</>}>{children}</Suspense>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </MDXProvider>
  );
};

export default PostLayout;
