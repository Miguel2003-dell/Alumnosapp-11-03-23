const IP = "172.20.31.121"

//Api que nos dará todos los productos.
export const getData = async () => {
    const data = await fetch(`http://${IP}:5000/productos`);
    return data.json();
}

//Api que nos dará un solo producto.
export const getUpd = async (_id) => {
    const data = await fetch(`http://${IP}:5000/productos/${_id}`);
    return await data.json();
}

//Api que nos permitirá guardar algún dato.
export const saveData = async (newData) => {
    const data = await fetch(`http://${IP}:5000/productos`, {
        method: 'POST',
        headers: { Accept: 'aplication/json', "Content-Type": 'application/json' },
        body: JSON.stringify(newData)
    });
    return await data.json();
}

//Api que nos permitirá eliminar algún dato.
export const deleteData = async (_id) => {
    const response = await fetch(`http://${IP}:5000/productos/${_id}`, {
        method: 'DELETE',
    });
    return true;
}

//Api que nos permitirá actualizar algún dato.
export const updateData = async (_id, newData) => {
    const data = await fetch(`http://${IP}:5000/productos/${_id}`, {
        method: 'PUT',
        headers: { Accept: 'aplication/json', "Content-Type": 'application/json' },
        body: JSON.stringify(newData)
    })
    return data;
}