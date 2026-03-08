"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "Who can apply to pitch on Karo Pitch?", a: "Any registered startup from India can apply\u2014there\u2019s no metro bias. We especially encourage founders from tier 2, tier 3, and rural areas. Your startup should be at least at the idea-validation stage with a defined target market and a founding team in place." },
  { q: "How does the selection process work?", a: "Applications go through a 3-stage review. First, our automated system checks for completeness and basic eligibility (48hrs). Then, our curated panel of ex-founders and associates reviews shortlisted pitches (5-7 days). Finally, selected startups are invited to pitch sessions matched with the most relevant investors." },
  { q: "Is there a fee to apply or list on Karo Pitch?", a: "Listing and applying is completely free for founders. We only charge a small success fee (2%) if you close a round through investors you met on our platform. Investors pay a membership fee to access our curated deal flow." },
  { q: "What investment stages does Karo Pitch cater to?", a: "We work with startups from pre-seed all the way to Series B. Our investor network includes angel investors for early cheques (\u20B925L\u2013\u20B92Cr), seed-stage VCs (\u20B92Cr\u2013\u20B910Cr), and growth-stage funds (\u20B910Cr+). We match you with the right investor tier based on your stage." },
  { q: "Do I need a pitch deck to apply?", a: "A pitch deck is highly recommended but not mandatory at the initial application stage. You can start with a detailed startup profile, a 2-minute video pitch, and key metrics. The full pitch deck is required only if you advance to the shortlisting round." },
  { q: "How long does it take to get investor introductions?", a: "Most shortlisted startups receive their first investor introduction within 2\u20133 weeks of application. The fastest we\u2019ve seen is 4 days. The timeline depends on the number of interested investors and their availability for pitch sessions." },
  { q: "What makes Karo Pitch different from other platforms?", a: "Three things: (1) We specifically curate investors who have an appetite for non-metro startups\u2014no generalist investors who won\u2019t look at a Nagpur company. (2) We provide ongoing pitch coaching and feedback loops, not just introductions. (3) Our success rate is 3x the industry average because of quality matching." },
];

export default function FAQSection() {
  return (
    <section className="py-28 bg-[#07070a] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Questions <span className="text-[#f59e0b]">answered</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/35"
          >
            Everything you need to know about Karo Pitch.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Accordion.Root type="single" collapsible className="flex flex-col gap-2">
            {FAQS.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-white/[0.05] bg-white/[0.015] overflow-hidden group data-[state=open]:border-[#f59e0b]/15 transition-colors"
              >
                <Accordion.Trigger className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 group cursor-pointer">
                  <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-4 h-4 text-white/20 flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-[#f59e0b]" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-5 pb-4 pt-0">
                    <div className="h-px bg-white/[0.04] mb-3" />
                    <p className="text-sm text-white/35 leading-relaxed">{faq.a}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="text-white/25 text-sm">
            Still have questions?{" "}
            <button className="text-[#f59e0b] hover:text-[#fbbf24] transition-colors font-medium">
              Talk to our team &rarr;
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
