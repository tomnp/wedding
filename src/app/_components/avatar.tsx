import Image from "next/image";
import { getImagePath } from "@/lib/image-utils";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={getImagePath(picture)}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
        width={48}
        height={48}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
