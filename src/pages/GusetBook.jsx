import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./GusetBook.css"

const Guestbook = () => {
    const [apiMsg, setApiMsg] = useState([]);
    const [postData, setPostData] = useState({ name: "", message: "" });

    const showMessage = async () => { 
        try {
            const res = await axios.get("https://guest-408495279269.us-central1.run.app/guest");
            setApiMsg(res.data);
        } catch(err) { 
            console.error("data loading fail", err);
        }
    }

    const submitPost = async (e) => { 
        e.preventDefault();
        try { 
            await axios.post("https://guest-408495279269.us-central1.run.app/guest", postData);
            setPostData({ name: "", message: "" });
            showMessage();
        } catch(err) { 
            console.error(err);
        }
    }

    useEffect(() => {
        showMessage();
    }, []);

  return (
      <div className='guest-outBox'>
          <h1>GuestBook</h1>
          <div className='guest-board'>
              
          <form action="" onSubmit={submitPost}>
              <input type="text" name='' value={postData.name} placeholder='name'
                  onChange={(e) => setPostData({...postData, name: e.target.value })} required/>
              <textarea name="" id="" value={postData.message} placeholder='message'
                  onChange={(e) => setPostData({ ...postData, message: e.target.value })} required />
              <button type='submit'>등록</button>
          </form>

          <div className='message'>
              { 
                  apiMsg.map(msg => (
                      <div key={msg.id} className='message-card'> 
                          <p><strong>{msg.name}</strong></p>
                          <p>{ msg.message }</p>
                          <p>{ new Date(msg.created_at).toLocaleString() }</p>
                      </div>       
                  ))
                }
          </div>
                </div>
      </div>
  )
}

export default Guestbook