export const saveUserDB = (userInDB) => {

    fetch(`${import.meta.env.VITE_server_link}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userInDB),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  export const classSelectBD = (selected) => {

    fetch(`${import.meta.env.VITE_server_link}/classelect`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(selected),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }