import React, { useContext } from "react"
import { GeneralContext, ThemeContext, LangContext } from "./utils"



export default function Switch({ img1, img2, val }) {
    const { themcon, setThemCon } = useContext(ThemeContext)
    const { langcon, setLangCon } = useContext(LangContext)

    function handler(val) {
        if (val === 'dark') {
            localStorage.setItem(val, !themcon)
            setThemCon(!themcon)
        }
        if (val === 'ar') {
            localStorage.setItem(val, !langcon)
            setLangCon(!langcon)
        }
    }

    return (
        <div className="d-flex flex-1 col-xs-12 flex-row theme-switch-wrapper">
            <img alt={img1.alt} src={img1.src} width={img1.width || 25} height={img1.width || 25} />
            <label className="theme-switch m-2" htmlFor={`checkbox${val}`}>
                <input defaultChecked={val === 'dark' ? themcon : langcon} type="checkbox" id={`checkbox${val}`} onClick={() => handler(val)} />
                <div className="slider round"></div>
            </label>
            <img alt={img2.alt} src={img2.src} width={img2.width || 25} height={img2.width || 25} />
        </div>
    )
}