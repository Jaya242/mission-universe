import Section from './Section.jsx'

const entries = [
  {
    when: 'Jun 2026 — present',
    where: 'Robotics Team · MNNIT',
    role: 'Perception & Autonomy — Self-Driving Car Project',
    notes: 'Perception for the club\'s self-driving car — the one place my mechanical degree finally shakes hands with the AI I ship.'
  },
  {
    when: 'Jan 2026 — present',
    where: 'Taekwondo Club, MNNIT Allahabad',
    role: 'Coordinator',
    notes: 'Leading practice and club logistics on top of academics.'
  },
  {
    when: 'Feb — Nov 2025',
    where: 'E-Cell MNNIT',
    role: 'Networking Team Member',
    notes: 'Built partnerships with startups, founders, and campus communities to onboard speakers for flagship entrepreneurship events.'
  },
  {
    when: 'Mar — May 2025',
    where: 'TEDxMNNIT 2025',
    role: 'Organising Team Member',
    notes: 'Ops and coordination for the campus TEDx flagship.'
  }
]

const awards = [
  {
    year: '2025',
    label: '1st Prize — Marketing Mavericks',
    where: 'GTM Strategy Competition · Renaissance 2025, E-Cell MNNIT',
    notes: 'Pitched a GTM strategy covering segmentation, pricing, and customer acquisition vs. competing student teams before industry judges.'
  },
  {
    year: '2025',
    label: 'Silver Medal — Taekwondo',
    where: 'Spardha 2025, Annual Sports Fest · IIT (BHU) Varanasi',
    notes: ''
  }
]

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Trajectory"
      title="Where I've been orbiting"
      sub="Campus roles, leadership, and things I've won along the way."
    >
      <div className="grid md:grid-cols-2 gap-14">
        <div>
          <div className="eyebrow text-brand-blue mb-6">Roles</div>
          <ol className="relative border-l border-white/10 space-y-8 pl-6">
            {entries.map((e, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-brand-blue" />
                <div className="eyebrow-sm text-brand-blue">{e.when}</div>
                <div className="font-head text-lg md:text-xl mt-1 font-bold">{e.where}</div>
                <div className="text-dim text-sm mt-1">{e.role}</div>
                {e.notes && <p className="text-dim mt-3 leading-relaxed max-w-md text-sm">{e.notes}</p>}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="eyebrow text-brand-purple mb-6">Achievements</div>
          <div className="space-y-5">
            {awards.map((a, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-brand-purple/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="font-head text-lg font-bold text-white">{a.label}</div>
                    <div className="text-dim text-sm">{a.where}</div>
                  </div>
                  <div className="ml-auto eyebrow-sm text-brand-purple">{a.year}</div>
                </div>
                {a.notes && <p className="text-dim mt-3 text-sm leading-relaxed">{a.notes}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
