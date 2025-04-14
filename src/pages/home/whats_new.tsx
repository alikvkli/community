
import whatsNewImage from '@/images/promotion/whats_new.png'

export default function WhatsNew() {
    return (
        <section className="flex flex-col items-center gap-4 p-4 mb-[100px]">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-[18px] text-[#262626] font-semibold">What’s new on CommUnity?</h1>
            </div>
            <div className="flex flex-col items-start gap-2 w-full h-full">
                <div className="w-full flex flex-col items-start justify-between shadow-md p-4 rounded-xl bg-white">
                    <img className="w-full rounded-3xl" src={whatsNewImage} />
                    <div className="flex flex-col gap-2 mt-3">
                        <p className="font-semibold">Shop CommUnity gift cards</p>
                        <p>You can earn exclusive opportunities by collecting points.</p>
                    </div>
                    <button className="text-vf-red flex items-center justify-center gap-2">
                        Learn more
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.45825 2.91699L13.5416 10.0003L6.45825 17.0837" stroke="#E60000" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>

                    </button>
                </div>
            </div>
        </section>
    )
}