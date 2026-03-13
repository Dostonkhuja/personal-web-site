import { useState } from "react"
import useSound from "use-sound"
import clickSoundFile from "../../../public/click.mp3"

export const useClickSound = () => {
    const [enabled, setEnabled] = useState(false)
    const [play] = useSound(clickSoundFile, { volume: 0.5 })

    // Trigger function
    const trigger = () => {
        if (!enabled) {
            // Birinchi user gesture da faqat flagni yoqamiz
            setEnabled(true)
        }
        // Hover yoki clickda har doim play
        if (enabled) play()
    }

    return trigger
}
