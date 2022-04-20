import React from 'react'
import { Alert } from '@mui/material' 
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Notification = ({ type, message }) => {
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()
  return (
    <div>
        { notification.open &&
          <Alert onClose={() => dispatch(uiActions.showNotification({ open: false }))} severity={type}>{message}</Alert>
        }
    </div>
  )
}

export default Notification