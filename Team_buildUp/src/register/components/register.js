import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {inputUser, inputEmail, inputPassword, inputConfirmPassword, errConfirmPassword} from '../modules/registerSlice';
import Popup from './Popup';
import "../../assets/css/register.css"
import { Button} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";

const Layout = styled.div`
margin-top: 10px;
padding: 20px;
text-align: center;
`;
function handleClick(e){
    window.location.href="/register-page"
}

const Register = (props) => {
    const username = useSelector(state=>state.user);
    const email = useSelector(state=>state.email);
    const password = useSelector(state=>state.password);
    const confirmPassword = useSelector(state=>state.confirmPassword);
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const dispatch = useDispatch();


    const handleOnUser = (e) =>{
        dispatch(inputUser(e.target.value));
    }
    const handleOnEmail = (e) =>{
        dispatch(inputEmail(e.target.value));
    }
    const handleOnPassword = (e) =>{
        dispatch(inputPassword(e.target.value));
    }
    const handleOnConfirmPassword = (e) =>{
        dispatch(inputConfirmPassword(e.target.value));
    }
    const onSubmit = (e) => {
        if(password!=confirmPassword){
            setPopup({
                open: true,
                title: "Error",
                message: "Please make sure all fields are filled in correctly."
            });
            errConfirmPassword()
            return;
            }
        else{
            setPopup({
                open: true,
                title: "Welcome!",
                message: "Now you are our client!",
                callback: handleClick()
            });
            return;
        }
    }
    
    return (
        <>
        <IndexNavbar />
        <Layout>
            <div
        class = "img"
      >
        <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
        <br/><br/><br/><br/><br/><br/>
        <div class="box">
        <br/><br/>
            <h1 class="head"><strong> Register</strong></h1>
            <h2 class="head2">WELCOME</h2>
            <br/><br/>
            <input type="text" value={username} placeholder='NAME'
            onChange = {handleOnUser}/>
            <br/><br/>
            <input type="text" value={email} placeholder='EMAIL'
            onChange = {handleOnEmail}/>
            <br/><br/>
            <input type="password" value={password} placeholder='PASSWORD'
            onChange = {handleOnPassword}/>
            <br/><br/>
            <input type="password" value={confirmPassword} placeholder='CONFIRM PASSWORD'
            onChange = {handleOnConfirmPassword}/>
            <br/>
            <br/>
            <br/>
            <Button className="btn-round" color="danger"
                  onClick={() => onSubmit()}>
                    Register
                  </Button>
            <br/><br/>
            </div>
            </div>
        </Layout>
        </>
    );
}
export default Register;