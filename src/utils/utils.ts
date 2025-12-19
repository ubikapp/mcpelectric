// Formatea la fecha a un string en español de Chile
function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // Forzamos el locale 'es-CL' para que aparezca "19 de dic. de 2025"
  return new Date(date).toLocaleDateString("es-CL", options);
}

// Capitaliza la primera letra de una cadena
function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };