import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Message = () => {
  const [content, setContent] = useState<any>("");
  const [messages, setMessages] = useState<any>([]);
  const [userName, setUserName] = useState<any>("");
  const messageEndRef = useRef<any>(null);
  const messageContainerRef = useRef<any>(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState<any>(true);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    fetchMessages();

    const interval = setInterval(fetchMessages, 600);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToBottom();
    }
  }, [messages, shouldScrollToBottom]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "https://www.referback.trollsufficient.com/messages/121"
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!content) return;

    try {
      const response = await axios.post(
        "https://www.referback.trollsufficient.com/messages",
        {
          group_id: "121",
          sender: userName,
          content: content,
        }
      );

      setMessages((prevMessages:any) => [...prevMessages, response.data]);
      setContent("");
      setShouldScrollToBottom(true);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (e:any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const handleScroll = () => {
    const container = messageContainerRef.current;
    if (container) {
      const { scrollTop, clientHeight, scrollHeight } = container;
      const atBottom = scrollHeight - scrollTop <= clientHeight + 50;

      setShouldScrollToBottom(atBottom);
    }
  };

  // Prevent default scroll behavior when scrolling in message container
  const preventScroll = (e:any) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <div
          className={styles["message-form"]}
          onTouchStart={preventScroll} // Handle touch events to prevent page scroll
        >
          <div className={styles.heading}>
            <h2>Send a Message</h2>
          </div>
          <div
            className={styles["message-container"]}
            id="messageContainer"
            ref={messageContainerRef}
            onScroll={handleScroll}
          >
            {messages.map((message:any, index:any) => (
              <div
                key={index}
                className={`${styles["message"]} ${
                  message.sender === userName ? styles["sent"] : styles["received"]
                }`}
              >
                {message.sender !== userName && (
                  <div className={styles.sender}>
                    <strong className={styles.font}>{message.sender}</strong>
                  </div>
                )}
                <div className={styles.sevillanaregular}>{message.content}</div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles["form-group"]}>
              <div className={styles.messagebox}>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={3}
                  required
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className={styles.btn}>
                <button type="submit" className={styles["send-button"]}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /><any> */}
    </div>
  );
};

export default Message;
