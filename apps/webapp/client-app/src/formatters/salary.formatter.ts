export function salaryFormatter(salary: number): string {
  if (salary === undefined) return "";

  return `$${salary.toFixed(2)}`;
}