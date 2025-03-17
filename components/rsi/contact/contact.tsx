import { ContactForm } from "./email";

export function ContactSection() {
  return (
    <div className="flex flex-row mx-16 mb-10">
      <img
        src="/img/dog1.jpg"
        alt="dog"
        className="w-1/2 h-auto object-cover"
      />
      <div className="w-1/2 flex flex-col justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}
