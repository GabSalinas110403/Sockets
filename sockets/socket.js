function socket(io) {
    io.on("connection", (socket) => {
        socket.on("mensaje", (mensaje) => {
            let tipo = parseInt(mensaje);
            switch (tipo) {
                case 1:
                    console.log("Estás consultando saldo");
                    io.emit("saludo", "Estás consultando saldo");
                    break;
                case 2:
                    console.log("Estás realizando una transferencia");
                    io.emit("saludo", "Estás realizando una transferencia");
                    break;
                case 3:
                    console.log("Estás cambiando la contraseña");
                    io.emit("saludo", "Estás cambiando la contraseña");
                    break;
                case 4:
                    console.log("Estás viendo los últimos movimientos");
                    io.emit("saludo", "Estás viendo los últimos movimientos");
                    break;
                case 5:
                    console.log("Estás solicitando un estado de cuenta");
                    io.emit("saludo", "Estás solicitando un estado de cuenta");
                    break;
                default:
                    console.log("Opción no válida");
                    io.emit("saludo", "Opción no válida");
                    break;
            }
        });
    });
}




module.exports= socket;