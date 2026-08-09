const INDONESIAN_DATE_FORMATTER = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function formatDateId(dateInput: string | Date): string {
  const dateValue = dateInput instanceof Date ? dateInput : new Date(dateInput);

  if (Number.isNaN(dateValue.getTime())) {
    return "Tanggal tidak valid";
  }

  return INDONESIAN_DATE_FORMATTER.format(dateValue);
}
