const LIST = ({ item }) => {
  return (
    <>
      <div key={item.name}>
        {item.list.map((product, index) => (
          <li style={{ listStyle: "none" }} key={index}>
            {product}
          </li>
        ))}
      </div>
    </>
  );
};
export default LIST;
