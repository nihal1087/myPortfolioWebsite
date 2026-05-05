import { ArrowUpRight, BookOpen, Code2, Link as LinkIcon, Mail, Phone } from "lucide-react";
import { profile } from "../data/portfolio.js";

const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "GitHub", href: profile.github, icon: Code2 },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkIcon },
  { label: "LeetCode", href: profile.leetcode, icon: Code2 },
  { label: "Blog", href: profile.blog, icon: BookOpen },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__copy">
          <p className="eyebrow">Contact</p>
          <h2>Open to software engineering internships and full-stack projects.</h2>
          <p>
            I like work that sits close to product, data, and real users: APIs, automation,
            React interfaces, and systems that need careful thinking.
          </p>
        </div>

        <div className="footer__actions" aria-label="Contact and profile links">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              className="icon-link"
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
              <ArrowUpRight aria-hidden="true" className="icon-link__arrow" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
