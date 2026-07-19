import { FormEvent, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { Mail, Github, Linkedin, ArrowUpRight, Terminal, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Frontend Internship / Junior Role");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "An unexpected error occurred during transmission.");
      }

      setSuccess(true);
      setResponseMsg(data.message);
      // Reset input fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="05. Establish Contact"
      subtitle="Operational inquiry channels open for frontend, collaborative development, or full-stack integrations."
      sectionIndex={5}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12" id="contact-container">
        {/* Call To Action Narrative */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-slate-gray font-sans text-xs font-semibold tracking-wider uppercase">
            <span>Inquiry Channels</span>
          </div>
          
          <h3 className="font-display font-black text-3xl text-ink-black uppercase tracking-tight leading-none">
            Let's build reliable platforms.
          </h3>
          
          <p className="font-sans text-sm text-charcoal leading-relaxed">
            I am actively seeking internships, junior roles, and open-source project contributions. If you value robust workflows, detailed commit histories, comprehensive PR descriptions, and clean design, we should work together.
          </p>

          <div className="space-y-3 pt-4 border-t border-light-gray/60">
            <a
              href="mailto:caturzajr4@gmail.com"
              className="flex items-center justify-between p-3 bg-off-white border border-light-gray hover:border-ink-black hover:bg-pure-white transition-all text-xs font-sans font-bold text-ink-black uppercase tracking-wider"
              id="contact-email-action"
            >
              <span className="flex items-center gap-2">
                <Mail size={14} />
                <span>caturzajr4@gmail.com</span>
              </span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 bg-off-white border border-light-gray hover:border-ink-black hover:bg-pure-white transition-all text-xs font-sans font-bold text-ink-black uppercase tracking-wider"
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
              className="flex items-center justify-between p-3 bg-off-white border border-light-gray hover:border-ink-black hover:bg-pure-white transition-all text-xs font-sans font-bold text-ink-black uppercase tracking-wider"
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

        {/* Contact Form Block */}
        <div className="md:col-span-7 border border-light-gray bg-pure-white p-6 md:p-8 flex flex-col justify-between" id="contact-form-block">
          {success ? (
            <div className="space-y-6 py-8 animate-fade-in text-center flex flex-col items-center justify-center h-full">
              <div className="bg-ink-black text-pure-white p-3 border border-ink-black flex items-center justify-center rounded-none select-none">
                <CheckCircle2 size={24} />
              </div>
              
              <div className="space-y-2 max-w-md">
                <h4 className="font-display font-black text-lg text-ink-black uppercase tracking-tight">
                  Message Sent
                </h4>
                <p className="font-sans text-xs text-slate-gray leading-relaxed">
                  {responseMsg}
                </p>
              </div>

              <div className="pt-4 w-full">
                <button
                  onClick={() => setSuccess(false)}
                  className="w-full py-2.5 px-4 font-sans text-xs font-bold text-ink-black uppercase border border-light-gray hover:border-ink-black bg-off-white hover:bg-pure-white transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-off-white border border-light-gray text-ink-black flex items-start gap-3 animate-fade-in">
                  <AlertTriangle size={16} className="text-ink-black flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-sans text-[10px] font-bold uppercase block text-slate-gray">Failed to Send</span>
                    <p className="font-sans text-xs">{error}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-sans font-bold text-ink-black uppercase tracking-wider block">Sender Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Operator"
                    className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none"
                    disabled={loading}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-sans font-bold text-ink-black uppercase tracking-wider block">Inbox Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-sans font-bold text-ink-black uppercase tracking-wider block">Scope of Inquiry</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none"
                  disabled={loading}
                >
                  <option>Frontend Internship / Junior Role</option>
                  <option>Full-Stack Collaboration Project</option>
                  <option>General System Inquiries</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-sans font-bold text-ink-black uppercase tracking-wider block">Message Details</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe project details, workflow expectations, or interview schedules..."
                  className="w-full bg-off-white border border-light-gray px-3 py-2 text-sm font-sans text-ink-black focus:outline-none focus:border-ink-black focus:bg-pure-white transition-all rounded-none resize-none"
                  disabled={loading}
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="w-full justify-center flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowUpRight size={14} />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
