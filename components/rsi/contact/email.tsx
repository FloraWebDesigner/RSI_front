"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../ui/textarea";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";
import Swal from "sweetalert2";

//https://web3forms.com/platforms/nextjs-contact-form
export function ContactForm() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    if (result.success) {
      // https://sweetalert2.github.io/#examples
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      form.reset();
    }
  }
  return (
    <form onSubmit={handleSubmit} className="w-3/4">
      <p className="text-center text-2xl text-gray-600 mb-8">
        Your voice is important to us!
      </p>
      <div className="my-3">
        <Label htmlFor="name" className="mb-1">
          Name
        </Label>
        <Input type="text" name="name" required />
      </div>
      <div className="mb-3">
        <Label htmlFor="email" className="mb-1">
          Email address
        </Label>
        <Input type="email" name="email" required />
      </div>
      <div className="mb-3">
        <Label htmlFor="mesaage" className="mb-1">
          Your message
        </Label>
        <Textarea name="message" required />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
