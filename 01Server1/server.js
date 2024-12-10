const expres = require("express");
const app = expres();

///midleware
app.use(expres.json());

//ruta GET
app.get("/api/saludo/:nombres/:apellidos/:cedula/:telefono", (req, res) => {
  const { nombres, apellidos, cedula, telefono } = req.params; //capturando los datos
  //enviar contra la base datos
  
  //respondes el resultado de la de datos.

  res.json({
    mensaje: [
      {
        Nombres: "El nombre es: " + nombres,
        Apellidos: "El apellidos es: " + apellidos,
         Cedula: cedula,
        Telefono: telefono,
      },
    ],
  });
});
//post
app.post("/api/grabar",()=>{

})
app.put()
//put
//patch
//delete
//options
//headers

const puerto = 4000;

app.listen(puerto, () => {
  console.log(`El servidor esta ejecutandose en el puerto  ${puerto}`);
});



// 25 tablas * 4 CRUD
// 100 procedimientos
