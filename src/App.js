import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import uiActions from './store/ui-slice'

let isFirstRender = true
function App() {
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()
  if(isFirstRender){
    dispatch(uiActions.showNotification({
      message: 'dispatch works!',
      type: 'success',
      open: true
    }))
  }
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)
  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false
      return
    }
    console.log('efffffect!!!')
    const sendRequest = async() => {
      // Send state as Sending request
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: 'warning',
      }))
      console.log('waiting...')
      const res = await fetch(
        'https://redux-http-703f6-default-rtdb.firebaseio.com/cartItems.json',
        { 
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      );
      const data = await res.json();
      // Send state as Request is successful
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sent Request To Database Successfully",
        type: 'success',
      }))
    };
    sendRequest().catch(err => {
      console.log('waite WHAT!!')
      console.log(err.message)
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request Failed",
        type: 'error',
      }))
    })
  }, [cart])
  console.log("the:")
  console.log(notification)
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      { !isLoggedIn && <Auth />}
      { isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
