export default function getStudentsByLocation(ListStudents, city) {
  if (Array.isArray(ListStudents) && (typeof city === 'string')) {
    return ListStudents.filter((element) => element.location === city);
  }
  return [];
}
