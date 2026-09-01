'use client'

const ITEMS = [
  'Ahead of time',
  'Pharma-specific',
  'Decision-ready',
  'Always-on monitoring',
]

export default function TrustStrip() {
  return (
    <div className="border-y border-avz-line/60 bg-avz-surface">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-6 sm:px-10">
        {ITEMS.map((item, i) => (
          <div key={item} className="flex items-center gap-12">
            <span
              className={`text-sm font-semibold ${
                i % 2 === 0 ? 'text-avz-sky' : 'text-avz-steel'
              }`}
            >
              {item}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="hidden h-1 w-1 rounded-full bg-avz-faint sm:inline-block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
