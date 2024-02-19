import React, { useEffect, useState } from 'react';
import {
  NotificationChannel,
  NotificationDuration,
  NotificationType,
} from './useNotify';
import SuccessNotification from './SuccessNotification';

function NotificationWrapper() {
  const [notifications, setNotifications] = useState([] as any[]);
  const notificationsRef = React.useRef(notifications);
  const DisplayedNotifications = notificationsRef?.current?.slice(
    Math.max(notificationsRef?.current.length - 3, 0)
  );

  const removeNotification = (timestamp: any) => {
    let index = notificationsRef?.current?.length - 1;
    notificationsRef.current.forEach((notification, i) => {
      if (notification.timestamp === timestamp) {
        index = i;
      }
    });
    notificationsRef.current?.splice(index, 1);
    setNotifications([...notificationsRef.current]);
  };

  useEffect(() => {
    const notificationReceived = (data: any) => {
      const timestamp = new Date().getTime();
      if (data?.detail?.identifier) {
        let existingIndex = -1;
        notificationsRef.current.forEach((i, index) => {
          if (i.identifier === data.detail?.identifier) {
            existingIndex = index;
          }
        });
        if (existingIndex > -1) {
          notificationsRef.current?.splice(existingIndex, 1);
        }
      }
      data.detail.identifier = data?.detail.identifier || timestamp;
      const newArray = [
        ...notificationsRef.current,
        { ...data?.detail, timestamp },
      ];
      notificationsRef.current = newArray;
      setNotifications(newArray);
      setTimeout(() => {
        removeNotification(timestamp);
      }, data.detail.duration);
    };
    window.addEventListener(NotificationChannel, notificationReceived);
    return () => {
      window.removeEventListener(NotificationChannel, notificationReceived);
    };
  }, []);
  return (
    <>
      {DisplayedNotifications.map((notification: NotificationType, index) => {
        return (
          <SuccessNotification
            totalCount={DisplayedNotifications?.length}
            key={notification.timestamp}
            index={index}
            type={notification.type}
            content={notification.content}
            description={notification.description}
            title={notification.title}
            onClose={() => {
              removeNotification(notification.timestamp);
              if (notification.onClose) {
                notification.onClose();
              }
            }}
          />
        );
      })}
    </>
  );
}

export default NotificationWrapper;
