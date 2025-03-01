import { Progress } from "@heroui/react";

interface ProgressBarProps {
  size?: "sm" | "md" | "lg";
  value?: number; // Current progress value (0 to 100).
  color?: string; // Color of the progress bar.
  outlineColor?: string; // Color of the outline/border.
  isLabelVisible?: boolean; // Whether to show the label.
  label?: string; // Custom label text.
  baseClassName?: string; // Custom class for additional styling.
  isRounded?: boolean;
}

export const ProgressComp = ({
  size = "sm",
  value = 0, // Default value.
  color = "bg-blue-500", // Default progress color.
  outlineColor = "border-gray-300", // Default outline color.
  isLabelVisible = true, // Default to showing the label.
  label = "Loading...", // Default label text.
  baseClassName,
  isRounded = true,
}: ProgressBarProps) => {
  return (
    <div className={`flex flex-col gap-2 ${baseClassName}`}>
      {/* Progress Bar */}
      <Progress
  aria-label={label}
  value={value}
  className={`max-w-md border ${outlineColor} ${isRounded ? "rounded" : "rounded-none"}`}
  classNames={{
    base: "h-1",
    track: "bg-gray-50",
    indicator: color, // Dynamically apply color
  }}
  size={size}
/>
      {/* Label and Percentage */}
      {isLabelVisible && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-700">{value}%</span>
        </div>
      )}
    </div>
  );
};