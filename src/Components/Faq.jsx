import { Link } from "react-router-dom"
import { FaArrowCircleLeft } from "react-icons/fa";
export const Faq=()=>{
    return(
        <div className="p-[10px]">
            <div className="p-[10px] ml-[70px]">
               <Link to={'/'}><FaArrowCircleLeft className="inline-block mr-2 text-lg" />Back to Help Home</Link> 
            </div>
            <div className="flex p-[20px] justify-around">
            <div className="h-auto w-[800px]">
                <h1 className="text-3xl text-blue-900 font-semibold relative bottom-7">What is ReelSpark?</h1>
                <img src="https://s3.amazonaws.com/prod-cdata-secure.sprinklr.com/DAM/3877/24737d83-468d-4a04-859f-7df4b95df217-1390968249/what_is_netflix_1_en.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQD46aDpsXIR1Kf3Yb5RdePg8ztE%2BUYkmOieVWTm4N54dwIhAMynmGUEp23M2QVCqIis3lL3yNl3vgxIUHnFB%2BPghRnmKrsFCKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODY5MzY3NDcxNjc0IgwUtySoMlS%2FUQMLsOQqjwVWRBID%2FjLZlt08%2BfwkD9vse8mAfoPzWNA63S3R9xUouJ5cURHANxYPr9bmioN%2Bao7gqEZhsHfqcyIXzWuI3kqvSDKpaz%2Fy%2BgFkAQT8OTylEZ8Wkosv5gAq72mlRKGPQrs%2B1uhB72QlZGJnQrXdeN69k2z1GLPiZlg9z3dSRZxEf4yygbZHN24APqbT5UyrYhkt7RZBxQLrxuW7Dpu8kQ0MWCpgutfCDF8kp7HkcUhM%2BCUbLVHK5mNuPGq363J99aRNYgi%2F8b1i6TmDne99rF9JcMdqKWFLU9xUQz8KmvL%2F67hAAcvmQhkMPfN5MxX7%2FPaVaOmL6NM%2FwESu34R0IXIGvmdOilptkKpkKUeTQLMYggrqaeiOn%2FS%2BaI0kJoaqg9uZtQMqCL2%2FJBNn%2ByG%2FfiUt%2B%2FByNt1VWxffKD5EvdBPxh0G4WpDYLlgVb4GgzcBwKTXdn8Al4IfxbqUXarxixu7ItbBLVVAGo1oZKzAblLv%2Bw5F%2FZX2YqhvVDVHtK42CV304qlNbujLsFsBdYK3PknL4ydFrPe0J%2FDsK8ZxATQo6FPSMirQsuY0ir6%2Be%2BmDuEbq%2FotfCP48kOsp1LkvbXaUdy%2ByEVIHJHKjM5q7oz1JTYZwiZmlNbNxZVYs%2FheQAto9qpP2z2xlMVj%2F9J0Z4V7l7OeCaVjQTOXJ0GeIPx82EgchAv5rGX0p0tf1V05A1Df34Zi5MUFl8vPRwa8AsaSTu1%2BcztpaW0XsFvizDd3LwEeORcF8UzWyAed0f6qhaKW5Q4AZ2%2FvubbLwmQ0pRpuSSmd9mv%2FMTsD8BKWrR0fTvKyx%2F9QIDsUIpNQs1stpyH2rwqMgyKJ0RucCaI4kUrz%2BTWp8wVJd0BSy5es8V0qvMNHAsLoGOrABaxG4wyYJHRIqJ6ycVLeV7psSkeQrtxwenRyCztyJGI81LCqEVuGfd1h%2FNxbP5U4Jvr2Vms23tmVnPkMi9FY0E7xGDU6EgYFw2FXySQZanVYkVDA%2BddRZZGvxq9w%2B94DAIOZB8JPXAVmAtjgaGm0QiwfLqU0ib%2F45HziQbBhbtcy8qVyMBkWEf9qqnUldwlqDmxiPw56jS6lTg5WroSLeklbWlZDI%2FdWteAWABbqOtf0%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241201T102118Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Credential=ASIA4U2SW3Y5PAWKXJ73%2F20241201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=12c6cd06bab9f0d41306d9f0e5b34981c98477088a2932ef1019a6667aff42b9" alt="image not found" className="border-2 border-black h-[250px] w-[700px]"/><br/>
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
                    <li className="underline cursor-pointer">Getting started with ReelSpark</li>
                    <li className="underline cursor-pointer">Tv shows and Movies</li>
                    <li className="underline cursor-pointer">Plans and Pricing</li>
                    <li className="underline cursor-pointer">Getting Started</li>
                    <li className="underline cursor-pointer">If Enquiry</li>
                </ul>
            </div>
            </div>
        </div>
    )
}