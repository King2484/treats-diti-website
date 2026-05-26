export default function CloudShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" fill="white" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 25 50 A 20 20 0 0 1 25 10 A 25 25 0 0 1 70 5 A 20 20 0 0 1 80 40 A 15 15 0 0 1 75 50 Z" />
    </svg>
  );
}
