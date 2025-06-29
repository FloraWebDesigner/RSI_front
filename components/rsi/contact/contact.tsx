import { ContactForm } from "./email";

export function ContactSection() {
  return (
    <div className="flex flex-col mx-8 mb-6 gap-8 md:flex-row md:mx-16 md:mb-10">
      <img
        src="/img/dog1.jpg"
        alt="dog"
        className="w-full md:w-1/2 h-auto object-cover"
      />
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}
