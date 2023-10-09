"use client"

import { useId, FC, useRef, useEffect, useState } from "react";
import styles from './../styles/page.module.scss'
import { useTheme } from "@/styles/themeProvider";
import { ThemeType } from './../styles/theme'
import { ReferencedSymbol } from "typescript";


interface func {
    id: string;
    text: string;
}



const Page: FC = () => {

    const id = useId()

    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()<>;:,.[]{}`~'

    const functions: func[] = [
        {
            id: "checkbox1",
            text: "Заглавные буквы",
        },
        {
            id: "checkbox2",
            text: "Строчные буквы",
        },
        {
            id: "checkbox3",
            text: "Цифры",
        },
        {
            id: "checkbox4",
            text: "Символы",
        }
    ]

    const lengthRef = useRef<HTMLInputElement>(null)
    const clipBoardRef = useRef<HTMLInputElement>(null)

    const generate = (e?: React.MouseEvent<HTMLButtonElement>) => {
        let someString = ''
        if (cb.current!.children[0].children[1].checked){
            someString += alphabetUpper
        }
        if (cb.current!.children[1].children[1].checked){
            someString += alphabetLower
        }
        if (cb.current!.children[2].children[1].checked){
            someString += numbers
        }
        if (cb.current!.children[3].children[1].checked){
            someString += symbols
        }

        //cb.current.children[0].children[1].checked

        let result: string = ''
        for (let i = 0; i < parseFloat(lengthRef.current!.value); i++){
            result += someString.charAt(Math.floor(Math.random()*someString.length))
        }
        clipBoardRef.current!.value = result
    }

    const copy = (e: React.MouseEvent<HTMLInputElement>) => {
        navigator.clipboard.writeText(e.currentTarget.value)
        e.currentTarget.blur()
        console.log('Скопировано')
    }

    const cb = useRef(null)

    const { theme, themeType, setCurrentTheme } = useTheme()

    return ( 
        <div className={styles.container} style={{...theme} as React.CSSProperties}>
            <div className={styles.form}>
                <div className={styles.row}>
                    <input type="text" placeholder="Нажмите Сгенерировать" onClick={copy} ref={clipBoardRef} readOnly/>
                </div>

                <div className={styles.row}>
                    <label htmlFor={id + "length"}>Длина пароля</label>
                    <input type="number" id={id + "length"} ref={lengthRef}  defaultValue={15}/>
                </div>
                <section ref={cb}>
                    {
                        functions.map((i)=>(
                            <div key={id + i.id} className={styles.row}>
                                <label htmlFor={id+i.id}>{i.text}</label>
                                <input type="checkbox" name={i.id} id={id+i.id} defaultChecked />
                            </div>
                        ))
                    }
                </section>
                <button onClick={()=>{generate()}}>Сгенерировать</button>
                <label htmlFor="checkBoxTheme">Использовать темную тему</label>
                <input type="checkbox" name="checkBoxTheme" id="checkBoxTheme" checked={themeType==='dark'}  onChange={
                    (e: React.ChangeEvent<HTMLInputElement>)=>{
                        setCurrentTheme(e.target!.checked ? 'dark' : 'light') // TODO Переделать useContext, сделать его легче
                    }
                }/>
            </div>
        </div>
    );
}
 
export default Page;