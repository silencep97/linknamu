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

export const profile: Profile = {
  name: "kkw-kwkim",
  bio: "풀스택 개발자 | 요즘에는 ai 개발에 관심이 많아요",
  // 112x112 = Profile 컴포넌트의 표시 크기(h-28 w-28). SVG 대신 PNG로 요청해 next/image에서 바로 사용
  avatar: "https://placehold.co/112x112/orange/white.png",
};

// TODO: 보여주기용 더미 링크. 실제 URL로 교체 예정
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com", emoji: "💻" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com", emoji: "👔" },
  { id: "blog", title: "Blog", url: "https://velog.io", emoji: "📝" },
];
