import { DEMO } from '@/lib/content/site'

export function DemoBanner() {
  return (
    <div
      role="status"
      className="bg-espresso text-cream text-center text-xs sm:text-sm py-2 px-4 leading-snug"
    >
      <span className="font-semibold">{DEMO.label}</span>
      <span className="hidden sm:inline"> — </span>
      <span className="block sm:inline text-cream/90">{DEMO.disclaimer}</span>
    </div>
  )
}
