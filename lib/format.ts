export const formatShortDate = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

export const formatYear = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
  });

export const formatLongDate = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
