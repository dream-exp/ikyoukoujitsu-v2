import Image from "next/image";
import Link from "next/link";

import { MetaType } from "@/types";
import getFormattedDate from "@/utils/getFormattedDate";
import getPostURLFromMeta from "@/utils/getPostURLFromMeta";

type Props = {
  meta: MetaType;
};

const PostCard: React.FC<Props> = (props) => {
  const { meta } = props;

  return (
    <Link href={getPostURLFromMeta(meta)}>
      <div className="w-[350px] flex flex-col gap-2 tracking-[0.08em] cursor-pointer hover:opacity-70 transition-all">
        <Image
          src={meta.share_img}
          alt={meta.Title}
          width={350}
          height={350 / 1.5}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjuHXr1n8ACK4DjtGRIJ0AAAAASUVORK5CYII="
          unoptimized
        />
        <div className="flex flex-col gap-1">
          <span className="text-neutral-400 text-xs">
            {getFormattedDate(new Date(meta.date))}
          </span>
          <span className="text-neutral-500 text-sm font-semibold">
            {meta.Title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
