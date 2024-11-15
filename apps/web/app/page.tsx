import { add } from "@spifa/ui/add";
import { getUsers } from "@spifa/service-users";

export default async function Home() {
  const result = add(1, 2);
  const users = await getUsers();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
      }}
    >
      {"Hello world!"}
      {users?.map((user) => <p key={user.id}>{user.login}</p>)}
    </div>
  );
}
