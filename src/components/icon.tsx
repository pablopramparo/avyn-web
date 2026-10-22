const paths: Record<string, React.ReactNode> = {
  music: <><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  chart: <><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="13" y="8" width="3" height="10" /><rect x="19" y="4" width="3" height="14" /></>,
  "user-off": <><path d="M16 7a4 4 0 0 0-7-2.6M8 7a4 4 0 0 0 4 4m-8 10v-2a7 7 0 0 1 10-6.3M20 21v-2a7 7 0 0 0-1-3.6M3 3l18 18" /></>,
  "cloud-off": <><path d="M7 7a6 6 0 0 1 11 3 4.5 4.5 0 0 1 2 8.5M16 19H6a4 4 0 0 1-2-7.5M3 3l18 18" /></>,
  windows: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </>
  ),
  play: <path d="m6 3 15 9-15 9Z" />,
  power: (
    <>
      <path d="M12 2v10M5 5a9 9 0 1 0 14 0" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V6a4 4 0 0 1 8 0v4m-4 4v3" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M12 17v4m-5 0h10" />
    </>
  ),
  folder: <path d="M3 5h7l2 3h9v12H3Z" />,
  wifi: (
    <>
      <path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0" />
      <circle cx="12" cy="20" r="1" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  move: (
    <>
      <rect x="3" y="5" width="14" height="13" rx="2" />
      <path d="M7 9h14m-4-4 4 4-4 4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};
export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.monitor}
    </svg>
  );
}
