import React from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useMagicBellEvent, useNotifications, useNotification } from '@magicbell/magicbell-react'
import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  Container,
  Center,
} from '@chakra-ui/react'
import { FaCheck, FaCheckDouble, FaCircle } from 'react-icons/fa'

const Notification = ({ notification: data }) => {
  const notification = useNotification(data)
  const handleToggleRead = () => {
    if (notification.isRead) {
      notification.markAsUnread()
    } else {
      notification.markAsRead()
    }
  }
  return (
    <Box
      p={3}
      borderWidth="1px"
    >
      <Heading as="h3" fontSize="xl">
        {!notification.isRead && (
          <Badge
            color="red.500"
            bg="inherit"
            size="xs"
            title="Unread"
            float="left"
            mt="7px"
          >
            <FaCircle />
          </Badge>
        )}
        {notification.title}
        <Badge
          color={notification.isRead ? 'red.500' : 'green.500'}
          cursor="pointer"
          bg="inherit"
          transition="0.2s"
          _hover={{
            bg: 'inherit',
            transform: 'scale(1.2)',
          }}
          float="right"
          size="xs"
          onClick={() => handleToggleRead()}
          title={notification.isRead ? 'Mark As Unread' : 'Mark As Read'}
          mt="7px"
        >
          {notification.isRead ? <FaCheck /> : <FaCheckDouble />}
        </Badge>
      </Heading>
      <Text fontSize="12px" color="#999">{notification.sentAt.fromNow()}</Text>
      <Text>{notification.content}</Text>
    </Box>
  )
}

const Home = () => {
  const store = useNotifications()
  const showPushNotification = (notification) => NotificationManager.info(notification?.content, notification?.title)
  useMagicBellEvent('notifications.new', showPushNotification)
  return (
    <>
      <Container maxW="7xl">
        <Center>
          <Box w="320px">
            <Heading as="h1" fontSize="xl" mb={5}>
              Notifications
            </Heading>
            <SimpleGrid columns={{ base: 1 }} spacing={8}>
              {store && store.notifications.map((notification, index) => (
                <Notification key={index} notification={notification} />
              ))}
            </SimpleGrid>
          </Box>
        </Center>
      </Container>
      <NotificationContainer />
    </>
  )
}

export default Home
