//Configuracion de express para iniciar el servidor :D
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const productosRoutes = require('./routes/productos.route');
const usersRoutes = require('./routes/users.route');
//Configuracion del puerto y la URI de la BD
const port = 5000;
const URI = "mongodb+srv://MiguelManzanilla:Yahirtontin18@cluster0.dqyo5fr.mongodb.net/LuckyCondoms?retryWrites=true&w=majority"

//Respuesta del localhost en el navegador
app.get('/', (req, res) => {
    res.send("Hola Maeta 😬")
})   

//Midlewares

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

mongoose.set("strictQuery", false)

//Respuesta de la confirmacion del URI en la consola
mongoose.connect(URI)
    .then(console.log('Base de Datos Conectada :D'))
    .catch((Error) => console.log(Error))
    

//Ruta en la que se muestran los datos de la BD
app.use("/productos", productosRoutes)
app.use("/users", usersRoutes)
//:5000/users/login

app.listen(port, () => {
    console.log('listening on port', port);
})