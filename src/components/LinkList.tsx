import type { LinkItem } from "@/data/profile";
import type { ClickCounts } from "@/lib/clicks";
import LinkCard from "./LinkCard";

type Props = { links: LinkItem[]; counts: ClickCounts };

export default function LinkList({ links, counts }: Props) {
  return (
    <ul className="flex flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} initialCount={counts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
