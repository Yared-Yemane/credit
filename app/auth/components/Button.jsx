export function Button({ children, className, ...props }) {
  return (
    <button
      className={`w-full bg-amber-500 hover:bg-amber-600 rounded-lg py-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
