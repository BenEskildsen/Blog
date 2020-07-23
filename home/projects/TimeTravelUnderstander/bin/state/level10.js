"use strict";

var level10 = function level10() {
  return {
    "level": 7, "prevTime": -1, "time": 0, "numReversals": 0, "agents": [{ "history": [{ "x": 3, "y": 0 }] }], "walls": [{ "orientation": "horizontal", "start": { "x": 0, "y": 0 }, "end": { "x": 7, "y": 0 } }, { "orientation": "horizontal", "start": { "x": 0, "y": 7 }, "end": { "x": 7, "y": 7 } }, { "orientation": "vertical", "start": { "x": 0, "y": 0 }, "end": { "x": 0, "y": 7 } }, { "orientation": "vertical", "start": { "x": 7, "y": 0 }, "end": { "x": 7, "y": 7 } }, { "orientation": "vertical", "start": { "x": 3, "y": 0 }, "end": { "x": 3, "y": 1 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 4, "y": 0 }, "end": { "x": 4, "y": 1 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 4, "y": 1 }, "end": { "x": 5, "y": 1 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 5, "y": 1 }, "end": { "x": 6, "y": 1 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 6, "y": 1 }, "end": { "x": 6, "y": 2 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 6, "y": 2 }, "end": { "x": 7, "y": 2 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 6, "y": 3 }, "end": { "x": 7, "y": 3 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 5, "y": 3 }, "end": { "x": 6, "y": 3 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 4, "y": 3 }, "end": { "x": 5, "y": 3 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 2, "y": 1 }, "end": { "x": 2, "y": 2 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 2, "y": 1 }, "end": { "x": 3, "y": 1 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 1, "y": 2 }, "end": { "x": 2, "y": 2 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 1, "y": 3 }, "end": { "x": 2, "y": 3 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 0, "y": 2 }, "end": { "x": 1, "y": 2 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 2, "y": 3 }, "end": { "x": 2, "y": 4 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 1, "y": 3 }, "end": { "x": 1, "y": 4 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 1, "y": 5 }, "end": { "x": 2, "y": 5 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 1, "y": 4 }, "end": { "x": 1, "y": 5 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 2, "y": 4 }, "end": { "x": 3, "y": 4 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 2, "y": 5 }, "end": { "x": 3, "y": 5 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 3, "y": 4 }, "end": { "x": 3, "y": 5 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 4, "y": 4 }, "end": { "x": 4, "y": 5 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 4, "y": 4 }, "end": { "x": 5, "y": 4 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 5, "y": 4 }, "end": { "x": 6, "y": 4 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 5, "y": 5 }, "end": { "x": 6, "y": 5 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 6, "y": 5 }, "end": { "x": 7, "y": 5 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 5, "y": 6 }, "end": { "x": 6, "y": 6 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 5, "y": 6 }, "end": { "x": 5, "y": 7 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 6, "y": 6 }, "end": { "x": 6, "y": 7 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 3, "y": 6 }, "end": { "x": 3, "y": 7 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 2, "y": 6 }, "end": { "x": 3, "y": 6 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 1, "y": 6 }, "end": { "x": 2, "y": 6 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 0, "y": 6 }, "end": { "x": 1, "y": 6 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "horizontal", "start": { "x": 3, "y": 3 }, "end": { "x": 4, "y": 3 }, "doorID": 1, "invisible": false, "isOpen": true }, { "orientation": "horizontal", "start": { "x": 3, "y": 4 }, "end": { "x": 4, "y": 4 }, "doorID": 2, "invisible": false, "isOpen": true }, { "orientation": "horizontal", "start": { "x": 3, "y": 5 }, "end": { "x": 4, "y": 5 }, "doorID": 3, "invisible": false, "isOpen": true }, { "orientation": "horizontal", "start": { "x": 3, "y": 6 }, "end": { "x": 4, "y": 6 }, "doorID": 4, "invisible": false, "isOpen": true }, { "orientation": "vertical", "start": { "x": 3, "y": 5 }, "end": { "x": 3, "y": 6 }, "doorID": 5, "invisible": false, "isOpen": true }, { "orientation": "vertical", "start": { "x": 4, "y": 2 }, "end": { "x": 4, "y": 3 }, "doorID": null, "invisible": false, "isOpen": false }, { "orientation": "vertical", "start": { "x": 3, "y": 2 }, "end": { "x": 3, "y": 3 }, "doorID": null, "invisible": false, "isOpen": false }], "buttons": [{ "position": { "x": 4, "y": 5 }, "doorID": 1, "pressed": false }, { "position": { "x": 6, "y": 6 }, "doorID": 4, "pressed": false }, { "position": { "x": 6, "y": 2 }, "doorID": 3, "pressed": false }, { "position": { "x": 2, "y": 2 }, "doorID": 2, "pressed": false }, { "position": { "x": 0, "y": 2 }, "doorID": 5, "pressed": false }], "stepLimit": 6, "target": { "reached": 0, "pos": { "x": 3, "y": 6 } }, "rumble": { "shouldRumble": false, "offset": { "x": 0, "y": 0 }, "count": 0 }, "moveAttempts": { "left": false, "right": false, "up": false, "down": false, "revTime": false }
  };
};

module.exports = { level10: level10 };