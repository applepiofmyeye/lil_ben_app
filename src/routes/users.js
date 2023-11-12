import { Form, useParams } from "react-router-dom";

export default function User() {
    const id = useParams().userId;
  const user = {
    first: "Your",
    last: "Name",
    avatar: "../../images/_.jpeg",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="user">
        <p>Psst.. this page is also your queue number to claim exclusive early bird rewards!</p>
    </div>
  );
}

function Favorite({ user }) {
  // yes, this is a `let` for later
  let favorite = user.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}