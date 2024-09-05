import React from "react";
import { Layout, Menu } from "antd";
import { BookOutlined } from "@ant-design/icons";
import BookCard from "./BookCard";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ bookData }) => {
  const { book } = bookData;

  const generateMenuItems = () => {
    console.log(book);
    return book.chapters.map((chapter) => (
      <SubMenu
        key={`chapter-${chapter.chapterNumber}`}
        title={`${chapter.chapterNumber}: ${chapter.title}`}
        icon={<BookOutlined />}
      >
        {chapter.subChapters.map((subChapter) => (
          <Menu.Item key={`subchapter-${subChapter.subChapterNumber}`}>
            {`${subChapter.subChapterNumber}: ${subChapter.title}`}
          </Menu.Item>
        ))}
      </SubMenu>
    ));
  };

  return (
    <Sider
      style={{
        background: "#fff",
      }}
      width={300}
    >
      <BookCard />
      <Menu
        mode="inline"
        style={{
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "16px",
          borderBottomLeftRadius: "16px",
          border: "2px solid #EAF2F7",
          borderTop: "none",
        }}
      >
        {generateMenuItems()}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
