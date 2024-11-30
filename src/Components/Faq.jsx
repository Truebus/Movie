import { Link } from "react-router-dom"

export const Faq=()=>{
    return(
        <div className="p-[10px]">
            <div className="p-[10px] ml-[70px]">
               <Link>Back to Help Home</Link> 
            </div>
            <div className="flex p-[20px] justify-around">
            <div className="h-auto w-[800px]">
                <h1 className="text-3xl text-blue-900 font-semibold relative bottom-7">What is ReelSpark?</h1>
                <img src="" alt="image not found" className="border-2 border-black h-[250px] w-[700px]"/><br/>
                <p><h1 className="font-bold inline-block">ReelSpark</h1> is a subscription-based <Link className='text-red-700 hover:underline'>streaming service</Link> that allows our members to watch TV shows and movies on an internet-connected device.</p>
                <p><Link className='text-red-700 hover:underline'>Depending on your plan,</Link> you can also <Link className='text-red-700 hover:underline'>download TV shows and movies</Link> to your Android phone or tablet, iPhone, iPad, or Google Chromebook device and watch without an internet connection.</p>
                <br/><p>If you're already a member and would like to learn more about using Reelpark, visit Getting started with ReelSpark.</p>
                <br/><hr/><br/>
                <h1 className="font-semibold text-3xl">TV Shows & Movies</h1><br/><br/>
                <p>
               ReelSpark content varies by region and may change over time. You can watch a variety of <Link className='text-red-700 hover:underline'> award-winning ReelSpark originals, TV shows, movies, documentaries, and more.</Link></p>
                <br/><p>The more you watch, the better ReelSpark gets at<Link className='text-red-700 hover:underline'> recommending</Link> TV shows and movies.</p>
                <br/><hr/><br/>
                <h2 className="text-3xl font-semibold">Supported Devices</h2><br/><br/>
                <p>You can watch Netflix through any supported internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, cable boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. To get the best performance, you can review the system requirements for web browser compatibility and check our internet speed recommendations.</p>
                <p className="border-4 border-l-gray-700 mt-3 p-1"><h1 className="font-bold inline-block">Note:</h1>A small percentage of devices may not be supported by all plans.</p>
            <p className="border-4 border-l-gray-700 mt-3 p-1"><h1 className="font-bold inline-block">Note:</h1>The Netflix app may come pre-loaded on certain devices, or you may need to download the Netflix app onto your device. Netflix app functionality may differ between devices.</p>
           <hr className="mt-5"/>
           <h2 className="font-semibold text-3xl mt-[10px]">Plans and Pricing</h2><br/><br/>
           <p>
Each<Link className='text-red-700 hover:underline'> ReelSpark plan </Link>determines the number of devices you can watch ReelSpark on at the same time and whether you can watch in High Definition (HD), Full High Definition (FHD), or Ultra High Definition (UHD).</p>
<p className="mb-[20px]">You can change your plan or cancel online at any time.</p>
<hr/><br/><br/>
<h1 className="text-3xl font-semibold">Get Started</h1><br/><br/>
<p>To start watching ReelSpark:</p><br/>
<ul className="flex flex-col gap-3">
    <li>1. <Link className='text-red-700 hover:underline'>Visit ReelSpark.com/signup.</Link></li>
    <li>2. <Link className='text-red-700 hover:underline'>Choose a plan.</Link></li>
    <li>3. Create an account by entering your email address and creating a password.</li>
    <li>4. Enter a payment method.</li><br/>
    <p>As a ReelSpark member, you are charged once a month on the date you signed up.</p><br/>
    <hr/><br/>
    <h1 className="font-semibold text-2xl">Contact Us</h1>
    <h1>If Problem:-</h1>
    <textarea rows={5} cols={100} placeholder="Enter Problem Here:-" className="p-2 border-2 border-slate-500 rounded-md"></textarea><br/>
    <button type="button" className="inline-block p-2 bg-yellow-200 font-bold">Submit</button>
</ul>
           
            </div>
            <div className="h-[250px] p-[10px] text-preety w-[300px]  border-slate-500 rounded-md relative top-[50px] border-4 border-t-red-700">
                <ul className="flex flex-col gap-2">
                    <h2 className="text-red-600 font-semibold text-center text-lg">Related Articles:-</h2>
                    <li className="underline cursor-pointer">Getting started with Netflix</li>
                    <li className="underline cursor-pointer">Billing and Payments</li>
                    <li className="underline cursor-pointer">Netflix Gift Cards</li>
                    <li className="underline cursor-pointer">Can't sign in to Netflix</li>
                    <li className="underline cursor-pointer">How to create, change, or delete profiles</li>
                </ul>
            </div>
            </div>
        </div>
    )
}