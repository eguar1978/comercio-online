const Modal = ({children}) =>{
    return (
        <>
            <div className="container mx-auto bg-blue-100 h-screen p-12">
                <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center" id="modal">
                <div className="bg-gray-300 max-w-lg py-2 px-3 rounded shadow-x1">
                    <div className="flex justify-between items-center">  
                    <h4 className="text-lg font-bold">Titulo Modal</h4>
                    <svg className="w-6 h-6 cursor-pointer p-1 hover:bg-gray-500 rounded-full" id="close-modal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <div>

                        {children}
                    
                    </div>
                </div>      
                </div>
            </div>
        </>
    );
};

export default Modal;