import { createContext ,useState} from "react";

const NotificationContext = createContext({
  notification: null,
  showNofication: function (notificationData) {},
  hideNofication: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setactiveNotification] = useState();

  function setActiveNotificationHandler(notificationData) {
    setactiveNotification(notificationData);
  }

  function setHideNotificationHandler() {
    setactiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNofication: setActiveNotificationHandler,
    activeNotification: setHideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
