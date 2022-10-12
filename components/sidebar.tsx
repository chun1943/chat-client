const Sidebar = () => {
  const data = [
    {
      category: { id: "1", name: "娛樂" },
      boards: [
        { id: "1", name: "電影" },
        { id: "2", name: "漫畫" },
      ],
    },
    {
      category: { id: "2", name: "讀書" },
      boards: [
        { id: "1", name: "數學" },
        { id: "2", name: "英文" },
      ],
    },
    {
      category: { id: "2", name: "讀書" },
      boards: [
        { id: "1", name: "數學" },
        { id: "2", name: "英文" },
      ],
    },
  ];
  return (
    <div>
      <p>分類</p>
    </div>
  );
};
export default Sidebar;
