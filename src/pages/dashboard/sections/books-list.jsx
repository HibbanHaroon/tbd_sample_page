import { Card, theme, Row, Col } from "antd";
import CourseCard from "./course-card";

const { useToken } = theme;

const courses = [
  {
    title: "Linear Algebra",
    subject: "Maths",
    studied: 60,
    total: 100,
    img: "https://bwseducationconsulting.com/wp-content/uploads/2020/08/bws-maths-tutoring.jpg",
  },
  {
    title: "Computer Science",
    subject: "Frontend",
    studied: 30,
    total: 100,
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Geography",
    subject: "Humanities",
    studied: 20,
    total: 100,
    img: "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Physics",
    subject: "Science",
    studied: 50,
    total: 100,
    img: "https://images.pexels.com/photos/7723393/pexels-photo-7723393.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function BooksList() {
  const { token } = useToken();

  return (
    <Card
      style={{
        backgroundColor: token.colorWhite,
        marginTop: "16px",
        padding: "16px",
        border: token.border,
        borderRadius: "16px",
      }}
    >
      <Row gutter={[16, 16]}>
        {courses.map((course, index) => (
          <Col xs={24} sm={12} md={12} lg={8} key={index}>
            <CourseCard
              imageUrl={course.img}
              name={course.title}
              subText={course.subject}
              progress={(course.studied / course.total) * 100}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
}

export default BooksList;
