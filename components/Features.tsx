import React from 'react'
import Image from 'next/image'
const Features = () => {
  return (
        <div className='my-4'>
            <div className='text-black text-3xl font-Doto font-black ml-8 tracking-tighter'>
                  <span className='text-[#7d72ff]'>Collaborate</span> Like Never Before
            </div>
            <div className='flex flex-wrap justify-evenly mt-8'>
                <div className="bg-custom-gradient p-[5px] rounded-2xl">
                    <div className='w-[22rem] h-[22rem] rounded-2xl bg-[#e3e3e3] backdrop-blur-md p-4'>
                      <div className='text-black font-Doto font-extrabold text-2xl mb-2'>
                          Live <span className='text-[#7d72ff]'>Annotations</span>:
                      </div>
                        <div className='flex justify-center mb-2'>
                            <Image className=''
                                src="https://res.cloudinary.com/dlezz7gsf/image/upload/v1731643324/cfvyorbnmsihdbbd6nwy.svg"
                                width={250}
                                height={250}
                                alt="2 people having a digital converstaion"
                            />
                        </div>
                        <div className='text-black'>
                            Draw, write, and share ideas instantly with your
                            team, keeping everyone updated in real time.
                        </div>
                    </div>
              </div>
              <div className="bg-custom-gradient p-[5px] rounded-2xl">
                    <div className='w-[22rem] h-[22rem] rounded-2xl bg-[#e3e3e3] backdrop-blur-md p-4'>
                      <div className='text-black font-Doto font-extrabold text-2xl mb-2'>
                          Infinite <span className='text-[#7d72ff]'>Canvas</span>:
                      </div>
                        <div className='flex justify-center mb-2'>
                            <Image className=''
                                src="https://res.cloudinary.com/dlezz7gsf/image/upload/v1731645915/ji85eza6f1asfppwnudx.svg"
                                width={250}
                                height={250}
                                alt="2 people having a digital converstaion"
                            />
                        </div>
                        <div className='text-black'>
                        An endless workspace that lets you zoom, pan,
                        and create large diagrams without limits.
                        </div>
                    </div>
              </div>
              <div className="bg-custom-gradient p-[5px] rounded-2xl">
                    <div className='w-[22rem] h-[22rem] rounded-2xl bg-[#e3e3e3] backdrop-blur-md p-4'>
                      <div className='text-black font-Doto font-extrabold text-2xl mb-2'>
                      Low <span className='text-[#7d72ff]'>Latency</span>:
                      </div>
                        <div className='flex justify-center mb-2'>
                            <Image className=''
                                src="https://res.cloudinary.com/dlezz7gsf/image/upload/v1731646013/az2h7sv3ohiuxwxkqewy.svg"
                                width={200}
                                height={200}
                                alt="2 people having a digital converstaion"
                            />
                        </div>
                        <div className='text-black'>
                        Instantly reflect updates for all participants, ensuring
                        everyone is always in sync.
                        </div>
                    </div>
              </div>
              <div className="bg-custom-gradient p-[5px] rounded-2xl">
                    <div className='w-[22rem] h-[22rem] rounded-2xl bg-[#e3e3e3] backdrop-blur-md p-4'>
                      <div className='text-black font-Doto font-extrabold text-2xl mb-2'>
                      Activity <span className='text-[#7d72ff]'>Indicator</span>:
                      </div>
                        <div className='flex justify-center mb-2'>
                            <Image className=''
                                src="https://res.cloudinary.com/dlezz7gsf/image/upload/v1731646171/ccmvmbehllxz6ebzfs7r.svg"
                                width={250}
                                height={250}
                                alt="2 people having a digital converstaion"
                            />
                        </div>
                        <div className='text-black'>
                        Show where each user is currently focused on the 
                        canvas with live cursors or profile markers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Features