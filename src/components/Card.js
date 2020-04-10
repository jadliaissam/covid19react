import React, { useState, useContext } from 'react'
import { GeneralContext } from './utils'

export default function Card({label, children, styleC, styleH, styleB}){
    const [state, setstate] = useState({})
    const {context, setContext} = useContext(GeneralContext)

    const style = context.dark ? styles.modes.dark : styles.modes.light

    return (
        <div className="card shadow d-flex justify-content-start m-2" style={{...styles.card, ...style.card,  ...styleC}} >
            <div className="card-header" style={{...styles.header, ...style.header, ...styleH}}>
                {label}
            </div>
            <div className="card-body p-1" style={{...styleB, ...style.body}}>
                {children}
            </div>
        </div>
    )
}

const styles = {
    card: {
        borderWidth: 3,
        borderRadius: 10,
        minWidth: 370,
        minHeight : 350
    },
    header: {
        textAlign: 'initial',
    },
    body : {
        padding : 0
    },
    modes: {
        dark: {
            header : {
                backgroundColor: "#232932",
                color: "white",
            },
            card : {
                borderColor: 'grey',
                backgroundColor : 'black',
                color : 'white'
           },
           body : {
            backgroundColor : 'black'
           }
        },

        light: {
            header : {
                backgroundColor: "black",
                color: "white",
            },
            card : {
                borderColor: 'black',
                backgroundColor : 'white',
                color : 'black'
           },
           body : {

           }
        }
    }
}


