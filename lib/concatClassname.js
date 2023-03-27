export default function concatClass(...args) {
  return args
    .flat()
    .filter((t) => !!t)
    .join(" ");
}
