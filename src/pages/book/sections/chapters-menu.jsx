import React from "react";
import { Layout, Menu } from "antd";
import { BookOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function ChaptersMenu({ bookData }) {
  const generateMenuItems = () => {
    return bookData.chapters.map((chapter) => (
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
      width={"25%"}
    >
      <Menu
        mode="inline"
        style={{
          borderRadius: "16px",
          border: "2px solid #EAF2F7",
        }}
      >
        {generateMenuItems()}
      </Menu>
    </Sider>
  );
}

export default ChaptersMenu;
