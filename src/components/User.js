const User = (props) => {
  const { name, location, contact } = props;
  return (
    <div style={{ border: "2px solid black", margin: "10px" }}>
      <h3>UserName: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
};
export default User;
