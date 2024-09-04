import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
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
        icon={<UserOutlined />}
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
          height: "calc(100% - 200px)",
          marginTop: "16px",
        }}
      >
        {generateMenuItems()}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
