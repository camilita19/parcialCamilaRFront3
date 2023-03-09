import React, {useState} from 'react'
import '../style.css/formulario.css'

export default function Formulario() {
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [favorita,setFavorita] = useState("");

    const handlerSubmit= e =>{
        e.preventDefauld();
        alert("el formulario se creo con exito")
    }
    const handlerChage = (e)=>{
        if (e.target.value.length > 3){
            setApellido(e.target.value);

        }
    }
  

  return (
    <div className='contenedor-formulario'>
             <h1>Mascota favorita</h1>
        <form onSubmit={handlerSubmit}>
            <label htmlFor='nombre'>Nombre:</label>
            <input placeholder="ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <br/>
            <label htmlFor='apellido'>Apellido:</label>
            <input placeholder="ingresa tu apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />

            <p>Cual es tu tipo de mascota favorita</p>
            <select name="favorita" onChange={(e) => setFavorita(e.target.value)}>
            <option value="">----------</option>
            <option value="perros">Perros</option>
            <option value="gatos">Gatos</option>
            <option value="roedores">Roedores</option>
            <option value="peces">peces</option>
        
            </select>

            <br/>
            <input type="submit"/>


            
        </form>
     </div>
  )
}
