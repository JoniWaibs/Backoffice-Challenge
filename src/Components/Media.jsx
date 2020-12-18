import React from 'react'

const Media = () => {
    return (
        <div>
             <div className=" mb-20 text-center sm:text-left sm:flex sm:justify-between">
                <p className="text-2xl sm:text-3xl font-bold text-gray-600">Tus redes sociales</p>
                <button className="bg-blue-500 px-6 rounded-md shadow-lg font-bold text-gray-50 py-2 my-3 sm:my-0 "><i className="fas fa-plus-circle bg-transparent"></i> Linkear nueva RRSS</button>
            </div>
            <div className="grid grid-col-1 sm:grid-cols-4 h-full gap-4">
                <div className="w-auto sm-w-80 h-72 bg-white shadow-lg rounded-md">
                    <div className="h-40 items-center pt-10 bg-blue-800 rounded-t-md ">
                        <i class="fab fa-facebook-square text-8xl block text-center bg-blue-800 text-white"></i>
                    </div>
                    <div className="h-32 grid grid-cols-2 rounded-b-md bg-white bg-white">
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white border-r-2">
                                <p className="bg-white text-3xl text-gray-600">4k</p>
                                <p className="bg-white text-sm text-gray-600">Amigos</p>
                            </div>
                        </div>
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white">
                                <p className="bg-white text-3xl text-gray-600">244</p>
                                <p className="bg-white text-sm text-gray-600">Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-auto sm-w-80 h-72 bg-white shadow-lg rounded-md">
                    <div className="h-40 items-center pt-10 bg-blue-300 rounded-t-md ">
                        <i class="fab fa-twitter-square text-8xl block text-center bg-blue-300 text-white"></i>
                    </div>
                    <div className="h-32 grid grid-cols-2 rounded-b-md bg-white bg-white">
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white border-r-2">
                                <p className="bg-white text-3xl text-gray-600">17k</p>
                                <p className="bg-white text-sm text-gray-600">Followers</p>
                            </div>
                        </div>
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white">
                                <p className="bg-white text-3xl text-gray-600">1.3k</p>
                                <p className="bg-white text-sm text-gray-600">Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-auto sm-w-80 h-72 bg-white shadow-lg rounded-md">
                    <div className="h-40 items-center pt-10 bg-blue-400 rounded-t-md ">
                        <i class="fab fa-linkedin text-8xl block text-center bg-blue-400 text-white"></i>
                    </div>
                    <div className="h-32 grid grid-cols-2 rounded-b-md bg-white bg-white">
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white border-r-2">
                                <p className="bg-white text-3xl text-gray-600">500+</p>
                                <p className="bg-white text-sm text-gray-600">Contactos</p>
                            </div>
                        </div>
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white">
                                <p className="bg-white text-3xl text-gray-600">129</p>
                                <p className="bg-white text-sm text-gray-600">Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-auto sm-w-80 h-72 bg-white shadow-lg rounded-md">
                    <div className="h-40 items-center pt-10 bg-red-800 rounded-t-md ">
                        <i class="fab fa-instagram-square text-8xl block text-center bg-red-800 text-white"></i>
                    </div>
                    <div className="h-32 grid grid-cols-2 rounded-b-md bg-white bg-white">
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white border-r-2">
                                <p className="bg-white text-3xl text-gray-600">99k</p>
                                <p className="bg-white text-sm text-gray-600">Follwers</p>
                            </div>
                        </div>
                        <div className="span-col-1 bg-white">
                            <div class="block text-center pt-10 bg-white">
                                <p className="bg-white text-3xl text-gray-600">12</p>
                                <p className="bg-white text-sm text-gray-600">Feeds</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Media
