import { FormEvent } from "react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { Mail, Github, Linkedin, ArrowUpRight, Terminal } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Connection request transmitted! (Simulated contact action)");
  };

  return (
    <SectionWrapper
      id="contact"
      title="05. Establish Contact"
      subtitle="Operational inquiry channels open for frontend, collaborative development, or full-stack integrations."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12" id="contact-container">
        {/* Call To Action Narrative */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-slate-gray font-mono text-xs">
            <Terminal size={14} className="text-ink-black" />
            <span>SOCKET_INFO // MAIL_INBOX</span>
          </div>
          
          <h3 className="font-display font-black text-3xl text-ink-black uppercase tracking-tight leading-none">
            Let's build reliable platforms.
          </h3>
          
          <p className="font-sans text-sm text-charcoal leading-relaxed">
            I am actively seeking internships, junior roles, and open-source project contributions. If you value robust workflows, detailed commit histories, comprehensive PR descriptions, and clean design, we should work together.
          </p>

          <div className="space-y-3 pt-4 border-t border-light-gray/60">
            <a
              href="mailto:jayr@operator.net"
              className="flex items-center justify-between p-3 bg-off-white border border-light-gray hover:border-ink-black hover:bg-pure-white transition-all text-xs font-mono font-bold text-ink-black uppercase"
              id="contact-email-action"
            >
              <span className="flex items-center gap-2">
                <Mail size={14} />
                <span>jayr@operator.net</span>
              </span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 bg-off-white border border-light-gray hover:border-ink-black hover:bg-pure-white transition-all text-xs font-mono font-bold text-ink-black uppercase"
              id="contact-github-action"
            >
              <span className="flex items-center gap-2">
                <Github size={14} />
                <span>github.com/jayr</span>
              </span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 bg-off-white border border-light-gray hover:border-ink-black hover:bg-pure-white transition-all text-xs font-mono font-bold text-ink-black uppercase"
              id="contact-linkedin-action"
            >
              <span className="flex items-center gap-2">
                <Linkedin size={14} />
                <span>linkedin.com/in/jayr</span>
              </span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Contact Form Mockup */}
        <div className="md:col-span-7 border border-light-gray bg-pure-white p-6 md:p-8" id="contact-form-block">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-ink-black uppercase tracking-wider block">Sender Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Operator"
                  className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold text-ink-black uppercase tracking-wider block">Inbox Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold text-ink-black uppercase tracking-wider block">Scope of Inquiry</label>
              <select className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none">
                <option>Frontend Internship / Junior Role</option>
                <option>Full-Stack Collaboration Project</option>
                <option>General System Inquiries</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold text-ink-black uppercase tracking-wider block">Message Details</label>
              <textarea
                rows={4}
                required
                placeholder="Describe project details, workflow expectations, or interview schedules..."
                className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none resize-none"
              />
            </div>

            <Button variant="primary" type="submit" className="w-full justify-center flex items-center gap-2">
              <span>Transmit Message</span>
              <ArrowUpRight size={14} />
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
