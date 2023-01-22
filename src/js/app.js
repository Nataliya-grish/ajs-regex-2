export default function phoneNumber(namber) {
  return `${namber.replace(/(?<!\+)8/, "+7").replace(/[\s-()]/g, "")}`;
}
