export default function TwoPages() {
    return (
        <div id={"second-page"} className={"container mx-auto flex lg:h-screen  items-center justify-center bg-sky-100 py-10"}>
            <div className={"flex flex-wrap justify-center items-center flex-col"}>

                <h1 className={"text-2xl font-bold"}>About</h1>
                <div className={"p-10 flex flex-col gap-5 text-center"}>
                    <p> Hello there! My name is Tesalonika Aprisda Sitopu. I study in the IT field and have an interest
                        in becoming a IT Quality Assurance</p>
                    <p> I am an individual who is full of enthusiasm and keeps trying. I always try to be positive and
                        have good values in creativity, hard work, or collaboration.</p>
                    <p> I am someone who likes to learn new things to improve my skills. I am also disciplined, able to
                        stay calm in stressful situations and have the ability to interact and establish good
                        relationships with others. I am open to teamwork and I like work with new people. I enjoy
                        collaborating with people from various backgrounds and sharing knowledge and experiences.</p>
                </div>
                <div className={"flex flex-wrap justify-evenly w-8/12 gap-10"}>
                    <div className={"border border-black md:p-6 p-3 text-sm hover:bg-violet-500 hover:text-white"}>
                        <span>Name: Tesalonika Aprisda Sitopu</span>
                    </div>

                    <div className={"border border-black md:p-6 p-3 text-sm hover:bg-violet-500 hover:text-white"}>
                        <span>Birthday: 13 April 2004</span>
                    </div>

                    <div className={"border border-black md:p-6 p-3 text-sm hover:bg-violet-500 hover:text-white"}>
                        <span>Age: 20 Years</span>
                    </div>

                    <div className={"border border-black md:p-6 p-3 text-sm hover:bg-violet-500 hover:text-white"}>
                            <span>Address: Medan, Indonesia</span>
                    </div>

                    <div className={"border border-black md:p-6 p-3 text-sm hover:bg-violet-500 hover:text-white"}>
                            <span>Email: tesalonilaaprisdasitopu@gmail.com</span>
                    </div>

                    <div className={"border border-black md:p-6 p-3 text-sm hover:bg-violet-500 hover:text-white"}>
                            <span>Hobby: Listening to Music</span>
                    </div>

                </div>
            </div>
        </div>
    )
}