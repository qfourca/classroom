import GoogleLogin from 'react-google-login'
import * as S from './index.style'
import oAuth from '../../store/oAuth' // atom으로 만든 전역상태
import {useRecoilState} from 'recoil' // 훅 import
import config from '../../../config.json'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Render = () => {
    const [getOAuth, setOAuth] = useRecoilState(oAuth); // 전역상태를 state로 만듦
    const [getClassrooms, setClassrooms] = useState([])
    // useEffect(() => {
    //     if(getOAuth != undefined) {
    //         console.log(getOAuth)
    //         axios.get(`https://classroom.googleapis.com/v1/courses?key=${''}`,
    //         {headers: {
    //             Authorization: 'Bearer ' + getOAuth.accessToken,
    //             Accept: 'application/json'
    //         }})
    //         .then((result) => {
    //             console.log(result)
    //         })
    //     }
    // }, [getOAuth])
    const success = (result) => {
        setOAuth(result)
    }
    const fail = (error) => {
        console.log(error)
    }
    return (
        <>
            {
                getOAuth == undefined? 
                (
                    <div>
                        <GoogleLogin
                            key={config.key}
                            clientId={config.clientId}
                            onSuccess={success}
                            onFailure={fail}/>
                    </div>
                ):
                <>
                    {
                        getClassrooms.map(element => {
                            console.log(element)
                            return <div></div>
                        })
                    }
                </>
            }
        </>
    )
}
export default Render