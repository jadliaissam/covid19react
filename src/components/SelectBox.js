import React, { useContext } from "react";
import { GeneralContext } from "./utils";

export default function SelectBox({ data, label, defaultVal, entityCode, changeHandler, refer }) {
    const {context, setContext} = useContext(GeneralContext)

    const style = context.dark ? styles.modes.dark : styles.modes.light
    return (
        <>
            <div className="d-flex  m-4" style={{textAlign: "start" }}>
                <label className="control-label col-md-4" htmlFor="selectbasic">
                    {label}
                </label>
                <div className="d-flex flex-1" style={{ textAlign: "end", width: '100%', maxWidth: 350 }}>
                    <select
                        id={entityCode}
                        name={entityCode}
                        className="select form-control"
                        onChange={evt => changeHandler(evt.target.value, entityCode)}
                        ref={refer}
                        style={style}
                    >
                        <option value="0">{defaultVal}</option>
                        {data
                            ? data.map((elt, index) => (
                                <option key={index} value={elt.id}>
                                    {elt.name}
                                </option>
                            ))
                            : []}
                    </select>
                </div>
            </div>
        </>
    );
}


const styles = {
    modes: {
        dark : {
            backgroundColor : 'black',
            color : 'white'
        
          },
        
          light : {
            backgroundColor : 'white',
            color : 'black'
          }
    }
}
