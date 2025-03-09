import { FooterTitle } from "./footer-title";
import { FooterMenu } from "./footer-nav";
import {
  Phone,
  Mail,
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="px-16 py-8"
      style={{
        backgroundColor: "var(--foreground)",
        color: "var(--background)",
      }}
    >
      <div className="flex flex-row justify-between align-top w-full h-44">
        <div className="flex flex-col w-1/3">
          <FooterTitle title="Business Address" />
          <div className="pl-2 flex gap-4 my-auto">
            <p>
              <span className="flex flex-row items-center gap-3">
                <MapPin size={16} />
                Pakistan:
              </span>
              <span>Lorem ipsum dolor sit amet consectetur</span>
            </p>
            <p>
              <span className="flex flex-row items-center gap-3">
                <MapPin size={16} />
                Canada:
              </span>
              <span>Facere fugiat ad autem quibusdam</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <FooterTitle title="Contact Information" />
          <div className="mx-auto">
            <p className="flex flex-row my-3 items-center">
              <Phone className="mr-3" size={16} />
              1234567890
            </p>
            <p className="flex flex-row mb-3 items-center">
              <Mail className="mr-3" size={16} />
              my_rsi_company@rsi.com
            </p>
            <div className="social flex flex-row gap-3 justify-center mt-8">
              <Youtube />
              <Facebook />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 justify-center">
          <FooterTitle title="Quick Links" />
          <div className="mx-auto">
            <FooterMenu />
          </div>
        </div>
      </div>
    </footer>
  );
}
