
// export const addclass = async addclassData => {
    
//     const response = await fetch(`/addedclass`, {
//         method: 'POST',

//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(addclassData),

//     })
//     const data = await response.json()
//     return data
// }


export const getAllClass = async()=>{
    const response = await fetch(`${import.meta.env.VITE_server_link}/getallclass`)
    const data = await response.json()
    return data
}



