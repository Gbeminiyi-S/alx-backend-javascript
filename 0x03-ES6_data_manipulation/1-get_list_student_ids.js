export default function getListStudentIds(listStudents) {
  if (Array.isArray(listStudents)) {
    return listStudents.map((element) => element.id);
  }
  return [];
}
