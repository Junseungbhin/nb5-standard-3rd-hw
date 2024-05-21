function StudentList({ students }) {
  return (
    <ul>
      {/* 학생 목록을 표시하는 로직을 작성합니다. */}
      {/* ex: 홍길동 (20세) - A등급 */}
      {students.map((student) => (
        <li key={student.name}>
            {student.name} : {student.age}세 , {student.grade}등급
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
