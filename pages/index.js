import React from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useMagicBellEvent } from '@magicbell/magicbell-react'

const Home = () => {
  const showPushNotification = (notification) => NotificationManager.info(notification?.content, notification?.title)
  useMagicBellEvent('notifications.new', showPushNotification)
  return (
    <>
      <NotificationContainer />
    </>
  )
}

export default Home
