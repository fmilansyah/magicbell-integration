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
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const Notification = ({ notification: data }) => {
  const notification = useNotification(data)
  const handleMarkAsRead = () => {
    notification.markAsRead()
  }
  return (
    <Box
      p={3}
      borderWidth="1px"
    >
      <Heading as="h3" fontSize="xl">
        {notification.title}
        <Badge
          color="green.500"
          cursor="pointer"
          bg="inherit"
          transition="0.2s"
          _hover={{
            bg: 'inherit',
            transform: 'scale(1.2)',
          }}
          float="right"
          size="xs"
          onClick={() => handleMarkAsRead()}
          title="Mark As Read"
        >
          <FaCheckDouble />
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
