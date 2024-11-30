import { Link } from "react-router-dom"
export const Footer=()=>{
    return(
        <div>
            <div className="h-[250px] w-full p-[10px] bg-amber-100">
                <div className="p-2">
                    <h4 className="ml-[90px] mb-1 font-semibold">ReelSpark India</h4>
                    <h3 className="relative left-[90px] font-sans text-sm">Questions? Call <Link className="underline"> 000-800-919-1694 </Link> </h3>
                    <div className="flex justify-around relative top-[30px] p-1">
                        <ul className="flex flex-col gap-2 underline text-sm font-sans cursor-pointer">
                            <li><Link to={'/faq'}>FAQ</Link></li>
                            <li>Invester Relations</li>
                            <li>Privacy</li>
                        </ul>
                        <ul className="flex flex-col gap-2 underline  text-sm font-sans cursor-pointer">
                        <li>Help Center</li>
                            <li>Jobs </li>
                            <li>Cookies Preferences</li>
                            <li>Legal Notices</li>
                        </ul>
                        <ul className="flex flex-col gap-2 underline  text-sm font-sans cursor-pointer">
                            <li>Ways to Watch</li>
                            <li>Account</li>
                            <li>
                            Corporate Information</li>
                            <li>Only on ReelSpark</li>
                        </ul>
                    <ul className="flex flex-col gap-2 underline  text-sm font-sans cursor-pointer">
                        <li>Media Centre</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}