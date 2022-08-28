import GoogleLogin from 'react-google-login'
import * as S from './index.style'
import oAuth from '../../store/oAuth' // atom으로 만든 전역상태
import {useRecoilState} from 'recoil' // 훅 import
import { useEffect, useState } from 'react'
import axios from 'axios'

const Render = () => {
    const [getOAuth, setOAuth] = useRecoilState(oAuth); // 전역상태를 state로 만듦
    const [getClassrooms, setClassrooms] = useState([])
    const success = (result) => {
        setOAuth(result)
    }
    const fail = (error) => {
        console.log(error)
    }
    return (
        <>
            {
                getClassrooms.map(element => {
                    console.log(element)
                    return <div></div>
                })
            }
        </>

    )
}
export default Render