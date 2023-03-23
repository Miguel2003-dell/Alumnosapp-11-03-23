const IP = "172.20.31.43"


export const getData = async () => {
    const data = await fetch(`http://${IP}:5000/productos`);
    return data.json();
}
export const deleteData = async (id) => {
    const response = await fetch(`http://${IP}:5000/productos/${id}`,{
        method: 'DELETE',
    });
    return true;
}
