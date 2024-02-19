export enum NotificationEnums {
  'LOADING',
  'SUCCESS',
  'ERROR',
  'INFO',
  'WARNING',
}

export enum NotificationDuration {
  'SHORT' = 2000,
  'LONG' = 4000,
  'VERY_LONG' = 7000,
  'NONE' = 10000,
}

export interface NotificationType {
  message?: string;
  title?: string;
  duration?: NotificationDuration;
  identifier?: string;
  description?: string;
  onClose?: () => void;
  timestamp?: any;
  type: NotificationEnums;
  content?: any;
}

export const NotificationChannel = 'NotificationChannel';
const useNotify = () => {
  const showNotification = (data: NotificationType) => {
    const evt = new CustomEvent(NotificationChannel, {
      bubbles: false,
      cancelable: true,
      composed: false,
      detail: { ...data, duration: data.duration || NotificationDuration.NONE },
    });
    window.dispatchEvent(evt);
  };
  return {
    showNotification,
  };
};
export default useNotify;
