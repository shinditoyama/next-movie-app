import Link from "next/link";
import Image from "next/image";
import { IMovie } from "../types/Typings";
import { IMAGE_URL } from "../utils/constants";

interface Props {
  result: IMovie;
  type: string;
}

export default function Thumbnail({ result, type }: Props) {
  return (
    <Link href={type === "movie" ? `/movie/${result.id}` : `/tv/${result.id}`}>
      <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <Image
          src={`${IMAGE_URL}${result.poster_path}`}
          layout="fill"
          className="object-cover rounded-sm md:rounded"
        />
      </div>
    </Link>
  );
}
