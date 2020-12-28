import React from 'react'

const Error404 = () => {
    return (
        <>
         <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">404</div>
                    <p
                    className="text-2xl md:text-3xl font-light leading-normal">Lo sentimos, no pudimos encontrar esta página.</p>
                <p className="mb-8">Pero no se preocupe, puede encontrar muchas otras cosas en nuestra Home.</p>
                </div>           
        </div>
        </div>   
        </>
    )
}

export default Error404
