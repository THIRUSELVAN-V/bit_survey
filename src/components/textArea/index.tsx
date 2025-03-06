
interface TextAreaCompProps {
    className?: string;
    placeholder?: string;
    value?: string;
    rows?: number;
    onChange?: (value: string) => void;
}

export const TextAreaComp = ({ className, placeholder, value, onChange, rows = 20 }: TextAreaCompProps) => {
  return (
    <div>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className={`w-full h-full p-2 rounded-md resize-none ${className}`} 
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};