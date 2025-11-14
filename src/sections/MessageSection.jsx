import { useGSAP } from "@gsap/react"
import SplitText from "gsap/SplitText";


const MessageSection = () => {

    useGSAP( () => {

        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words",
        });

        const SecondMsgSplit = SplitText.create(".second-message", {
            type: "words",
        });

        const ParagraphSplit = SplitText.create(".message-content p", {
            type: "words, lines",
            linesClass: "paragraph-line",
        });

    } )

    return (
        <section className='message-content '>
            <div className='container mx-auto flex-center py-28 relative'>
                <div className="h-full w-full">
                    <div className='msg-wrapper'>

                        <h1 className='first-message'>STIR UP YOUR FEARLESS PAST </h1>

                        <div className='msg-text-scroll '>
                            <div className='bg-light-brown md:pb-5 pb-3 px-5  '>
                                <h2 className='text-red-brown '>FUEL UP</h2>
                            </div>
                        </div>

                        <h1 className='second-message '>YOUR FUTURE WITH EVERY GULP OF PERFECT PROTIEN</h1>

                    </div>

                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p>
                                Rev up your reberl spirit and feed away the adventure of life with SPYLT, where you're one chug away from epic nostalgia and fearless fun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MessageSection