import _ from "lodash";

const Sidebar = () => {
  const categories = [
    {
      id: "1",
      name: "娛樂",
      boards: [
        { id: "1", name: "電影" },
        { id: "2", name: "漫畫" },
      ],
    },
    {
      id: "2",
      name: "讀書",
      boards: [
        { id: "1", name: "數學" },
        { id: "2", name: "英文" },
      ],
    },
    {
      id: "3",
      name: "時尚",
      boards: [
        { id: "1", name: "美妝" },
        { id: "2", name: "穿搭" },
      ],
    },
  ];
  console.log(categories);
  return (
    <div>
      <h2>分類</h2>
      {_.map(categories, (category) => {
        return (
          <div>
            <h3>{category.name}</h3>
            <ul>
              {_.map(category.boards, (board) => {
                return <li>{board.name}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
