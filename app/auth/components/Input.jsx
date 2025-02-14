export function Input({ type, placeholder, className, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`p-3 w-full rounded-lg bg-gray-700 border border-white ${className}`}
      {...props}
    />
  );
}
