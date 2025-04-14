import { useNavigate } from "react-router-dom"

export default function CategoryTopBar() {
    const navigate = useNavigate();
    return (
        <div className="flex items-center bg-white justify-between p-4">
            <button type="button" onClick={() => navigate(-1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 20.5L7.75 12L16.25 3.5" stroke="#0D0D0D" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
            </button>

            <p className="text-[18px]">Cleaning</p>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4488 14.4487L21.5 21.5M16.5 9.5C16.5 13.366 13.366 16.5 9.5 16.5C5.63401 16.5 2.5 13.366 2.5 9.5C2.5 5.63401 5.63401 2.5 9.5 2.5C13.366 2.5 16.5 5.63401 16.5 9.5Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>
    )
}