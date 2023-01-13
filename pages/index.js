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
} from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"

const Notification = ({ notification: data }) => {
  const notification = useNotification(data);
  const handleMarkAsRead = () => {
    notification.markAsRead();
  }
  return (
    <Box
      p={3}
      borderWidth="1px"
    >
      <Heading as="h3" fontSize="xl">
        {notification.title}{" "}
        <Badge
          color="red.500"
          bg="inherit"
          transition="0.2s"
          _hover={{
            bg: "inherit",
            transform: "scale(1.2)",
          }}
          float="right"
          size="xs"
          onClick={() => handleMarkAsRead()}
        >
          <FaTrash />
        </Badge>
      </Heading>
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
