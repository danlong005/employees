export function dateFormatter(dt: Date): string {
  if (dt === undefined) return "";

  let formattedDate: string = dt.getFullYear() + '-' + 
                              (dt.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                              (dt.getDay() + 1).toString().padStart(2, '0'); 
  return formattedDate;
}