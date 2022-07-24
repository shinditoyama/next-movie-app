import { useState, useEffect } from "react";
import Image from "next/image";
import { IMovie } from "../types/Typings";
import { IMAGE_URL } from "../utils/constants";

interface Props {
  banner: IMovie[];
}

export default function Banner({ banner }: Props) {
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    setMovie(banner[Math.floor(Math.random() * banner.length)]);
  }, [banner]);

  return (
    <div className="relative min-h-[calc(55vh)]">
      <Image
        src={`${IMAGE_URL}${movie?.backdrop_path}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
