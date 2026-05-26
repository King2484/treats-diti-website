export default function CloudShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" fill="rgba(255,255,255,0.75)" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="35" rx="20" ry="15" />
      <ellipse cx="50" cy="25" rx="25" ry="20" />
      <ellipse cx="75" cy="35" rx="20" ry="15" />
    </svg>
  );
}
