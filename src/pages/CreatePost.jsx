import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../componenets'

const CreatePost = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({

        name: '',
        prompt: '',
        photo: '',

    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const generateImage = async () => {


        if (form.prompt) {
            try {
                setGeneratingImg(true);
                setLoading(true);

                const response = await fetch('https://artilligence.onrender.com/api/v1/dalle-x', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        prompt: form.prompt
                    }), //body object sent to that endpoint furthermore, we use stringify to make a json object

                });

                const data = await response.json();
                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
                setLoading(false);

            } catch (error) {

                alert(error);

            } finally {

                setGeneratingImg(false);

            }
        } else {

            alert('Please enter a prompt');

        }

    }

    //func

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (form.prompt && form.photo && form.name) {
            setLoading(true);

            try {
                const response2 = await fetch('https://artilligence.onrender.com/api/v1/post-x', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                    },
                    body: JSON.stringify(form) //body holds a json object

                })

                const data = await response2.json();
                navigate('/');

            } catch (error) {
                alert(err);
            } finally {
                setLoading(false);
            }

        } else {
            alert('Please enter all details before sharing with community with a generated image');
        }



    }

    //handle form chagnes
    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })

    }


    const handleSurpriseMe = () => {

        //...spread syntax gets the previous variation of the prompt then adds to that form a new element
        const randomPrompt = getRandomPrompt(form.prompt);
        console.log(randomPrompt);
        setForm({ ...form, prompt: randomPrompt });

    }


    return (
        <>
            <section className='max-w-7xl mx-auto' >
                <div className='' >
                    <h1 className='font-extrabold text-black text-[32px]' >
                        Create
                    </h1>
                    <p className='mt-2 text-[#666e75] text-[16px] max-[50px]' > Create imaginative and visually stunning images through the DALL-E AI!
                    </p>
                </div>

                <form className='mt-16 max-w-3xl' onSubmit={handleSubmit} >
                    <div className='flex flex-col gap-5' >
                        <FormField
                            labelName='Your name'
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            value={form.name}
                            handleChange={handleChange}

                        />

                        <FormField
                            labelName='Prompt'
                            type='text'
                            name='prompt'
                            placeholder='A Space Shuttle flying above Cape Town, digital art'
                            value={form.prompt}
                            handleChange={handleChange}
                            isSurpriseMe={true}
                            handleSurpriseMe={handleSurpriseMe}
                        />

                        <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 w-64 p-3 h-64 flex justify-center items-center' >
                            {form.photo ? (
                                <img
                                    className='w-full h-full object-contain'
                                    src={form.photo}
                                    alt={form.prompt}
                                />

                            ) : (
                                <img
                                    className='w-9/12 h-9/12 object-contain opacity-40'
                                    src={preview}
                                    alt="preview"
                                />

                            )}

                            {
                                generatingImg && (
                                    <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba( 0,0,0,0.25 )]' >

                                        {loading && (
                                            <Loader />
                                        )}

                                    </div>

                                )
                            }
                        </div>

                    </div>

                    <div className='mt-5 flex gap-5' >
                        <button className='text-rose-100 bg-teal-700 font-medium rounded-md text-sm sm:w-auto p-3 w-full px-5 py-2.5'
                            type='button'
                            onClick={generateImage}
                        >
                            {generatingImg ? (
                                'Generating...'
                            ) : (
                                'Not Generating'
                            )}
                        </button>

                    </div>

                    <div className='mt-10' >
                        <p className='mt-2 text-[#666375] text-[14px] ' >
                            You have created the image you want, you can share it with others in the community
                        </p>
                        <button className='mt-3 text-white bg-[#9fbf93] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center' >
                            Share With The Community
                        </button>

                    </div>

                </form>

            </section>

        </>
    )
}


export default CreatePost;

