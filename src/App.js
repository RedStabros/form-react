import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  Formulario,
  Label,
  Terminos,
  ContenedorBoton,
  Boton,
  MensajeExito,
  MensajeError,
} from "./elements/forms";
import ComponenteInput from './components/input';
import { useState } from "react";

const App = () => {
  const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
  const [nombre, cambiarNombre] = useState({campo: '', valido: null});
  const [password, cambiarPassword] = useState({campo: '', valido: null});
  const [password2, cambiarPassword2] = useState({campo: '', valido: null});
  const [correo, cambiarCorreo] = useState({campo: '', valido: null});
  const [telefono, cambiarTelefono] = useState({campo: '', valido: null});


  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  return (
    <main>
      <Formulario action="">
        <ComponenteInput 
          estado={usuario}
          cambiarEstado={cambiarUsuario}          
          type="text"
          label="Usuario"
          placeholder="Jhon123"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener letras, números y guion bajo"
          expresionRegular={expresiones.usuario}          
        />
        <ComponenteInput 
          estado={nombre}
          cambiarEstado={cambiarNombre}          
          type="text"
          label="Nombre"
          placeholder="Jhon Doe"
          name="nombre"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}          
        />
        <ComponenteInput 
          estado={password}
          cambiarEstado={cambiarPassword}          
          type="password"
          label="Contraseña"
          placeholder="password"
          name="password1"
          leyendaError="La contraseña tiene que ser de 4 a 12 caracteres."
          expresionRegular={expresiones.password}          
        />
        <ComponenteInput 
          estado={password2}
          cambiarEstado={cambiarPassword2}          
          type="password"
          label="Repetir Contraseña"
          placeholder="repetir password"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales."
          expresionRegular={expresiones.password2}          
        />
        <ComponenteInput 
          estado={correo}
          cambiarEstado={cambiarCorreo}          
          type="email"
          label="Correo Electrónico"
          placeholder="Email"
          name="correo"
          leyendaError="Digite un correo valido."
          expresionRegular={expresiones.correo}          
        />
        <ComponenteInput 
          estado={telefono}
          cambiarEstado={cambiarTelefono}          
          type="text"
          label="Teléfono"
          placeholder="Numero teléfonico"
          name="telefono"
          leyendaError="Digite un telefono valido, min7-max14 digitos."
          expresionRegular={expresiones.telefono}          
        />
      
        
        <Terminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los Terminos y Condiciones
          </Label>
        </Terminos>
        {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faTriangleExclamation} />
            <b>Error:</b> Por favor, rellene el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBoton>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>El formulario se envío exitosamente!</MensajeExito>
        </ContenedorBoton>
      </Formulario>
    </main>
  );
};

export default App;
