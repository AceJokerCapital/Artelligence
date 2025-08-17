import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components'

const CreatePost = () => {
    //standard
    const navigate = useNavigate();

    //states
    const [form, setForm] = useState({

        name: '',
        prompt: '',
        photo: '',
        creatorId: JSON.parse(localStorage.getItem('user')).sub,

    });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitActive, setSubmitActive] = useState(false);
    const [submitting, setSubmitting] = useState(true);





    //functions
    const generateImage = async () => {


        if (form.prompt) {
            try {
                setGeneratingImg(true);

                const response = await fetch('https://artelligence.onrender.com/api/v1/dalle-x', {
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

            } catch (error) {

                alert(error);

            } finally {


                if (form.prompt && form.name) {
                    setSubmitActive(true);
                } else {
                    setSubmitActive(false);
                }
                generateAllowed = true;

                setGeneratingImg(false);

            }



        } else {

            alert('Please enter a prompt');

        }

    }

    //func

    let generateAllowed = true;

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (form.prompt && form.photo && form.name) {

            if (submitting) {
                setSubmitting(false);
                setLoading(true);

                try {
                    const response2 = await fetch('https://artelligence.onrender.com/api/v1/post-x', {
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
                    setSubmitting(true);
                }

            } else {

                if (generateAllowed) {
                    generateAllowed = false;
                    if (form.prompt) {

                        generateImage();
                        setSubmitting(true);

                    } else {
                        alert('Please enter all details before sharing with community with a generated image');
                        setSubmitting(true);
                        generateAllowed = true;
                    }


                }


            }



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
            <section className='max-w-7xl mx-auto mb-28' >
                <div className='' >
                    <h1 className='font-extrabold text-black text-[32px]' >
                        Create
                    </h1>
                    <p className='mt-2 text-[#666e75] text-[16px] max-[50px]' > Create imaginative and visually stunning images through the DALL-E AI!
                    </p>
                </div>
                {
                    loading ? (
                        <Loader />
                    ) : (
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


                                                <Loader />

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
                                        'Generate'
                                    )}
                                </button>

                            </div>

                            <div className='mt-10' >
                                <p className='mt-2 text-[#666375] text-[14px] ' >
                                    You have created the image you want, you can share it with others in the community
                                </p>
                                <button className={submitActive ? 'mt-3 text-white bg-[#809475] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center shadow-xl transition-all ease-in-out hover:text-[15px] hover:text-[#c0c39e]' : 'mt-3 text-gray-300 bg-[#acb9a8] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'}>
                                    Share With The Community
                                </button>

                            </div>

                        </form>

                    )

                }

            </section>

        </>
    )
}


export default CreatePost;

