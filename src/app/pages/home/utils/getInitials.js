export default function getInitials(name) {
  const words = name.split(" ");
  let initials = "";
  words.forEach((word) => {
    initials += word[0];
  });
  return initials;
}
