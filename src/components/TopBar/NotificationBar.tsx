import { setSystemNotification } from "@/features/app";
import { useAppDispatch } from "@/hooks";
import { Link, useNavigate } from "react-router-dom";

export default function NotificationBar() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return (
        <div className="flex items-center bg-white justify-between p-4">

            <button type="button" onClick={() => navigate(-1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 20.5L7.75 12L16.25 3.5" stroke="#0D0D0D" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
            </button>

            <p className="text-[18px]">Notifications</p>

            <div className="flex items-center gap-2">
                <button type="button" onClick={() => dispatch(setSystemNotification(true))}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 5.4668V20.4668M7.5 20.4668L11.5675 16.1493M7.5 20.4668L3.46875 16.1855M16.5 18.4668V3.4668M12.4338 7.7843L16.5013 3.4668L20.5325 7.74805" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <Link to="/account" >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0742 13.8984L19.1249 13.3477C18.6445 13.0508 18.3476 12.5273 18.3476 11.9609C18.3476 11.3945 18.6445 10.8711 19.1249 10.5742L20.0742 10.0195C20.8671 9.54688 21.1054 8.59766 20.6288 7.88281L19.8359 6.53906C19.3632 5.74609 18.414 5.50781 17.6992 5.98438L16.7499 6.53906C15.7226 7.17188 14.3749 6.37891 14.3749 5.19141V4.08203C14.371 3.21094 13.664 2.50391 12.7929 2.5H11.207C10.3359 2.50391 9.62885 3.21094 9.62494 4.08203V5.11328C9.62494 6.30078 8.27729 7.08984 7.24994 6.45703L6.30072 5.98438C5.94526 5.76562 5.51557 5.70312 5.11322 5.80859C4.71088 5.91016 4.36713 6.17578 4.16401 6.53906L3.37494 7.88281C2.9726 8.65625 3.20697 9.60547 3.92572 10.1016L4.87494 10.6523C5.90229 11.207 5.90229 12.793 4.87494 13.3477L3.92572 13.8984C3.13276 14.375 2.89447 15.3242 3.37104 16.0391L4.16401 17.3828C4.63666 18.1758 5.58588 18.4141 6.30072 17.9375L7.24994 17.4609C8.27729 16.8281 9.62494 17.6211 9.62494 18.8086V19.918C9.62885 20.7891 10.3359 21.4961 11.207 21.5H12.7929C13.664 21.4961 14.371 20.7891 14.3749 19.918V18.8867C14.3749 17.6992 15.7226 16.9102 16.7499 17.543L17.6992 18.0977C18.0546 18.3125 18.4843 18.3789 18.8867 18.2734C19.289 18.168 19.6328 17.9023 19.8359 17.543L20.6249 16.1953C21.0234 15.3242 20.789 14.375 20.0742 13.8984ZM11.9999 15.168C10.2499 15.168 8.83197 13.75 8.83197 12C8.83197 10.25 10.2499 8.83203 11.9999 8.83203C13.7499 8.83203 15.1679 10.25 15.1679 12C15.1601 13.7461 13.746 15.1602 11.9999 15.168Z" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}