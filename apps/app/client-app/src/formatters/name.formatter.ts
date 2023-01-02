export function nameFormatter(firstName: string, lastName: string, middleName: string = "") : string {
  if (firstName === undefined || lastName === undefined) return "";

  if (middleName === "") return `${lastName}, ${firstName}`;

  return `${lastName}, ${firstName} ${middleName}`;
}