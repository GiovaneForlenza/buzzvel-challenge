type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  multiline?: boolean;
};

const inputClasses =
  "mt-2 w-full rounded-md border border-line-1 bg-background-light-yellow px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-primary-blue focus:outline-none";

export default function FormField({
  id,
  label,
  placeholder,
  type = "text",
  multiline = false,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-text-primary text-xs font-semibold">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          required
          placeholder={placeholder}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
}
