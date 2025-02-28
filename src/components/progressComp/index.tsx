import { Progress } from "@heroui/react";

interface ProgressBarProps {
  value?: number; // Current progress value (0 to 100).
  size?: "sm" | "md" | "lg"; // Size of the progress bar.
  color?: string; // Color of the progress bar.
  outlineColor?: string; // Color of the outline/border.
  isLabelVisible?: boolean; // Whether to show the label.
  label?: string; // Custom label text.
  className?: string; // Custom class for additional styling.
  isRounded?: boolean; 
}

export const ProgressComp = ({
  value = 0, // Default value.
  size = "md", // Default size.
  color = "bg-blue-500", // Default progress color.
  outlineColor = "border-gray-300", // Default outline color.
  isLabelVisible = true, // Default to showing the label.
  label = "Loading...", // Default label text.
  className,
  isRounded = true
}: ProgressBarProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {isLabelVisible && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
      <Progress
        aria-label={label}
        value={value}
        className={`max-w-md border ${outlineColor} ${isRounded ? "rounded": "rounded-none"}`}
        classNames={{
          base: "h-2", // Base height of the progress bar
          track: "bg-gray-100", // Background color of the track
          indicator: color, // Apply custom progress color
        }}
        size={size}
      />
    </div>
  );
};