import _ from "lodash";

const Rooms = () => {
  const rooms = [
    { id: "1", name: "94愛電影", description: "大家快來~" },
    { id: "2", name: "台中揪電影", description: "大家快來~" },
    { id: "3", name: "沙丘讚讚", description: "大家快來~" },
  ];
  return (
    <table>
      <tbody>
        {_.map(rooms, (room) => {
          return (
            <tr key={room.id}>
              <td>{room.name}</td>
              <td>{room.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Rooms;
