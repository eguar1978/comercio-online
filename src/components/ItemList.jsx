// @flow 
import * as React from 'react';

export const ItemList = () => {
    return (
        <>
        <div class="container mx-auto w-full overflow-y-auto bg-blue-200">
            <div class="px-10 grid grid-cols-4 gap-4">
                <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div class="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            class="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div class="py-5 px-5 ">
                        <span class="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div class="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <button class="font-semibold border-r bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
                            <span class="m-auto">-</span>
                            </button>
                            <input type="hidden" class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center" readonly name="custom-input-number" />
                            <div class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                            <span>2</span>
                            </div>
                            <button class="font-semibold border-l  bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
                            <span class="m-auto">+</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div class="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            class="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div class="py-5 px-5 ">
                        <span class="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div class="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <button class="font-semibold border-r bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
                            <span class="m-auto">-</span>
                            </button>
                            <input type="hidden" class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center" readonly name="custom-input-number" />
                            <div class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                            <span>2</span>
                            </div>
                            <button class="font-semibold border-l  bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
                            <span class="m-auto">+</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div class="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            class="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div class="py-5 px-5 ">
                        <span class="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div class="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <button class="font-semibold border-r bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
                            <span class="m-auto">-</span>
                            </button>
                            <input type="hidden" class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center" readonly name="custom-input-number" />
                            <div class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                            <span>2</span>
                            </div>
                            <button class="font-semibold border-l  bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
                            <span class="m-auto">+</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center pb-4">
                    <div class="bg-white rounded-lg mt-5">
                        <img
                            src="https://picsum.photos/1600/900"
                            class="h-40 rounded-md"
                            alt=""
                        />
                    </div>
                    <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
                    <div class="py-5 px-5 ">
                        <span class="font-bold text-gray-800 text-lg">Item List 1</span>
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-600 font-light">
                                Desc : Desc item
                            </div>
                            <div class="text-2xl text-red-600 font-bold">
                                $15.00
                            </div>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="flex flex-row border h-10 w-24 rounded-lg border-gray-400 relative">
                            <button class="font-semibold border-r bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer">
                            <span class="m-auto">-</span>
                            </button>
                            <input type="hidden" class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center" readonly name="custom-input-number" />
                            <div class="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                            <span>2</span>
                            </div>
                            <button class="font-semibold border-l  bg-gray-200 hover:bg-gray-600 hover:text-white text-black border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer">
                            <span class="m-auto">+</span>
                            </button>
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