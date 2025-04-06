import { FooterTitle } from "./footer-title";
import { FooterMenu } from "./footer-nav";
import {
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
        backgroundColor: "#1F1F23",
        color: "white",
        borderTop: "1px solid #2B2B2F",
      }}
    >
      <div className="flex flex-row justify-between items-start w-full h-60">
        <div className="flex flex-col w-1/3">
          <FooterTitle title="Business Address" />
          <div className="pl-2 flex flex-col gap-4 my-auto justify-center items-center mt-4">
            <p className="text-center">
              <span className="flex flex-row items-center justify-center gap-3">
                <MapPin size={16} />
                Toronto, Canada
              </span>
              32 Cranfield Road Toronto ON M4B 3H3 Canada
            </p>
            <p className="text-center">
              <span className="flex flex-row items-center justify-center gap-3">
                <MapPin size={16} />
                Lahore, Pakistan
              </span>
              <span>
                101-102, Block-A, Al-Faisal Town, Zarar Shaheed Road, Cantt.,
                Lahore, Pakistan
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <FooterTitle title="Contact Information" />
          <div className="mx-auto flex flex-col">
            {/* <p className="flex flex-row my-3 items-center">
              <Phone className="mr-3" size={16} />
              1234567890
            </p> */}
            <p className="flex flex-row my-3 items-center">
              <Mail className="mr-3" size={16} />
              khan.burhan@rsincorp.com
            </p>
            <div className="social flex flex-col gap-10 justify-center items-center mt-6">
              <div className="flex flex-row gap-10">
                <Youtube />
                <Facebook />
              </div>
              <div className="flex flex-row gap-10">
                <Instagram />
                <Linkedin />
              </div>
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
