import { DEMO } from '@/config/site-content';

/**
 * On every page, above everything: this is an unsolicited demo about a
 * fictional business. The banner is the difference between a portfolio piece
 * and something that could be mistaken for a real bakery — it stays.
 */
export function DemoBanner() {
  return (
    <div
      role="status"
      className="bg-fg-primary px-4 py-2 text-center text-xs leading-snug text-surface-page sm:text-sm"
    >
      <span className="font-semibold">{DEMO.label}</span>
      <span className="hidden sm:inline"> — </span>
      <span className="block opacity-90 sm:inline">{DEMO.disclaimer}</span>
    </div>
  );
}
