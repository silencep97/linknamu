import Image from "next/image";
import type { Profile as ProfileType } from "@/data/profile";

export default function Profile({ name, bio, avatar }: ProfileType) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-zinc-800"
      />
      <h1 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
