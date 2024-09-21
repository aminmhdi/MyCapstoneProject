import Logout from "./Logout";

function CustomerDashboard() {
  let user = sessionStorage.getItem("user");
  return (
    <div>
      <h2>Welcome to Customer Dashboard {user}</h2>

      <Logout></Logout>
    </div>
  );
}

export default CustomerDashboard;
