import React from "react";
import { Layout, Menu, theme } from "antd";
import { BookOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;
const { useToken } = theme;

function ChaptersMenu({ bookData }) {
  const { token } = useToken();
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
    <Sider style={{ backgroundColor: "transparent" }} width={"100%"}>
      <Menu
        mode="inline"
        style={{
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
          border: token.border,
        }}
      >
        {generateMenuItems()}
      </Menu>
    </Sider>
  );
}

export default ChaptersMenu;
