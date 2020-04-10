import React, { useContext } from 'react'
import CountUp from 'react-countup';
import "../index.css"
import { GeneralContext } from './utils';

export default function Counter({ label, value, color }) {
    const{context, setContext} = useContext(GeneralContext)
    const style = context.dark ? styles.modes.dark : styles.modes.light

    return (
        <div
            className="card shadow d-flex flex-1 flex-column justify-content-center align-items-center m-2"
            style={{...style, minWidth: 220, textAlign: "center" }}>       
            <CountUp style={{ minWidth: 200, textAlign: 'center', fontSize: '2.75rem', color }}
                end={value}
                duration={1.5}
            />
            <span className="">{label}</span>
        </div>
    )
}

const styles = {
    modes: {
        dark: {
            backgroundColor: 'black',
            border : '1px white solid'
        },

        light: {
            backgroundColor: 'white',
            border : '1px grey solid'
        }
    }
}
