import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  GrupoInput,
  IconoVal,
  Input,
  Label,
  LeyendaError,
} from "../elements/forms";

const ComponenteInput = ({
  estado,
  cambiarEstado,
  type,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if(expresionRegular){
        if(expresionRegular.test(estado.campo)){
            cambiarEstado({...estado, valido: 'true'})
        }else{
            cambiarEstado({...estado, valido: 'false'})
        }
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>{label}</Label>
      <GrupoInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <IconoVal 
            icon={estado.valido === 'true' ? faCircleCheck : faCircleXmark} 
            valido={estado.valido} />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default ComponenteInput;
