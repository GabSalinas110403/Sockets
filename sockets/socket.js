function socket(io) {
    io.on("connection", (socket) => {
        //io.emit("nombre", "hola soy el servidor");
        socket.on("nombre", (nombre) => {
            console.log("Hola " + nombre);
            io.emit("saludo", "Hola " + nombre);
        });
    });
}

module.exports= socket;