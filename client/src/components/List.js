import React from "react";

export default function List() {
  const listArray = [];

  for (let i = 0; i < 6; i++) {
    listArray.push(<li key={i}>{i}</li>);
  }
  return (
    <div>
      <ul>{listArray}</ul>
    </div>
  );
}
