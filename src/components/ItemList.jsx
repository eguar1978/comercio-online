// @flow 
import { SourceMapConsumer } from 'postcss/node_modules/source-map';
import ButtonCart from './varios/ButtonCart';

export const ItemList = () => {

    return (
        <>
        <div className="container mx-auto w-full overflow-y-auto bg-blue-200">
            <div className="px-10 grid grid-cols-4 gap-4">
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div className="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            className="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div className="py-5 px-5 ">
                        <span className="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div className="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <ButtonCart />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div className="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            className="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div className="py-5 px-5 ">
                        <span className="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div className="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <ButtonCart />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div className="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            className="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div className="py-5 px-5 ">
                        <span className="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div className="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <ButtonCart />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div className="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            className="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div className="py-5 px-5 ">
                        <span className="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div className="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <ButtonCart />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ItemList;