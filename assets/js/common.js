function saveFcmToken(token) {
    alert(token);
}

function sendToFlutter() {
    const msg = "Flutter 안녕!";
    if (window.FlutterChannel) {
      window.FlutterChannel.postMessage(msg);
    }
  }