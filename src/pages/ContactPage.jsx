import React, { useState } from 'react'
import '../assets/css/ContactPage.css'
import axios from 'axios'

function ContactPage() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [comment, setComment] = useState('')
    const [sending, setSending] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSending(true)

        let emailData = {
            user_name: userName,
            user_email: userEmail,
            comment: comment
        }


        setErrorMsg('Server is down')

        setTimeout(() => {
            setErrorMsg('')
        }, 2500);


        // try {
        //     const baseUrl = 'https://my-portfolio-server.onrender.com';
        //     const endpoint = '/send_email';
        //     let url = baseUrl + endpoint
        //     const response = await axios.post(url, emailData);
        //     if (response.status === 200){
        //         let data = response.data;
        //         console.log(data)
        //         setSending(false)
        //         setErrorMsg('');
        //         setSuccessMsg(data.msg);
        //         setTimeout(() => {
        //             setSuccessMsg('')
        //         }, 2500);
        //     }
        // } catch (error) {
        //     setSending(false)
        //     setSuccessMsg('');

        //     if (error.response) {
        //         let message = error.response.data.msg
        //         setErrorMsg(message)
        //     }else {
        //         setErrorMsg('Server is down')
        //     }
            
        //     setTimeout(() => {
        //         setErrorMsg('')
        //     }, 2500);
        // }
    }
    return (
        <div className=' contact_page w-full bg-zinc-700'>
            {/* Section One */}
            <section className='contact_page_section_one'>
                <h1 className=' text-center font-bold text-3xl text-yellow-400'>Email to Bin Omer</h1>
            </section>


            {/* Section two */}
            <section className='contact_page_section_two'>
                <h1 className=' text-center font-bold text-3xl text-white'>Contact</h1>

                <form className=' contact_form' onSubmit={handleFormSubmit}>
                    <div className='contact_info_div'>
                        <label>Name</label>
                        <input 
                            className=' capitalize'
                            type='text' 
                            required placeholder='Saalim Sulaymaan Salix' 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className='contact_info_div'>
                        <label>Email</label>
                        <input 
                            type='email' 
                            placeholder='someone@example.com'
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)} 
                        />
                    </div>
                    <div className='contact_info_div'>
                        <label>Comment</label>
                        <textarea 
                            className=' capitalize'
                            required 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>  

                    {errorMsg && <p className=' p-3 bg-red-300 rounded-md text-red-600 font-medium'>{errorMsg}</p>}
                    {successMsg && <p className=' p-3 bg-green-300 rounded-md'>{successMsg}</p>}

                    <button type='submit'>Submit</button> 
                </form>
            </section>
        </div>
    )
}

export default ContactPage