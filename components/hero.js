import { useRouter } from 'next/router'
import { enUS, enFR } from '../../translation'

export default function Hero() {
    const router = useRouter()
    const {locale} = router
    const t = locale === "en-US" ? enUS : enFR

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <h1 className="text-6xl font-bold capitalize">{t.hello}</h1>
            <p className='ml-2'>{locale}</p>
        </div>
    )
}
