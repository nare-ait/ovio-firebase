import React, { Component } from "react";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy_361BzJkjfqM84CBU6kYqmuv8TZ4VrQ",
  authDomain: "chat-e1d7e.firebaseapp.com",
  projectId: "chat-e1d7e",
  storageBucket: "chat-e1d7e.appspot.com",
  messagingSenderId: "363372850492",
  appId: "1:363372850492:web:8d0de0eb5ecf62b1dec239",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      messages: [],
      message: "",
      error: null,
    };
  }

  componentDidMount() {
    // Listen for authentication changes
    auth.onAuthStateChanged((user) => {
      this.setState({ user });
      if (user) {
        firestore
          .collection("messages")
          .orderBy("createdAt")
          .limit(25)
          .onSnapshot((snapshot) => {
            const messages = snapshot.docs.map((doc) => ({
              id: doc.id, 
              ...doc.data(),
            }));
            this.setState({ messages });
          });
      }
    });
  }

  signIn = () => {
    auth
      .signInAnonymously()
      .then(() => {
        console.log("Signed in anonymously!");
      })
      .catch((error) => {
        console.error("Error signing in anonymously: ", error);
        this.setState({ error: error.message });
      });
  };

  signOut = () => {
    auth.signOut();
  };

  sendMessage = async (e) => {
    e.preventDefault();
    const { message, user } = this.state;

    if (message.trim() === "") return;

    try {
      await firestore.collection("messages").add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user.uid,
        photoURL: user.photoURL || "https://i.pravatar.cc/300",
      });
      this.setState({ message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      this.setState({ error: error.message });
    }
  };

  deleteMessage = async (id) => {
    try {
      await firestore.collection("messages").doc(id).delete();
      console.log("Message deleted successfully!");
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  clearMessages = async () => {
    try {
      const messagesRef = await firestore.collection("messages").get();
      const batch = firestore.batch();

      messagesRef.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      console.log("All messages deleted!");
    } catch (error) {
      console.error("Error clearing messages:", error);
    }
  };

  render() {
    const { user, messages, message, error } = this.state;

    return (
      <div className="app">
        <header className="header">
          <h1>🔥 Firebase Chat</h1>
          {user ? (
            <>
              <button className="btn" onClick={this.signOut}>
                Sign Out
              </button>
              <button className="btn" onClick={this.clearMessages}>
                Clear All Messages
              </button>
            </>
          ) : (
            <button className="btn" onClick={this.signIn}>
              Sign In
            </button>
          )}
        </header>
        <section className="chat-section">
          {error && <div className="error">Error: {error}</div>}
          {user ? (
            <ChatRoom
              messages={messages}
              message={message}
              onMessageChange={(e) => this.setState({ message: e.target.value })}
              onSendMessage={this.sendMessage}
              onDeleteMessage={this.deleteMessage}
            />
          ) : (
            <div className="welcome">Please sign in to join the chat.</div>
          )}
        </section>
      </div>
    );
  }
}

class ChatRoom extends Component {
  render() {
    const { messages, message, onMessageChange, onSendMessage, onDeleteMessage } = this.props;

    return (
      <div className="chat-room">
        <div className="messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.uid === firebase.auth().currentUser?.uid ? "sent" : "received"}`}
            >
              <img
                src={msg.photoURL || "https://i.pravatar.cc/300"}
                alt="User Avatar"
              />
              <p>{msg.text}</p>
              {msg.uid === firebase.auth().currentUser?.uid && (
                <button
                  className="btn delete-btn"
                  onClick={() => onDeleteMessage(msg.id)}
                >
                  🗑️
                </button>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={onSendMessage} className="message-form">
          <input
            value={message}
            onChange={onMessageChange}
            placeholder="Type your message"
            aria-label="Message input"
          />
          <button type="submit" className="btn" disabled={!message}>
            🕊️ Send
          </button>
        </form>
      </div>
    );
  }
}

export default App;
