const IP = "192.168.1.74"


export const getData = async () => {
    const data = await fetch(`http://${IP}:5000/productos`);
    return data.json();
}

export const saveData = async (newData) => {
    const data = await fetch(`http://${IP}:5000/productos`, {
        method: 'POST',
        headers: { Accept: 'aplication/json', "Content-Type": 'application/json' },
        body: JSON.stringify(newData)
    });
    return await data.json();
}

export const deleteData = async (id) => {
    const response = await fetch(`http://${IP}:5000/productos/${id}`, {
        method: 'DELETE',
    });
    return true;
}
