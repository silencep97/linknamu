export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string;
};

// TODO: 보여주기용 더미값. 실제 프로필 내용으로 교체 예정
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatar: "/avatar.svg",
};

// TODO: 보여주기용 더미 링크. 실제 URL로 교체 예정
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com", emoji: "💻" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com", emoji: "👔" },
  { id: "blog", title: "Blog", url: "https://velog.io", emoji: "📝" },
];
