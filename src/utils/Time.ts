export const getTime = (): string =>
  new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date());
