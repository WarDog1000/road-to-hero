async function GetUsers(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}
async function UserPage({params}) {
  const user = await GetUsers(params.id);
  return (
    <div>
      User page {params.id}
      <hr />
      <h3>{user.id} - {user.last_name} {user.first_name}</h3>
      <p>{user.email}</p>
      {/* {JSON.stringify(user)} */}
    </div>
  );
}

export default UserPage;