import { useState } from "react";
import { useForm } from "react-hook-form";

const FIELDS = [
  { name: "name", label: "Nama", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "_subject", label: "Subjek", type: "text", autoComplete: "off" },
];

export default function FormContact() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/manqvqrq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form failed:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col gap-6">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="label mb-2 block text-fg"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              aria-invalid={errors[field.name] ? "true" : undefined}
              aria-describedby={
                errors[field.name] ? `${field.name}-error` : undefined
              }
              className="w-full border-0 border-b border-hairline bg-transparent pb-2 text-base text-fg outline-none transition-colors duration-200 focus:border-accent"
              {...register(field.name, { required: true })}
            />
            {errors[field.name] && (
              <p id={`${field.name}-error`} className="label mt-2 text-accent">
                Wajib diisi
              </p>
            )}
          </div>
        ))}

        <div>
          <label htmlFor="message" className="label mb-2 block text-fg">
            Pesan
          </label>
          <textarea
            id="message"
            rows={4}
            aria-invalid={errors.message ? "true" : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full resize-none border-0 border-b border-hairline bg-transparent pb-2 text-base text-fg outline-none transition-colors duration-200 focus:border-accent"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p id="message-error" className="label mt-2 text-accent">
              Wajib diisi
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex min-h-[48px] items-center justify-center bg-fg px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Mengirim…" : "Kirim Pesan"}
        </button>

        <p role="status" aria-live="polite" className="label">
          {status === "success" && (
            <span className="text-fg">Pesan terkirim. Terima kasih.</span>
          )}
          {status === "error" && (
            <span className="text-accent">
              Gagal mengirim. Coba lagi atau email langsung.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
