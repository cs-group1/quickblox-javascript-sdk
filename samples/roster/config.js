var QBApp = {
  appId: 92,
  authKey: 'wJHdOcQSxXQGWx5',
  authSecret: 'BTFsj7Rtt27DAmT'
};

var config = {
  chatProtocol: {
    websocket: 'wss://chat.quickblox.com:5291',
    active: 2
  },
  ssl: true,
  debug: true
};

var QBUser1 = {
        id: 9267,
        name: 'igor',
        login: 'igor',
        pass: 'igor8888'
    },
    QBUser2 = {
        id: 4834885,
        name: 'bloxuser',
        login: 'bloxuser',
        pass: 'bloxuser'
    };

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);
