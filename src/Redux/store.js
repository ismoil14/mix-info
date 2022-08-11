import { configureStore } from '@reduxjs/toolkit'
import sideBar from './Reducer/SideBar'

export default configureStore({
  reducer: {
    sideBar
  },
})