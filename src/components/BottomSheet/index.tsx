import { ReactNode } from "react";
import { Transition } from "@headlessui/react";

export default function BottomSheet({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: ReactNode }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
            )}

            <Transition
                show={isOpen}
                enter="transition ease-out duration-300 transfrom"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-in duration-200 transform"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full">
                <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-lg p-4 max-h-[80vh] overflow-y-auto ">
                    <div className="flex justify-center mb-2">
                        <div className="w-10 h-1 bg-gray-300 rounded-full"/>
                    </div>
                    {children}
                </div>
            </Transition>
        </>
    )
}