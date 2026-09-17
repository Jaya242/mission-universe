import Section from './Section.jsx'

const experience = [
  {
    when: 'Sep — Oct 2026',
    where: 'NLLG · University of Technology Nuremberg',
    role: 'Research Intern — advised by Prof. Steffen Eger, supervised by Christoph Leiter (remote)',
    notes: 'Analysis paper on evaluation practice in generative-AI research — quantifying how often central claims rest on LLM-as-judge scores vs. BLEU/ROUGE, BERTScore/SBERT, or COMET/PickScore, and what fraction validate against human annotation. Running the related-work analysis for the survey.'
  }
]

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
      sub="Research, campus roles, leadership, and things I've won along the way."
      subClassName="font-head italic text-base md:text-lg mt-5 max-w-xl mx-auto leading-relaxed text-white/60 font-light tracking-wide"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
        <div>
          <div className="font-head font-semibold uppercase tracking-[0.2em] text-brand-pink mb-8 text-lg md:text-xl">Experience</div>
          <ol className="relative border-l border-white/10 space-y-8 pl-6">
            {experience.map((e, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-brand-pink" />
                <div className="font-head font-semibold uppercase tracking-[0.18em] text-brand-pink text-sm md:text-base">{e.when}</div>
                <div className="font-head text-2xl md:text-3xl mt-2 font-bold">{e.where}</div>
                <div className="text-dim text-lg mt-2">{e.role}</div>
                {e.notes && <p className="text-dim mt-4 leading-relaxed max-w-md text-lg">{e.notes}</p>}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="font-head font-semibold uppercase tracking-[0.2em] text-brand-blue mb-8 text-lg md:text-xl">Roles</div>
          <ol className="relative border-l border-white/10 space-y-8 pl-6">
            {entries.map((e, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-brand-blue" />
                <div className="font-head font-semibold uppercase tracking-[0.18em] text-brand-blue text-sm md:text-base">{e.when}</div>
                <div className="font-head text-2xl md:text-3xl mt-2 font-bold">{e.where}</div>
                <div className="text-dim text-lg mt-2">{e.role}</div>
                {e.notes && <p className="text-dim mt-4 leading-relaxed max-w-md text-lg">{e.notes}</p>}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="font-head font-semibold uppercase tracking-[0.2em] text-brand-purple mb-8 text-lg md:text-xl">Achievements</div>
          <div className="space-y-5">
            {awards.map((a, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 hover:border-brand-purple/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-0.5">🏆</span>
                  <div>
                    <div className="font-head text-2xl md:text-3xl font-bold text-white leading-tight">{a.label}</div>
                    <div className="text-dim text-lg mt-1.5">{a.where}</div>
                  </div>
                  <div className="ml-auto font-head font-semibold uppercase tracking-[0.18em] text-brand-purple text-sm md:text-base">{a.year}</div>
                </div>
                {a.notes && <p className="text-dim mt-4 text-lg leading-relaxed">{a.notes}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
