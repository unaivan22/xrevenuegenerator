"use client"

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [inputName, setInputName] = useState('unaivan');
  const [inputAmount, setInputAmount] = useState('399');
  const [currentTime, setCurrentTime] = useState(new Date());

  const [imageSrcAndroid, setImageSrcAndroid] = useState('./android.png');
  const [imageSrciOS, setImageSrciOS] = useState('./ios.png');

  const handleInputChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputChangeAmount = (e) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    // Update the current time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every 60 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });


  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImageSrcAndroid(objectURL);
      setImageSrciOS(objectURL);
    }
  };

  return (
    <div className='container mx-auto py-16 px-12 '>
      <section className='grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 bg-white min-h-screen rounded-xl'>
        <div className='mx-auto p-12 space-y-6'>
        <p>{formattedTime}</p>
          <div>
            <h5 className='font-bold text-zinc-900'>X (Twitter) Revenue Generator</h5>
            <p className='text-zinc-700 font-light'>Create simulated X (Twitter) Ad Revenue alerts to amuse your friends or visualize your aspirations.</p>
          </div>

          <div>
            <h5 className='font-bold text-zinc-900'>Custom Wallpaper</h5>
            <form>
              <label for="file-input" className="sr-only">Choose file</label>
              <input onChange={handleFileChange} type="file" accept=".png, .jpg, .jpeg"  name="file-input"  className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-zinc-500 focus:ring-blue-500
                file:bg-transparent file:border-0
                file:bg-gray-100 file:mr-4
                file:py-3 file:px-4 file:bg-zinc-100 file:text-zinc-900" />
            </form>
          </div>

          <div>
            <p className='font-bold text-zinc-900'>Name :</p>
            {/* <h1>{inputName}</h1>
            <h1>{inputName}</h1> */}
            <input
              type="text"
              placeholder="Input name"
              value={inputName}
              onChange={handleInputChangeName}
              className='py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 '
            />
          </div>
          <div>
            <p className='font-bold text-zinc-900'>Amount :</p>
            {/* <h1>{inputAmount}</h1> */}
            <input
              type="text"
              placeholder="Input amount"
              value={inputAmount}
              onChange={handleInputChangeAmount}
              className='py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 '
            />
          </div>
        </div>
        <div className='mx-auto p-12'>
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className='absolute px-3 w-full'>
                <p className='text-5xl text-white font-thin mt-12 mb-32 text-center'>{formattedTime}</p>
                <div className='rounded-xl bg-white bg-opacity-95 w-full py-2 grid grid-cols-6'>
                  <div className='pl-3'>
                    <img src='./x.webp' className='h-5 rounded-full' />
                  </div>
                  <div className='col-span-5 pr-2'>
                    <p className='text-xs font-base'>You got paid! &#183; <span className='text-zinc-500 text-usxs'>2m</span></p>
                    <p className='text-uxs font-light'>${inputAmount} has been deposited into your account.</p>
                  </div>
                </div>
                {/* <p className='text-uxs text-white font-light mt-56 text-center'>{inputName}</p> */}
              </div>
              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <img src={imageSrciOS} class="w-[272px] h-[572px]" alt="" />
              </div>
          </div>
          <div className='my-4'>
            <button className='px-4 py-2 w-full rounded-xl font-base transition ease-in-out delay-150 bg-zinc-800 hover:scale-110 hover:bg-zinc-900 duration-300 text-white'>Download Image</button>
          </div>
        </div>
        <div className='mx-auto p-12'>
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className='absolute px-3 w-full'>
                <p className='text-5xl text-white font-light mt-12 mb-32'>{formattedTime}</p>
                <div className='rounded-xl bg-white bg-opacity-95 w-full py-2 grid grid-cols-6'>
                  <div className='pl-3'>
                    <img src='./x.webp' className='h-5 rounded-full' />
                  </div>
                  <div className='col-span-5 pr-2'>
                    <p className='text-xs font-base'>You got paid! &#183; <span className='text-zinc-500 text-usxs'>2m</span></p>
                    <p className='text-uxs font-light'>${inputAmount} has been deposited into your account.</p>
                  </div>
                </div>
                <p className='text-uxs text-white font-light mt-56 text-center'>{inputName}</p>
              </div>
              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <img src={imageSrcAndroid} class="w-[272px] h-[572px]" alt="" />
              </div>
          </div>
          <div className='my-4'>
            <button className='px-4 py-2 w-full rounded-xl font-base transition ease-in-out delay-150 bg-zinc-800 hover:scale-110 hover:bg-zinc-900 duration-300 text-white'>Download Image</button>
          </div>
        </div>
      </section>
    </div>
  )
}
